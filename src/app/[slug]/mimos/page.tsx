import { db } from "@/lib/prima";
import FormLogin from "./components/form-login";
import OrderList from "./components/order-list";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import Link from "next/link";

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
  if (mimos.length === 0) {
    return (
      <Alert className="flex justify-center items-center flex-col h-full p-4 gap-4">
        <AlertTitle className="flex">
          <Terminal className="h-4 w-4" />
          Oops! Nenhum mimo encontrado 😢
        </AlertTitle>
        <AlertDescription>
          Parece que você ainda não escolheu um presentinho. Que tal dar uma
          olhadinha na <br />
          <Link href="/">
            <strong>Lista de Presentes</strong>? 💙🎁
          </Link>
        </AlertDescription>
      </Alert>
    );
  }
  return <OrderList mimos={mimos} />;
};

export default MimosPage;
