"use client";
import React, { useTransition } from "react";
import { MinusIcon, PlusIcon, Trash2Icon } from "lucide-react";

interface Props {
  product_id: string;
  amount: number;
  classess?: string;
}

const Control_amount = ({ amount, product_id, classess }: Props) => {
  const [isPending, startTransition] = useTransition();

  return (
    <div
      className={`w-full max-w-[35rem] mt-5 shadow-[0px_1px_5px_rgba(0,0,0,0.40)] rounded-xl flex items-center justify-between px-2 py-4 lg:px-1 lg:py-1 ${classess}`}
    >
      <button
        disabled={isPending}
      >
        <PlusIcon stroke="#ef4056" className="h-10 w-10 p-2" />
      </button>

      <div className="text-2xl text-[#ef4056]">
        {isPending ? (
          <span className="loading loading-dots loading-md"></span>
        ) : (
          <span className="font-iransansnum">{amount}</span>
        )}
      </div>

      <button
        disabled={isPending}
      >
        {amount > 1 ? (
          <MinusIcon stroke="#ef4056" className="h-10 w-10 p-2" />
        ) : (
          <Trash2Icon stroke="#ef4056" className="h-10 w-10 p-2" />
        )}
      </button>
    </div>
  );
};

export default Control_amount;
