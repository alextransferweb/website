import { ELanguage } from "./types";

const UA: Record<ELanguage, string> = {
    // Routes
    [ELanguage.ADVANTAGES]: 'Переваги',
    [ELanguage.ROUTES]: 'Маршрути',
    [ELanguage.REVIEWS]: 'Відгуки',
    [ELanguage.CUSTOM]: 'Проходження митниці',

    // Languages
    [ELanguage.GERMAN]: 'Німецька',
    [ELanguage.ENGLISH]: 'Англійська',
    [ELanguage.LITHUANIAN]: 'Литовська',
    [ELanguage.POLISH]: 'Польська',
    [ELanguage.RUSSIAN]: 'Російська',
    [ELanguage.UKRAINIAN]: 'Українська',

    // Places
    [ELanguage.UKRAINE]: 'Україна',
    [ELanguage.ZAPORIZHZHIA]: 'Запоріжжя',
    [ELanguage.DNIPRO]: 'Дніпро',
    [ELanguage.POLTAVA]: 'Полтава',
    [ELanguage.KYIV]: 'Київ',
    [ELanguage.KRYVYI_RIH]: 'Кривий Ріг',
    [ELanguage.KROPYVNYTSKYI]: 'Кропивницький',
    [ELanguage.UMAN]: 'Умань',
    [ELanguage.VINNYTSIA]: 'Вінниця',
    [ELanguage.KHMELNYTSKYI]: 'Хмельницький',
    [ELanguage.TERNOPIL]: 'Тернопіль',
    [ELanguage.ZHYTOMYR]: 'Житомир',
    [ELanguage.RIVNE]: 'Рівне',
    [ELanguage.LVIV]: 'Львів',

    [ELanguage.POLAND]: 'Польща',
    [ELanguage.LUBLIN]: 'Люблін',
    [ELanguage.WARSAW]: 'Варшава',
    [ELanguage.BIALYSTOK]: 'Білосток',
    [ELanguage.SUWALKI]: 'Сувалки',
    [ELanguage.KRAKOW]: 'Краків',
    [ELanguage.KATOWICE]: 'Катовіце',
    [ELanguage.WROCLAW]: 'Вроцлав',

    [ELanguage.LITHUANIA]: 'Литва',
    [ELanguage.VILNIUS]: 'Вільнюс',
    [ELanguage.SIAULIAI]: 'Шяуляй',
    [ELanguage.KAUNAS]: 'Каунас',
    [ELanguage.KLAIPEDA]: 'Клайпеда',

    [ELanguage.CZECHIA]: 'Чехія',
    [ELanguage.PRAGUE]: 'Прага',
    [ELanguage.BRNO]: 'Брно',
    [ELanguage.KARLOVY_VARY]: 'Карлові Вари',

    // Hero
    [ELanguage.DAILY]: 'щоденні',
    [ELanguage.PASSENGER_TRANSPORTATION]: 'пасажирські перевезення',
    [ELanguage.SEND_A_REQUEST]: 'Відправити заявку',
    [ELanguage.HERO_DESCR]: 'Компанія «Alextransfer» здійснює щоденні рейси до Литви комфортними мікроавтобусами класу Mercedes Sprinter, Opel Movano, Renault Master, Volkswagen Crafter. Ми успішно працюємо на ринку пасажирських перевезень до країн Балтії та зарекомендували себе як надійна і безпечна компанія.',

    // Our routes
    [ELanguage.OUR_ROUTES]: 'наші маршрути',
    [ELanguage.THROUGH]: 'через',
    [ELanguage.ORDER_A_ROUTE]: 'замовити маршрут',

    // Parcels
    [ELanguage.PARCELS]: "передача посилок",
    [ELanguage.PARCELS_DESCRIPTION]: "Дуже часто до нас звертаються люди з проханням доставити документи за адресою або передати особисті речі своїм рідним і близьким. Телефонуйте, і ми з радістю вам допоможемо!",
    [ELanguage.PARCELS_INFO_OPTION_1]: "Наша компанія також надає послуги передачі посилок з України до Литви та у зворотному напрямку.",
    [ELanguage.PARCELS_INFO_OPTION_2]: "Приймаємо посилки з усієї України.",
    [ELanguage.PARCELS_INFO_OPTION_3]: "Якщо ви з іншого міста, можете надіслати нам посилку Новою Поштою до м. Кривий Ріг.",
    [ELanguage.PARCELS_INFO_OPTION_4]: "Є послуга прямої адресної доставки посилки клієнту.",
    [ELanguage.PARCELS_INFO_OPTION_5]: "Гарантуємо цілісність під час перевезення."
};

export default UA;
