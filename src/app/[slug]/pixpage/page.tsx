"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCode, Check, Clipboard, ChevronLeftIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const pixKey =
  "00020101021126750014br.gov.bcb.pix01360e34420b-c257-4436-9a6b-4080d7e17cec0213Chá do Miguel5204000053039865802BR5923Beatriz Oliveira da Sil6009SAO PAULO61080131010062150511ChadoMiguel630418DD";

const PixPage = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    toast.success("Chave PIX copiada!", {
      description:
        "Agora é só colar no seu app bancário e enviar sua contribuição. 💙",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const router = useRouter();
  const handleBackClick = () => router.back();
  return (
    <div className="h-screen bg-gradient-to-b from-blue-100 to-blue-300">
      <div className="p-5 space-y-4 mb-5">
        <Button
          size="icon"
          variant="secondary"
          className="rounded-full"
          onClick={handleBackClick}
        >
          <ChevronLeftIcon />
        </Button>
      </div>
      <div className="flex flex-col items-center justify-center px-6 text-center">
        <Card className="max-w-md w-full p-4 shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-sky-600">
              💙 Ajude com um PIX!
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            <p className="text-sky-600">
              Sua contribuição faz toda a diferença. Escaneie o QR Code ou copie
              a chave PIX abaixo. 😊
            </p>
            <div className="border-2 border-sky-500 rounded-lg p-4 bg-white">
              <QrCode className="w-32 h-32 text-sky-500" />
            </div>
            <div className="flex items-center space-x-2 w-full">
              <Input value={pixKey} readOnly className="flex-1 text-center" />
              <Button onClick={copyToClipboard} variant="outline">
                {copied ? (
                  <Check className="w-5 h-5 text-green-500" />
                ) : (
                  <Clipboard className="w-5 h-5" />
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PixPage;
