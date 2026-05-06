/*
  Warnings:

  - You are about to drop the column `party` on the `Candidate` table. All the data in the column will be lost.
  - Added the required column `party` to the `ElectionCandidate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Candidate" DROP COLUMN "party";

-- AlterTable
ALTER TABLE "ElectionCandidate" ADD COLUMN     "party" TEXT NOT NULL;
