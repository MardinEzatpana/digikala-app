"use client";
import {AllIcon, DrinksIcon, MenuIcon, ToolsIcon} from "../../icons";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import Link from "next/link";
import React from "react";

const MobileCatsMenu = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className=" md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          asChild
        >
          <div>
            <MenuIcon clasess="h-12 w-12" />
          </div>
        </SheetTrigger>
        <SheetContent
          className="shadow-lg border rounded-lg flex flex-col gap-6 pt-[5rem]"
          side={"right"}
        >
          <Tabs
            className=" flex flex-row-reverse items-stretch gap-6 h-full"
            defaultValue="drinks"
          >
            <TabsList className="flex flex-col justify-start gap-2 p-0 bg-slate-200 h-full">
                  <TabsTrigger
                    value=""
                    className='pt-6 border-transparent w-full !bg-transparent duration-0 border-b-[3px]'
                  >
                    <div className="flex flex-col items-center gap-3">
                      <h2>نوشیدنی ها</h2> 
                        <DrinksIcon classes="h-8 w-8 fill-dark_4" />
                      <h2>ابزار تهیه نوشیدنی</h2>
                        <ToolsIcon classes="h-8 w-8 fill-dark_4" />
                    </div>
                  </TabsTrigger>
              <TabsTrigger
                value={"show all"}
                className={`pt-6 border-transparent w-full !bg-transparent duration-0 border-b-[3px]`}
              >
                <Link href="">
                  <div className="flex flex-col items-center gap-3">
                    <AllIcon classes="h-8 w-8 fill-dark_4" />
                    <span className=" font-iranyekan_bold text-xl">
                      همه محصولات
                    </span>
                  </div>
                </Link>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </SheetContent>
      </Sheet>
    </div>
  );
};

{
}
export default MobileCatsMenu;
