"use client";
import { cn } from "@/utils/class-helper";
import React, { useEffect, useState } from "react";

export default function KabloPhoto() {
  const [hoverIlk, setHoverIlk] = useState(false);
  const [hoverIkinci, setHoverIkinci] = useState(false);
  useEffect(() => {
    document
      .getElementById("ilk-uc")
      ?.addEventListener("mouseover", function () {
        setHoverIlk(true);
        setHoverIkinci(false);
      });
    document
      .getElementById("ilk-uc")
      ?.addEventListener("mouseout", function () {
        setHoverIlk(false);
      });
    document
      .getElementById("ikinci-uc")
      ?.addEventListener("mouseover", function () {
        setHoverIkinci(true);
        setHoverIlk(false);
      });
    document
      .getElementById("ikinci-uc")
      ?.addEventListener("mouseout", function () {
        setHoverIkinci(false);
      });
  }, []);

  return (
    <div className="w-full flex flex-col gap-[75px] shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034)] bg-[white] h-[580px] px-[115px] py-[100px] rounded-br-[60px]">
      <div className="relative h-full overflow-hidden mx-auto">
        <img
          src={"/kablo.png"}
          alt={"kablo"}
          className="w-full min-w-[300px] h-full object-cover"
        />
        <img
          src={"/ilkuc.png"}
          alt={"birinci"}
          className={cn(
            "absolute w-full min-w-[300px] transition-all bg-white/60 scale-125 translate-x-6 translate-y-4 h-full inset-0 object-cover z-20",
            hoverIlk ? "opacity-100" : "opacity-0"
          )}
        />
        <img
          src={"/ikinciuc.png"}
          alt={"ikinci"}
          className={cn(
            "absolute w-full min-w-[300px] transition-all  bg-white/60 scale-125 -translate-x-6 translate-y-4 h-full inset-0 object-cover z-20",
            hoverIkinci ? "opacity-100" : "opacity-0"
          )}
        />
      </div>
      <div className="flex gap-2.5 justify-center">
        <button
          type="button"
          className={cn("w-2.5 h-2.5 rounded-[50%]", "bg-[#2a50fe]")}
        ></button>
      </div>
    </div>
  );
}
