"use client";
import { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Prisma } from "@prisma/client";
import { ClockIcon } from "lucide-react";
import Image from "next/image";
import Products from "./products";
import { CardContext } from "../contexts/cards";

import CardSheet from "../[productId]/components/sheets";

interface BabyShowerCategoriesProps {
  babyShower: Prisma.BabyShowerGetPayload<{
    include: {
      menuCategories: {
        include: {
          products: true;
        };
      };
    };
  }>;
}

type MenuCategoryWithProducts = Prisma.MenuCategoryGetPayload<{
  include: {
    products: true;
  };
}>;

const BabyShowerCategories = ({ babyShower }: BabyShowerCategoriesProps) => {
  const [selectedCategory, setSelectedCategory] =
    useState<MenuCategoryWithProducts>(babyShower.menuCategories[0]);
  const handleCategoryClick = (category: MenuCategoryWithProducts) => {
    setSelectedCategory(category);
  };
  const { products, toggleCard } = useContext(CardContext);
  const getCategoryButtonVariant = (category: MenuCategoryWithProducts) => {
    return selectedCategory.id === category.id ? "default" : "secondary";
  };
  return (
    <div className="relative z-50 mt-[-1.5rem] rounded-t-3xl border bg-white ">
      {/* Header */}
      <div className="p-5 border-b">
        <div className="flex items-center gap-3 ">
          <Image
            src={babyShower.avatarImageUrl}
            alt={babyShower.name}
            width={45}
            height={45}
            quality={100}
          />

          <div>
            <h2 className="font-semibold text-lg">{babyShower.name}</h2>
            <p className="text-xs opacity-55">Lista de Mimos</p>
          </div>
        </div>
        <div className="flex items-center gap-1 text-xs text-green-500 mt-3">
          <ClockIcon size={12} />
          <p>10/05/25</p>
        </div>
      </div>

      {/* Categorias  */}
      <ScrollArea className="w-full ">
        <div className="flex w-max space-x-4 p-4 pt-5">
          {babyShower.menuCategories
            .filter((category) => category.products.length > 0)
            .map((category) => (
              <Button
                onClick={() => handleCategoryClick(category)}
                key={category.id}
                variant={getCategoryButtonVariant(category)}
                size="sm"
                className="rounded-full"
              >
                {category.name}
              </Button>
            ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <h3 className="px-5 pt-8 font-semibold">{selectedCategory.name}</h3>

      <Products products={selectedCategory.products} />
      {products.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 flex w-full items-center justify-between border border-t bg-white px-5 py-3">
          <div>
            <p className="text-xs text-muted-foreground">Total dos Mimos</p>
            <p className="text-sm font-semibold">
              <span className="text-xs font-normal text-muted-foreground">
                / {products.length > 1 ? "itens" : "item"} Itens
              </span>
            </p>
          </div>
          <Button onClick={toggleCard}>Ver Lista</Button>
          <CardSheet />
        </div>
      )}
    </div>
  );
};

export default BabyShowerCategories;
