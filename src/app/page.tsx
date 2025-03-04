"use client";
import SvgComponent from "@/components/svg/illustration";
import MiguelName from "@/components/svg/miguelname";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Simulando o tempo de carregamento da splash screen
    const timer = setTimeout(() => {
      setLoading(false);
      // Após a splash screen, redireciona para a página [slug]
      router.push("/miguel"); // Substitua [slug] pela lógica correta do seu app
    }, 2000); // Exibe por 3 segundos (3000ms)

    return () => clearTimeout(timer);
  }, [router]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-white">
        <SvgComponent className="animate-pulse" />
        <MiguelName className="-mt-12 animate-pulse" width={142} height={39} />
      </div>
    );
  }

  return <></>;
};

export default HomePage;
