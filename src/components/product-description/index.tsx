import React from "react";
import OptionContainer from "../product-form/components/option-container";
import { cn } from "@/utils/class-helper";

function ProductDescription({
  info,
  className,
}: {
  info: { description: string; image: string };
  className?: string;
}) {
  return (
    <div
      className={cn(
        " w-[70%] text-xl flex container justify-center items-center flex-col",
        className
      )}
    >
      <div className="flex flex-col w-3/4 gap-5">
        <h2 className="text-center text-3xl font-semibold">
          Teknik Özellikler
        </h2>
        <div className="text-xl text-[#7A7A7A] font-medium">
          {info?.description && (
            <p
              dangerouslySetInnerHTML={{
                __html: info.description,
              }}
            ></p>
          )}
        </div>
      </div>
      {info?.image && <img className=" min-w-full" src={info.image}></img>}
    </div>
  );
}

export default ProductDescription;
