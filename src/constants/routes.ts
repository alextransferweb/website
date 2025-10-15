import { ELanguage } from "@/app/languages/types";

export enum ERoutes {
    HOMEPAGE = "/",
    ADVANTAGES = "/advantages",
    ROUTES = "/routes",
    REVIEWS = "/reviews",
    CUSTOM = "/custom",
}

export const TOP_NAVIGATION = [
    {
        name: ELanguage.ADVANTAGES,
        route: ERoutes.ADVANTAGES,
    },
    {
        name: ELanguage.ROUTES,
        route: ERoutes.ROUTES,
    },
    {
        name: ELanguage.REVIEWS,
        route: ERoutes.REVIEWS,
    },
    {
        name: ELanguage.CUSTOM,
        route: ERoutes.CUSTOM,
    },
]