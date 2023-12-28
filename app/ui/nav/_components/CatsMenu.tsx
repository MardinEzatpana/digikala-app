"use client";

import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";

import {DrinksIcon}  from "../../icons"

export function CatsMenu() {

  return (
    <>
        <NavigationMenu dir="rtl" className="border-transparent">
          <NavigationMenuList>
                <NavigationMenuItem >
                  <NavigationMenuTrigger className="text-xl flex items-center gap-1">
                   <h2>نوشیدنی ها</h2> 
                      <DrinksIcon classes="h-8 w-8 fill-dark_4" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-slate-100 rounded-xl border-transparent">
                    <ul className="grid gap-3 p-4 md:w-[700px] md:grid-cols-5 md:grid-rows-2 items-stretch">
                      <li className="row-span-2">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-evenly items-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="#"
                          >
                            <Image
                              src="https://dkstatics-public.digikala.com/digikala-products/d3c8880bb8ad668526e1df266957c1d3c9c844bb_1681901721.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"
                              alt=""
                              width={100}
                              height={100}
                            />
                            <div className="mb-2 mt-4 text-lg font-iransansbold">
                            <h2>نوشیدنی ها</h2> 
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
    </>
  );
}
