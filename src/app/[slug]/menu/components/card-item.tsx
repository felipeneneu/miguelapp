import React, { useContext } from "react";
import { CardContext, CardProduct } from "../contexts/cards";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon, TrashIcon } from "lucide-react";

interface CardItemProps {
  item: CardProduct;
}

const CardItem = ({ item }: CardItemProps) => {
  const {
    decreaseCartProductQuantity,
    increaseCartProductQuantity,
    removeProduct,
  } = useContext(CardContext);

  return (
    <div className="flex items-center justify-between">
      {/* ESQUERDA */}
      <div className="flex items-center gap-3">
        <div className="relative h-20 w-20">
          <Image src={item.imageUrl} fill alt={item.name} />
        </div>
        {/* Direita */}
        <div className="space-y-1">
          <p className="text-xs w-[130px] truncate text-ellipsis">
            {item.name}
          </p>
          <div className="flex items-center gap-1">
            <Button
              className="h-7 w-7 rounded-xl"
              variant="outline"
              onClick={() => decreaseCartProductQuantity(item.id)}
            >
              <ChevronLeftIcon size={16} />
            </Button>
            <p className="text-xs w-7 text-center">{item.quantity}</p>
            <Button
              className="h-7 w-7 rounded-xl"
              variant="destructive"
              onClick={() => increaseCartProductQuantity(item.id)}
            >
              <ChevronRightIcon size={16} />
            </Button>
          </div>
        </div>
      </div>
      <div>
        <Button
          className="h-7 w-7 rounded-xl"
          variant="outline"
          onClick={() => removeProduct(item.id)}
        >
          <TrashIcon />
        </Button>
      </div>
    </div>
  );
};

export default CardItem;
