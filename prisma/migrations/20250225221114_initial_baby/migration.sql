/*
  Warnings:

  - Added the required column `email` to the `GiftConfirmation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GiftConfirmation" ADD COLUMN     "email" TEXT NOT NULL;
