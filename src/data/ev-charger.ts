const info = {
  description: "Piller Home Charger, bireysel kullanıma yönelik olarak tasarlanmış, AC Tip2 şarj soketine sahip şarj ünitesidir. Ev, iş yerleri, otoparklar, oteller vb. iç ve dış mekanlarda kullanıma uygun şekilde tasarlanmıştır.",
  image: "https://piller.com.tr/wp-content/uploads/2024/05/teknik-bilgi-chart-1-768x641.png",
};

const photos = [
  {
    url: "https://piller.com.tr/wp-content/uploads/2024/04/beyaz-scaled.jpg",
    alt: "ev charger 1",
    color: "#ebebeb",
    order: 1,
  },
  {
    url: "https://piller.com.tr/wp-content/uploads/2024/04/hakiyesil-scaled.jpg",
    alt: "ev charger 2",
    color: "#485e49",
    order: 1,
  },
  {
    url: "https://piller.com.tr/wp-content/uploads/2024/04/haki-istasyon-scaled.jpg",
    alt: "ev charger 3",
    color: "#485e49",
    order: 2,
  },
  {
    url: "https://piller.com.tr/wp-content/uploads/2024/04/kirmizi-scaled.jpg",
    alt: "ev charger 4",
    color: "#993336",
    order: 1,
  },
  {
    url: "https://piller.com.tr/wp-content/uploads/2024/04/kirmizi-istasyon-scaled.jpg",
    alt: "ev charger 5",
    color: "#993336",
    order: 2,
  },
  {
    url: "https://piller.com.tr/wp-content/uploads/2024/04/lacivert-scaled.jpg",
    alt: "ev charger 6",
    color: "#314266",
    order: 1,
  },
  {
    url: "https://piller.com.tr/wp-content/uploads/2024/04/mavi-istasyon-scaled.jpg",
    alt: "ev charger 7",
    color: "#314266",
    order: 2,
  },
  {
    url: "https://piller.com.tr/wp-content/uploads/2024/04/lavanta-scaled.jpg",
    alt: "ev charger 8",
    color: "#546293",
    order: 1,
  },
  {
    url: "https://piller.com.tr/wp-content/uploads/2024/04/mosmor-scaled.jpg",
    alt: "ev charger 9",
    color: "#5f2f61",
    order: 1,
  },
  {
    url: "https://piller.com.tr/wp-content/uploads/2024/04/sari-scaled.jpg",
    alt: "ev charger 10",
    color: "#d0a345",
    order: 1,
  },
  {
    url: "https://piller.com.tr/wp-content/uploads/2024/04/siyah_mat-scaled.jpg",
    alt: "ev charger 11",
    color: "#6d6d6f",
    order: 1,
  },
  {
    url: "https://piller.com.tr/wp-content/uploads/2024/04/siyah-istasyon-scaled.jpg",
    alt: "ev charger 12",
    color: "#6d6d6f",
    order: 2,
  },
  {
    url: "https://piller.com.tr/wp-content/uploads/2024/04/turkuaz-scaled.jpg",
    alt: "ev charger 13",
    color: "#3498a0",
    order: 1,
  },
  {
    url: "https://piller.com.tr/wp-content/uploads/2024/04/zumrutrengi-scaled.jpg",
    alt: "ev charger 14",
    color: "#356162",
    order: 1,
  },
];

export const evCharger = {
  title: "EV Charger",
  photos: photos,
  info: info,
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
      type: "text",
      subType: "color",
      name: "customColor",
      title: "Aracınızın renginde Piller için <b>renk kodu</b> girin.",
      placeholder: "Renk Kodu",
    },
    {
      type: "car-select",
      name: "car",
      title: "Aracınızın <b>modelini</b> seçin?",
    },
  ],
};
