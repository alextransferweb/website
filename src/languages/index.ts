const languages = {
    de: () => import("./de"),
    en: () => import("./en"),
    lt: () => import("./lt"),
    pl: () => import("./pl"),
    ru: () => import("./ru"),
    ua: () => import("./ua"),
};

export type TLanguage = keyof typeof languages;

export async function getLanguage(language: TLanguage) {
    const lang = await languages[language]();
    return lang.default;
}