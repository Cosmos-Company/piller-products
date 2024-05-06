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
      return { ...acc, [spec.name]: "" };
    },
    { email: "" }
  );

  return (
    <ProductForm defaultValues={{ defaultValues, color: "#ebebeb" }}>
      <HStack>
        <ProductPhotoCard photos={evCharger.photos} alt="ev charger" />
        <ProductSpecifications
          title={evCharger.title}
          specs={evCharger.specs}
        />
      </HStack>
      <ProductFooter />
      <div className="flex justify-center">
        <ProductDescription info={evCharger.info} className="" />
      </div>
    </ProductForm>
  );
}
