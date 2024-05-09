import { Spec } from "@/types/spec";

const photos = [
  {
    url: "/images/kablo/kablo1.png",
    alt: "ev charger 1",
    group: "kirmizi-siyah",
    id: 1,
    order: 1,
  },
  {
    url: "/images/kablo/kablo2.png",
    alt: "ev charger 1",
    group: "#ebebeb",
    id: 2,
    order: 2,
  },
  {
    url: "/images/kablo/kablo3.png",
    alt: "ev charger 1",
    group: "kirmizi-mavi",
    id: 3,
    order: 3,
  },
  {
    url: "/images/kablo/kablo4.png",
    alt: "ev charger 1",
    group: "#ebebeb",
    id: 4,
    order: 4,
  },
  {
    url: "/images/kablo/kablo5.png",
    alt: "ev charger 1",
    group: "mavi-siyah",
    id: 5,
    order: 5,
  },
  {
    url: "/images/kablo/kablo6.png",
    alt: "ev charger 1",
    group: "#ebebeb",
    id: 6,
    order: 6,
  },
  {
    url: "/images/kablo/kablo7.png",
    alt: "ev charger 1",
    group: "#ebebeb",
    id: 7,
    order: 7,
  },
];

export const kablo = {
  title: "Kablo",
  photos: photos,
  specs: [
    {
      type: "radio",
      subType: "circle",
      name: "uzunluk",
      title: "İhtiyacınıza en uygun olan <b>kablo uzunluğu</b> nedir?",
      options: [
        { value: "5", label: "5" },
        { value: "7,5", label: "7,5" },
        { value: "10", label: "10" },
        { value: "15", label: "15" },
      ],
    },
    {
      type: "radio",
      name: "ilk-uc",
      title: "Birinci ucu seçiniz?",
      subType: "",
      options: [
        { value: "kirmizi", label: "Kırmızı" },
        { value: "mavi", label: "Mavi" },
      ],
    },
    {
      type: "radio",
      name: "ikinci-uc",
      title: "İkinci ucu seçiniz?",
      subType: "",
      dependsOn: "ilk-uc",
      options: [
        {
          value: "kirmizi-mavi",
          label: "Mavi",
          dependsOnValue: "kirmizi",
          description: "Trifaz deger",
        },
        { value: "kirmizi-siyah", label: "Siyah", dependsOnValue: "kirmizi" },
        { value: "mavi-siyah", label: "Siyah", dependsOnValue: "mavi" },
      ],
    },
  ] as Spec[],
};
