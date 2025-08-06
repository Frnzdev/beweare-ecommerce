import Image from "next/image";
import Link from "next/link";

import { productTable, productVariantTable } from "@/db/schema";
import { formatCentsToBRL } from "@/helpers/money";

interface ProductItemProps {
  product: typeof productTable.$inferInsert & {
    variants: (typeof productVariantTable.$inferInsert)[];
  };
}

const ProductItem = ({ product }: ProductItemProps) => {
  const firstVariants = product.variants[0];
  const imageUrlString = String(firstVariants.imageUrl ?? "");
  const match = imageUrlString.match(/https?:\/\/[^"]+/);
  const imageUrl = match ? match[0] : "";
  return (
    <Link href="/" className="flex flex-col gap-4">
      <Image
        src={imageUrl}
        alt={firstVariants.name}
        width={200}
        height={200}
        className="rounded-3xl"
      />
      <div className="flex max-w-[200px] flex-col gap-1">
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
