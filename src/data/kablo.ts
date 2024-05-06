const photos = [
  {
    url: "https://piller.com.tr/wp-content/uploads/2024/04/beyaz-scaled.jpg",
    alt: "ev charger 1",
    color: "#ebebeb",
    order: 1,
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
      subType: "big",
      options: [
        { value: "Kırmızı", label: "Kırmızı" },
        { value: "Mavi", label: "Mavi" },
      ],
    },
    {
      type: "radio",
      name: "ikinci-uc",
      title: "İkinci ucu seçiniz?",
      subType: "big",
      dependsOn: "ilk-uc",
      options: [
        {
          value: "Mavi",
          label: "Mavi",
          dependsOnValue: "Kırmızı",
          description: "Trifaz deger",
        },
        { value: "Siyah", label: "Siyah", dependsOnValue: "Kırmızı" },
        { value: "Siyah", label: "Siyah", dependsOnValue: "Mavi" },
      ],
    },
  ],
};
