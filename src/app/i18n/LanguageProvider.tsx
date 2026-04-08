"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Lang = "ro" | "en";

interface LangContextType {
  lang: Lang;
  toggle: () => void;
  t: (ro: string, en: string) => string;
}

const LangContext = createContext<LangContextType>({
  lang: "ro",
  toggle: () => {},
  t: (ro) => ro,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ro");

  useEffect(() => {
    const saved = localStorage.getItem("fixro-lang") as Lang | null;
    if (saved === "en" || saved === "ro") setLang(saved);
  }, []);

  const toggle = () => {
    const next = lang === "ro" ? "en" : "ro";
    setLang(next);
    localStorage.setItem("fixro-lang", next);
  };

  const t = (ro: string, en: string) => (lang === "ro" ? ro : en);

  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
