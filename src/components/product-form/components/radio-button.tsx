"use client";
import { cn } from "@/utils/class-helper";
import clsx from "clsx";
import React, { useEffect, useId, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import { IoMdInformationCircle } from "react-icons/io";

export default function RadioButton({
  name,
  value,
  label,
  isCircle,
  isBig,
  dependingValue,
  description,
  defaultValue,
}: {
  name: string;
  value: string;
  label: string;
  isCircle?: boolean;
  isBig?: boolean;
  dependingValue?: string;
  description?: string;
  defaultValue?: string;
}) {
  const form = useFormContext();
  const id = useId();

  useEffect(() => {
    if (!dependingValue) return;
    form.setValue(name, null);
  }, [dependingValue]);

  const [checked, setChecked] = useState(defaultValue === value);
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
        checked={checked}
        id={id}
        value={value}
        {...form.register(name)}
      />
      <label
        htmlFor={id}
        className={clsx(
          "cursor-pointer border flex flex-col justify-center items-center  border-solid ",
          isCircle
            ? " w-4 h-4 p-5 rounded-full"
            : isBig
            ? "w-[45%] rounded-[20px] "
            : "rounded-[40px] py-2 px-5",
          checked
            ? isBig
              ? "border-primary border-2"
              : "bg-[#2a50fe] text-white border-[#2a50fe]"
            : "border-black"
        )}
      >
        {isBig ? (
          <div className="relative">
            <img
              src={"/" + value + "-nobg.png"}
              alt={value}
              className="w-full min-h-10 object-cover rounded-[20px]"
            />
            <div className="absolute group right-2 top-2">
              <IoMdInformationCircle className="w-6 h-6 z-20" />
              <div className="opacity-0 hidden group-hover:opacity-100 group-hover:flex transition-all rounded-md bg-white absolute z-10 -left-1 -top-1 min-w-[300px] w-full min-h-24 p-8  flex-col">
                <h1 className="font-bold">Trifaz Bilmemne</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  cursus tellus eu venenatis auctor. In volutpat porta
                  elementum. Phasellus non lorem eget metus sodales pretium.
                  Quisque ultrices velit porttitor sem eleifend facilisis. Nunc
                  fermentum metus vel
                </p>
              </div>
            </div>
          </div>
        ) : (
          <p>{label}</p>
        )}
      </label>
    </>
  );
}
