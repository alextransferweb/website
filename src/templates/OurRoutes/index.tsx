"use client";

import Image from "next/image";

import { Button } from "@/components";

import { useLang } from "@/providers/LangProvider";

import { ELanguage } from "@/languages/types";

import styles from "./ourRoutes.module.css";

const OurRoutesTemplate = () => {
  const { language } = useLang();

  return (
    <div className={styles.ourRoutesWrapper}>
      <div className={styles.ourRoutesTitleBox}>
        <h3>{language[ELanguage.OUR_ROUTES]}</h3>
      </div>
    </div>
  );
};

export default OurRoutesTemplate;
