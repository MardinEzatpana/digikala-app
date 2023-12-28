import React from "react";
import {PercentIcon, BoxingIcon, BlogIcon} from "../../icons";
import Link from "next/link";

const NavbarLinks = () => {
  return (
    <ul className="flex items-center text-lg gap-8 font-iranyekan_bold border-r-2 px-4 py-2">
      <li className="flex items-center justify-center gap-2">
        <BoxingIcon classes="w-6 h-6 fill-dark_4" />
        <Link className="text-dark_4" href="#">
          کل محصولات
        </Link>
      </li>
      <li className="flex items-center justify-center gap-2">
        <PercentIcon clasess="h-6 -w-6 fill-dark_4" />
        <Link className="text-dark_4" href={"#"}>
          فروش ویژه
        </Link>
      </li>
      <li className="flex items-center justify-center gap-2">
        <BlogIcon clasess="h-6 -w-6 fill-dark_4" />
        <Link className="text-dark_4" href={"#"}>
          مجله آموزشی و خبری
        </Link>
      </li>
    </ul>
  );
};

export default NavbarLinks;
