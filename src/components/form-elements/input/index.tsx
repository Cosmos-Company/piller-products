"use client";
import { cn } from "@/utils/class-helper";
import { isContrastColorWhite } from "@/utils/color-helper";
import React, { forwardRef, useEffect, useId, useState } from "react";
import { VscSymbolColor } from "react-icons/vsc";

const Input = forwardRef<
  HTMLInputElement,
  React.HTMLProps<HTMLInputElement> & {
    className?: string;
    value: string;
  }
>(({ className, value, ...rest }, ref) => {
  const id = useId();
  const [color, setColor] = useState<string>((value as string) || "#ebebeb");

  useEffect(() => {
    console.log("rest.value", value);
    setColor((value as string) ?? "");
  }, [value]);

  if (rest.type === "color") {
    return (
      <>
        <input
          type="color"
          id={id}
          className="w-0 h-0 opacity-0 absolute"
          {...rest}
          onBlur={(e) => {
            rest.onBlur && rest.onBlur(e);
            setColor(e.target.value);
          }}
        />
        <div
          className={cn(
            "relative flex items-center w-[230px] max-h-[60px] overflow-hidden focus-within:outline focus-within:outline-primary bg-transparent p-2.5 rounded-[40px]  border-solid border-black border",
            className
          )}
        >
          <input
            className="w-full h-full max-h-[60px] bg-transparent outline-none"
            type="text"
            value={color}
            placeholder="Renk Seçiniz"
            onChange={(e) => setColor(e.target.value)}
          />
          {color}
          <label
            htmlFor={id}
            style={{
              backgroundColor: color,
            }}
            className={cn(
              "rounded-full p-1 border border-gray-900",
              isContrastColorWhite(color) ? "text-white" : "text-black"
            )}
          >
            <VscSymbolColor />
          </label>
        </div>
      </>
    );
  }
  return (
    <input
      type="text"
      className={cn(
        " w-[230px] max-h-[60px] overflow-hidden  bg-transparent p-2.5 rounded-[40px]  border-solid border-black border",
        className
      )}
      {...rest}
    />
  );
});

export default Input;
