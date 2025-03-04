import { db } from "@/lib/prima";
import FormLogin from "./components/form-login";
import OrderList from "./components/order-list";

interface MimosPageProps {
  searchParams: Promise<{
    email: string;
  }>;
}

const MimosPage = async ({ searchParams }: MimosPageProps) => {
  const { email } = await searchParams;
  if (!email) {
    return <FormLogin />;
  }
  const mimos = await db.giftConfirmation.findMany({
    where: {
      email: email,
    },
    include: {
      baby: {
        select: {
          name: true,
          avatarImageUrl: true,
        },
      },
      giftProducts: {
        include: {
          product: true,
        },
      },
    },
  });
  return <OrderList mimos={mimos} />;
};

export default MimosPage;
