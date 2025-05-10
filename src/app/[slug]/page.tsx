import SvgComponent from "@/components/svg/illustration";
import MiguelName from "@/components/svg/miguelname";
import { Button } from "@/components/ui/button";
import { getBabyShowerBySlug } from "@/data/get-baby-shower-by-slug";
import img from "../../../public/headerbg.png";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ButtonConfirmation from "./components/buttonconfirmation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { PartyPopper } from "lucide-react";

const getBG = img;
const address =
  "R. Fortunato Belotto, 313 - Jardim Cila de Lucio Bauab, Jaú - SP, 17209-313";
const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  address
)}`;

interface BabyShowerProps {
  params: Promise<{ slug: string }>;
}

const BabyShower = async ({ params }: BabyShowerProps) => {
  const { slug } = await params;
  const babyShower = await getBabyShowerBySlug(slug);
  if (!babyShower) {
    return notFound();
  }
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center px-6 relative top-0 left-0 overflow-hidden">
      <Image
        src={getBG}
        alt="bg"
        className=" absolute -z-10 object-cover w-full top-0"
      />
      <div className="">
        <div className="flex flex-col items-center gap-2 iphone:mt-[390px] xs:mt-48 iphonepro:mt-40">
          <div className="flex flex-col justify-center items-center gap-2 ">
            <SvgComponent className="-mt-[100px]" />
            <MiguelName className="-mt-12" />
          </div>
        </div>
        <div className="pt-8 text-center space-y-2 text-sky-500">
          <h3 className="text-2xl  text-sky-500 font-black">Dia 10/05/2025</h3>
          <h3 className="text-2xl  text-sky-500 font-black">
            A partir das 15:00hs
          </h3>

          <p>
            Escolha um presentinho com carinho e faça parte desse momento tão
            especial.
          </p>
        </div>
        <div className="pt-2 space-y-2 flex flex-col justify-center flex-1 w-full gap-2 pb-12">
          {/* <Button className="rounded-full" variant="default" asChild>
            <Link href={`${slug}/menu`}>Lista de Presentes</Link>
          </Button> */}
          {/* <Button className="rounded-full" variant="default" asChild>
            <Link href={`${slug}/mimos`}>Ver seus mimos</Link>
          </Button> */}
          <Button className="rounded-full" variant="default" asChild>
            <ButtonConfirmation />
          </Button>
          <Button className="rounded-full" variant="default" asChild>
            <Link href={`${slug}/pixpage`}>
              Quer ajudar com um Pix? (Só se quiser!)
            </Link>
          </Button>
          <Button className="rounded-full" variant="default" asChild>
            <a href={googleMapsLink} className="text-sm">
              Localização
            </a>
          </Button>
          <div>
            <Alert className="mt-10">
              <PartyPopper className="h-4 w-4 " />
              <AlertTitle>Aviso importante! 🍻🚫</AlertTitle>
              <AlertDescription>
                Não teremos bebidas alcoólicas no chá do Miguel, mas fique à
                vontade para trazer a sua, caso queira brindar esse momento
                especial com a gente! 💙🥳
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BabyShower;
