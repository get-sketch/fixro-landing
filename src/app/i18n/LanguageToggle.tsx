"use client";
import { useLang } from "./LanguageProvider";

export default function LanguageToggle() {
  const { lang, toggle } = useLang();

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-sm font-medium text-gray-700 cursor-pointer"
      aria-label="Switch language"
    >
      <span className="text-base">{lang === "ro" ? "🇷🇴" : "🇬🇧"}</span>
      <span>{lang === "ro" ? "RO" : "EN"}</span>
    </button>
  );
}
