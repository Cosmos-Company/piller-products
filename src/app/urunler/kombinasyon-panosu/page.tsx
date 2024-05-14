"use client";
import ProductForm from "@/components/product-form";
import ProductPhotoCard from "@/components/product-form/components/product-photo-card";
import ProductSpecifications from "@/components/product-form/components/product-specifications";
import { pano } from "@/data/kombinasyon-pano";
import { z } from "zod";

export default function KombinasyonPanosu() {
  const defaultValues = pano.specs.reduce(
    (acc, spec) => {
      return { ...acc, [spec.name]: spec.default || "" };
    },
    { email: "" }
  );
  const required = {
    required_error: "Bu alan gereklidir",
    invalid_type_error: "Bu alan gereklidir",
  };
  const schema = z.object({
    faze: z.string(required),
    schuko: z.string(required),
    "schuko-adet": z.number(required).optional(),
    sigorta: z.string(required),
    email: z.string(required).email(),
  });
  return (
    <ProductForm
      schema={schema}
      defaultValues={{ defaultValues, color: "#ebebeb" }}
    >
      <div className="w-5/6 mx-auto flex justify-center flex-col lg:flex-row  gap-[80px]">
        <div className="w-full flex justify-center items-stretch ">
          <ProductPhotoCard
            photos={pano.photos}
            alt="ev charger"
            filterInputName="faze"
            hasBackground
          />
        </div>
        <div className="w-full">
          <ProductSpecifications title={pano.title} specs={pano.specs} />
        </div>
      </div>
    </ProductForm>
  );
}
