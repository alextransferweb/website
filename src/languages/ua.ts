import { ELanguage } from "./types";

const UA: Record<ELanguage, string> = {
    [ELanguage.ADVANTAGES]: 'Переваги',
    [ELanguage.ROUTES]: 'Маршрути',
    [ELanguage.REVIEWS]: 'Відгуки',
    [ELanguage.CUSTOM]: 'Проходження митниці',

    [ELanguage.GERMAN]: 'Німецька',
    [ELanguage.ENGLISH]: 'Англійська',
    [ELanguage.LITHUANIAN]: 'Литовська',
    [ELanguage.POLISH]: 'Польська',
    [ELanguage.RUSSIAN]: 'Російська',
    [ELanguage.UKRAINIAN]: 'Українська',

    [ELanguage.DAILY]: 'щоденні',
    [ELanguage.PASSENGER_TRANSPORTATION]: 'пасажирські перевезення',
    [ELanguage.SEND_A_REQUEST]: 'Відправити заявку',
    [ELanguage.HERO_DESCR]: 'Компанія «Alextransfer» здійснює щоденні рейси до Литви комфортними мікроавтобусами класу Mercedes Sprinter, Opel Movano, Renault Master, Volkswagen Crafter. Ми успішно працюємо на ринку пасажирських перевезень до країн Балтії та зарекомендували себе як надійна і безпечна компанія.',

    [ELanguage.ZAPORIZHZHIA]: 'Запоріжжя',
    [ELanguage.LITHUANIA]: 'Литва',
    [ELanguage.DNIPRO]: 'Дніпро',
};

export default UA;
