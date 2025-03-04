import SvgComponent from "@/components/svg/illustration";
import MiguelName from "@/components/svg/miguelname";
import { Button } from "@/components/ui/button";
import { getBabyShowerBySlug } from "@/data/get-baby-shower-by-slug";

import Link from "next/link";
// import Image from "next/image";
import { notFound } from "next/navigation";

import ButtonConfirmation from "./components/buttonconfirmation";

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
    <div className="h-screen w-screen flex flex-col items-center justify-center px-6 pt-24 bg-[url('https://fv5-2.files.fm/thumb_show.php?i=bgxt5jaqah&view&v=1&PHPSESSID=1c126b51b595294d48ad4687eb8f66ce003d7bd7')] bg-cover">
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-col justify-center p-5 items-center gap-2 pt-64">
          <SvgComponent />
          <MiguelName className="-mt-12" />
        </div>
      </div>
      <div className="pt-8 text-center space-y-2 text-sky-500">
        <h3 className="text-3xl  text-sky-500 font-black">Dia 10/05/2025</h3>
        <h3 className="text-3xl font-black">está chegando! 💙</h3>
        <p>
          Escolha um presentinho com carinho e faça parte desse momento tão
          especial.
        </p>
      </div>
      <div className="pt-12 space-y-2 flex flex-col justify-center flex-1 w-full gap-2 pb-12">
        <Button className="rounded-full" disabled>
          <a
            href="https://maps.app.goo.gl/ThpAmXZkvKZ1jnno7"
            className="text-sm"
          >
            Localização
          </a>
        </Button>
        <Button className="rounded-full" asChild>
          <Link href={`${slug}/menu`}>Lista de Presentes</Link>
        </Button>
        <Button className="rounded-full" asChild>
          <Link href={`${slug}/mimos`}>Ver seus mimos</Link>
        </Button>
        <Button className="rounded-full" asChild>
          <ButtonConfirmation />
        </Button>
      </div>
    </div>
  );
};

export default BabyShower;
