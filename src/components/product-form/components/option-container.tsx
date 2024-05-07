import { cn } from "@/utils/class-helper";
import React, { ReactNode } from "react";

export default function OptionContainer({
  children,
  title,
  id,
}: {
  children?: ReactNode;
  title?: string;
  id: string;
}) {
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
    </div>
  );
}
