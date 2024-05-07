"use client";
import ProductForm from "@/components/product-form";
import PanoPhoto from "@/components/product-form/components/pano-photo";
import ProductPhotoCard from "@/components/product-form/components/product-photo-card";
import ProductSpecifications from "@/components/product-form/components/product-specifications";
import QuantityButton from "@/components/product-form/components/quantity-button";
import { pano } from "@/data/kombinasyon-pano";

export default function KombinasyonPanosu() {
  const defaultValues = pano.specs.reduce(
    (acc, spec) => {
      return { ...acc, [spec.name]: spec.default || "" };
    },
    { email: "" }
  );

  return (
    <ProductForm defaultValues={{ defaultValues, color: "#ebebeb" }}>
      <div className="w-full flex justify-center gap-[120px]">
        <div className="w-1/2 flex justify-end items-center ">
          <ProductPhotoCard
            filterInputName="faze"
            hasBackground
            photos={pano.photos}
            alt="ev charger"
          />
        </div>
        <div className="w-1/3">
          <ProductSpecifications title={pano.title} specs={pano.specs} />
        </div>
      </div>
      <QuantityButton />
    </ProductForm>
  );
}
