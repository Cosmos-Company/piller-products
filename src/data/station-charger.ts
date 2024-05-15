import { Spec } from "@/types/spec";

const photos = [
  {
    url: "/images/istasyon/buyukistasyon.png",
    alt: "station charger 1",
    group: "#ebebeb",
    order: 1,
    id: 1,
  },
];

export const stationCharger = {
  title: "Station Charger",
  photos: photos,
  specs: [
    {
      type: "radio",
      subType: "circle",
      name: "kw",
      title: "Arabanıza en uygun olan <b>kW</b> değerini seçin.",
      options: [
        { value: "22", label: "22" },
        { value: "11", label: "11" },
        { value: "7.4", label: "7,4" },
        { value: "3.5", label: "3,5" },
      ],
    },
    {
      type: "radio",
      name: "model",
      title: "Size en uygun olan <b>modeli</b> seçin.",
      default: "RFID + Kilit Aktivatörü",
      options: [
        { value: "RFID + Kilit Aktivatörü", label: "RFID + Kilit Aktivatörü" },
      ],
    },
    {
      type: "car-select",
      name: "car",
      title: "Aracınızın <b>modelini</b> seçin?",
    },
    {
      type: "radio",
      name: "area",
      title: "Aracınızın <b>kurulacağı alanı</b> seçin.",
      options: [
        { value: "Açık Alan", label: "Açık Alan" },
        { value: "Kapalı Alan", label: "Kapalı Alan" },
      ],
    },
  ] as Spec[],
};
