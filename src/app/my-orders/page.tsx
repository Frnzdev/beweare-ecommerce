import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";

import Header from "@/components/common/header";
import { db } from "@/db";
import { orderTable } from "@/db/schema";
import { auth } from "@/lib/auth";

import Orders from "./components/orders";

const MyOrdersPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user.id) {
    redirect("/");
  }

  const orders = await db.query.orderTable.findMany({
    where: eq(orderTable.userId, session.user.id),
    with: {
      items: {
        with: {
          productVariant: {
            with: {
              product: true,
            },
          },
        },
      },
    },
  });

  if (!orders) {
    return <p>Você ainda não tem pedidos</p>;
  }

  return (
    <>
      <Header />

      {orders.length === 0 ? (
        <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
          <h2 className="text-lg font-bold">Você ainda não tem pedidos</h2>
          <Image
            src="/illustrationNoOrders.svg"
            width={300}
            height={300}
            alt="no orders"
          />
        </div>
      ) : (
        <div className="px-5">
          <Orders
            orders={orders.map((order) => ({
              id: order.id,
              totalPriceInCents: order.totalPriceInCents ?? 0,
              status: order.status,
              createdAt: order.createdAt,
              items: order.items.map((item) => ({
                id: item.id,
                imageUrl: item.productVariant.imageUrl,
                productName: item.productVariant.product.name,
                productVariantName: item.productVariant.name,
                priceInCents: item.productVariant.priceInCents,
                quantity: item.quantity,
              })),
            }))}
          />
        </div>
      )}
    </>
  );
};

export default MyOrdersPage;
