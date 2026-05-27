import { Pool } from 'pg'
const pool = new Pool({ connectionString: process.env.DATABASE_URL })
import { Request, Response } from 'express'


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
