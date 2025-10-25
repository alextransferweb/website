import { ELanguage } from "./types";

const LT: Record<ELanguage, string> = {
    // Routes
    [ELanguage.ADVANTAGES]: 'Privalumai',
    [ELanguage.ROUTES]: 'Maršrutai',
    [ELanguage.REVIEWS]: 'Atsiliepimai',
    [ELanguage.CUSTOM]: 'Muitinės procedūros',

    // Languages
    [ELanguage.GERMAN]: 'Vokiečių',
    [ELanguage.ENGLISH]: 'Anglų',
    [ELanguage.LITHUANIAN]: 'Lietuvių',
    [ELanguage.POLISH]: 'Lenkų',
    [ELanguage.RUSSIAN]: 'Rusų',
    [ELanguage.UKRAINIAN]: 'Ukrainiečių',

    // Places
    [ELanguage.UKRAINE]: 'Ukraina',
    [ELanguage.ZAPORIZHZHIA]: 'Zaporožė',
    [ELanguage.DNIPRO]: 'Dnipro',
    [ELanguage.POLTAVA]: 'Poltava',
    [ELanguage.KYIV]: 'Kyjivas',
    [ELanguage.KRYVYI_RIH]: 'Kryvyj Rihas',
    [ELanguage.KROPYVNYTSKYI]: 'Kropyvnyckis',
    [ELanguage.UMAN]: 'Umanė',
    [ELanguage.VINNYTSIA]: 'Vinnycja',
    [ELanguage.KHMELNYTSKYI]: 'Chmelnyckis',
    [ELanguage.TERNOPIL]: 'Ternopilis',
    [ELanguage.ZHYTOMYR]: 'Žytomyrys',
    [ELanguage.RIVNE]: 'Rivnė',
    [ELanguage.LVIV]: 'Lvovas',

    [ELanguage.POLAND]: 'Lenkija',
    [ELanguage.LUBLIN]: 'Liublinas',
    [ELanguage.WARSAW]: 'Varšuva',
    [ELanguage.BIALYSTOK]: 'Balstogė',
    [ELanguage.SUWALKI]: 'Suvalkai',
    [ELanguage.KRAKOW]: 'Krokuva',
    [ELanguage.KATOWICE]: 'Katovicai',
    [ELanguage.WROCLAW]: 'Vroclavas',

    [ELanguage.LITHUANIA]: 'Lietuva',
    [ELanguage.VILNIUS]: 'Vilnius',
    [ELanguage.SIAULIAI]: 'Šiauliai',
    [ELanguage.KAUNAS]: 'Kaunas',
    [ELanguage.KLAIPEDA]: 'Klaipėda',

    [ELanguage.CZECHIA]: 'Čekija',
    [ELanguage.PRAGUE]: 'Praha',
    [ELanguage.BRNO]: 'Brnas',
    [ELanguage.KARLOVY_VARY]: 'Karlovy Varai',

    // Hero
    [ELanguage.DAILY]: 'kasdieniai',
    [ELanguage.PASSENGER_TRANSPORTATION]: 'keleivių pervežimai',
    [ELanguage.SEND_A_REQUEST]: 'Siųsti užklausą',
    [ELanguage.HERO_DESCR]: 'Įmonė „Alextransfer“ kasdien vykdo reisus į Lietuvą patogiais mikroautobusais „Mercedes Sprinter“, „Opel Movano“, „Renault Master“, „Volkswagen Crafter“. Sėkmingai dirbame keleivių pervežimų į Baltijos šalis rinkoje ir esame patikima bei saugi įmonė.',

    // Our routes
    [ELanguage.OUR_ROUTES]: 'mūsų maršrutai',
    [ELanguage.THROUGH]: 'per',
    [ELanguage.ORDER_A_ROUTE]: 'užsakyti maršrutą',
};

export default LT;
