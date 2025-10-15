import { redirect } from "next/navigation";

import { ERoutes } from "@/constants/routes";

export default function NotFound() {
  redirect(ERoutes.HOMEPAGE);
}
