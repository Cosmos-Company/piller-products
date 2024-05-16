"use client";
import ProductDescription from "@/components/product-description";
import ProductForm from "@/components/product-form";
import ProductPhotoCard from "@/components/product-form/components/product-photo-card";
import ProductSpecifications from "@/components/product-form/components/product-specifications";
import { kablo } from "@/data/kablo";
import { z } from "zod";

export default function Kablo() {
  const defaultValues = kablo.specs.reduce(
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
    uzunluk: z.string(required),
    "ikinci-uc": z.string(required),
    "ilk-uc": z.string(required),
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
              photos={kablo.photos}
              alt="ev charger"
              hasBackground
              filterInputName="ikinci-uc"
            />
          </div>
          <div className="w-full">
            <ProductSpecifications title={kablo.title} specs={kablo.specs} />
          </div>
        </div>
      </ProductForm>
      <div className="flex justify-center">
        <ProductDescription>
          <h1 className="font-bold text-xl text-black">TRİFAZE CEE FİŞ</h1>
          <p className="font-semibold">Kırmızı- Siyah Kombinasyon</p>
          <p>
            22 kW elektrikli araç şarj cihazı için 32A CEE (Trifaze) kırmızı
            fişi 16A ev tipi fişe dönüştürür.
          </p>
          <b>Kırmızı- Mavi Kombinasyon</b>
          <p>
            22 kW elektrikli araç şarj cihazı için 32A CEE (Monofaze) kırmızı
            fişi 32A ev tipi fişe dönüştürür.
          </p>

          <h1 className="font-bold text-xl mt-8 text-black">
            MONOFAZE CEE FİŞ
          </h1>
          <b>Mavi- Siyah Kombinasyon</b>
          <p>
            7.4 kW elektrikli araç şarj cihazı için 32A CEE (Monofaze) mavi fişi
            16A ev tipi fişe dönüştürür.
          </p>
        </ProductDescription>
      </div>
    </>
  );
}
