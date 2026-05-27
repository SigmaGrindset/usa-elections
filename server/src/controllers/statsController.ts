import { Pool } from 'pg'
const pool = new Pool({ connectionString: process.env.DATABASE_URL })
import { Request, Response } from 'express'


module.exports.evTrendGet = async (_req: Request, res: Response) => {
  const client = await pool.connect()

  try {
    const result = await client.query(`
      WITH ranked AS (
        SELECT
          election_year,
          total_ev,
          ROW_NUMBER() OVER (PARTITION BY election_year ORDER BY total_ev DESC) AS rank
        FROM "ElectionCandidate"
        WHERE role = 'president'
      )
      SELECT
        election_year AS year,
        MAX(CASE WHEN rank = 1 THEN total_ev END)::int AS winner_ev,
        COALESCE(MAX(CASE WHEN rank = 2 THEN total_ev END), 0)::int AS runner_up_ev
      FROM ranked
      WHERE rank <= 2
      GROUP BY election_year
      ORDER BY election_year
    `)

    const data = result.rows.map((row: any) => ({
      year: row.year,
      winner_ev: row.winner_ev,
      runner_up_ev: row.runner_up_ev,
      diff: row.winner_ev - row.runner_up_ev,
    }))

    res.json({ success: true, data })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, error: (error as Error).message })
  } finally {
    client.release()
  }
}

module.exports.extremesGet = async (_req: Request, res: Response) => {
  const client = await pool.connect()

  try {
    const result = await client.query(`
      WITH ranked AS (
        SELECT
          ec.election_year,
          ec.total_ev,
          ec.party,
          c.name AS candidate_name,
          ROW_NUMBER() OVER (PARTITION BY ec.election_year ORDER BY ec.is_winner DESC, ec.total_ev DESC) AS rank
        FROM "ElectionCandidate" ec
        JOIN "Candidate" c ON c.id = ec.candidate_id
        WHERE ec.role = 'president'
      ),
      per_year AS (
        SELECT
          election_year AS year,
          MAX(CASE WHEN rank = 1 THEN total_ev END)::int AS winner_ev,
          MAX(CASE WHEN rank = 1 THEN candidate_name END) AS winner_name,
          MAX(CASE WHEN rank = 1 THEN party END) AS winner_party,
          COALESCE(MAX(CASE WHEN rank = 2 THEN total_ev END), 0)::int AS runner_up_ev,
          MAX(CASE WHEN rank = 2 THEN candidate_name END) AS runner_up_name,
          MAX(CASE WHEN rank = 2 THEN party END) AS runner_up_party
        FROM ranked
        WHERE rank <= 2
        GROUP BY election_year
      )
      SELECT *, (winner_ev - runner_up_ev) AS diff FROM per_year
    `)

    const rows = result.rows.map((row: any) => ({
      year: row.year,
      winner_ev: row.winner_ev,
      winner_name: row.winner_name,
      winner_party: row.winner_party,
      runner_up_ev: row.runner_up_ev,
      runner_up_name: row.runner_up_name,
      runner_up_party: row.runner_up_party,
      diff: row.diff,
    }))

    if (rows.length === 0) {
      return res.json({ success: true, data: { largest: null, smallest: null } })
    }

    const largest = rows.reduce((a, b) => (b.diff > a.diff ? b : a))
    const smallest = rows.reduce((a, b) => (b.diff < a.diff ? b : a))

    res.json({ success: true, data: { largest, smallest } })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, error: (error as Error).message })
  } finally {
    client.release()
  }
}

module.exports.statsGet = async (_req: Request, res: Response) => {
  const client = await pool.connect()

  try {
    const result = await client.query(`
      SELECT party, COUNT(DISTINCT election_year)::int AS wins
      FROM "ElectionCandidate"
      WHERE is_winner = true AND role = 'president'
      GROUP BY party
    `)

    let democratic = 0
    let republican = 0
    let other = 0

    for (const row of result.rows) {
      if (row.party === 'Democratic') democratic = row.wins
      else if (row.party === 'Republican') republican = row.wins
      else other += row.wins
    }

    res.json({
      success: true,
      data: {
        democratic,
        republican,
        other,
        total: democratic + republican + other,
      },
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, error: (error as Error).message })
  } finally {
    client.release()
  }
}
