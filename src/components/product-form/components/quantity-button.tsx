import React, { useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

function QuantityButton() {
  const [value, setValue] = useState(1);
  return (
    <div className="flex gap-4">
      <button onClick>
        <CiCirclePlus />
      </button>
      <input
        min={1}
        max={2}
        heigh
        type="number"
        value={value}
        disabled
        onChange={(e) => setValue(e.target.value)}
      />
      <button>
        <CiCircleMinus />
      </button>
    </div>
  );
}

export default QuantityButton;
