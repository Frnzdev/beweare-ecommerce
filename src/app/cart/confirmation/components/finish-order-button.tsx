"use client";

import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { useFinishOrder } from "@/hooks/mutations/use-finish-order";

const FinishOrderButton = () => {
  const finishOrderMutation = useFinishOrder();
  const [successDialogIsOpen, setSuccessDialogIsOpen] = useState(false);

  const handleFinishOrder = () => {
    finishOrderMutation.mutate();
    setSuccessDialogIsOpen(true);
  };

  return (
    <>
      <Button
        onClick={handleFinishOrder}
        disabled={finishOrderMutation.isPending}
        className="w-full rounded-full px-8"
        size={"lg"}
      >
        {finishOrderMutation.isPending && (
          <Loader2 className="h-4 w-4 animate-spin" />
        )}
        Finalizar Compra
      </Button>
      <Dialog open={successDialogIsOpen} onOpenChange={setSuccessDialogIsOpen}>
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

export default FinishOrderButton;
