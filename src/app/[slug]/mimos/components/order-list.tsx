"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Prisma } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React from "react";

interface OrderListProps {
  mimos: Array<
    Prisma.GiftConfirmationGetPayload<{
      include: {
        baby: {
          select: {
            name: true;
            avatarImageUrl: true;
          };
        };
        giftProducts: {
          include: {
            product: true;
          };
        };
      };
    }>
  >;
}

const OrderList = ({ mimos }: OrderListProps) => {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();
  const handleBackClick = () => router.push(`/${slug}/menu`);
  return (
    <div className="space-y-6 p-6">
      <Button
        size="icon"
        variant="secondary"
        className="rounded-full"
        onClick={handleBackClick}
      >
        <ChevronLeftIcon />
      </Button>
      <div className="flex items-center gap-3">
        <ScrollTextIcon />
        <h2 className="text-lg font-semibold">Meus mimos</h2>
      </div>
      {mimos.map((mimo) => (
        <Card key={mimo.id}>
          <CardContent className="p-5 space-y-4">
            <div className="bg-sky-500 text-white w-fit rounded-full px-2 py-1 text-xs font-semibold">
              Aguardando
            </div>
            <div className="flex items-center gap-2">
              <div className="relative h-5 w-5">
                <Image
                  fill
                  src={mimo.baby.avatarImageUrl}
                  alt={mimo.baby.name}
                  className="rounded-full"
                />
              </div>
              <p className="semi-bold text-sm">{mimo.baby.name}</p>
            </div>
            <Separator />
            <div className="space-y-2">
              {mimo.giftProducts.map((giftProduct) => (
                <div key={giftProduct.id} className="flex items-center gap-2">
                  <div className="h-5 w-5 flex items-center justify-center rounded-full bg-gray-400 text-white text-xs font-semibold">
                    {giftProduct.quantity}
                  </div>
                  <p className="text-sm">{giftProduct.product.name}</p>
                </div>
              ))}
            </div>
            <Separator />
            <div className="text-sm font-medium">R$ TOTAL RENDER</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default OrderList;
