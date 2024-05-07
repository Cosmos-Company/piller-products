"use client";
import HStack from "@/components/layouts/h-stack";
import ProductDescription from "@/components/product-description";
import ProductForm from "@/components/product-form";
import KabloPhoto from "@/components/product-form/components/kablo-photo";
import ProductFooter from "@/components/product-form/components/product-footer";
import ProductPhotoCard from "@/components/product-form/components/product-photo-card";
import ProductSpecifications from "@/components/product-form/components/product-specifications";
import { kablo } from "@/data/kablo";

export default function Kablo() {
  const defaultValues = kablo.specs.reduce(
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
            <ProductPhotoCard photos={kablo.photos} alt="ev charger" />
          </div>
          <div className="w-1/2">
            <ProductSpecifications title={kablo.title} specs={kablo.specs} />
          </div>
        </HStack>
      </ProductForm>

      <div className="flex justify-center">
        <ProductDescription info={kablo.info} className="" />
      </div>
    </>
  );
}
