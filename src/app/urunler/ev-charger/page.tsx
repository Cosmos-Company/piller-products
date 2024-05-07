"use client";
import HStack from "@/components/layouts/h-stack";
import ProductDescription from "@/components/product-description";
import ProductForm from "@/components/product-form";
import ProductFooter from "@/components/product-form/components/product-footer";
import ProductPhotoCard from "@/components/product-form/components/product-photo-card";
import ProductSpecifications from "@/components/product-form/components/product-specifications";
import { evCharger } from "@/data/ev-charger";
import React, { useState } from "react";

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
        <HStack className="justify-center gap-[120px]">
          <div className="w-1/2 flex justify-end items-center ">
            <ProductPhotoCard photos={evCharger.photos} alt="ev charger" />
          </div>
          <div className="w-1/3">
            <ProductSpecifications
              title={evCharger.title}
              specs={evCharger.specs}
            />
          </div>
        </HStack>
      </ProductForm>

      <div className="flex justify-center">
        <ProductDescription info={evCharger.info} className="" />
      </div>
    </>
  );
}
