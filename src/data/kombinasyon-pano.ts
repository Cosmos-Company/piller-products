const photos = [
    {
        url: "https://piller.com.tr/wp-content/uploads/2024/04/beyaz-scaled.jpg",
        alt: "ev charger 1",
        color: "#ebebeb",
        order: 1,
    }
];

export const pano = {
    title: "Kombinasyon Panosu",
    photos: photos,
    specs: [
        {
            type: "radio",
            subType: "model",
            name: "uzunluk",
            title: "İhtiyacınıza en uygun <b>trifaz</b> nedir?",
            options: [
                { value: "monofaze", label: "Monofaze" },
                { value: "trifaze", label: "Trifaze" }
            ],
        },
        {
            type: "radio",
            name: "evet",
            title: "Schuko olsun mu?",
            subType: "model",
            options: [
                { value: "yes", label: "Evet" },
                { value: "no", label: "Hayır" },
            ],
        },
        {
            type: "radio",
            name: "hayir",
            title: "Kaç adet?",
            subType: "big",
            dependsOn: "ilk-uc",
            options: [
                {
                    value: "mavi",
                    label: "Mavi",
                    dependsOnValue: "kirmizi",
                    description: "Trifaz deger",
                },
                { value: "siyah", label: "Siyah", dependsOnValue: "kirmizi" },
                { value: "siyah", label: "Siyah", dependsOnValue: "mavi" },
            ],
        },
    ],
};
