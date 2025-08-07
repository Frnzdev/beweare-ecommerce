"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

const QuantitySelector = () => {
  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const [quantity, setQuantity] = useState(1);
  return (
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
  );
};

export default QuantitySelector;
