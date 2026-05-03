-- CreateTable
CREATE TABLE "Election" (
    "year" INTEGER NOT NULL,
    "total_ev" INTEGER NOT NULL,
    "majority_ev" INTEGER NOT NULL,

    CONSTRAINT "Election_pkey" PRIMARY KEY ("year")
);

-- CreateTable
CREATE TABLE "Candidate" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "party" TEXT NOT NULL,

    CONSTRAINT "Candidate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ElectionCandidate" (
    "id" SERIAL NOT NULL,
    "election_year" INTEGER NOT NULL,
    "candidate_id" INTEGER NOT NULL,
    "role" TEXT NOT NULL,
    "total_ev" INTEGER NOT NULL,
    "is_winner" BOOLEAN NOT NULL,

    CONSTRAINT "ElectionCandidate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StateResult" (
    "id" SERIAL NOT NULL,
    "election_year" INTEGER NOT NULL,
    "state_name" TEXT NOT NULL,
    "total_ev" INTEGER NOT NULL,

    CONSTRAINT "StateResult_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StateResultCandidate" (
    "id" SERIAL NOT NULL,
    "state_result_id" INTEGER NOT NULL,
    "election_candidate_id" INTEGER NOT NULL,
    "ev_count" INTEGER NOT NULL,

    CONSTRAINT "StateResultCandidate_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ElectionCandidate" ADD CONSTRAINT "ElectionCandidate_election_year_fkey" FOREIGN KEY ("election_year") REFERENCES "Election"("year") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ElectionCandidate" ADD CONSTRAINT "ElectionCandidate_candidate_id_fkey" FOREIGN KEY ("candidate_id") REFERENCES "Candidate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StateResult" ADD CONSTRAINT "StateResult_election_year_fkey" FOREIGN KEY ("election_year") REFERENCES "Election"("year") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StateResultCandidate" ADD CONSTRAINT "StateResultCandidate_state_result_id_fkey" FOREIGN KEY ("state_result_id") REFERENCES "StateResult"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StateResultCandidate" ADD CONSTRAINT "StateResultCandidate_election_candidate_id_fkey" FOREIGN KEY ("election_candidate_id") REFERENCES "ElectionCandidate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
