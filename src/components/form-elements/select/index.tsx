import React, { forwardRef } from "react";
import { FaChevronDown } from "react-icons/fa";

const Select = forwardRef<
  HTMLSelectElement,
  React.HTMLProps<HTMLSelectElement> & { children: React.ReactNode }
>(({ children, ...rest }, ref) => {
  return (
    <div className="relative focus-within:outline-primary focus-within:outline focus-within:border-0 flex items-center w-[230px] gap-2.5 border max-h-[60px] px-2.5 py-0 rounded-[40px] border-solid border-black">
      <select
        ref={ref}
        className="appearance-none outline-none h-full bg-transparent grow w-full flex items-center z-10 px-0 py-2 rounded-[40px]"
        {...rest}
      >
        {children}
      </select>
      <FaChevronDown className=" absolute right-4 -z-10" />
    </div>
  );
});
Select.displayName = "Select";
export default Select;
