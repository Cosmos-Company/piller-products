import { Product } from "@/types/product";
import React from "react";
import ProductCard from "../product-card";

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="container px-36 gap-5 grid grid-cols-2 grid-rows-2">
      {products.map((product) => (
        <ProductCard
          small={product.small ? true : false}
          key={product.slug}
          {...product}
        />
      ))}
    </div>
  );
}
