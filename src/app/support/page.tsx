"use client";
import LegalLayout from "../components/LegalLayout";
import { useLang } from "../i18n/LanguageProvider";

export default function Support() {
  const { t } = useLang();

  return (
    <LegalLayout titleRo="Centru de ajutor" titleEn="Help Center">
      <h2>{t("Întrebări frecvente", "Frequently Asked Questions")}</h2>

      <h3>{t("Cum rezerv un serviciu?", "How do I book a service?")}</h3>
      <p>{t(
        "Deschide aplicația Fixro, răsfoiește categoriile de servicii, selectează un profesionist, alege data și ora, apoi confirmă rezervarea. Vei primi o notificare de confirmare imediat.",
        "Open the FixRo app, browse service categories, select a provider, choose a date and time, and confirm your booking. You'll receive a confirmation notification immediately."
      )}</p>

      <h3>{t("Cum funcționează plățile?", "How do payments work?")}</h3>
      <p>{t(
        "Toate plățile sunt procesate securizat prin Stripe. Poți plăti cu card de credit/debit, Apple Pay sau Google Pay. Detaliile de plată nu sunt stocate pe serverele noastre.",
        "All payments are processed securely through Stripe. You can pay with credit/debit card, Apple Pay, or Google Pay. Your payment details are never stored on our servers."
      )}</p>

      <h3>{t("Pot anula o rezervare?", "Can I cancel a booking?")}</h3>
      <p>{t(
        'Da. Anularea gratuită este disponibilă cu cel puțin 24 de ore înainte. Anulările în mai puțin de 24 de ore pot implica o taxă de până la 50%. Poți anula din secțiunea "Rezervările mele".',
        'Yes. Free cancellation is available up to 24 hours before the scheduled service. Cancellations within 24 hours may incur a fee of up to 50%. You can cancel from the "My Bookings" section.'
      )}</p>

      <h3>{t("Cum sunt verificați profesioniștii?", "How are providers verified?")}</h3>
      <p>{t(
        "Toți profesioniștii trec printr-un proces de verificare a identității, validarea licenței profesionale și monitorizarea recenziilor clienților.",
        "All providers go through identity verification, professional license validation, and customer review monitoring."
      )}</p>

      <h3>{t("Ce fac dacă nu sunt mulțumit de serviciu?", "What if I'm not satisfied with the service?")}</h3>
      <p>{t(
        'Raportează problema în 48 de ore prin aplicație. Mergi la "Rezervările mele", selectează rezervarea și apasă "Raportează problemă". Echipa noastră va analiza cazul.',
        'Report the issue within 48 hours through the app. Go to "My Bookings", select the booking, and tap "Report Issue". Our support team will review the case.'
      )}</p>

      <h3>{t("Cum devin Pro?", "How do I become a provider?")}</h3>
      <p>{t(
        'În aplicație, mergi la Profil → "Devino Pro". Completează formularul cu detaliile profesionale, încarcă actul de identitate și licențele relevante. Va trebui să configurezi și un cont Stripe.',
        'In the app, go to Profile → "Become a Pro". Complete the registration form, upload your ID and licenses. You\'ll also need to set up a Stripe account to receive payments.'
      )}</p>

      <h3>{t("Cum sunt plătiți profesioniștii?", "How do providers get paid?")}</h3>
      <p>{t(
        'Profesioniștii primesc 85% din fiecare plată direct în contul bancar prin Stripe Connect. Transferurile se procesează zilnic. Configurează contul bancar din Profil → "Configurare cont bancar".',
        'Providers receive 85% of each payment directly to their bank account via Stripe Connect. Payouts are processed daily. Set up your bank account in Profile → "Bank Account Setup".'
      )}</p>

      <h3>{t("Cum îmi șterg contul?", "How do I delete my account?")}</h3>
      <p>{t(
        'Mergi la Profil → Setări → "Șterge contul" în aplicație, sau vizitează pagina noastră de ',
        'Go to Profile → Settings → "Delete Account" in the app, or visit our '
      )}<a href="/data-deletion">{t("Ștergere date", "Data Deletion page")}</a>.</p>

      <h2>{t("Contactează suportul", "Contact Support")}</h2>
      <p>
        📧 Email: <a href="mailto:support@fixro.app">support@fixro.app</a><br />
        📞 {t("Telefon:", "Phone:")} +40 760 269 269<br />
        ⏰ {t("Program suport: Luni–Vineri, 9:00–18:00 (EET)", "Support hours: Monday–Friday, 9:00–18:00 (EET)")}
      </p>
    </LegalLayout>
  );
}
