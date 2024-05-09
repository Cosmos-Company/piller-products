"use client";
import clsx from "clsx";
import { useEffect, useId, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import { IoMdInformationCircle } from "react-icons/io";
import QuantityButton from "./quantity-button";

export default function RadioButton({
  name,
  value,
  label,
  isCircle,
  isQuantity,
  dependingValue,
  ...rest
}: {
  name: string;
  value: string;
  label: string;
  isCircle?: boolean;
  isQuantity?: boolean;
  dependingValue?: string;
  description?: string;
  [key: string]: any;
}) {
  const form = useFormContext();
  const id = useId();
  const labelRef = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    if (!dependingValue) return;
    form.setValue(name, null);
  }, [dependingValue]);

  if (isQuantity) return <QuantityButton />;

  return (
    <div className="flex">
      <input
        className="peer w-0 h-0 invisible"
        type="radio"
        id={id}
        {...rest}
        value={value}
      />
      <label
        htmlFor={id}
        ref={labelRef}
        className={clsx(
          "cursor-pointer border flex flex-col justify-center items-center  border-solid peer-checked:bg-[#2a50fe] peer-checked:text-white peer-checked:border-[#2a50fe] border-black",
          isCircle ? " w-4 h-4 p-5 rounded-full" : "rounded-[40px] py-2 px-5",
          isQuantity && "w-16 h-16"
        )}
      >
        <p>{label}</p>
      </label>
    </div>
  );
}
