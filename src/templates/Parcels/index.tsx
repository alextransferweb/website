"use client";

import Image from "next/image";

import { useLang } from "@/providers/LangProvider";

import { ELanguage } from "@/languages/types";

import styles from "./parcels.module.css";

const ParcelsTemplate = () => {
  const { language } = useLang();

  return (
    <div>
      <div className={styles.parcelsTitleBox}>
        <h3>{language[ELanguage.PARCELS]}</h3>
      </div>
      <div className={styles.parcelsContentWrapper}>
        <div>
          <ul>
            <li>{language[ELanguage.PARCELS_INFO_OPTION_1]}</li>
            <li>{language[ELanguage.PARCELS_INFO_OPTION_2]}</li>
            <li>{language[ELanguage.PARCELS_INFO_OPTION_3]}</li>
            <li>{language[ELanguage.PARCELS_INFO_OPTION_4]}</li>
            <li>{language[ELanguage.PARCELS_INFO_OPTION_5]}</li>
          </ul>
          <p>{language[ELanguage.PARCELS_DESCRIPTION]}</p>
        </div>
        <div className={styles.parcelsContentImgWrapper}>
          <div className={styles.parcelsContentImgBox}>
            <Image src="/parcel.webp" alt="parcel" width={300} height={188} />
          </div>
        </div>
      </div>
      <div className={styles.parcelsLogoWrapper}>
        <Image src="/car.webp" alt="car" fill className={styles.mobileLogo} />
      </div>
    </div>
  );
};

export default ParcelsTemplate;
