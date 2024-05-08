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
      <div className="w-5/6 mx-auto flex justify-center gap-[120px]">
        <div className="w-full flex justify-center items-stretch ">
          <ProductPhotoCard
            photos={kablo.photos}
            alt="ev charger"
            hasBackground
          />
        </div>
        <div className="w-full">
          <ProductSpecifications title={kablo.title} specs={kablo.specs} />
        </div>
      </div>
    </ProductForm>
  );
}
