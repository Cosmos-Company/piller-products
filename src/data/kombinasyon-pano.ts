const photos = [
  {
    url: "/monofaze.png",
    alt: "monofaze",
    group: "monofaze",
    order: 1,
    id: 1,
  },
  {
    url: "/trifaze.png",
    alt: "trifaze",
    group: "trifaze",
    order: 2,
    id: 2,
  },
  {
    url: "https://piller.com.tr/wp-content/uploads/2024/04/beyaz-scaled.jpg",
    alt: "ev charger 1",
    group: "#ebebeb",
    order: 3,
    id: 3,
  },
  {
    url: "https://piller.com.tr/wp-content/uploads/2024/04/beyaz-scaled.jpg",
    alt: "ev charger 1",
    group: "#ebebeb",
    order: 4,
    id: 4,
  },
];

export const pano = {
  title: "Kombinasyon Panosu",
  photos: photos,
  specs: [
    {
      type: "radio",
      name: "faze",
      title: "İhtiyacınıza en uygun <b>faz</b> nedir?",
      default: "monofaze",
      options: [
        { value: "monofaze", label: "Monofaze" },
        { value: "trifaze", label: "Trifaze" },
      ],
    },
    {
      type: "radio",
      name: "schuko",
      title: "Schuko olsun mu?",
      subType: "model",
      options: [
        { value: "schuko-yes", label: "Evet" },
        { value: "schuko-no", label: "Hayır" },
      ],
    },
    {
      type: "radio",
      subType: "quantity",
      name: "schuko-adet",
      title: "Adet",
      dependsOn: "schuko",
      options: [
        { value: "1-adet", label: "1 Adet", dependsOnValue: "schuko-yes" },
      ],
    },
    {
      type: "radio",
      name: "sigorta",
      title: "40A Sigorta olsun mu?",
      subType: "model",
      options: [
        { value: "sigorta-yes", label: "Evet" },
        { value: "sigorta-no", label: "Hayır" },
      ],
    },
  ],
};
