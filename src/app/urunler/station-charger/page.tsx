"use client";
import HStack from "@/components/layouts/h-stack";
import ProductForm from "@/components/product-form";
import ProductFooter from "@/components/product-form/components/product-footer";
import ProductPhotoCard from "@/components/product-form/components/product-photo-card";
import ProductSpecifications from "@/components/product-form/components/product-specifications";
import { stationCharger } from "@/data/station-charger";

export default function StationCharger() {
  const defaultValues = stationCharger.specs.reduce(
    (acc, spec) => {
      return { ...acc, [spec.name]: "" };
    },
    { email: "" }
  );
  console.log(stationCharger.photos[0].url);
  return (
    <ProductForm defaultValues={{ defaultValues, color: "#ebebeb" }}>
      <HStack>
        <ProductPhotoCard
          photos={stationCharger.photos}
          alt="station charger"
        />
        <ProductSpecifications
          title={stationCharger.title}
          specs={stationCharger.specs}
        />
      </HStack>
      <ProductFooter />
    </ProductForm>
  );
}
