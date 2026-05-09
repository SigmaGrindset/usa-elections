// import { PrismaClient } from '../prisma/generated/client'
// import { PrismaPg } from '@prisma/adapter-pg'
import express from 'express'
const morgan = require("morgan");
require("dotenv").config();

// const pool = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
// const prisma = new PrismaClient({ adapter: pool })

const app = express()

app.use(express.json())
app.use(morgan("dev"));

// app.delete("/api/elections/:year", async (req, res) => {
//   const year = parseInt(req.params.year)

//   try {
//     const election = await prisma.election.findUnique({ where: { year } })

//     if (!election) {
//       return res.status(404).json({ success: false, error: `Election ${year} not found` })
//     }

//     await prisma.$transaction(async (tx) => {
//       const stateResults = await tx.stateResult.findMany({ where: { election_year: year } })
//       const stateResultIds = stateResults.map(s => s.id)

//       await tx.stateResultCandidate.deleteMany({
//         where: { state_result_id: { in: stateResultIds } }
//       })

//       await tx.stateResult.deleteMany({ where: { election_year: year } })

//       const electionCandidates = await tx.electionCandidate.findMany({ where: { election_year: year } })
//       const electionCandidateIds = electionCandidates.map(c => c.id)

//       await tx.stateResultCandidate.deleteMany({
//         where: { election_candidate_id: { in: electionCandidateIds } }
//       })

//       await tx.electionCandidate.deleteMany({ where: { election_year: year } })

//       await tx.election.delete({ where: { year } })
//     })

//     res.json({ success: true })
//   } catch (error) {
//     console.error(error)
//     res.status(500).json({ success: false, error: (error as Error).message })
//   }
// })

// app.get("/api/elections/:year", async (req, res) => {
//   const year = parseInt(req.params.year);

//   try {
//     const election = await prisma.election.findUnique({
//       where: { year },
//       include: {
//         election_candidates: {
//           include: {
//             candidate: true,
//           }
//         },
//         state_results: {
//           include: {
//             state_result_candidates: {
//               include: {
//                 election_candidate: {
//                   include: {
//                     candidate: true
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     });

//     if (!election) {
//       return res.status(404).json({ success: false, error: `Election ${year} not found` });
//     }
//     console.log(election)
//     res.json({ success: true, data: election });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, error: (error as Error).message });
//   }
// });

// app.post("/api/elections", async (req, res) => {
//   const { year, total_ev, majority_ev, candidates, state_results } = req.body;
//   try {
//     await prisma.$transaction(async (tx) => {
//       await tx.election.create({
//         data: { year, total_ev, majority_ev }
//       });

//       const electionCandidateMap: { [key: string]: number } = {};

//       for (const candidate of candidates) {
//         let dbCandidate = await tx.candidate.findFirst({
//           where: { name: candidate.name }
//         });

//         if (!dbCandidate) {
//           dbCandidate = await tx.candidate.create({
//             data: {
//               name: candidate.name,
//             }
//           });
//         }

//         const electionCandidate = await tx.electionCandidate.create({
//           data: {
//             election_year: year,
//             candidate_id: dbCandidate.id,
//             role: candidate.role,
//             total_ev: candidate.total_ev,
//             is_winner: candidate.is_winner,
//             party: candidate.party
//           }
//         });

//         electionCandidateMap[`${candidate.name}_${candidate.role}`] = electionCandidate.id
//       }

//       for (const stateResult of state_results) {
//         const dbStateResult = await tx.stateResult.create({
//           data: {
//             election_year: year,
//             state_name: stateResult.state_name,
//             total_ev: stateResult.total_ev,
//           }
//         });

//         const uniqueCandidateEv = stateResult.candidate_ev.reduce((acc: any[], candidateEv: any) => {
//           const electionCandidateId =
//             electionCandidateMap[`${candidateEv.name}_president`] ??
//             electionCandidateMap[`${candidateEv.name}_vice_president`]

//           if (!acc.find(x => x.election_candidate_id === electionCandidateId)) {
//             acc.push({ ...candidateEv, election_candidate_id: electionCandidateId })
//           }
//           return acc
//         }, [])

//         await tx.stateResultCandidate.createMany({
//           data: uniqueCandidateEv.map((candidateEv: any) => ({
//             state_result_id: dbStateResult.id,
//             election_candidate_id: candidateEv.election_candidate_id,
//             ev_count: candidateEv.ev_count,
//           }))
//         })
//       }
//     }, {
//       timeout: 30000
//     });

//     res.json({ success: true });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, error: (error as Error).message });
//   }
// });
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
