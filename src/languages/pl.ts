import { ELanguage } from "./types";

const PL: Record<ELanguage, string> = {
    // Routes
    [ELanguage.ADVANTAGES]: 'Zalety',
    [ELanguage.ROUTES]: 'Trasy',
    [ELanguage.REVIEWS]: 'Opinie',
    [ELanguage.CUSTOM]: 'Odprawa celna',

    // Languages
    [ELanguage.GERMAN]: 'Niemiecki',
    [ELanguage.ENGLISH]: 'Angielski',
    [ELanguage.LITHUANIAN]: 'Litewski',
    [ELanguage.POLISH]: 'Polski',
    [ELanguage.RUSSIAN]: 'Rosyjski',
    [ELanguage.UKRAINIAN]: 'Ukraiński',

    // Places
    [ELanguage.UKRAINE]: 'Ukraina',
    [ELanguage.ZAPORIZHZHIA]: 'Zaporoże',
    [ELanguage.DNIPRO]: 'Dniepr',
    [ELanguage.POLTAVA]: 'Połtawa',
    [ELanguage.KYIV]: 'Kijów',
    [ELanguage.KRYVYI_RIH]: 'Krzywy Róg',
    [ELanguage.KROPYVNYTSKYI]: 'Kropywnycki',
    [ELanguage.UMAN]: 'Uman',
    [ELanguage.VINNYTSIA]: 'Winnica',
    [ELanguage.KHMELNYTSKYI]: 'Chmielnicki',
    [ELanguage.TERNOPIL]: 'Tarnopol',
    [ELanguage.ZHYTOMYR]: 'Żytomierz',
    [ELanguage.RIVNE]: 'Równe',
    [ELanguage.LVIV]: 'Lwów',

    [ELanguage.POLAND]: 'Polska',
    [ELanguage.LUBLIN]: 'Lublin',
    [ELanguage.WARSAW]: 'Warszawa',
    [ELanguage.BIALYSTOK]: 'Białystok',
    [ELanguage.SUWALKI]: 'Suwałki',
    [ELanguage.KRAKOW]: 'Kraków',
    [ELanguage.KATOWICE]: 'Katowice',
    [ELanguage.WROCLAW]: 'Wrocław',

    [ELanguage.LITHUANIA]: 'Litwa',
    [ELanguage.VILNIUS]: 'Wilno',
    [ELanguage.SIAULIAI]: 'Szawle',
    [ELanguage.KAUNAS]: 'Kowno',
    [ELanguage.KLAIPEDA]: 'Kłajpeda',

    [ELanguage.CZECHIA]: 'Czechy',
    [ELanguage.PRAGUE]: 'Praga',
    [ELanguage.BRNO]: 'Brno',
    [ELanguage.KARLOVY_VARY]: 'Karlowe Wary',

    // Hero
    [ELanguage.DAILY]: 'codzienne',
    [ELanguage.PASSENGER_TRANSPORTATION]: 'przewozy pasażerskie',
    [ELanguage.SEND_A_REQUEST]: 'Wyślij zapytanie',
    [ELanguage.HERO_DESCR]: 'Firma „Alextransfer” codziennie organizuje przejazdy na Litwę komfortowymi busami marki Mercedes Sprinter, Opel Movano, Renault Master, Volkswagen Crafter. Działamy z powodzeniem na rynku przewozów pasażerskich do krajów bałtyckich i jesteśmy uznawani za rzetelną i bezpieczną firmę.',

    // Our routes
    [ELanguage.OUR_ROUTES]: 'nasze trasy',
    [ELanguage.THROUGH]: 'przez',
    [ELanguage.ORDER_A_ROUTE]: 'zamów trasę',

    // Parcels
    [ELanguage.PARCELS]: "przekazywanie paczek",
    [ELanguage.PARCELS_DESCRIPTION]: "Bardzo często zwracają się do nas ludzie z prośbą o dostarczenie dokumentów pod wskazany adres lub przekazanie rzeczy osobistych swoim bliskim. Zadzwoń do nas, a chętnie pomożemy!",
    [ELanguage.PARCELS_INFO_OPTION_1]: "Nasza firma świadczy również usługi przekazywania paczek z Ukrainy na Litwę i z powrotem.",
    [ELanguage.PARCELS_INFO_OPTION_2]: "Przyjmujemy paczki z całej Ukrainy.",
    [ELanguage.PARCELS_INFO_OPTION_3]: "Jeśli jesteś z innego miasta, możesz wysłać do nas paczkę Nową Pocztą do Krzywego Rogu.",
    [ELanguage.PARCELS_INFO_OPTION_4]: "Dostępna jest usługa bezpośredniej dostawy paczki pod adres klienta.",
    [ELanguage.PARCELS_INFO_OPTION_5]: "Gwarantujemy nienaruszalność przesyłki podczas transportu."
};

export default PL;
