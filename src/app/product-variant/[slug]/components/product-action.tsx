"use client";

import { Button } from "@/components/ui/button";

import AddToCartButton from "./add-to-cart-button";

interface ProductActionsProps {
  productVariantId: string;
}

const ProductActions = ({ productVariantId }: ProductActionsProps) => {
  return (
    <>
      <div className="px-5">
        <div className="space-y-4 pb-5">
          <h3 className="font-medium">Quantidade</h3>
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
