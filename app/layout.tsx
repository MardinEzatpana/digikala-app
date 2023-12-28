import type { Metadata } from "next";
import "./globals.css";
import "./ui/style/globals.scss";
import Navbar from "./ui/nav/Navbar";

export const metadata: Metadata = {
  title: "Digikala",
  description: "Digikala clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="max-w-[1720px] m-auto font-iranyekan flex-col items-center justify-center">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
