"use client";

import Image from "next/image";
import Link from "next/link";

import Header from "@/components/common/header";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";

const CheckoutSuccesPage = () => {
  return (
    <>
      <Header />

      <Dialog open={true} onOpenChange={() => {}}>
        <DialogContent className="text-center">
          <Image
            src="/illustration.svg"
            width={300}
            height={300}
            alt="sucess"
            className="mx-auto"
          />
          <DialogTitle className="mt-4 text-2xl">Pedido efetuado!</DialogTitle>
          <DialogDescription className="font-medium">
            Seu pedido foi efetuado com sucesso. Você pode acompanhar o status
            na seção de “Meus Pedidos”.
          </DialogDescription>
          <DialogFooter>
            <Button className="rounded-full" size={"lg"}>
              Ver meus pedidos
            </Button>
            <Button
              asChild
              className="rounded-full"
              size={"lg"}
              variant={"outline"}
            >
              <Link href={"/"}> Voltar para loja</Link>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CheckoutSuccesPage;
