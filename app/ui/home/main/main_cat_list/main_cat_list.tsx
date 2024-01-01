import React from "react";
import { Main_cat } from "@prisma/client";
import List from "./components/List";

interface Props {
  main_cats: Main_cat[];
}

const Main_cat_list = ({ main_cats }: Props) => {
  return (
    <section className=" p-2">
      <List main_cats={main_cats} />
    </section>
  );
};

export default Main_cat_list;
