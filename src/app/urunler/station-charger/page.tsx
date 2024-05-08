"use client";
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
        <div className="w-5/6 mx-auto flex justify-center gap-[120px]">
          <div className="w-full flex justify-center items-stretch ">
            <ProductPhotoCard
              photos={stationCharger.photos}
              alt="ev charger"
              hasBackground
            />
          </div>
          <div className="w-full">
            <ProductSpecifications
              title={stationCharger.title}
              specs={stationCharger.specs}
            />
          </div>
        </div>
      </ProductForm>

      <div className="flex justify-center">
        <ProductDescription info={stationCharger.info} className="" />
      </div>
    </>
  );
}
