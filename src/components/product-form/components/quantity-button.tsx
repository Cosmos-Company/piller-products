"use client";
import React, { useEffect, useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

function QuantityButton({ ...rest }) {
  const [value, setValue] = useState(1);

  const checkValue = (emr_value: number) => {
    setValue((prev) =>
      prev + emr_value >= 1 && prev + emr_value <= 2 ? prev + emr_value : prev
    );
  };
  useEffect(() => {
    rest.onChange(value);
  }, [value]);

  return (
    <div className="flex gap-2">
      <button type="button">
        <CiCircleMinus className=" size-7" onClick={() => checkValue(-1)} />
      </button>
      <input
        className="w-12 text-center pl-2 bg-transparent bg-white border border-gray-300 rounded-md h-10 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
        type="text"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <button type="button">
        <CiCirclePlus className=" size-7" onClick={() => checkValue(1)} />
      </button>
    </div>
  );
}

export default QuantityButton;
