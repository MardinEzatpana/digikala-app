import React from "react";
import Add_prod_btn from "./Add_prod_btn";
import Control_amount from "./Control_amount";
import Prod_price from "./Prod_price";

interface Props {
  price: number;
  offPercent: number;
  product_id: string;
}

const Prod_order_form = ({ price, offPercent, product_id}: Props) => {
  const cart = false;
  const amount = () => {
    if (cart) {
        return 1;
      } else {
        return 0;
      }
  };
  return (
    <div className="fixed bottom-0 z-40 right-0 w-full bg-slate-100 p-4 px-8 lg:static lg:p-0 lg:bg-transparent">
      <div className="flex lg:flex-col lg:items-end font-iransansnum justify-between flex-row-reverse">
        <Prod_price offPercent={offPercent} price={price} />
        {amount() === 0 ? (
          <Add_prod_btn product_id={product_id} amount={amount()} />
        ) : (
          <Control_amount product_id={product_id} amount={amount()} />
        )}
      </div>
    </div>
  );
};

export default Prod_order_form;
