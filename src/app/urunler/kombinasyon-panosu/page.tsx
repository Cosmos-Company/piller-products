"use client";
import ProductDescription from "@/components/product-description";
import ProductForm from "@/components/product-form";
import ProductPhotoCard from "@/components/product-form/components/product-photo-card";
import ProductSpecifications from "@/components/product-form/components/product-specifications";
import { pano } from "@/data/kombinasyon-pano";
import { z } from "zod";

export default function KombinasyonPanosu() {
  const defaultValues = pano.specs.reduce(
    (acc, spec) => {
      return { ...acc, [spec.name]: spec.default || "" };
    },
    { email: "" }
  );
  const required = {
    required_error: "Bu alan gereklidir",
    invalid_type_error: "Bu alan gereklidir",
  };
  const schema = z.object({
    faze: z.string(required),
    schuko: z.string(required),
    "schuko-adet": z.number(required).optional(),
    sigorta: z.string(required),
    email: z.string(required).email(),
  });
  return (
    <>
      <ProductForm
        schema={schema}
        defaultValues={{ defaultValues, color: "#ebebeb" }}
      >
        <div className="w-5/6 mx-auto flex justify-center flex-col lg:flex-row  gap-[80px]">
          <div className="w-full flex justify-center items-stretch ">
            <ProductPhotoCard
              photos={pano.photos}
              alt="ev charger"
              filterInputName="faze"
              hasBackground
            />
          </div>
          <div className="w-full">
            <ProductSpecifications title={pano.title} specs={pano.specs} />
          </div>
        </div>
      </ProductForm>
      <ProductDescription>
        <div className="flex flex-col gap-8">
          <div className="flex gap-6">
            <img
              src="/images/pano/pano2.png"
              className="w-60 object-contain"
              alt="pano"
            />
            <p>
              Kombinasyon Panosu 1 adet 32A CEE (Monofaze) priz ve istege bagli
              (1 ya da 2 adet) 1x16A Ev Tipi Priz
              <ul className="list-disc ml-8">
                <li>Sigortalari içerisinde</li>
                <li>IP67 kombinasyon kutusu su gecirmezligi</li>
                <li>1 adet artik akim korumall 1P 40A kaçak akim rölesi</li>
                <li>istege bagli 1 adet 40A sigorta</li>
              </ul>
            </p>
          </div>
          <div className="flex gap-6">
            <img
              src="/images/pano/pano1.png"
              className="w-60 object-contain"
              alt="pano"
            />
            <p>
              Kombinasyon Panosu 1 adet 32A CEE (Trifaze) priz ve istege bagli
              (1 ya da 2 adet) 1x16A Ev Tipi Priz
              <ul className="list-disc ml-8">
                <li>Sigortalari içerisinde</li>
                <li>IP67 kombinasyon kutusu su gecirmezligi</li>
                <li>1 adet artik akim korumalı 3P 40A kaçak akim rölesi</li>
                <li>istege bagli 1 adet 40A sigorta</li>
              </ul>
            </p>
          </div>
        </div>
      </ProductDescription>
    </>
  );
}
