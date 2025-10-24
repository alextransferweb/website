import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Header } from "@/components";
import { LangProvider } from "../providers/LangProvider";

import { getLanguage, TLanguage } from "../languages";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alextransfer",
  description: "DAILY PASSENGER TRANSPORTATION",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = "ua";
  const initialLanguage = await getLanguage(lang as TLanguage);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <LangProvider initialLang={lang} initialLanguage={initialLanguage}>
          <Header />
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
