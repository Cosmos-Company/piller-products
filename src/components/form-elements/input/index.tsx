"use client";
import { cn } from "@/utils/class-helper";
import React, { forwardRef, useId, useState } from "react";
import { VscSymbolColor } from "react-icons/vsc";

const Input = forwardRef<
  HTMLInputElement,
  React.HTMLProps<HTMLInputElement> & {
    className?: string;
  }
>(({ className, ...rest }, ref) => {
  const id = useId();
  const [color, setColor] = useState<string>(
    (rest.value as string) || "#ebebeb"
  );
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
            className="w-full h-full bg-transparent outline-none"
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <label htmlFor={id}>
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
Input.displayName = "Input";
export default Input;
