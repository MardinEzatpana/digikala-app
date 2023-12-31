"use client";

import React from "react";
import {AllIcon, DrinksIcon, MenuIcon, ToolsIcon} from "../../icons";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { MainCatsWithSpecificCats } from "@/types/type";
import Image from "next/image";
import Link from "next/link";

interface Props {
  cats: MainCatsWithSpecificCats[];
}

enum SelectedTab {
  Drinks = "drinks",
  Tools = "tools",
}
const MobileCatsMenu = ({ cats }: Props) => {
  const [open, setOpen] = React.useState(false);
  const [selectedTab, setSelectedTab] = React.useState<SelectedTab>(
    SelectedTab.Drinks
  );
  return (
    <div className=" sm:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          onClick={() => {
            setSelectedTab(SelectedTab.Tools);
          }}
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
            defaultValue={cats[0].label}
          >
            <TabsList className="flex flex-col justify-start gap-2 p-0 bg-slate-200 h-full">
              {cats.map((mainCat) => {
                return (
                  <TabsTrigger
                    key={mainCat.id}
                    value={mainCat.id}
                    className={`pt-6 border-transparent w-full !bg-transparent duration-0 border-b-[3px] ${
                      selectedTab === mainCat.label ? "!bg-white !text-blue-500" : ""
                    }`}
                    onClick={() => {
                      if (mainCat.label === "tools") {
                        setSelectedTab(SelectedTab.Tools);
                      }
                      if (mainCat.label === "drinks") {
                        setSelectedTab(SelectedTab.Drinks);
                      }
                    }}
                  >
                    <div className="flex flex-col items-center gap-3">
                      {mainCat.title === "نوشیدنی ها" && (
                        <DrinksIcon classes="h-8 w-8 fill-dark_4" />
                      )}
                      {mainCat.title === "ابزار تهیه نوشیدنی" && (
                        <ToolsIcon classes="h-8 w-8 fill-dark_4" />
                      )}
                      <span className="text-xl font-iranyekan_bold">
                        {mainCat.title}
                      </span>
                    </div>
                  </TabsTrigger>
                );
              })}
              <TabsTrigger
                value={"show all"}
                className={`pt-6 border-transparent w-full !bg-transparent duration-0 border-b-[3px]`}
              >
                <Link href="#" onClick={() => setOpen(false)}>
                  <div className="flex flex-col items-center gap-3">
                    <AllIcon classes="h-8 w-8 fill-dark_4" />
                    <span className=" font-iranyekan_bold text-xl">
                      همه محصولات
                    </span>
                  </div>
                </Link>
              </TabsTrigger>
            </TabsList>
            {cats.map((mainCat) => {
              return (
                <TabsContent
                  className="w-full"
                  key={mainCat.id}
                  value={mainCat.id}
                >
                  <div dir="rtl" className="grid grid-cols-3 gap-6">
                    {mainCat.Specific_cat.map((specific) => {
                      return (
                        <SheetClose key={specific.id} asChild>
                          <Link href="#">
                            <div className="flex flex-col gap-2 items-center justify-center">
                              <div className=" border-[1px] w-24 h-24 md:w-28 md:h-28 flex justify-center items-center rounded-full">
                                <Image
                                  alt={specific.title}
                                  width={40}
                                  height={40}
                                  src={specific.single_image}
                                />
                              </div>
                              <div className="flex justify-center items-center text-sm">
                                <span className="text-center font-iranyekan_bold text-dark_3 mb-auto text-lg">
                                  {specific.title}
                                </span>
                              </div>
                            </div>
                          </Link>
                        </SheetClose>
                      );
                    })}
                    <SheetClose asChild>
                      <Link href="#">
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <div className="bg-slate-200 w-24 h-24 md:w28 md:h-28 flex justify-center items-center rounded-full">
                            <AllIcon classes="h-10 w-10 fill-dark_4" />
                          </div>
                          <div className="flex justify-center items-center text-sm">
                            <span className="text-center font-iranyekan_bold text-dark_3 mb-auto text-lg">
                              مشاهده همه
                            </span>
                          </div>
                        </div>
                      </Link>
                    </SheetClose>
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </SheetContent>
      </Sheet>
    </div>
  );
};
export default MobileCatsMenu;
