"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

import AddToCartButton from "./add-to-cart-button";

interface ProductActionsProps {
  productVariantId: string;
}

const ProductActions = ({ productVariantId }: ProductActionsProps) => {
  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <div className="px-5">
        <div className="space-y-4 pb-5">
          <h3 className="font-medium">Quantidade</h3>
          <div className="justify-beteween flex w-[100px] items-center rounded-lg border">
            <Button onClick={handleDecrement} size="icon" variant="ghost">
              <MinusIcon />
            </Button>
            <p>{quantity}</p>
            <Button onClick={handleIncrement} size="icon" variant="ghost">
              <PlusIcon />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-4 px-5 pb-5">
        <AddToCartButton productVariantId={productVariantId} quantity={1} />
        <Button className="rounded-full" size={"lg"}>
          Comprar agora
        </Button>
      </div>
    </>
  );
};

export default ProductActions;
