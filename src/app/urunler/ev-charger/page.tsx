"use client";
import ProductDescription from "@/components/product-description";
import ProductForm from "@/components/product-form";
import ProductPhotoCard from "@/components/product-form/components/product-photo-card";
import ProductSpecifications from "@/components/product-form/components/product-specifications";
import { evCharger } from "@/data/ev-charger";

export default function EVChargerPage() {
  const defaultValues = evCharger.specs.reduce(
    (acc, spec) => {
      return { ...acc, [spec.name]: spec.default || "" };
    },
    { email: "" }
  );

  return (
    <>
      <ProductForm defaultValues={{ defaultValues, color: "#ebebeb" }}>
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
