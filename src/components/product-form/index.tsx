"use client";
import React, { ReactNode } from "react";
import ProductFooter from "./components/product-footer";
import { FormProvider, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

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

  const onSubmit = (data: any) => {
    alert("Form submitted");
    console.log(data);
  };
  return (
    <>
      <FormProvider {...form}>
        <form
          className="flex flex-col gap-10"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          {children}
        </form>
      </FormProvider>
      <DevTool control={form.control} /> {/* set up the dev tool */}
    </>
  );
}
