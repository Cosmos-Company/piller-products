"use client";
import { DevTool } from "@hookform/devtools";
import { NextRequest } from "next/server";
import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";

export default function ProductForm({
  children,
  defaultValues,
}: {
  children: ReactNode;
  defaultValues: any;
}) {
  const form = useForm({
    defaultValues,
  });

  return (
    <>
      <FormProvider {...form}>
        <form className="flex flex-col gap-10 h-screen  py-24">{children}</form>
      </FormProvider>
      <DevTool control={form.control} /> {/* set up the dev tool */}
    </>
  );
}
