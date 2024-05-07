const info = {
  description:
    "Yalın üretim esas alınarak üretilmiş bu cihaz kolay kullanılması için dizayn edilmiştir. <br><br> Bir şebeke bağlantı panosuna ihtiyaç duyulur ve cihazın güç kapasitesine göre kablolama yapılmalıdır. 22kW’lık modelde şebekeden alınan enerji 50m ye kadar en az 6mm² kablo ile yapılmalıdır. Bu şartlar sağlandıktan sonra enerji panosunda 30mA kesme kapasitesi olan type B ve 40A bir kaçak akım rölesi bulunmalıdır. Bu rölenin çıkışına bağlanan cihaz enerjisini aldıktan sonra şarj soketi öncelikle istasyona ve ardından arabaya takılır. <br><br> RFID’li modellerde bağlantı yapıldıktan sonra RFID kart cihaza okutulup kilit aktivatörünün soketi kilitlemesi ve ardından şarj işleminin başlaması beklenir, bu süreç cihaz üzerindeki LED ışıklardan takip edilebilir. RFID olmayan modellerde şarj kablosu takıldıktan sonra süreç otomatik olarak başlayacaktır.",
  image:
    "https://piller.com.tr/wp-content/uploads/2024/05/teknik-bilgi-chart-1-768x641.png",
};

const photos = [
  {
    url: "https://piller.com.tr/wp-content/uploads/2024/05/istasyon1-2-2.png",
    alt: "station charger 1",
    group: "#ebebeb",
    order: 1,
  },
];

export const stationCharger = {
  title: "Station Charger",
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
      title: "Aracınızın <b>kurulacağı alanı</b> seçiniz.",
      options: [
        { value: "Açık Alan", label: "Açık Alan" },
        { value: "Kapalı Alan", label: "Kapalı Alan" },
      ],
    },
  ],
};
