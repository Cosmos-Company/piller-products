"use client";
import { cn } from "@/utils/class-helper";
import React, { useEffect, useState } from "react";

export default function PanoPhoto() {
    const [hoverYes, setHoverYes] = useState(false);
    const [hoverNo, setHoverNo] = useState(false);
    useEffect(() => {
        document
            .getElementById("yes")
            ?.addEventListener("mouseover", function () {
                setHoverYes(true);
                setHoverNo(false);
            });
        document
            .getElementById("yes")
            ?.addEventListener("mouseout", function () {
                setHoverYes(false);
            });
        document
            .getElementById("no")
            ?.addEventListener("mouseover", function () {
                setHoverNo(true);
                setHoverYes(false);
            });
        document
            .getElementById("no")
            ?.addEventListener("mouseout", function () {
                setHoverNo(false);
            });
            document
            .getElementById("monofaze")
            ?.addEventListener("click", function () {
                
            })
    }, []);

    return (
        <div className=" w-full flex flex-col gap-[75px]  h-[580px] px-[115px] py-[100px] rounded-br-[60px]">
            <div className="relative h-full overflow-hidden mx-auto">
                <img
                    src={"/monofaze.png"}
                    alt={"monofaze"}
                    className="w-full min-w-[300px] h-full object-cover"
                />
                <img
                    src={"/ilkuc.png"}
                    alt={"birinci"}
                    className={cn(
                        "absolute w-full min-w-[300px] transition-all bg-white/60 scale-125 translate-x-6 translate-y-4 h-full inset-0 object-cover z-20",
                        hoverYes ? "opacity-100" : "opacity-0"
                    )}
                />
                <img
                    src={"/ikinciuc.png"}
                    alt={"ikinci"}
                    className={cn(
                        "absolute w-full min-w-[300px] transition-all  bg-white/60 scale-125 -translate-x-6 translate-y-4 h-full inset-0 object-cover z-20",
                        hoverNo ? "opacity-100" : "opacity-0"
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
