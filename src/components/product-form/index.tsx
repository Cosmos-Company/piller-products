"use client";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { NextRequest } from "next/server";
import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ZodObject, z } from "zod";

export default function ProductForm({
  schema,
  children,
  defaultValues,
}: {
  schema: any;
  children: ReactNode;
  defaultValues: any;
}) {
  type Form = z.infer<typeof schema>;
  const form = useForm<Form>({
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
    // const res = await fetch("/api/mail", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    // });

    let formData: any = [];
    for (let property in data) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(data[property]);
      formData.push(encodedKey + "=" + encodedValue);
    }
    formData = formData.join("&");
    // {kw: 7.4,model: 'Tak Çalıştır',color: '#3C2D49',customColor: null,email: 'ercansahin@outlook.com',car: 'Audi e-tron'}
    const res = await fetch(
      "https://piller.com.tr/wp-admin/admin-ajax.php?action=invio_mail",
      {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
      }
    );
    console.log(res);
  };

  return (
    <>
      <FormProvider {...form}>
        <form
          id="product-form"
          className="flex flex-col gap-10   py-24"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          {children}
        </form>
      </FormProvider>
      {/* <DevTool control={form.control} /> */}
    </>
  );
}
