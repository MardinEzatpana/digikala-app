import { MainCatsWithSpecificCats } from "@/types/type";
import Hero from "./ui/home/hero/Hero";
import { prisma } from "@/lib/db/prisma";
import Cat_section_2 from "./ui/home/cat_section_2";

export default async function Home() {
  const cats: MainCatsWithSpecificCats[] = await prisma.main_cat.findMany({
    include: { Specific_cat: true },
  });
  return (
    <div className="flex flex-col gap-3">
      <Hero />
      <div className="bg-[url('/image/coffee_background_2.jpg')] bg-cover bg-center bg-no-repeat">
        <h1 className="mb-5 text-2xl bg-g1_7 w-full py-4 bg-opacity-60 text-center font-iranyekan_bold text-white">
          خرید بر اساس دسته بندی
        </h1>
        <Cat_section_2 cats={cats} />
      </div>
    </div>
  )
}
