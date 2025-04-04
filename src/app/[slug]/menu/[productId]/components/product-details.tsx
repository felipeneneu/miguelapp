"use client";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Prisma } from "@prisma/client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

import React, { useContext, useState } from "react";
import { CardContext } from "../../contexts/cards";
import CardSheet from "./sheets";
import { Badge } from "@/components/ui/badge";

interface ProductDetailsProps {
  product: Prisma.ProductGetPayload<{
    include: {
      baby: {
        select: {
          name: true;
          avatarImageUrl: true;
        };
      };
    };
  }>;
}
const ProductDetails = ({ product }: ProductDetailsProps) => {
  const { toggleCard, addProduct } = useContext(CardContext);
  const [quantity, setQuantity] = useState<number>(1);
  const handleDecreaseQuantity = () =>
    setQuantity((prev) => {
      if (prev === 1) return prev;
      return prev - 1;
    });
  const handleIncreaseQuantity = () =>
    setQuantity((prev) => (prev < product.stockQuantity ? prev + 1 : prev));
  const handleAddToCart = () => {
    addProduct({ ...product, quantity });
    toggleCard();
  };

  return (
    <>
      <div className="z-50 relative rounded-t-3xl p-5 mt-[-2.5rem] bg-white flex-auto flex flex-col overflow-hidden">
        <div className="flex-auto overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-1.5">
            <Image
              src={product.baby.avatarImageUrl}
              alt={product.baby.name}
              width={16}
              height={16}
              className="rounded-full"
            />
            <p className="text-xs text-muted-foreground">{product.baby.name}</p>
          </div>
          <h2 className="mt-1 text-xl font-semibold">{product.name}</h2>
          <Badge>Disponivel: {product.stockQuantity}</Badge>
          <p></p>

          {/* Preço e Quantidade */}
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-3 text-center">
              <Button
                variant="outline"
                className="h-8 w-8 rounded-xl"
                onClick={handleDecreaseQuantity}
              >
                <ChevronLeft />
              </Button>
              <p className="w-4">{quantity}</p>
              <Button
                variant="destructive"
                className="h-8 w-8 rounded-xl"
                onClick={handleIncreaseQuantity}
              >
                <ChevronRight />
              </Button>
            </div>
          </div>

          {/* Sobre o Item */}
          <ScrollArea className="h-2/3 bg-white pt-4 pb-7">
            <div className="mt-3 space-y-3 h-">
              <h4 className="font-semibold">Sobre</h4>
              <p className="text-sm text-muted-foreground">
                {product.description}
              </p>
            </div>
          </ScrollArea>
        </div>

        {/* Botão Comprar */}
        <Button className="mt-6 w-full" onClick={handleAddToCart}>
          Adicionar à Sacola
        </Button>
      </div>
      <CardSheet />
    </>
  );
};

export default ProductDetails;
