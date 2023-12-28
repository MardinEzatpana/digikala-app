import React from "react";
import {CartIcon} from "../../icons";
import Link from "next/link";

const ShoppingCartButton = () => {
  return (
    <>
      <div className="hidden md:flex">
          <Link
            href="#"
            className="relative p-1 mx-2 duration-0 data-[state=open]:bg-red-100 rounded-lg"
          >
            <span className="absolute bottom-[0px] right-[-7px] bg-g1_5 bg-opacity-90 text-light_2 py-[1px] px-2 flex items-center justify-center rounded-[5px] font-iransansnum">
              0
            </span>
            <CartIcon classes="h-9 w-9 fill-dark_4" />
          </Link>
      </div>
      <div className="flex md:hidden">
          <Link
            href="#"
            className="relative p-1 mx-2 duration-0 data-[state=open]:bg-red-100 rounded-lg"
          >
            <span className="absolute bottom-[0px] right-[-7px] bg-g1_5 bg-opacity-90 text-light_2 py-[1px] px-2 flex items-center justify-center rounded-[5px] font-iransansnum">
              0
            </span>
            <CartIcon classes="h-9 w-9 fill-dark_4" />
          </Link>
      </div>
    </>
  );
};

export default ShoppingCartButton;
