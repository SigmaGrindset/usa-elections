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
