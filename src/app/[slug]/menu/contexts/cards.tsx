"use client";
import { Product } from "@prisma/client";
import { createContext, ReactNode, useState } from "react";

export interface CardProduct
  extends Pick<Product, "id" | "name" | "imageUrl" | "stockQuantity"> {
  quantity: number;
}

export interface ICardContext {
  isOpen: boolean;
  products: CardProduct[];
  toggleCard: () => void;
  addProduct: (product: CardProduct) => void;
  decreaseCartProductQuantity: (productId: string) => void;
  increaseCartProductQuantity: (productId: string) => void;
  removeProduct: (productId: string) => void;
}

export const CardContext = createContext<ICardContext>({
  isOpen: false,
  products: [],
  toggleCard: () => {},
  addProduct: () => {},
  decreaseCartProductQuantity: () => {},
  increaseCartProductQuantity: () => {},
  removeProduct: () => {},
});

export const CardProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CardProduct[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleCard = () => setIsOpen((prev) => !prev);

  const addProduct = (product: CardProduct) => {
    const productIsAlreadyInCart = products.some(
      (prevProduct) => prevProduct.id === product.id
    );
    if (!productIsAlreadyInCart) {
      return setProducts((prev) => [...prev, product]);
    }
    setProducts((prevProducts) => {
      return prevProducts.map((prevProduct) => {
        if (prevProduct.id === product.id) {
          return {
            ...prevProduct,
            quantity: prevProduct.quantity + product.quantity,
          };
        }
        return prevProduct;
      });
    });
  };

  const decreaseCartProductQuantity = (productId: string) => {
    setProducts((prevProducts) => {
      return prevProducts.map((prevProduct) => {
        if (prevProduct.id !== productId) {
          return prevProduct;
        }

        if (prevProduct.quantity === 1) {
          return prevProduct;
        }
        return { ...prevProduct, quantity: prevProduct.quantity - 1 };
      });
    });
  };
  const increaseCartProductQuantity = (productId: string) => {
    setProducts((prevProducts) => {
      return prevProducts.map((prevProduct) => {
        if (prevProduct.id !== productId) {
          return prevProduct;
        }
        if (prevProduct.quantity >= prevProduct.stockQuantity) {
          return prevProduct;
        }
        return { ...prevProduct, quantity: prevProduct.quantity + 1 };
      });
    });
  };
  const removeProduct = (productId: string) => {
    setProducts((prevProducts) =>
      prevProducts.filter((prevProducts) => prevProducts.id !== productId)
    );
  };
  return (
    <CardContext.Provider
      value={{
        isOpen,
        products,
        toggleCard,
        addProduct,
        decreaseCartProductQuantity,
        increaseCartProductQuantity,
        removeProduct,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
