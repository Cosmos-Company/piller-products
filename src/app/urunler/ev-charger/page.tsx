"use client";
import ProductDescription from "@/components/product-description";
import ProductForm from "@/components/product-form";
import ProductPhotoCard from "@/components/product-form/components/product-photo-card";
import ProductSpecifications from "@/components/product-form/components/product-specifications";
import { evCharger } from "@/data/ev-charger";
import { z } from "zod";

export default function EVChargerPage() {
  const defaultValues = evCharger.specs.reduce(
    (acc, spec) => {
      return { ...acc, [spec.name]: spec.default || "" };
    },
    { email: "" }
  );

  console.log(defaultValues);
  const required = {
    required_error: "Bu alan gereklidir",
    invalid_type_error: "Bu alan gereklidir",
  };
  const schema = z
    .object({
      kw: z.coerce.number(required).int().positive(),
      model: z.string(required),
      color: z.string().optional().nullable(),
      customColor: z.string().optional().nullable(),
      car: z.string(required).optional().nullable(),
      customCar: z.string(required).optional().nullable(),
    })
    .refine((data) => !!data.color || !!data.customColor, {
      message: "customColor is required when color is not selected",
    })
    .refine((data) => data.car !== "diger" || !!data.customCar, {
      message: "customCar is required when car is 'diger'",
    });

  return (
    <>
      <ProductForm
        schema={schema}
        defaultValues={{ defaultValues, color: "#ebebeb" }}
      >
        <div className="w-5/6 mx-auto flex justify-center gap-[80px]">
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

      <div className="flex justify-center">
        <ProductDescription info={evCharger.info} className="" />
      </div>
    </>
  );
}
