import { ELanguage } from "./types";

const LT: Record<ELanguage, string> = {
    [ELanguage.ADVANTAGES]: 'Privalumai',
    [ELanguage.ROUTES]: 'Maršrutai',
    [ELanguage.REVIEWS]: 'Atsiliepimai',
    [ELanguage.CUSTOM]: 'Muitinės procedūros',

    [ELanguage.GERMAN]: 'Vokiečių',
    [ELanguage.ENGLISH]: 'Anglų',
    [ELanguage.LITHUANIAN]: 'Lietuvių',
    [ELanguage.POLISH]: 'Lenkų',
    [ELanguage.RUSSIAN]: 'Rusų',
    [ELanguage.UKRAINIAN]: 'Ukrainiečių',

    [ELanguage.DAILY]: 'kasdieniai',
    [ELanguage.PASSENGER_TRANSPORTATION]: 'keleivių pervežimai',
    [ELanguage.SEND_A_REQUEST]: 'Siųsti užklausą',
    [ELanguage.HERO_DESCR]: 'Įmonė „Alextransfer“ kasdien vykdo reisus į Lietuvą patogiais mikroautobusais „Mercedes Sprinter“, „Opel Movano“, „Renault Master“, „Volkswagen Crafter“. Sėkmingai dirbame keleivių pervežimo į Baltijos šalis rinkoje ir esame patikima bei saugi įmonė.',

    [ELanguage.ZAPORIZHZHIA]: 'Zaporožė',
    [ELanguage.LITHUANIA]: 'Lietuva',
    [ELanguage.DNIPRO]: 'Dnipro',
};

export default LT;
