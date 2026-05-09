import { Pool } from 'pg'
import express from 'express'
const morgan = require("morgan");
require("dotenv").config();
const cors = require("cors")

const pool = new Pool({ connectionString: process.env.DATABASE_URL })

const app = express()

app.use(express.json())
app.use(morgan("dev"));
app.use(cors(process.env.CLIENT_URL))

app.delete("/api/elections/:year", async (req, res) => {
  const year = parseInt(req.params.year)
  const client = await pool.connect()

  try {
    const election = await client.query('SELECT * FROM "Election" WHERE year = $1', [year])

    if (election.rows.length === 0) {
      return res.status(404).json({ success: false, error: `Election ${year} not found` })
    }

    await client.query('BEGIN')

    const stateResults = await client.query('SELECT id FROM "StateResult" WHERE election_year = $1', [year])
    const stateResultIds = stateResults.rows.map((r: any) => r.id)

    if (stateResultIds.length > 0) {
      await client.query('DELETE FROM "StateResultCandidate" WHERE state_result_id = ANY($1)', [stateResultIds])
    }

    await client.query('DELETE FROM "StateResult" WHERE election_year = $1', [year])

    const electionCandidates = await client.query('SELECT id FROM "ElectionCandidate" WHERE election_year = $1', [year])
    const electionCandidateIds = electionCandidates.rows.map((r: any) => r.id)

    if (electionCandidateIds.length > 0) {
      await client.query('DELETE FROM "StateResultCandidate" WHERE election_candidate_id = ANY($1)', [electionCandidateIds])
    }

    await client.query('DELETE FROM "ElectionCandidate" WHERE election_year = $1', [year])
    await client.query('DELETE FROM "Election" WHERE year = $1', [year])

    await client.query('COMMIT')

    res.json({ success: true })
  } catch (error) {
    await client.query('ROLLBACK')
    console.error(error)
    res.status(500).json({ success: false, error: (error as Error).message })
  } finally {
    client.release()
  }
})

app.get("/api/elections/:year", async (req, res) => {
  const year = parseInt(req.params.year)
  const client = await pool.connect()

  try {
    const electionRes = await client.query('SELECT * FROM "Election" WHERE year = $1', [year])

    if (electionRes.rows.length === 0) {
      return res.status(404).json({ success: false, error: `Election ${year} not found` })
    }

    const election = electionRes.rows[0]

    const electionCandidatesRes = await client.query(`
      SELECT ec.*, c.name as candidate_name
      FROM "ElectionCandidate" ec
      JOIN "Candidate" c ON c.id = ec.candidate_id
      WHERE ec.election_year = $1
    `, [year])

    const stateResultsRes = await client.query(`
      SELECT * FROM "StateResult" WHERE election_year = $1
    `, [year])

    const stateResultIds = stateResultsRes.rows.map((r: any) => r.id)

    let stateResultCandidates: any[] = []
    if (stateResultIds.length > 0) {
      const srcRes = await client.query(`
        SELECT src.*,
               ec.id as ec_id, ec.election_year, ec.candidate_id, ec.role, ec.total_ev, ec.is_winner, ec.party,
               c.id as c_id, c.name as candidate_name
        FROM "StateResultCandidate" src
        JOIN "ElectionCandidate" ec ON ec.id = src.election_candidate_id
        JOIN "Candidate" c ON c.id = ec.candidate_id
        WHERE src.state_result_id = ANY($1)
      `, [stateResultIds])
      stateResultCandidates = srcRes.rows
    }

    const data = {
      year: election.year,
      total_ev: election.total_ev,
      majority_ev: election.majority_ev,
      election_candidates: electionCandidatesRes.rows.map((ec: any) => ({
        id: ec.id,
        election_year: ec.election_year,
        candidate_id: ec.candidate_id,
        role: ec.role,
        total_ev: ec.total_ev,
        is_winner: ec.is_winner,
        party: ec.party,
        candidate: { id: ec.candidate_id, name: ec.candidate_name }
      })),
      state_results: stateResultsRes.rows.map((sr: any) => ({
        id: sr.id,
        election_year: sr.election_year,
        state_name: sr.state_name,
        total_ev: sr.total_ev,
        state_result_candidates: stateResultCandidates
          .filter((src: any) => src.state_result_id === sr.id)
          .map((src: any) => ({
            id: src.id,
            state_result_id: src.state_result_id,
            election_candidate_id: src.election_candidate_id,
            ev_count: src.ev_count,
            election_candidate: {
              id: src.ec_id,
              election_year: src.election_year,
              candidate_id: src.candidate_id,
              role: src.role,
              total_ev: src.total_ev,
              is_winner: src.is_winner,
              party: src.party,
              candidate: { id: src.c_id, name: src.candidate_name }
            }
          }))
      }))
    }

    res.json({ success: true, data })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, error: (error as Error).message })
  } finally {
    client.release()
  }
})

