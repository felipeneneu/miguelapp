/*
  Warnings:

  - The primary key for the `GiftConfirmation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `GiftConfirmation` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `total` to the `GiftConfirmation` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `giftConfirmationId` on the `GiftConfirmationProduct` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "GiftConfirmationProduct" DROP CONSTRAINT "GiftConfirmationProduct_giftConfirmationId_fkey";

-- AlterTable
ALTER TABLE "GiftConfirmation" DROP CONSTRAINT "GiftConfirmation_pkey",
ADD COLUMN     "total" DOUBLE PRECISION NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "GiftConfirmation_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "GiftConfirmationProduct" DROP COLUMN "giftConfirmationId",
ADD COLUMN     "giftConfirmationId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "GiftConfirmationProduct" ADD CONSTRAINT "GiftConfirmationProduct_giftConfirmationId_fkey" FOREIGN KEY ("giftConfirmationId") REFERENCES "GiftConfirmation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
