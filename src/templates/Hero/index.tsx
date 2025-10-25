"use client";

import Image from "next/image";

import { Button } from "@/components";

import { useLang } from "@/providers/LangProvider";

import { ELanguage } from "@/languages/types";

import styles from "./hero.module.css";

const HeroTemplate = () => {
  const { language } = useLang();

  return (
    <div className={styles.videoBox}>
      <video autoPlay muted loop>
        <source src="hero.mp4" type="video/mp4" />
      </video>
      <div className={styles.contentWrapper}>
        <div className={styles.contentBox}>
          <h3>{language[ELanguage.DAILY]}</h3>
          <h4>{language[ELanguage.PASSENGER_TRANSPORTATION]}</h4>
          <div className={styles.routesBox}>
            <Image
              src="/lithuania_640.webp"
              alt="Logo"
              width={32}
              height={24}
            />
            <h6>
              {language[ELanguage.ZAPORIZHZHIA]} -{" "}
              {language[ELanguage.LITHUANIA]} - {language[ELanguage.DNIPRO]}
            </h6>
          </div>
          <p>{language[ELanguage.HERO_DESCR]}</p>
          <Button className={styles.action}>
            {language[ELanguage.SEND_A_REQUEST]}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroTemplate;