app.post("/api/elections", async (req, res) => {
  const { year, total_ev, majority_ev, candidates, state_results } = req.body
  const client = await pool.connect()

  try {
    const existing = await client.query('SELECT * FROM "Election" WHERE year = $1', [year])
    if (existing.rows.length > 0) {
      return res.status(409).json({ success: false, error: `Election ${year} already exists` })
    }

    await client.query('BEGIN')

    await client.query(
      'INSERT INTO "Election" (year, total_ev, majority_ev) VALUES ($1, $2, $3)',
      [year, total_ev, majority_ev]
    )

    const electionCandidateMap: { [key: string]: number } = {}

    for (const candidate of candidates) {
      let candidateRes = await client.query('SELECT * FROM "Candidate" WHERE name = $1', [candidate.name])
      let dbCandidate = candidateRes.rows[0]

      if (!dbCandidate) {
        const newCandidate = await client.query(
          'INSERT INTO "Candidate" (name) VALUES ($1) RETURNING *',
          [candidate.name]
        )
        dbCandidate = newCandidate.rows[0]
      }

      const electionCandidateRes = await client.query(
        'INSERT INTO "ElectionCandidate" (election_year, candidate_id, role, total_ev, is_winner, party) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [year, dbCandidate.id, candidate.role, candidate.total_ev, candidate.is_winner, candidate.party]
      )

      electionCandidateMap[`${candidate.name}_${candidate.role}`] = electionCandidateRes.rows[0].id
    }

    for (const stateResult of state_results) {
      const stateResultRes = await client.query(
        'INSERT INTO "StateResult" (election_year, state_name, total_ev) VALUES ($1, $2, $3) RETURNING *',
        [year, stateResult.state_name, stateResult.total_ev]
      )
      const stateResultId = stateResultRes.rows[0].id

      const uniqueCandidateEv = stateResult.candidate_ev.reduce((acc: any[], candidateEv: any) => {
        const electionCandidateId =
          electionCandidateMap[`${candidateEv.name}_president`] ??
          electionCandidateMap[`${candidateEv.name}_vice_president`]

        if (!acc.find((x: any) => x.election_candidate_id === electionCandidateId)) {
          acc.push({ ...candidateEv, election_candidate_id: electionCandidateId })
        }
        return acc
      }, [])

      for (const candidateEv of uniqueCandidateEv) {
        await client.query(
          'INSERT INTO "StateResultCandidate" (state_result_id, election_candidate_id, ev_count) VALUES ($1, $2, $3)',
          [stateResultId, candidateEv.election_candidate_id, candidateEv.ev_count]
        )
      }
    }

    await client.query('COMMIT')
    res.json({ success: true })
  } catch (error) {
    await client.query('ROLLBACK')
    console.error(error)
    res.status(500).json({ success: false, error: (error as Error).message })
  } finally {
    client.release()
  }
})

app.get("/api/test", (req, res) => {
  return res.json({ res: "Response /api/test" })
})

app.get("/", (req, res) => {
  return res.json({ res: "Response /" })
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
