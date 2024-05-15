"use client";
import ProductDescription from "@/components/product-description";
import ProductForm from "@/components/product-form";
import ProductPhotoCard from "@/components/product-form/components/product-photo-card";
import ProductSpecifications from "@/components/product-form/components/product-specifications";
import { stationCharger } from "@/data/station-charger";
import { z } from "zod";

export default function stationChargerPage() {
  const defaultValues = stationCharger.specs.reduce(
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
    model: z.string(required).default("RFID + Kilit Aktivatörü"),
    car: z.string(required),
    area: z.string(required),
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
              photos={stationCharger.photos}
              alt="ev charger"
              hasBackground
            />
          </div>
          <div className="w-full">
            <ProductSpecifications
              title={stationCharger.title}
              specs={stationCharger.specs}
            />
          </div>
        </div>
      </ProductForm>

      <div className="flex justify-center">
        <ProductDescription>
          <p>
            Yalın üretim esas alınarak üretilmiş bu cihaz kolay kullanılması
            için dizayn edilmiştir. <br />
            Bir şebeke bağlantı panosuna ihtiyaç duyulur ve cihazın güç
            kapasitesine göre kablolama yapılmalıdır. 22kW’lık modelde şebekeden
            alınan enerji 50m ye kadar en az 6mm² kablo ile yapılmalıdır. Bu
            şartlar sağlandıktan sonra enerji panosunda 30mA kesme kapasitesi
            olan type B ve 40A bir kaçak akım rölesi bulunmalıdır. Bu rölenin
            çıkışına bağlanan cihaz enerjisini aldıktan sonra şarj soketi
            öncelikle istasyona ve ardından arabaya takılır. <br /> RFID’li
            modellerde bağlantı yapıldıktan sonra RFID kart cihaza okutulup
            kilit aktivatörünün soketi kilitlemesi ve ardından şarj işleminin
            başlaması beklenir, bu süreç cihaz üzerindeki LED ışıklardan takip
            edilebilir. RFID olmayan modellerde şarj kablosu takıldıktan sonra
            süreç otomatik olarak başlayacaktır.
          </p>
          <img
            className=" min-w-full"
            src="https://piller.com.tr/wp-content/uploads/2024/05/teknik-bilgi-chart-1-768x641.png"
          />
        </ProductDescription>
      </div>
    </>
  );
}
