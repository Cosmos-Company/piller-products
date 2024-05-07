import ProductList from "@/components/product-list";
import { products } from "@/data/products";
import Link from "next/link";
import React from "react";

export default function ProducstPage() {
  return (
    <div className="">
      <ProductList products={products} />
    </div>
  );
}
