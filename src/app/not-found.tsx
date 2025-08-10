// src/app/not-found.tsx
import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="flex h-screen flex-col items-center justify-center gap-6 p-2 text-center">
        <Image
          src="/illustrationError.svg"
          width={300}
          height={300}
          alt="Erro"
          className="mx-auto"
        />
        <p className="text-lg text-gray-600">Página não encontrada</p>
        <Button className="w-full rounded-full" size={"lg"} asChild>
          <Link href="/">Voltar para a página inicial</Link>
        </Button>
      </div>
      <Footer />
    </>
  );
}
