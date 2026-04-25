"use client";
import LegalLayout from "../components/LegalLayout";
import { useLang } from "../i18n/LanguageProvider";

export default function DataDeletion() {
  const { t } = useLang();

  return (
    <LegalLayout titleRo="Șterge datele mele" titleEn="Delete My Data">
      <h2>{t("Cum să-ți ștergi contul și datele FixRo", "How to Delete Your FixRo Account and Data")}</h2>
      <p>{t(
        'Aveți dreptul de a solicita ștergerea datelor personale, în conformitate cu GDPR Art. 17 ("Dreptul la ștergere").',
        'You have the right to request the deletion of your personal data, in accordance with GDPR Article 17 ("Right to Erasure").'
      )}</p>

      <h2>{t("Opțiunea 1: Ștergere din aplicație", "Option 1: Delete Through the App")}</h2>
      <ol>
        <li>{t("Deschide aplicația FixRo", "Open the FixRo app")}</li>
        <li>{t('Mergi la Profil → Setări', 'Go to Profile → Settings')}</li>
        <li>{t('Derulează la "Șterge contul"', 'Scroll to "Delete Account"')}</li>
        <li>{t("Confirmă ștergerea", "Confirm the deletion")}</li>
      </ol>
      <p>{t("Contul și datele asociate vor fi șterse permanent în 30 de zile.", "Your account and associated personal data will be permanently deleted within 30 days.")}</p>

      <h2>{t("Opțiunea 2: Solicitare prin email", "Option 2: Request by Email")}</h2>
      <p>{t("Trimiteți un email la", "Send an email to")} <a href="mailto:support-fixro@inanu.art">support-fixro@inanu.art</a> {t("cu:", "with:")}</p>
      <ul>
        <li>{t('Subiect: "Solicitare ștergere date"', 'Subject: "Data Deletion Request"')}</li>
        <li>{t("Adresa de email asociată contului FixRo", "The email address associated with your FixRo account")}</li>
        <li>{t("Numele complet pentru verificare", "Your full name for verification")}</li>
      </ul>

      <h2>{t("Ce se șterge", "What Gets Deleted")}</h2>
      <ul>
        <li>{t("Informații profil (nume, email, telefon, foto)", "Profile information (name, email, phone, photo)")}</li>
        <li>{t("Istoricul rezervărilor și preferințele", "Booking history and preferences")}</li>
        <li>{t("Mesajele din chat", "Chat messages")}</li>
        <li>{t("Adresele salvate", "Saved addresses")}</li>
        <li>{t("Recenziile (anonimizate dar nepublicate)", "Reviews (anonymized but not removed)")}</li>
        <li>{t("Documentele de verificare ale profesioniștilor", "Provider verification documents")}</li>
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
