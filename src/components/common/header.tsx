"use client";

import { Home, LogInIcon, LogOutIcon, MenuIcon, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { authClient } from "@/lib/auth-client";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Cart from "./cart";
import SectionSelector from "./sections-selector";

const Header = () => {
  const { data: session } = authClient.useSession();

  return (
    <header className="flex items-center justify-between p-5">
      <Link href="/">
        <Image src="/Logo.svg" alt="BEWEAR" width={100} height={26.14} />
      </Link>

      <div className="flex items-center gap-3">
        <Sheet>
          <SheetTrigger asChild>
            {/*o as child server para nao ter um button dentro de um button, ele toma tudo que o button seria */}
            <Button variant="outline" size="icon">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="px-5">
              {session?.user ? (
                <>
                  <div className="flex justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage
                          src={session?.user?.image as string | undefined}
                        />
                        <AvatarFallback>
                          {session?.user?.name?.split(" ")?.[0]?.[0]}
                          {session?.user.name?.split(" ")?.[1]?.[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{session?.user?.name}</h3>
                        <span className="text-muted-foreground block text-xs">
                          {session?.user?.email}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col py-7">
                    <Separator />

                    <div className="py-5">
                      <SectionSelector page={`/`}>
                        <Home /> Início
                      </SectionSelector>
                      <SectionSelector page={`/my-orders`}>
                        <Truck /> Meus pedidos
                      </SectionSelector>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <Separator />

                    <div className="py-5">
                      <SectionSelector page={`/category/camisetas`}>
                        Camisetas
                      </SectionSelector>
                      <SectionSelector page={`/category/bermuda-shorts`}>
                        Bermuda & Shorts
                      </SectionSelector>
                      <SectionSelector page={`/category/calas`}>
                        Calças
                      </SectionSelector>
                      <SectionSelector page={`/category/jaquetas-moletons`}>
                        Jaquetas & Moletons
                      </SectionSelector>
                      <SectionSelector page={`/category/tnis`}>
                        Tênis
                      </SectionSelector>
                      <SectionSelector page={`/category/acessrios`}>
                        Acessórios
                      </SectionSelector>
                    </div>
                    <div className="py-5">
                      <Button
                        className="w-full"
                        variant="outline"
                        onClick={() => authClient.signOut()}
                      >
                        <LogOutIcon /> Sair da conta
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-between">
                    <h2 className="font-semibold">Olá! faça seu login!</h2>
                    <Button size="icon" asChild variant="outline">
                      <Link href="/authentication">
                        <LogInIcon />
                      </Link>
                    </Button>
                  </div>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
        <Cart />
      </div>
    </header>
  );
};

export default Header;
