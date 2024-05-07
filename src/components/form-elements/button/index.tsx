import React, { ReactNode } from "react";

export default function Button({
  children,
  ...rest
}: {
  children: ReactNode;
  [x: string]: any;
}) {
  return (
    <button
      type="submit"
      className="border bg-[#2a50fe]  w-[230px] text-[white] cursor-pointer text-xl px-[25px] py-2 rounded-[40px] border-solid border-[#2a50fe]    "
      {...rest}
    >
      {children}
    </button>
  );
}
