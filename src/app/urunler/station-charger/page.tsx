"use client";
import HStack from "@/components/layouts/h-stack";
import ProductDescription from "@/components/product-description";
import ProductForm from "@/components/product-form";
import ProductPhotoCard from "@/components/product-form/components/product-photo-card";
import ProductSpecifications from "@/components/product-form/components/product-specifications";
import { stationCharger } from "@/data/station-charger";

export default function stationChargerPage() {
  const defaultValues = stationCharger.specs.reduce(
    (acc, spec) => {
      return { ...acc, [spec.name]: spec.default || "" };
    },
    { email: "" }
  );

  return (
    <>
      <ProductForm defaultValues={{ defaultValues, color: "#ebebeb" }}>
        <HStack className="justify-center gap-[120px]">
          <div className="w-1/2 flex justify-end items-center ">
            <ProductPhotoCard photos={stationCharger.photos} alt="ev charger" />
          </div>
          <div className="w-1/2">
            <ProductSpecifications
              title={stationCharger.title}
              specs={stationCharger.specs}
            />
          </div>
        </HStack>
      </ProductForm>

      <div className="flex justify-center">
        <ProductDescription info={stationCharger.info} className="" />
      </div>
    </>
  );
}
