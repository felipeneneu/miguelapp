/*
  Warnings:

  - You are about to drop the column `productId` on the `GiftConfirmation` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `GiftConfirmation` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "GiftConfirmation" DROP CONSTRAINT "GiftConfirmation_productId_fkey";

-- AlterTable
ALTER TABLE "GiftConfirmation" DROP COLUMN "productId",
DROP COLUMN "quantity";

-- CreateTable
CREATE TABLE "GiftConfirmationProduct" (
    "id" TEXT NOT NULL,
    "giftConfirmationId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GiftConfirmationProduct_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "GiftConfirmationProduct" ADD CONSTRAINT "GiftConfirmationProduct_giftConfirmationId_fkey" FOREIGN KEY ("giftConfirmationId") REFERENCES "GiftConfirmation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GiftConfirmationProduct" ADD CONSTRAINT "GiftConfirmationProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
