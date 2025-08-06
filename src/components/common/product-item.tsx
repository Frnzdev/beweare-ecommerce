import Image from "next/image";
import Link from "next/link";

import { productTable, productVariantTable } from "@/db/schema";
import { formatCentsToBRL } from "@/helpers/money";
import { cn } from "@/lib/utils";

interface ProductItemProps {
  product: typeof productTable.$inferInsert & {
    variants: (typeof productVariantTable.$inferInsert)[];
  };
  textContainerClassName?: string;
}

const ProductItem = ({ product, textContainerClassName }: ProductItemProps) => {
  const firstVariants = product.variants[0];

  return (
    <Link href="/" className="flex flex-col gap-4">
      <Image
        src={firstVariants.imageUrl}
        alt={firstVariants.name}
        sizes="100vh"
        width={0}
        height={0}
        className="h-auto w-full rounded-3xl"
      />
      <div
        className={cn(
          "textContainerClassName flex max-w-[200px] flex-col gap-1",
          textContainerClassName,
        )}
      >
        <p className="truncate text-sm font-medium">{product.name}</p>
        <p className="text-muted-foreground truncate text-xs font-medium">
          {product.description}
        </p>
        <p className="truncate text-sm font-semibold">
          {formatCentsToBRL(firstVariants.priceInCents)}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
