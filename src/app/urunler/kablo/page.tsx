"use client";
import ProductForm from "@/components/product-form";
import ProductPhotoCard from "@/components/product-form/components/product-photo-card";
import ProductSpecifications from "@/components/product-form/components/product-specifications";
import { kablo } from "@/data/kablo";
import { z } from "zod";

export default function Kablo() {
  const defaultValues = kablo.specs.reduce(
    (acc, spec) => {
      return { ...acc, [spec.name]: spec.default || "" };
    },
    { email: "" }
  );

  const schema = z.object({
    uzunluk: z.string(),
    "ikinci-uc": z.string(),
    "ilk-uc": z.string(),
  });

  return (
    <ProductForm
      schema={schema}
      defaultValues={{ defaultValues, color: "#ebebeb" }}
    >
      <div className="w-5/6 mx-auto flex justify-center flex-col lg:flex-row  gap-[80px]">
        <div className="w-full flex justify-center items-stretch ">
          <ProductPhotoCard
            photos={kablo.photos}
            alt="ev charger"
            hasBackground
            filterInputName="ikinci-uc"
          />
        </div>
        <div className="w-full">
          <ProductSpecifications title={kablo.title} specs={kablo.specs} />
        </div>
      </div>
    </ProductForm>
  );
}
