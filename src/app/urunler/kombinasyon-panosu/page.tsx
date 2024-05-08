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
      <div className="w-5/6 mx-auto flex justify-center gap-[80px]">
        <div className="w-full flex justify-center items-stretch ">
          <ProductPhotoCard
            photos={pano.photos}
            alt="ev charger"
            hasBackground
          />
        </div>
        <div className="w-full">
          <ProductSpecifications title={pano.title} specs={pano.specs} />
        </div>
      </div>
    </ProductForm>
  );
}
