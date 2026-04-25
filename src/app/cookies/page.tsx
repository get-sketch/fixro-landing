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
        <li><strong>{t("Cookie-uri analitice:", "Analytics Cookies:")}</strong> {t("Ne ajută să înțelegem cum interacționează utilizatorii cu serviciile noastre (Google Analytics, Firebase).", "Help us understand how users interact with our services (Google Analytics, Firebase Analytics).")}</li>
        <li><strong>{t("Cookie-uri funcționale:", "Functional Cookies:")}</strong> {t("Rețin preferințele dvs. precum selecția limbii.", "Remember your preferences such as language selection.")}</li>
        <li><strong>{t("Cookie-uri de plată:", "Payment Cookies:")}</strong> {t("Folosite de Stripe pentru procesarea securizată a plăților.", "Used by Stripe to process payments securely and prevent fraud.")}</li>
      </ul>

      <h2>{t("3. Cookie-uri terțe", "3. Third-Party Cookies")}</h2>
      <ul>
        <li><strong>Stripe:</strong> {t("Procesarea plăților și detectarea fraudei", "Payment processing and fraud detection")}</li>
        <li><strong>Google (Firebase):</strong> {t("Analize și notificări push", "Analytics and push notifications")}</li>
        <li><strong>Supabase:</strong> {t("Autentificare și gestionarea sesiunilor", "Authentication and session management")}</li>
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
