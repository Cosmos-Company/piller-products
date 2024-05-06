import React, { ReactNode } from "react";

export default function OptionContainer({
  children,
  title,
}: {
  children?: ReactNode;
  title: string;
}) {
  return (
    <div className="flex flex-col gap-2.5">
      <p
        dangerouslySetInnerHTML={{
          __html: title,
        }}
      ></p>
      {children}
    </div>
  );
}
