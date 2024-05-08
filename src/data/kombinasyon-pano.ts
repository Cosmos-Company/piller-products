const photos = [
  {
    url: "/images/pano/pano1.png",
    alt: "monofaze",
    group: "monofaze",
    order: 1,
    id: 1,
  },
  {
    url: "/images/pano/pano2.png",
    alt: "trifaze",
    group: "trifaze",
    order: 2,
    id: 2,
  },
  {
    url: "/images/pano/pano3.png",
    alt: "schuko-yes",
    group: "schuko-yes",
    order: 1,
    id: 3,
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
