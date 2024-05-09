import clsx from "clsx";
import { useId } from "react";

export default function ColorButton({
  backgroundColor,
  ...rest
}: {
  backgroundColor: string;
  [key: string]: any;
}) {
  const id = useId();

  return (
    <div className="flex ">
      <input
        className="peer w-0 h-0 opacity-0 absolute"
        value={backgroundColor}
        type="radio"
        id={id}
        {...rest}
      />
      <label
        htmlFor={id}
        style={{ backgroundColor }}
        className={clsx(
          "   w-[30px] h-[30px] cursor-pointer shadow-[inset_0_7px_2.9px_rgba(0,0,0,0.25)] rounded-[50%] peer-checked:outline-[#2a50fe] peer-checked:outline peer-checked:outline-4"
        )}
      ></label>
    </div>
  );
}
