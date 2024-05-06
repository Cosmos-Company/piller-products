import React, { ReactNode } from "react";

export default function OptionContainer({
  children,
  title,
  id,
}: {
  children?: ReactNode;
  title: string;
  id: string;
}) {
  return (
    <div className="flex flex-col gap-2.5" id={id}>
      <p
        dangerouslySetInnerHTML={{
          __html: title,
        }}
      ></p>
      {children}
    </div>
  );
}
