"use server";
import { db } from "@/lib/prima";

interface CreateGiftConfirmationInput {
  name: string;
  email: string;
  products: Array<{
    id: string;
    quantity: number;
    name: string;
  }>;
  slug: string;
}

interface CreateConfirmationInput {
  name: string;
  email: string;
}

export const createConfirmationUInput = async (
  input: CreateConfirmationInput
) => {
  await db.confirmation.create({
    data: {
      name: input.name,
      email: input.email,
    },
  });
};

export const createGift = async (input: CreateGiftConfirmationInput) => {
  const baby = await db.babyShower.findFirst({
    where: {
      slug: input.slug,
    },
  });
  if (!baby) {
    throw new Error("Baby not found");
  }
  const productsWithPrices = await db.product.findMany({
    where: {
      id: {
        in: input.products.map((product) => product.id),
      },
    },
  });
  await db.giftConfirmation.create({
    data: {
      name: input.name,
      email: input.email,

      giftProducts: {
        createMany: {
          data: input.products.map((product) => ({
            productId: product.id,
            quantity: product.quantity,
            productName: product.name,
            price: productsWithPrices.find((p) => p.id === product.id)!.price,
          })),
        },
      },
      babyId: baby.id,
      // Aqui está a correção
    },
  });
  await Promise.all(
    input.products.map(async (product) => {
      await db.product.update({
        where: { id: product.id },
        data: {
          stockQuantity: {
            decrement: product.quantity, // Reduz a quantidade em estoque
          },
          productStock: product.quantity > 0, // Define como fora de estoque se for 0
        },
      });
    })
  );
};
