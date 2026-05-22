"use client";
import LegalLayout from "../components/LegalLayout";
import { useLang } from "../i18n/LanguageProvider";

export default function DataDeletion() {
  const { t } = useLang();

  return (
    <LegalLayout titleRo="Șterge datele mele" titleEn="Delete My Data">
      <h2>{t("Cum să-ți ștergi contul și datele Fixro", "How to Delete Your Fixro Account and Data")}</h2>
      <p>{t(
        'Aveți dreptul de a solicita ștergerea datelor personale, în conformitate cu GDPR Art. 17 ("Dreptul la ștergere").',
        'You have the right to request the deletion of your personal data, in accordance with GDPR Article 17 ("Right to Erasure").'
      )}</p>

      <h2>{t("Opțiunea 1: Ștergere din aplicație (recomandat)", "Option 1: Delete Through the App (recommended)")}</h2>
      <ol>
        <li>{t("Deschide aplicația Fixro", "Open the Fixro app")}</li>
        <li>{t('Mergi la Profil → Securitate', 'Go to Profile → Security')}</li>
        <li>{t('Apasă "Șterge contul" în secțiunea "Zona periculoasă"', 'Tap "Delete Account" in the "Danger Zone" section')}</li>
        <li>{t("Confirmă ștergerea", "Confirm the deletion")}</li>
      </ol>
      <p>{t(
        "Contul și datele asociate sunt șterse imediat. Anumite înregistrări legate de plăți și facturi sunt păstrate până la 6 ani pentru conformitate fiscală (vezi mai jos).",
        "Your account and associated data are deleted immediately. Certain payment and invoice records are retained for up to 6 years for fiscal compliance (see below)."
      )}</p>
      <p>{t(
        "Dacă ai rezervări sau plăți active, ștergerea va fi blocată până când acestea sunt finalizate sau anulate. Te vom anunța în aplicație.",
        "If you have active bookings or in-flight payments, deletion is blocked until they are completed or cancelled. The app will tell you which ones."
      )}</p>

      <h2>{t("Opțiunea 2: Solicitare prin email", "Option 2: Request by Email")}</h2>
      <p>{t("Dacă nu mai ai acces la aplicație, trimiteți un email la", "If you no longer have access to the app, send an email to")} <a href="mailto:support-fixro@inanu.art">support-fixro@inanu.art</a> {t("cu:", "with:")}</p>
      <ul>
        <li>{t('Subiect: "Solicitare ștergere date"', 'Subject: "Data Deletion Request"')}</li>
        <li>{t("Adresa de email asociată contului Fixro", "The email address associated with your Fixro account")}</li>
        <li>{t("Numele complet pentru verificare", "Your full name for verification")}</li>
      </ul>

      <h2>{t("Ce se șterge imediat", "What Is Deleted Immediately")}</h2>
      <ul>
        <li>{t("Informații profil (nume, email, telefon, foto)", "Profile information (name, email, phone, photo)")}</li>
        <li>{t("Istoricul rezervărilor terminate", "History of completed bookings")}</li>
        <li>{t("Mesajele din chat (anonimizate la celălalt capăt al conversației)", "Chat messages (anonymized on the counterparty's side)")}</li>
        <li>{t("Adresele salvate și preferințele", "Saved addresses and preferences")}</li>
        <li>{t("Recenziile devin anonime (autorul apare ca „Client Fixro”)", "Reviews are anonymized (author shown as \"Fixro Customer\")")}</li>
        <li>{t("Documentele de verificare (CI, licență, cazier)", "Verification documents (ID card, license, criminal record)")}</li>
        <li>{t("Cardurile salvate sunt detașate de Stripe", "Saved payment methods are detached from Stripe")}</li>
      </ul>

      <h2>{t("Ce trebuie păstrat", "What We Must Retain")}</h2>
      <ul>
        <li><strong>{t("Evidențe financiare:", "Financial records:")}</strong> {t("Tranzacții, facturi și evidențe de plată se păstrează 6 ani pentru conformitate fiscală.", "Transaction data, invoices, and payment records are retained for 6 years for tax compliance.")}</li>
        <li><strong>{t("Obligații legale:", "Legal obligations:")}</strong> {t("Datele legate de dispute active pot fi păstrate până la rezolvare.", "Data related to active disputes may be retained until resolution.")}</li>
      </ul>

      <h2>{t("Contact", "Contact")}</h2>
      <p>Email: <a href="mailto:support-fixro@inanu.art">support-fixro@inanu.art</a></p>
    </LegalLayout>
  );
}
