const photos = [
  {
    url: "https://piller.com.tr/wp-content/uploads/2024/05/istasyon1-2-2.png",
    alt: "station charger 1",
    color: "#ebebeb",
    order: 1,
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
      title: "Arabanıza en uygun olan <b>kW</b> değeri nedir?",
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
      title: "Size en uygun olan <b>model</b> hangisi?",
      options: [
        { value: "Tak Çalıştır", label: "Tak Çalıştır" },
        { value: "RFID + Kilit Aktivatörü", label: "RFID + Kilit Aktivatörü" },
      ],
    },
    {
      type: "color",
      name: "color",
      title: "Favori <b>renginizi</b> seçin?",
      options: [
        { value: "#ebebeb", label: "Beyaz" },
        { value: "#485e49", label: "Haki Yeşil" },
        { value: "#993336", label: "Kırmızı" },
        { value: "#314266", label: "Lacivert" },
        { value: "#546293", label: "Lavanta" },
        { value: "#5f2f61", label: "Mor" },
        { value: "#d0a345", label: "Sarı" },
        { value: "#6d6d6f", label: "Siyah" },
        { value: "#3498a0", label: "Turkuaz" },
        { value: "#356162", label: "Zümrüt" },
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
      title: "Aracınızın <b>kurulacağı alanı</b> seçiniz.",
      options: [
        { value: "Açık Alan", label: "Açık Alan" },
        { value: "Kapalı Alan", label: "Kapalı Alan" },
      ],
    },
  ],
};
