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

  const onSubmit = async (req: NextRequest, data: any) => {
    delete data.defaultValues;
    const res = await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(req),
    });
    alert("Teklif isteğiniz alınmıştır. En kısa sürede dönüş yapılacaktır.");
    console.log(res);
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
