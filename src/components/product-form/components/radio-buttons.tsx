"use client";
import React from "react";

export default function RadioButtons({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-row gap-2.5 flex-wrap ">{children}</div>;
}
