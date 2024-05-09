"use client";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { NextRequest } from "next/server";
import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ZodObject } from "zod";

export default function ProductForm({
  schema,
  children,
  defaultValues,
}: {
  schema: any;
  children: ReactNode;
  defaultValues: any;
}) {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues,
    shouldUseNativeValidation: true,
  });

  const onSubmit = async (data: any) => {
    console.log(data.email);
    if (!data.email) {
      alert("Lütfen geçerli bir email adresi giriniz.");
      return;
    }
    alert("Teklif isteğiniz alınmıştır. En kısa sürede dönüş yapılacaktır.");

    delete data.defaultValues;
    const res = await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(data),
    });
    console.log(res);
  };

  return (
    <>
      <FormProvider {...form}>
        <form
          id="product-form"
          className="flex flex-col gap-10 h-screen  py-24"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          {JSON.stringify(form.formState.errors)}

          {children}
        </form>
      </FormProvider>
      <DevTool control={form.control} /> {/* set up the dev tool */}
    </>
  );
}
