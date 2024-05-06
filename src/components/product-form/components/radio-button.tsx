"use client";
import { cn } from "@/utils/class-helper";
import clsx from "clsx";
import React, { useEffect, useId, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";

export default function RadioButton({
  name,
  value,
  label,
  isCircle,
  isBig,
  dependingValue,
  description,
}: {
  name: string;
  value: string;
  label: string;
  isCircle?: boolean;
  isBig?: boolean;
  dependingValue?: string;
  description?: string;
}) {
  const form = useFormContext();
  const id = useId();

  useEffect(() => {
    if (!dependingValue) return;
    form.setValue(name, null);
  }, [dependingValue]);

  const [checked, setChecked] = useState(false);
  const watch = form.watch(name);

  useEffect(() => {
    if (watch === value) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [watch]);

  return (
    <>
      <input
        className="
            w-0 h-0 opacity-0 absolute
        "
        type="radio"
        id={id}
        value={value}
        {...form.register(name)}
      />
      <label
        htmlFor={id}
        className={clsx(
          "cursor-pointer border flex flex-col justify-center items-center  border-solid ",
          isCircle
            ? " w-5 h-5 p-6 rounded-full"
            : isBig
            ? "w-full rounded-[20px] p-2 px-5"
            : "rounded-[40px] p-4 px-5",
          checked ? "bg-[#2a50fe] text-white border-[#2a50fe]" : "border-black"
        )}
      >
        <p>{label}</p>
        {isBig && (
          <p
            className={cn(
              "text-sm ",
              checked ? "text-gray-300" : "text-gray-600"
            )}
          >
            {description}
          </p>
        )}
      </label>
    </>
  );
}
