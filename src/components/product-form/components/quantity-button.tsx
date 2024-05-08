"use client";
import React, { useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

function QuantityButton() {
  const [value, setValue] = useState(1);

  const checkValue = (emr_value: number) => {
    setValue(prev => prev + emr_value >= 1 && prev + emr_value <= 2 ? prev + emr_value : prev);

  }

  return (
    <div className="flex gap-6">
      <button type="button"  >
        <CiCircleMinus className=" size-7" onClick={() => checkValue(- 1)} />
      </button>
      <input
        className="w-16 text-center pl-2"
        min={1}
        max={2}
        type="number"
        value={value}
        disabled
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="button" >
        <CiCirclePlus className=" size-7" onClick={() => checkValue(1)} />
      </button>
    </div>
  );
}

export default QuantityButton;
