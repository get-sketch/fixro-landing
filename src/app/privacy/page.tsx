"use client";
import LegalLayout from "../components/LegalLayout";
import { useLang } from "../i18n/LanguageProvider";

// Note: metadata must be in a server component or use generateMetadata
// Since this is "use client", title is set via LegalLayout nav breadcrumb

export default function PrivacyPolicy() {
  const { t } = useLang();

  return (
    <LegalLayout titleRo="Politica de confidențialitate" titleEn="Privacy Policy">
      <h2>{t("1. Introducere", "1. Introduction")}</h2>
      <p>{t(
        'FixRo ("noi", "nostru" sau "al nostru") operează o platformă de servicii pentru casă disponibilă ca aplicație mobilă ("Aplicația") și site web ("fixro.app"). Această Politică de Confidențialitate explică modul în care colectăm, folosim, divulgăm și protejăm informațiile dumneavoastră personale.',
        'FixRo ("we," "our," or "us") operates a home services marketplace platform available as a mobile application ("App") and website ("fixro.app"). This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our services.'
      )}</p>
      <p>{t(
        "Prin utilizarea FixRo, consimțiți la practicile de date descrise în această politică.",
        "By using FixRo, you consent to the data practices described in this policy."
      )}</p>

      <h2>{t("2. Informații pe care le colectăm", "2. Information We Collect")}</h2>
      <p>{t("Colectăm următoarele categorii de date personale:", "We collect the following categories of personal data:")}</p>
      <ul>
        <li><strong>{t("Informații cont:", "Account Information:")}</strong> {t("Nume complet, adresă de email, număr de telefon, fotografie de profil și oraș de reședință.", "Full name, email address, phone number, profile photo, and city of residence.")}</li>
        <li><strong>{t("Date de localizare:", "Location Data:")}</strong> {t("Coordonate GPS și date de adresă când utilizați funcțiile bazate pe locație (cu consimțământul dvs.).", "GPS coordinates and address data when you use location-based features (with your consent).")}</li>
        <li><strong>{t("Informații de plată:", "Payment Information:")}</strong> {t("Detaliile cardului de plată sunt procesate securizat de Stripe. Nu stocăm numerele de card pe serverele noastre.", "Payment card details are processed securely by Stripe. We do not store credit card numbers on our servers.")}</li>
        <li><strong>{t("Date furnizor servicii:", "Service Provider Data:")}</strong> {t("Documente de identitate, licențe profesionale, experiență și detalii bancare (prin Stripe Connect).", "Identification documents, professional licenses, work experience, and bank account details (via Stripe Connect).")}</li>
        <li><strong>{t("Date de utilizare:", "Usage Data:")}</strong> {t("Analize de utilizare, informații despre dispozitiv, adresă IP.", "App usage analytics, device information, IP address.")}</li>
        <li><strong>{t("Comunicări:", "Communications:")}</strong> {t("Mesaje schimbate prin sistemul nostru de chat.", "Messages exchanged through our in-app chat system.")}</li>
        <li><strong>{t("Recenzii:", "Reviews and Ratings:")}</strong> {t("Conținut trimis ca recenzii sau evaluări.", "Content you submit as reviews or ratings.")}</li>
      </ul>

      <h2>{t("3. Cum folosim informațiile", "3. How We Use Your Information")}</h2>
      <ul>
        <li>{t("Furnizarea, întreținerea și îmbunătățirea serviciilor", "Provide, maintain, and improve our platform and services")}</li>
        <li>{t("Procesarea rezervărilor și facilitarea conexiunilor", "Process bookings and facilitate connections between customers and providers")}</li>
        <li>{t("Procesarea plăților securizate prin Stripe", "Process payments securely through Stripe")}</li>
        <li>{t("Trimiterea confirmărilor și actualizărilor", "Send booking confirmations, reminders, and service updates")}</li>
        <li>{t("Verificarea identității furnizorilor", "Verify provider identities and qualifications")}</li>
        <li>{t("Detectarea și prevenirea fraudei", "Detect, investigate, and prevent fraud and security incidents")}</li>
        <li>{t("Respectarea obligațiilor legale", "Comply with legal obligations and enforce our terms")}</li>
      </ul>

      <h2>{t("4. Baza legală (GDPR)", "4. Legal Basis for Processing (GDPR)")}</h2>
      <ul>
        <li><strong>{t("Executarea contractului:", "Contract Performance:")}</strong> {t("Rezervări, plăți, conectare cu furnizori.", "Bookings, payments, provider matching.")}</li>
        <li><strong>{t("Interes legitim:", "Legitimate Interest:")}</strong> {t("Prevenirea fraudei, securitate.", "Fraud prevention, platform security.")}</li>
        <li><strong>{t("Consimțământ:", "Consent:")}</strong> {t("Comunicări de marketing, localizare.", "Marketing communications, location services.")}</li>
        <li><strong>{t("Obligație legală:", "Legal Obligation:")}</strong> {t("Evidențe fiscale, cerințe AML.", "Tax records, anti-money laundering requirements.")}</li>
      </ul>

      <h2>{t("5. Partajarea datelor", "5. Data Sharing")}</h2>
      <p>{t("Partajăm datele doar cu:", "We share your data only with:")}</p>
      <ul>
        <li><strong>{t("Furnizori/Clienți:", "Service Providers/Customers:")}</strong> {t("Informații relevante de rezervare.", "Relevant booking information.")}</li>
        <li><strong>Stripe:</strong> {t("Procesarea plăților și gestionarea transferurilor.", "Payment processing and provider payout management.")}</li>
        <li><strong>Google/Apple:</strong> {t("Servicii de autentificare.", "Authentication services.")}</li>
        <li><strong>Supabase:</strong> {t("Infrastructură backend.", "Backend infrastructure provider.")}</li>
        <li><strong>Firebase:</strong> {t("Notificări push și analize.", "Push notifications and analytics.")}</li>
      </ul>
      <p><strong>{t("NU vindem datele dvs. personale terților.", "We do NOT sell your personal data to third parties.")}</strong></p>

      <h2>{t("6. Păstrarea datelor", "6. Data Retention")}</h2>
      <p>{t(
        "Păstrăm datele cât timp contul este activ. După ștergerea contului, anumite date sunt păstrate până la 6 ani pentru conformitate fiscală românească.",
        "We retain your data for as long as your account is active. After account deletion, certain data is retained for up to 6 years for Romanian fiscal compliance."
      )}</p>

      <h2>{t("7. Drepturile dvs.", "7. Your Rights")}</h2>
      <ul>
        <li><strong>{t("Acces:", "Access:")}</strong> {t("Solicitați o copie a datelor", "Request a copy of your data")}</li>
        <li><strong>{t("Rectificare:", "Rectification:")}</strong> {t("Corectați date inexacte", "Correct inaccurate data")}</li>
        <li><strong>{t("Ștergere:", "Erasure:")}</strong> {t('Solicitați ștergerea datelor ("dreptul de a fi uitat")', 'Request deletion ("right to be forgotten")')}</li>
        <li><strong>{t("Portabilitate:", "Portability:")}</strong> {t("Primiți datele într-un format structurat", "Receive your data in a structured format")}</li>
        <li><strong>{t("Restricție:", "Restriction:")}</strong> {t("Solicitați restricția procesării", "Request restriction of processing")}</li>
        <li><strong>{t("Opoziție:", "Objection:")}</strong> {t("Opuneți-vă procesării", "Object to processing")}</li>
        <li><strong>{t("Retragere consimțământ:", "Withdraw Consent:")}</strong> {t("Retrageți consimțământul oricând", "Withdraw consent at any time")}</li>
      </ul>
      <p>{t("Contact:", "Contact:")} <a href="mailto:support-fixro@inanu.art">support-fixro@inanu.art</a></p>

      <h2>{t("8. Securitatea datelor", "8. Data Security")}</h2>
      <p>{t(
        "Implementăm măsuri de securitate standard: criptare în tranzit (TLS/SSL), criptare în repaus, autentificare securizată. Datele de plată sunt gestionate exclusiv de Stripe (certificat PCI DSS Nivel 1).",
        "We implement industry-standard security measures including encryption in transit (TLS/SSL), encryption at rest, secure authentication. Payment data is handled exclusively by Stripe (PCI DSS Level 1 certified)."
      )}</p>

      <h2>{t("9. Confidențialitatea copiilor", "9. Children's Privacy")}</h2>
      <p>{t(
        "Serviciile noastre nu sunt destinate persoanelor sub 18 ani. Nu colectăm cu bună știință date de la minori.",
        "Our services are not intended for individuals under 18. We do not knowingly collect data from minors."
      )}</p>

      <h2>{t("10. Contact", "10. Contact")}</h2>
      <p>
        Email: <a href="mailto:support-fixro@inanu.art">support-fixro@inanu.art</a><br />
        {t("Autoritate de protecție a datelor:", "Data Protection Authority:")} <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer">ANSPDCP (România)</a>
      </p>
    </LegalLayout>
  );
}
