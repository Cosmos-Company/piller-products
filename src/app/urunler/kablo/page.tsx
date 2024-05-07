"use client";
import HStack from "@/components/layouts/h-stack";
import ProductDescription from "@/components/product-description";
import ProductForm from "@/components/product-form";
import KabloPhoto from "@/components/product-form/components/kablo-photo";
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
      <HStack>
        <KabloPhoto />
        <ProductSpecifications title={kablo.title} specs={kablo.specs} />
      </HStack>
    </ProductForm>
  );
}
