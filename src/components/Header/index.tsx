"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { AnimatedBurger, CustomSelect } from "@/components";
import { FacebookIcon, ViberIcon, TelegramIcon, PhoneIcon } from "../icons";

import { useLang } from "@/app/providers/LangProvider";
import { ERoutes } from "@/constants/routes";

import { ELanguage } from "@/app/languages/types";

import styles from "./header.module.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  const { language, lang, setLang } = useLang();

  const LANGUAGE_OPTIONS = [
    {
      value: "de",
      label: (
        <div className={styles.optionWrapper}>
          <Image
            src={`https://flagcdn.com/w20/${"de"}.png`}
            alt={"de"}
            width={14}
            height={12}
          />{" "}
          {language[ELanguage.GERMAN]}
        </div>
      ),
    },
    {
      value: "en",
      label: (
        <div className={styles.optionWrapper}>
          <Image
            src={`https://flagcdn.com/w20/${"gb"}.png`}
            alt={"gb"}
            width={14}
            height={12}
          />{" "}
          {language[ELanguage.ENGLISH]}
        </div>
      ),
    },
    {
      value: "lt",
      label: (
        <div className={styles.optionWrapper}>
          <Image
            src={`https://flagcdn.com/w20/${"lt"}.png`}
            alt={"lt"}
            width={14}
            height={12}
          />{" "}
          {language[ELanguage.LITHUANIAN]}
        </div>
      ),
    },
    {
      value: "pl",
      label: (
        <div className={styles.optionWrapper}>
          <Image
            src={`https://flagcdn.com/w20/${"pl"}.png`}
            alt={"pl"}
            width={14}
            height={12}
          />{" "}
          {language[ELanguage.POLISH]}
        </div>
      ),
    },
    {
      value: "ru",
      label: (
        <div className={styles.optionWrapper}>
          <Image
            src={`https://flagcdn.com/w20/${"ru"}.png`}
            alt={"ru"}
            width={14}
            height={12}
          />{" "}
          {language[ELanguage.RUSSIAN]}
        </div>
      ),
    },
    {
      value: "ua",
      label: (
        <div className={styles.optionWrapper}>
          <Image
            src={`https://flagcdn.com/w20/${"ua"}.png`}
            alt={"ua"}
            width={14}
            height={12}
          />{" "}
          {language[ELanguage.UKRAINIAN]}
        </div>
      ),
    },
  ];

  return (
    <div className={styles.headerPositionWrapper}>
      <div className={styles.headerWrapper}>
        <Link href={ERoutes.HOMEPAGE}>
          <Image
            src="/Logo_extended.svg"
            alt="Logo"
            width={240}
            height={48}
            className={styles.webLogo}
          />
          <Image
            src="/Logo.svg"
            alt="Logo"
            width={48}
            height={48}
            className={styles.mobileLogo}
          />
        </Link>
        <div className={styles.navigationWrapper}>
          <Link href={ERoutes.ADVANTAGES}>
            <div className={styles.navigationBox}>
              {language[ELanguage.ADVANTAGES]}
            </div>
          </Link>
          <Link href={ERoutes.ROUTES}>
            <div className={styles.navigationBox}>
              {language[ELanguage.ROUTES]}
            </div>
          </Link>
          <Link href={ERoutes.REVIEWS}>
            <div className={styles.navigationBox}>
              {language[ELanguage.REVIEWS]}
            </div>
          </Link>
          <Link href={ERoutes.CUSTOM}>
            <div className={styles.navigationBox}>
              {language[ELanguage.CUSTOM]}
            </div>
          </Link>
        </div>
        <div className={styles.infoBox}>
          <div className={styles.connectBox}>
            <a href="tel:+380666252225" className={styles.phoneBox}>
              <PhoneIcon /> +380666252225
            </a>

            <div className={styles.mediaWrapper}>
              <a
                target="blank"
                href="https://www.facebook.com/AlexTransfer.net/"
                className={`${styles.mediaLink} ${styles.facebook}`}
              >
                <FacebookIcon />
              </a>
              <a
                target="blank"
                href="https://invite.viber.com/?g2=AQB1vH1xNqwGeEp%2Fo3%2FalUiToTjmnAQV3G%2B%2FiAlwFqTPOqaOhsKwE12Lv4J88qY1&lang=uk"
                className={`${styles.mediaLink} ${styles.viber}`}
              >
                <ViberIcon />
              </a>
              <a
                target="blank"
                href="https://t.me/alex_litva_zp"
                className={`${styles.mediaLink} ${styles.telegram}`}
              >
                <TelegramIcon />
              </a>
            </div>
          </div>

          <div className={styles.selectBox}>
            <CustomSelect
              options={LANGUAGE_OPTIONS}
              defaultValue={lang}
              onChange={(newLang) => setLang(newLang)}
            />
            <div className={styles.menuBox} onClick={() => setOpen(!open)}>
              <AnimatedBurger />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${styles.headerAccordionWrapper} ${
          open ? styles.headerAccordionWrapperOpen : ""
        }`}
      >
        <div className={styles.navigationMobileWrapper}>
          <Link href={ERoutes.ADVANTAGES}>
            <div className={styles.navigationBox}>
              {language[ELanguage.ADVANTAGES]}
            </div>
          </Link>
          <Link href={ERoutes.ROUTES}>
            <div className={styles.navigationBox}>
              {language[ELanguage.ROUTES]}
            </div>
          </Link>
          <Link href={ERoutes.REVIEWS}>
            <div className={styles.navigationBox}>
              {language[ELanguage.REVIEWS]}
            </div>
          </Link>
          <Link href={ERoutes.CUSTOM}>
            <div className={styles.navigationBox}>
              {language[ELanguage.CUSTOM]}
            </div>
          </Link>
        </div>
        <div className={styles.connectMobileBox}>
          <a href="tel:+380666252225" className={styles.phoneBox}>
            <PhoneIcon /> +380666252225
          </a>

          <div className={styles.mediaWrapper}>
            <a
              target="blank"
              href="https://www.facebook.com/AlexTransfer.net/"
              className={`${styles.mediaLink} ${styles.facebook}`}
            >
              <FacebookIcon />
            </a>
            <a
              target="blank"
              href="https://invite.viber.com/?g2=AQB1vH1xNqwGeEp%2Fo3%2FalUiToTjmnAQV3G%2B%2FiAlwFqTPOqaOhsKwE12Lv4J88qY1&lang=uk"
              className={`${styles.mediaLink} ${styles.viber}`}
            >
              <ViberIcon />
            </a>
            <a
              target="blank"
              href="https://t.me/alex_litva_zp"
              className={`${styles.mediaLink} ${styles.telegram}`}
            >
              <TelegramIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
