"use client";
import ProductForm from "@/components/product-form";
import KabloPhoto from "@/components/product-form/components/kablo-photo";
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
    <ProductForm defaultValues={{ defaultValues, color: "#ebebeb" }}>
      <div className="flex gap-[120px] w-2/3 mx-auto">
        <div className="w-1/2 flex justify-end items-center ">
          <ProductPhotoCard
            photos={kablo.photos}
            alt="ev charger"
            hasBackground
          />
        </div>
        <div className="w-1/3">
          <ProductSpecifications title={kablo.title} specs={kablo.specs} />
        </div>
      </div>
    </ProductForm>
  );
}
