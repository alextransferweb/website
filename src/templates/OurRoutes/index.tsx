"use client";

import Image from "next/image";

import { Button } from "@/components";

import { useLang } from "@/providers/LangProvider";

import { ELanguage } from "@/languages/types";

import styles from "./ourRoutes.module.css";
import { DATA_ROUTES } from "@/constants/routes";

const OurRoutesTemplate = () => {
  const { language } = useLang();

  return (
    <div className={styles.ourRoutesWrapper}>
      <div className={styles.ourRoutesTitleBox}>
        <h3>{language[ELanguage.OUR_ROUTES]}</h3>
      </div>
      <div className={styles.ourRoutesGrid}>
        {DATA_ROUTES.map((el, i) => (
          <div className={styles.card} key={`Card-${i}`}>
            <div className={styles.cardHeader}>
              {language[el.start]} - {language[el.end]}
            </div>
            <div
              className={styles.cardImage}
              style={{ backgroundImage: `url(${el.img})` }}
            />
            <div className={styles.cardContent}>
              {el.points.length > 0 &&
                `${
                  language[ELanguage.THROUGH] +
                  " " +
                  el.points.map((it) => language[it]).join(", ")
                }`}
            </div>
            <div className={styles.cardPrice}>{el.price} €</div>
            <div className={styles.cardActionBox}>
              <Button className={styles.cardAction}>
                {language[ELanguage.ORDER_A_ROUTE]}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurRoutesTemplate;
