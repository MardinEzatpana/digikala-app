"use client";

import Image from "next/image";
import { LogoDG, HelpIcon, NavTop } from "../icons";
import Search from "./_components/Search";
import Link from "next/link";
import Log from "./Log";
import MobileCatsMenu from "./_components/MobileCatsMenu";
import { CatsMenu } from "./_components/CatsMenu";
import NavbarLinks from "./_components/NavbarLinks";
import ShoppingCartButton from "./_components/ShoppingCartButton";
import { MainCatsWithSpecificCats } from "@/types/type";

interface Props {
  cats: MainCatsWithSpecificCats[];
}
const Navbar = ({ cats }: Props) => {
  return (
    <>
      <div>
        <Link href={"/"}>
          <Image
            src={NavTop}
            height={96}
            className="h-[6rem] w-full pb-4"
            priority
            alt=""
          />
        </Link>
        <div className="mb-3 md:flex md:gap-6 px-4">
          <div className="flex items-center justify-between">
            <MobileCatsMenu cats={cats} />
            <Link href={"/"}>
              <Image
                src={LogoDG}
                width={192}
                height={46}
                className="h-[3rem] w-[12rem] "
                priority
                alt=""
              />
            </Link>
            <HelpIcon classes="h-10 w-10 md:hidden" />
          </div>
          <div className="flex justify-between items-center gap-4 md:grow">
            <Search />
            <div className="flex items-stretch gap-5">
              <Log />
              <span className=" w-1 border-l"></span>
              <ShoppingCartButton />
            </div>
          </div>
        </div>
        <div className="hidden sm:flex sm:gap-2 text-g1 border-b-g1_7 px-4 pb-4">
          <CatsMenu mainCats={cats} />
          <NavbarLinks />
        </div>
      </div>
    </>
  );
};

export default Navbar;
