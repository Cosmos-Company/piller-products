import { cn } from "@/utils/class-helper";
import React, { ReactNode } from "react";
import { useFormContext } from "react-hook-form";

export default function OptionContainer({
  children,
  title,
  id,
  name,
}: {
  children?: ReactNode;
  title?: string;
  id: string;
  name: string;
}) {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <div
      className={cn(
        "flex flex-col gap-2.5 transition-all",
        title ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
      )}
      id={id}
    >
      {title && (
        <p
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        ></p>
      )}
      {children}
      {errors?.[name] && (
        <span className="text-red-500 text-sm font-semibold">
          {errors?.[name]?.message as string}
        </span>
      )}
    </div>
  );
}
