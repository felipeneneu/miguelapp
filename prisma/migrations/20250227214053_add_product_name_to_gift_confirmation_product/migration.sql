/*
  Warnings:

  - Added the required column `productName` to the `GiftConfirmationProduct` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GiftConfirmationProduct" ADD COLUMN     "productName" TEXT NOT NULL;
