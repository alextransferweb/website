"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type LangContextType = {
  lang: string;
  language: Record<string, string>;
  setLang: (lang: string) => void;
};

const LangContext = createContext<LangContextType | null>(null);

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}

export function LangProvider({
  initialLang,
  initialLanguage,
  children,
}: {
  initialLang: string;
  initialLanguage: Record<string, string>;
  children: ReactNode;
}) {
  const [lang, setLang] = useState(initialLang);
  const [language, setLanguage] = useState(initialLanguage);

  useEffect(() => {
    const stored = localStorage.getItem("Alextransfer-lang");
    if (stored && stored !== lang) {
      setLang(stored);
    }
  }, []);

  useEffect(() => {
    async function loadMessages() {
      const res = await import(`../languages/${lang}`);
      setLanguage(res.default);
      localStorage.setItem("Alextransfer-lang", lang);
    }
    loadMessages();
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, language, setLang }}>
      {children}
    </LangContext.Provider>
  );
}
