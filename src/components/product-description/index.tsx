import React from "react";
import OptionContainer from "../product-form/components/option-container";
import { cn } from "@/utils/class-helper";

function ProductDescription({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "container text-xl flex justify-center items-center flex-col mb-10",
        className
      )}
    >
      <div className="flex flex-col w-full md:w-3/4 gap-5">
        <h2 className="text-center text-3xl font-semibold">
          Teknik Özellikler
        </h2>
        <div className="text-xl text-[#7A7A7A] font-medium">{children}</div>
      </div>
    </div>
  );
}

export default ProductDescription;
