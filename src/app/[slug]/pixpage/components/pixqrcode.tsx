"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";
import Image from "next/image";

interface PixQrCodeProps {
  pixKey: string;
}

const PixQrCode = ({ pixKey }: PixQrCodeProps) => {
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  useEffect(() => {
    QRCode.toDataURL(pixKey, { width: 300 }, (err, url) => {
      if (!err) setQrCodeUrl(url);
    });
  }, [pixKey]);
  return (
    <div className="flex flex-col items-center gap-4">
      {qrCodeUrl && (
        <Image
          src={qrCodeUrl}
          alt="QR Code Pix"
          width={300}
          height={300}
          className="rounded-lg shadow-md"
        />
      )}
    </div>
  );
};

export default PixQrCode;
