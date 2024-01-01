import { AllCatsTopsViewProducts, MainCatsWithSpecificCats } from "@/types/type";
import Hero from "./ui/home/hero/Hero";
import { prisma } from "@/lib/db/prisma";
import Cat_section_2 from "./ui/home/cat_section_2";
import AdSlider from "./ui/home/ad_slider/AdSlider";
import Main_cat_list from "./ui/home/main/main_cat_list/main_cat_list";
import Main_cat_slider from "./ui/home/main/main_cats_slider/main_cat_slider";

export default async function Home() {
  const cats: MainCatsWithSpecificCats[] = await prisma.main_cat.findMany({
    include: { Specific_cat: true },
  });

  const topSellToolsProducts: Promise<AllCatsTopsViewProducts>[] = cats.map(
    async (
      mainCatItem: MainCatsWithSpecificCats
    ): Promise<AllCatsTopsViewProducts> => {
      return await prisma.product.findMany({
        take: 8,
        where: { main_cat_id: mainCatItem.id, status: true },
        include: { main_cat: true },
      });
    }
  );

  const lists_of_lists: AllCatsTopsViewProducts[] = await Promise.all(
    topSellToolsProducts
  );
  return (
    <div className="flex flex-col gap-3">
      <Hero />
      <div className="bg-[url('/image/coffee_background_2.jpg')] bg-cover bg-center bg-no-repeat">
        <h1 className="mb-5 text-2xl bg-g1_7 w-full py-4 bg-opacity-60 text-center font-iranyekan_bold text-white">
          خرید بر اساس دسته بندی
        </h1>
        <Cat_section_2 cats={cats} />
      </div>
      <AdSlider />
      <Main_cat_list main_cats={cats} />
      <Main_cat_slider lists_of_lists={lists_of_lists} />
    </div>
  )
}
