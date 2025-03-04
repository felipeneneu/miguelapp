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
  title: "Miguel está chegando",
  description: "Nosso bebe está chegando",
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
