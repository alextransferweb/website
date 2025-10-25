import { redirect } from "next/navigation";

import { ERoutes } from "@/constants/routesNavigation.data";

export default function NotFound() {
  redirect(ERoutes.HOMEPAGE);
}
