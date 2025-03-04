import { db } from "@/lib/prima";

export const getBabyShowerBySlug = async (slug: string) => {
  const babyShower = await db.babyShower.findFirst({
    where: { slug },
  });
  return babyShower;
};
