import { db } from "@/lib/prima";
import BabyShowerHeader from "./components/header";
import BabyShowerCategories from "./components/categories";

interface BabyShowerMenuProps {
  params: Promise<{ slug: string }>;
}

const BabyShowerMenu = async ({ params }: BabyShowerMenuProps) => {
  const { slug } = await params;
  const babyShower = await db.babyShower.findFirst({
    where: {
      slug,
    },
    include: {
      menuCategories: {
        include: {
          products: {
            where: {
              stockQuantity: {
                gt: 0,
              },
            },
          },
        },
      },
    },
  });

  if (!babyShower) {
    return <div>Not found</div>;
  }

  return (
    <div>
      <BabyShowerHeader babyShower={babyShower} />
      <BabyShowerCategories babyShower={babyShower} />
    </div>
  );
};

export default BabyShowerMenu;
