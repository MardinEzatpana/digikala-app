"use client";

import { Divider } from "@mui/material";
import React from "react";
import Prod_status from "./Prod_status";
import Prod_order_form from "./Prod_order_form";

interface Props {
  status: Boolean;
  price: number;
  product_Id: string;
  offPercent: number;
}

const Prod_order = ({ status, offPercent, price, product_Id }: Props) => {
  if (status) {
    return (
      <div className="lg:bg-slate-100 p-4 lg:rounded-xl lg:border-2 lg:max-w-[220px] lg:min-w-[180px] lg:flex lg:flex-col lg:gap-4">
        <Prod_status />
        <Divider />
        <Prod_order_form
          offPercent={offPercent}
          price={price}
          product_id={product_Id}
        />
      </div>
    );
  }
  return (
    <div>
      <p>ناموجود</p>
    </div>
  );
};

export default Prod_order;
