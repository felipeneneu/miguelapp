/*
  Warnings:

  - You are about to drop the column `price` on the `GiftConfirmationProduct` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "GiftConfirmationProduct" DROP COLUMN "price";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "price";
