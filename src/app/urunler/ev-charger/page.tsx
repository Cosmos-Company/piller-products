"use client";
import ProductDescription from "@/components/product-description";
import ProductForm from "@/components/product-form";
import ProductPhotoCard from "@/components/product-form/components/product-photo-card";
import ProductSpecifications from "@/components/product-form/components/product-specifications";
import { evCharger } from "@/data/ev-charger";
import { ZodType, z } from "zod";

export default function EVChargerPage() {
  const defaultValues = evCharger.specs.reduce(
    (acc, spec) => {
      return { ...acc, [spec.name]: spec.default || "" };
    },
    { email: "", carCustom: "" }
  );

  console.log(defaultValues);
  const required = {
    required_error: "Bu alan gereklidir",
    invalid_type_error: "Bu alan gereklidir",
  };

  const schema = z
    .object({
      kw: z.coerce.number(required).positive(),
      model: z.string(required),
      color: z.string().optional().nullable(),
      customColor: z.string().optional().nullable(),
      email: z.string(required).email(),
      car: z.string(required),
      carCustom: z.string(required).optional(),
    })
    .refine((data) => !!data.color || !!data.customColor, {
      message: "Renk ya da renk kodu zorunludur",
    });

  return (
    <>
      <ProductForm
        schema={schema}
        defaultValues={{ defaultValues, color: "#ebebeb" }}
      >
        <div className="w-5/6 mx-auto flex flex-col lg:flex-row justify-center gap-[80px]">
          <div className="w-full flex justify-center items-stretch ">
            <ProductPhotoCard
              filterInputName="color"
              photos={evCharger.photos}
              alt="ev charger"
            />
          </div>
          <div className="w-full">
            <ProductSpecifications
              title={evCharger.title}
              specs={evCharger.specs}
            />
          </div>
        </div>
      </ProductForm>

      <div className="flex  justify-center">
        <ProductDescription info={evCharger.info} className="" />
      </div>
    </>
  );
}
