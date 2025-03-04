/*
  Warnings:

  - Added the required column `babyId` to the `GiftConfirmation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GiftConfirmation" ADD COLUMN     "babyId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "GiftConfirmation" ADD CONSTRAINT "GiftConfirmation_babyId_fkey" FOREIGN KEY ("babyId") REFERENCES "BabyShower"("id") ON DELETE CASCADE ON UPDATE CASCADE;
