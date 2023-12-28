"use client";

import Image from "next/image";
import {LogoDG, HelpIcon} from "../icons";
import Search from "./_components/Search";
import Link from "next/link";
import Log from "./Log";
import MobileCatsMenu from "./_components/MobileCatsMenu";
import { CatsMenu } from "./_components/CatsMenu";
import NavbarLinks from "./_components/NavbarLinks";
import ShoppingCartButton from "./_components/ShoppingCartButton";

const Navbar = () => {

  return (
    <>
          <div className="px-4 pb-4">
            <div className="mb-3 md:flex md:gap-6">
              <div className="flex items-center justify-between">
                <MobileCatsMenu />
                <Link href={"/"}>
                  <Image src={LogoDG} width={192} height={96} className="h-[6rem] w-[12rem] fill-g1_7" priority alt="" />
                </Link>
                <HelpIcon classes="h-10 w-10 md:hidden" />
              </div>
              <div className="flex justify-between items-center gap-4 md:grow">
                <Search />
                <div className="flex w-96 items-stretch gap-5">
                  <Log />
                  <span className=" w-1 border-l"></span>  
                   <ShoppingCartButton />             
                </div>
              </div>
            </div>
            <div className="hidden md:flex md:gap-2 text-g1 border-b-g1_7">
              <CatsMenu  />
              <NavbarLinks />
            </div>
          </div>
    </>
  );
};

export default Navbar;
