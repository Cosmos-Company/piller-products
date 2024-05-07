import clsx from "clsx";
import React from "react";

export default function HStack({
  className,
  children,
  ...rest
}: {
  className?: string;
  children: React.ReactNode;
  [x: string]: any;
}) {
  return (
    <div className={clsx("w-full flex ", className)} {...rest}>
      {children}
    </div>
  );
}
