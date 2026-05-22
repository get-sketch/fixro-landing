"use client";
import LegalLayout from "../components/LegalLayout";
import { useLang } from "../i18n/LanguageProvider";

export default function GDPR() {
  const { t } = useLang();

  return (
    <LegalLayout titleRo="Conformitate GDPR" titleEn="GDPR Compliance">
      <h2>{t("1. Angajamentul nostru", "1. Our Commitment")}</h2>
      <p>{t(
        "Fixro se angajează să protejeze confidențialitatea și drepturile persoanelor în conformitate cu Regulamentul General privind Protecția Datelor (UE) 2016/679 (\"GDPR\") și legislația română de protecție a datelor (Legea 190/2018).",
        "Fixro is committed to protecting the privacy and rights of individuals in accordance with the General Data Protection Regulation (EU) 2016/679 (\"GDPR\") and Romanian data protection legislation (Law 190/2018)."
      )}</p>

      <h2>{t("2. Operator de date", "2. Data Controller")}</h2>
      <p>{t(
        "Fixro acționează ca Operator de Date pentru datele personale colectate prin platforma noastră. Pentru datele de plată procesate de Stripe, aceasta acționează ca Operator de Date independent.",
        "Fixro acts as the Data Controller for personal data collected through our platform. For provider payment data processed by Stripe, Stripe acts as an independent Data Controller."
      )}</p>

      <h2>{t("3. Drepturile dvs. conform GDPR", "3. Your Rights Under GDPR")}</h2>

      <h3>{t("Dreptul de acces (Art. 15)", "Right of Access (Art. 15)")}</h3>
      <p>{t("Puteți solicita o copie a tuturor datelor personale pe care le deținem. Răspundem în 30 de zile.", "You can request a copy of all personal data we hold about you. We will respond within 30 days.")}</p>

      <h3>{t("Dreptul la rectificare (Art. 16)", "Right to Rectification (Art. 16)")}</h3>
      <p>{t("Puteți corecta datele inexacte prin setările profilului sau contactându-ne.", "You can correct inaccurate data through your profile settings or by contacting us.")}</p>

      <h3>{t("Dreptul la ștergere (Art. 17)", "Right to Erasure (Art. 17)")}</h3>
      <p>{t(
        "Puteți șterge contul direct din aplicație (Profil → Securitate → Șterge contul). Datele personale sunt eliminate imediat. Anumite înregistrări legate de plăți și facturi sunt păstrate 6 ani pentru conformitate fiscală conform legislației române.",
        "You can delete your account directly from the app (Profile → Security → Delete Account). Personal data is removed immediately. Certain payment and invoice records are retained for 6 years for Romanian fiscal compliance."
      )}</p>

      <h3>{t("Dreptul la portabilitate (Art. 20)", "Right to Data Portability (Art. 20)")}</h3>
      <p>{t("Puteți solicita datele într-un format structurat (JSON sau CSV).", "You can request your data in a structured, machine-readable format (JSON or CSV).")}</p>

      <h3>{t("Dreptul la restricție (Art. 18)", "Right to Restriction (Art. 18)")}</h3>
      <p>{t("Puteți solicita limitarea procesării datelor.", "You can request that we limit how we process your data.")}</p>

      <h3>{t("Dreptul de opoziție (Art. 21)", "Right to Object (Art. 21)")}</h3>
      <p>{t("Vă puteți opune procesării, inclusiv marketingului direct.", "You can object to processing, including direct marketing.")}</p>

      <h2>{t("4. Măsuri de protecție", "4. Data Protection Measures")}</h2>
      <ul>
        <li>{t("Criptare în tranzit (TLS 1.3) și în repaus (AES-256)", "Encryption in transit (TLS 1.3) and at rest (AES-256)")}</li>
        <li>{t("Controlul accesului și permisiuni bazate pe roluri", "Access controls and role-based permissions")}</li>
        <li>{t("Audituri de securitate regulate", "Regular security audits and vulnerability assessments")}</li>
        <li>{t("Minimizarea datelor — colectăm doar ce este necesar", "Data minimization — we collect only what is necessary")}</li>
        <li>{t("Datele de plată gestionate exclusiv de Stripe (PCI DSS Nivel 1)", "Payment data handled exclusively by Stripe (PCI DSS Level 1)")}</li>
      </ul>

      <h2>{t("5. Notificarea încălcărilor", "5. Data Breach Notification")}</h2>
      <p>{t(
        "În cazul unei încălcări a datelor, vom notifica ANSPDCP în 72 de ore și persoanele afectate fără întârziere, conform GDPR Art. 33-34.",
        "In case of a data breach, we will notify the ANSPDCP within 72 hours and affected individuals without undue delay, as required by GDPR Article 33-34."
      )}</p>

      <h2>{t("6. Sub-procesatori", "6. Sub-Processors")}</h2>
      <ul>
        <li><strong>Supabase</strong> — {t("Bază de date, autentificare, stocare — regiune UE", "Database, authentication, file storage — EU region")}</li>
        <li><strong>Stripe</strong> — {t("Procesare plăți — UE/SUA (cu SCC-uri)", "Payment processing — EU/US (with SCCs)")}</li>
        <li><strong>Google Firebase Cloud Messaging</strong> — {t("Notificări push — UE/SUA (cu SCC-uri)", "Push notifications — EU/US (with SCCs)")}</li>
      </ul>

      <h2>{t("7. Autoritate de supraveghere", "7. Supervisory Authority")}</h2>
      <p>{t(
        "Aveți dreptul de a depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP):",
        "You have the right to lodge a complaint with the Romanian Data Protection Authority (ANSPDCP):"
      )}<br />
        Website: <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer">www.dataprotection.ro</a><br />
        Email: anspdcp@dataprotection.ro
      </p>

      <h2>{t("8. Contact DPO", "8. Data Protection Officer")}</h2>
      <p>Email: <a href="mailto:support-fixro@inanu.art">support-fixro@inanu.art</a></p>
    </LegalLayout>
  );
}
