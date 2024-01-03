import Breadcrumbs, {
  BreadcrumbsType,
} from "@/app/ui/product/breadcrumbs/Breadcrumbs";
import { prisma } from "@/lib/db/prisma";
import { notFound } from "next/navigation";
import React, { cache } from "react";
import { Metadata } from "next";
import Main from "@/app/ui/product/main/Main";

interface Props {
  params: {
    product_id: string;
  };
}

const getProduct = cache(async (id: string) => {
  const product = await prisma.product.findUnique({
    where: { id: id },
    include: { main_cat: true, specific_cat: true },
  });
  if (!product) notFound();
  return product;
});

export async function generateMetadata({
  params: { product_id },
}: Props): Promise<Metadata> {
  const product = await getProduct(product_id);
  return {
    title: "دیجی کالا - " + product.title,
    description: product.title,
  };
}

const page = async ({ params: { product_id } }: Props) => {
  const product = await getProduct(product_id);

  const breadcrumbs: BreadcrumbsType[] = [
    {
      title: product.main_cat.title,
      link:"#",
    },
    {
      title: product.specific_cat.title,
      link: "#",
    },
  ];

  return (
    <div className="px-5 flex flex-col gap-5">
      <div>
        <Breadcrumbs list={breadcrumbs} />
        <Main product={product} product_id={product_id} />
      </div>
    </div>
  );
};

export default page;
