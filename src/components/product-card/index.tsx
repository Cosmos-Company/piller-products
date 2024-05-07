import { Product } from "@/types/product";
import { cn } from "@/utils/class-helper";
import Link from "next/link";
import React from "react";

export default function ProductCard({
  slug,
  photo,
  name,
  small,
}: Product & { small?: boolean }) {
  return (
    <Link
      href={`/urunler/${slug}`}
      className={cn(
        "overflow-hidden group flex text-gray-800 flex-col gap-x-4 shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034)] border hover:bg-primary transition-all hover:text-white border-primary   px-10 py-11 rounded-br-[60px]",
        small
          ? "flex-row h-[200px] items-center justify-between "
          : "h-[400px] row-span-2 "
      )}
    >
      <h4 className="text-center mb-10 font-semibold text-xl">{name}</h4>
      <div className={cn("h-full overflow-hidden", !small && "mx-auto")}>
        <img
          src={photo}
          className="h-full object-contain px-[35px] py-[30px] scale-150"
          alt={name}
        />
      </div>
      {!small && <p className="mx-auto opacity-50">Daha fazla gör</p>}
    </Link>
  );
}
