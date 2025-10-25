import { ELanguage } from "@/languages/types";

export const DATA_ROUTES = [
    {
        id: 0,
        start: ELanguage.ZAPORIZHZHIA,
        end: ELanguage.SIAULIAI,
        img: 'cities/Siauliai-1.webp',
        points: [
            ELanguage.KAUNAS,
            ELanguage.VILNIUS,
        ],
        price: 100,
    },
    {
        id: 1,
        start: ELanguage.KYIV,
        end: ELanguage.SIAULIAI,
        img: 'cities/Siauliai-2.webp',
        points: [
            ELanguage.ZHYTOMYR,
            ELanguage.RIVNE,
            ELanguage.VILNIUS,
            ELanguage.KAUNAS,
        ],
        price: 80,
    },
    {
        id: 2,
        start: ELanguage.ZAPORIZHZHIA,
        end: ELanguage.KLAIPEDA,
        img: 'cities/klaipeda-1.webp',
        points: [
            ELanguage.DNIPRO,
            ELanguage.POLTAVA,
            ELanguage.KYIV,
            ELanguage.KAUNAS,
        ],
        price: 110,
    },
    {
        id: 3,
        start: ELanguage.KYIV,
        end: ELanguage.KLAIPEDA,
        img: 'cities/klaipeda-2.webp',
        points: [],
        price: 80,
    },
    {
        id: 4,
        start: ELanguage.DNIPRO,
        end: ELanguage.SIAULIAI,
        img: 'cities/Siauliai-3.webp',
        points: [],
        price: 100,
    },
]