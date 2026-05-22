"use client";
import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useLang } from "./i18n/LanguageProvider";
import LanguageToggle from "./i18n/LanguageToggle";
import StripeReturnNotice from "./components/StripeReturnNotice";
import { SITE } from "../lib/site";

export default function Home() {
  const { t } = useLang();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("fixro-cookies-accepted");
    if (!accepted) setShowCookieBanner(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("fixro-cookies-accepted", "true");
    setShowCookieBanner(false);
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      {/* Stripe return banner — renders only when ?stripe=... is present. */}
      <Suspense fallback={null}>
        <StripeReturnNotice />
      </Suspense>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center">
              <span className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-outfit)" }}>F</span>
            </div>
            <span className="text-xl font-bold" style={{ fontFamily: "var(--font-outfit)" }}>
              Fixro
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#features" className="hover:text-[var(--color-primary)] transition-colors">{t("Funcționalități", "Features")}</a>
            <a href="#how-it-works" className="hover:text-[var(--color-primary)] transition-colors">{t("Cum funcționează", "How it works")}</a>
            <a href="#providers" className="hover:text-[var(--color-primary)] transition-colors">{t("Pentru Pro", "For Providers")}</a>
            <a href="#contact" className="hover:text-[var(--color-primary)] transition-colors">{t("Contact", "Contact")}</a>
          </div>
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <a href="#download" className="hidden sm:inline-block px-5 py-2.5 bg-[var(--color-accent)] text-white rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity">
              {t("Descarcă", "Download")}
            </a>
            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-gray-700 transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 bg-gray-700 transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-gray-700 transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4 text-sm font-medium text-gray-600">
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[var(--color-primary)]">{t("Funcționalități", "Features")}</a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[var(--color-primary)]">{t("Cum funcționează", "How it works")}</a>
            <a href="#providers" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[var(--color-primary)]">{t("Pentru Pro", "For Providers")}</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[var(--color-primary)]">{t("Contact", "Contact")}</a>
            <a href="#download" onClick={() => setMobileMenuOpen(false)} className="block text-[var(--color-accent)] font-semibold">{t("Descarcă", "Download")}</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)]/10 rounded-full mb-6">
            <span className="w-2 h-2 bg-[var(--color-success)] rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-[var(--color-primary)]">{t("Disponibil în toată România", "Available across Romania")}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-outfit)" }}>
            {t("Casa ta.", "Your home.")} <br />
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent">
              {t("La cele mai bune mâini.", "In the best hands.")}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            {t(
              "Conectează-te cu profesioniști verificați pentru instalații, electricitate, curățenie și mult mai mult. Rezervă servicii de încredere în câteva minute.",
              "Connect with vetted professionals for plumbing, electrical, cleaning, and more. Book trusted home services in minutes with secure payments."
            )}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#download" className="px-8 py-4 bg-[var(--color-accent)] text-white rounded-2xl text-lg font-semibold hover:shadow-lg hover:shadow-[var(--color-accent)]/30 transition-all">
              {t("Începe acum — Gratuit", "Get Started — It's Free")}
            </a>
            <a href="#how-it-works" className="px-8 py-4 bg-white text-gray-700 rounded-2xl text-lg font-medium border border-gray-200 hover:border-[var(--color-primary)] transition-colors">
              {t("Vezi cum funcționează", "See How It Works")}
            </a>
          </div>
          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto mt-16">
            {[
              { value: "100%", label: t("Verificați", "Verified") },
              { value: "10+", label: t("Categorii", "Categories") },
              { value: "🇷🇴", label: t("Făcut în România", "Made in Romania") },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[var(--color-primary)]" style={{ fontFamily: "var(--font-outfit)" }}>{stat.value}</div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
              {t("Tot ce ai nevoie", "Everything you need")}
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              {t("O platformă completă pentru clienți și profesioniști.", "A complete platform designed for both customers and service providers.")}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🔍", title: t("Caută & Rezervă", "Find & Book"), desc: t("Răsfoiește profesioniști verificați, citește recenzii și rezervă în câteva secunde.", "Browse vetted professionals by category, read reviews, and book in seconds.") },
              { icon: "💳", title: t("Plăți securizate", "Secure Payments"), desc: t("Plătește securizat prin Stripe cu card, Apple Pay sau Google Pay.", "Pay securely via Stripe with card, Apple Pay, or Google Pay.") },
              { icon: "📍", title: t("Localizare GPS", "GPS Location"), desc: t("Detectare automată a adresei și urmărire în timp real.", "Automatic address detection and real-time provider tracking.") },
              { icon: "⭐", title: t("Recenzii verificate", "Verified Reviews"), desc: t("Doar clienții care au finalizat o lucrare pot lăsa recenzii.", "Only customers who completed a booking can leave verified reviews.") },
              { icon: "💬", title: t("Chat în timp real", "Real-time Chat"), desc: t("Comunică direct cu profesionistul prin text și imagini.", "Message your provider directly with text and image sharing.") },
              { icon: "🧾", title: t("Oferte & facturi", "Quotes & Invoices"), desc: t("Primești oferte transparente, facturi detaliate și defalcări de costuri.", "Get transparent quotes, detailed invoices, and full cost breakdowns.") },
            ].map((f) => (
              <div key={f.title} className="p-6 rounded-2xl border border-gray-100 hover:border-[var(--color-primary)]/30 hover:shadow-lg hover:shadow-[var(--color-primary)]/5 transition-all group cursor-default">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{f.icon}</div>
                <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "var(--font-outfit)" }}>{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
              {t("Cum funcționează", "How it works")}
            </h2>
            <p className="text-gray-500">{t("Trei pași simpli pentru a-ți repara casa.", "Three simple steps to get your home fixed.")}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: "01", title: t("Alege un serviciu", "Choose a Service"), desc: t("Răsfoiește categorii precum instalații, electricitate, curățenie sau zugrăveli.", "Browse categories like plumbing, electrical, cleaning, or painting.") },
              { step: "02", title: t("Rezervă un Pro", "Book a Pro"), desc: t("Selectează un profesionist verificat, alege data și ora, și confirmă.", "Select a vetted professional, choose a date and time, and confirm your booking.") },
              { step: "03", title: t("Gata!", "Get It Done"), desc: t("Profesionistul ajunge, finalizează lucrarea, iar tu plătești securizat prin aplicație.", "The pro arrives, completes the job, and you pay securely through the app.") },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-xl font-bold" style={{ fontFamily: "var(--font-outfit)" }}>{s.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: "var(--font-outfit)" }}>{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Providers */}
      <section id="providers" className="py-20 px-6 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)]">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
            {t("Ești profesionist?", "Are you a professional?")}
          </h2>
          <p className="text-white/70 max-w-lg mx-auto mb-10 text-lg">
            {t("Alătură-te Fixro și crește-ți afacerea. Obține clienți noi, plăți securizate și gestionează totul dintr-o singură aplicație.", "Join Fixro and grow your business. Get new customers, secure payments, and manage everything from one app.")}
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: "💰", title: t("85% câștiguri", "85% Earnings"), desc: t("Păstrezi 85% din fiecare plată. Transfer automat zilnic în contul tău.", "Keep 85% of every payment. Daily automatic payouts to your bank.") },
              { icon: "📈", title: t("Crește-ți afacerea", "Grow Your Business"), desc: t("Fii descoperit de mii de clienți din zona ta.", "Get discovered by thousands of customers in your area.") },
              { icon: "🛡️", title: t("Securizat & simplu", "Secure & Simple"), desc: t("Plăți prin Stripe, facturare automată și protecție la dispute.", "Stripe-powered payments, automated invoicing, and dispute protection.") },
            ].map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "var(--font-outfit)" }}>{f.title}</h3>
                <p className="text-white/60 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
          <a href="#download" className="inline-block px-8 py-4 bg-[var(--color-accent)] text-white rounded-2xl text-lg font-semibold hover:shadow-lg transition-all">
            {t("Devino Pro Fixro", "Become a Fixro Pro")}
          </a>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
            {t("Descarcă Fixro", "Download Fixro")}
          </h2>
          <p className="text-gray-500 mb-10 text-lg">{t("Disponibil pe iOS și Android. Descărcare gratuită.", "Available on iOS and Android. Free to download.")}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={SITE.appStoreUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-black text-white rounded-2xl flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity border-none">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
              <div className="text-left">
                <div className="text-xs text-gray-400">{t("Descarcă din", "Download on the")}</div>
                <div className="text-lg font-semibold leading-tight">App Store</div>
              </div>
            </a>
            <a href={SITE.playStoreUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-black text-white rounded-2xl flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity border-none">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.73c-.42-.27-.68-.73-.68-1.23V1.5c0-.5.26-.96.68-1.23L14.54 12 3.18 23.73zm1.64-24.2L16.73 8.5l-2.77 2.77L4.82-.47zm-.02 24.94L14 13.5l2.73 2.73L4.8 24.47zM20.16 10.5L17.5 12l2.66 1.5-2.73 1.53L14.54 12l2.89-3.03 2.73 1.53z"/></svg>
              <div className="text-left">
                <div className="text-xs text-gray-400">{t("Disponibil pe", "Get it on")}</div>
                <div className="text-lg font-semibold leading-tight">Google Play</div>
              </div>
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            {t("Ai întrebări? Scrie-ne la ", "Questions? Email us at ")}
            <a
              href={`mailto:${SITE.email}`}
              className="text-[var(--color-primary)] underline hover:no-underline"
            >
              {SITE.email}
            </a>
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 bg-[var(--color-bg)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-outfit)" }}>{t("Contactează-ne", "Contact Us")}</h2>
          <p className="text-gray-500 mb-6">{t("Ai întrebări? Suntem aici să te ajutăm.", "Have questions? We're here to help.")}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href={`mailto:${SITE.email}`} className="text-[var(--color-primary)] font-medium hover:underline">{SITE.email}</a>
            <span className="hidden sm:block text-gray-300">|</span>
            <a href={`tel:${SITE.phone}`} className="text-gray-500 hover:text-[var(--color-primary)] transition-colors">📞 {SITE.phoneDisplay}</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[var(--color-text)] text-white/60">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center">
                  <span className="text-white font-bold" style={{ fontFamily: "var(--font-outfit)" }}>F</span>
                </div>
                <span className="text-white text-lg font-bold" style={{ fontFamily: "var(--font-outfit)" }}>
                  Fixro
                </span>
              </div>
              <p className="text-sm">{t("Piața de servicii pentru casă de încredere din România.", "The trusted home services marketplace for Romania.")}</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t("Produs", "Product")}</h4>
              <div className="space-y-3 text-sm">
                <a href="#features" className="block hover:text-white transition-colors">{t("Funcționalități", "Features")}</a>
                <a href="#how-it-works" className="block hover:text-white transition-colors">{t("Cum funcționează", "How It Works")}</a>
                <a href="#providers" className="block hover:text-white transition-colors">{t("Pentru Pro", "For Providers")}</a>
                <a href="#download" className="block hover:text-white transition-colors">{t("Descarcă", "Download")}</a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t("Legal", "Legal")}</h4>
              <div className="space-y-3 text-sm">
                <Link href="/privacy" className="block hover:text-white transition-colors">{t("Politica de confidențialitate", "Privacy Policy")}</Link>
                <Link href="/terms" className="block hover:text-white transition-colors">{t("Termeni și condiții", "Terms of Service")}</Link>
                <Link href="/cookies" className="block hover:text-white transition-colors">{t("Politica cookies", "Cookie Policy")}</Link>
                <Link href="/gdpr" className="block hover:text-white transition-colors">GDPR</Link>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t("Suport", "Support")}</h4>
              <div className="space-y-3 text-sm">
                <a href={`mailto:${SITE.email}`} className="block hover:text-white transition-colors">{SITE.email}</a>
                <Link href="/support" className="block hover:text-white transition-colors">{t("Centru de ajutor", "Help Center")}</Link>
                <Link href="/data-deletion" className="block hover:text-white transition-colors">{t("Șterge datele mele", "Delete My Data")}</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm">© {new Date().getFullYear()} Fixro. {t("Toate drepturile rezervate.", "All rights reserved.")}</p>
            <p className="text-sm">{t("Făcut cu ❤️ în România 🇷🇴", "Made with ❤️ in Romania 🇷🇴")}</p>
          </div>
        </div>
      </footer>

      {/* Cookie Consent Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl p-4 md:p-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1 text-sm text-gray-600">
              <p className="font-medium text-gray-900 mb-1">{t("🍪 Folosim cookie-uri", "🍪 We use cookies")}</p>
              <p>{t(
                "Utilizăm cookie-uri esențiale și funcționale pentru a îmbunătăți experiența ta. Citește ",
                "We use essential and functional cookies to improve your experience. Read our "
              )}<Link href="/cookies" className="text-[var(--color-primary)] underline">{t("Politica cookies", "Cookie Policy")}</Link>.</p>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={acceptCookies} className="px-6 py-2.5 bg-[var(--color-accent)] text-white rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer border-none">
                {t("Accept", "Accept")}
              </button>
              <button onClick={acceptCookies} className="px-6 py-2.5 bg-gray-100 text-gray-700 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer border-none">
                {t("Doar esențiale", "Essential only")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
