import 'dotenv/config'
import { Prisma, PrismaClient } from '../prisma/generated/client'
import { PrismaPg } from '@prisma/adapter-pg'
import express from 'express'
const path = require('path');
const morgan = require("morgan");
require("dotenv").config();

const pool = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter: pool })

const app = express()

app.use(express.json())
app.use(morgan("dev"));
app.post("/api/elections", async (req, res) => {
  const { year, total_ev, majority_ev, candidates, state_results } = req.body;

  try {
    await prisma.$transaction(async (tx) => {
      await tx.election.create({
        data: { year, total_ev, majority_ev }
      });

      const electionCandidateMap: { [key: string]: number } = {};

      for (const candidate of candidates) {
        let dbCandidate = await tx.candidate.findFirst({
          where: { name: candidate.name }
        });

        if (!dbCandidate) {
          dbCandidate = await tx.candidate.create({
            data: {
              name: candidate.name,
              party: candidate.party,
            }
          });
        }

        const electionCandidate = await tx.electionCandidate.create({
          data: {
            election_year: year,
            candidate_id: dbCandidate.id,
            role: candidate.role,
            total_ev: candidate.total_ev,
            is_winner: candidate.is_winner,
          }
        });

        electionCandidateMap[candidate.name] = electionCandidate.id;
      }

      for (const stateResult of state_results) {
        const dbStateResult = await tx.stateResult.create({
          data: {
            election_year: year,
            state_name: stateResult.state_name,
            total_ev: stateResult.total_ev,
          }
        });

        await tx.stateResultCandidate.createMany({
          data: stateResult.candidate_ev.map((candidateEv: any) => ({
            state_result_id: dbStateResult.id,
            election_candidate_id: electionCandidateMap[candidateEv.name],
            ev_count: candidateEv.ev_count,
          }))
        });
      }
    }, {
      timeout: 30000
    });

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: (error as Error).message });
  }
});


const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
