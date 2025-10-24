import { ELanguage } from "./types";

const PL: Record<ELanguage, string> = {
    [ELanguage.ADVANTAGES]: 'Zalety',
    [ELanguage.ROUTES]: 'Trasy',
    [ELanguage.REVIEWS]: 'Opinie',
    [ELanguage.CUSTOM]: 'Odprawa celna',

    [ELanguage.GERMAN]: 'Niemiecki',
    [ELanguage.ENGLISH]: 'Angielski',
    [ELanguage.LITHUANIAN]: 'Litewski',
    [ELanguage.POLISH]: 'Polski',
    [ELanguage.RUSSIAN]: 'Rosyjski',
    [ELanguage.UKRAINIAN]: 'Ukraiński',

    [ELanguage.DAILY]: 'codzienne',
    [ELanguage.PASSENGER_TRANSPORTATION]: 'przewozy pasażerskie',
    [ELanguage.SEND_A_REQUEST]: 'Wyślij zapytanie',
    [ELanguage.HERO_DESCR]: 'Firma „Alextransfer” codziennie organizuje przejazdy na Litwę komfortowymi minibusami marki Mercedes Sprinter, Opel Movano, Renault Master, Volkswagen Crafter. Działamy z powodzeniem na rynku przewozów pasażerskich do krajów bałtyckich i cieszymy się opinią rzetelnej oraz bezpiecznej firmy.',

    [ELanguage.ZAPORIZHZHIA]: 'Zaporoże',
    [ELanguage.LITHUANIA]: 'Litwa',
    [ELanguage.DNIPRO]: 'Dniepr',
};

export default PL;
