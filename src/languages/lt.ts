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

    // Parcels
    [ELanguage.PARCELS]: "siuntų perdavimas",
    [ELanguage.PARCELS_DESCRIPTION]: "Labai dažnai žmonės kreipiasi į mus su prašymu pristatyti dokumentus nurodytu adresu arba perduoti asmeninius daiktus savo artimiesiems. Skambinkite ir mes mielai jums padėsime!",
    [ELanguage.PARCELS_INFO_OPTION_1]: "Mūsų įmonė taip pat teikia siuntų perdavimo paslaugas iš Ukrainos į Lietuvą ir atgal.",
    [ELanguage.PARCELS_INFO_OPTION_2]: "Priimame siuntas iš visos Ukrainos.",
    [ELanguage.PARCELS_INFO_OPTION_3]: "Jei esate iš kito miesto, galite atsiųsti mums siuntą per „Nova Poshta“ į Kryvyj Rihą.",
    [ELanguage.PARCELS_INFO_OPTION_4]: "Yra galimybė pristatyti siuntą tiesiogiai gavėjui nurodytu adresu.",
    [ELanguage.PARCELS_INFO_OPTION_5]: "Garantuojame siuntos saugumą transportavimo metu."
};

export default LT;
