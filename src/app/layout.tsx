import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { CardProvider } from "./[slug]/menu/contexts/cards";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chá do Miguel",
  description: "Venha celebrar a chegada do nosso pequeno Miguel com a gente!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.className} antialiased`}>
        <CardProvider>{children}</CardProvider>
        <Toaster />
      </body>
    </html>
  );
}
