import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
interface ProductsProps {
  products: Product[];
}

const Products = ({ products }: ProductsProps) => {
  const { slug } = useParams<{ slug: string }>();
  return (
    <div className="space-y-2 px-5">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/${slug}/menu/${product.id}`}
          className="flex items-center justify-between gap-10 py-3 border-b"
        >
          {/* ESQUERDA */}
          <div>
            <h3 className="font-medium text-sm pb-1">{product.name}</h3>
            <p className="line-clamp-2 text-sm text-muted-foreground whitespace-pre-line">
              {product.description}
            </p>
          </div>
          {/* DIREITA */}
          <div className="relative min-h-[82px] min-w-[120px]">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="rounded-lg object-contain"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
