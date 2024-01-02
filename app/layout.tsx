import type { Metadata } from "next";
import "./globals.css";
import "./ui/style/globals.scss";
import Navbar from "./ui/nav/Navbar";
import { MainCatsWithSpecificCats } from "@/types/type";
import { prisma } from "@/lib/db/prisma";
import Footer from "./ui/footer/Footer";

export const metadata: Metadata = {
  title: "دیجی کالا",
  description: "Digikala clone",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cats: MainCatsWithSpecificCats[] = await prisma.main_cat.findMany({
    include: { Specific_cat: true },
  });
  return (
    <html lang="fa" dir="rtl">
      <body className="max-w-[1720px] m-auto font-iranyekan flex-col items-center justify-center">
        <Navbar cats={cats}/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
