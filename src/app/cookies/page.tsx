"use client";
import LegalLayout from "../components/LegalLayout";
import { useLang } from "../i18n/LanguageProvider";

export default function CookiePolicy() {
  const { t } = useLang();

  return (
    <LegalLayout titleRo="Politica cookies" titleEn="Cookie Policy">
      <h2>{t("1. Ce sunt cookie-urile", "1. What Are Cookies")}</h2>
      <p>{t(
        "Cookie-urile sunt fișiere text mici stocate pe dispozitivul dvs. când vizitați un site web. Ne ajută să reținem preferințele și să îmbunătățim experiența.",
        "Cookies are small text files stored on your device when you visit a website. They help us remember your preferences and improve your experience."
      )}</p>

      <h2>{t("2. Cum folosim cookie-urile", "2. How We Use Cookies")}</h2>
      <ul>
        <li><strong>{t("Cookie-uri esențiale:", "Essential Cookies:")}</strong> {t("Necesare pentru funcționarea platformei (autentificare, securitate, sesiuni). Nu pot fi dezactivate.", "Required for the platform to function (authentication, security, sessions). Cannot be disabled.")}</li>
        <li><strong>{t("Cookie-uri funcționale:", "Functional Cookies:")}</strong> {t("Stocate local în browser pentru a reține preferințe ca selecția limbii și acceptarea cookie-urilor.", "Stored locally in your browser to remember preferences like language selection and cookie acceptance.")}</li>
        <li><strong>{t("Cookie-uri de plată:", "Payment Cookies:")}</strong> {t("Setate de Stripe pe paginile unde inițiezi o plată, pentru procesare securizată și prevenirea fraudei.", "Set by Stripe on pages where you initiate a payment, for secure processing and fraud prevention.")}</li>
      </ul>
      <p>{t(
        "Site-ul web Fixro nu rulează cookie-uri de analiză (Google Analytics, Facebook Pixel etc.). Aplicația mobilă folosește Firebase Cloud Messaging pentru notificări push, care nu setează cookie-uri în browser.",
        "The Fixro website does not run analytics cookies (Google Analytics, Facebook Pixel, etc.). The mobile app uses Firebase Cloud Messaging for push notifications, which does not set browser cookies."
      )}</p>

      <h2>{t("3. Cookie-uri terțe", "3. Third-Party Cookies")}</h2>
      <ul>
        <li><strong>Stripe:</strong> {t("Procesarea plăților și detectarea fraudei (numai pe paginile de plată din aplicație)", "Payment processing and fraud detection (only on payment pages in the app)")}</li>
        <li><strong>Supabase:</strong> {t("Autentificare și gestionarea sesiunilor (în aplicația mobilă)", "Authentication and session management (in the mobile app)")}</li>
      </ul>

      <h2>{t("4. Gestionarea cookie-urilor", "4. Managing Cookies")}</h2>
      <p>{t(
        "Puteți controla cookie-urile prin setările browserului. Pentru aplicația mobilă, gestionați permisiunile prin setările dispozitivului (iOS: Setări → Confidențialitate → Urmărire; Android: Setări → Confidențialitate → Reclame).",
        "You can control cookies through your browser settings. For mobile apps, manage tracking permissions through your device settings (iOS: Settings → Privacy → Tracking; Android: Settings → Privacy → Ads)."
      )}</p>

      <h2>{t("5. Contact", "5. Contact")}</h2>
      <p>Email: <a href="mailto:support-fixro@inanu.art">support-fixro@inanu.art</a></p>
    </LegalLayout>
  );
}
