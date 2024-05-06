import clsx from "clsx";
import React, { useEffect, useId, useState } from "react";
import { useFormContext } from "react-hook-form";

export default function ColorButton({
  name,
  backgroundColor,
}: {
  name: string;
  backgroundColor: string;
}) {
  const id = useId();
  const form = useFormContext();

  const [checked, setChecked] = useState(false);

  const watch = form.watch(name);

  useEffect(() => {
    if (watch === backgroundColor) {
      setChecked(true);
    } else {
      setChecked(false);
    }
    form.setValue("customColor", null);
  }, [watch]);
  return (
    <>
      <input
        className="
        w-0 h-0 opacity-0 absolute
      "
        value={backgroundColor}
        type="radio"
        id={id}
        {...form.register("color", {
          required: true,
        })}
      />
      <label
        htmlFor={id}
        style={{ backgroundColor }}
        className={clsx(
          "   w-[30px] h-[30px] cursor-pointer shadow-[inset_0_7px_2.9px_rgba(0,0,0,0.25)] rounded-[50%]",
          checked && "outline-[#2a50fe] outline outline-4"
        )}
      ></label>
    </>
  );
}
