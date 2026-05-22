"use client";
import Link from "next/link";
import { useLang } from "../i18n/LanguageProvider";
import LanguageToggle from "../i18n/LanguageToggle";
import { SITE } from "../../lib/site";

export default function LegalLayout({ titleRo, titleEn, children }: { titleRo: string; titleEn: string; children: React.ReactNode }) {
  const { t } = useLang();
  const title = t(titleRo, titleEn);

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center">
                <span className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-outfit)" }}>F</span>
              </div>
              <span className="text-lg font-bold" style={{ fontFamily: "var(--font-outfit)" }}>
                Fixro
              </span>
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-500 text-sm">{title}</span>
          </div>
          <LanguageToggle />
        </div>
      </nav>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: "var(--font-outfit)" }}>{title}</h1>
        <p className="text-sm text-gray-400 mb-10">
          {t(`Ultima actualizare: ${SITE.legalLastUpdated.ro}`, `Last updated: ${SITE.legalLastUpdated.en}`)}
        </p>
        <div className="[&_h2]:font-semibold [&_h2]:text-xl [&_h2]:mt-10 [&_h2]:mb-4 [&_p]:text-gray-600 [&_p]:leading-relaxed [&_p]:mb-4 [&_li]:text-gray-600 [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_ol]:mb-4 [&_a]:text-[var(--color-primary)] [&_a]:underline [&_strong]:text-gray-800 [&_h3]:font-semibold [&_h3]:text-lg [&_h3]:mt-6 [&_h3]:mb-2">
          {children}
        </div>
      </main>
      <footer className="py-8 px-6 border-t border-gray-100 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Fixro. {t("Toate drepturile rezervate.", "All rights reserved.")}</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gray-600 transition-colors">{t("Confidențialitate", "Privacy")}</Link>
            <Link href="/terms" className="hover:text-gray-600 transition-colors">{t("Termeni", "Terms")}</Link>
            <Link href="/cookies" className="hover:text-gray-600 transition-colors">Cookies</Link>
            <Link href="/gdpr" className="hover:text-gray-600 transition-colors">GDPR</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
