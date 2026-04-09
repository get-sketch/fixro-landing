"use client";
import LegalLayout from "../components/LegalLayout";
import { useLang } from "../i18n/LanguageProvider";

export default function Terms() {
  const { t } = useLang();

  return (
    <LegalLayout titleRo="Termeni și condiții" titleEn="Terms of Service">
      <h2>{t("1. Acceptarea termenilor", "1. Acceptance of Terms")}</h2>
      <p>{t(
        'Prin descărcarea, instalarea sau utilizarea aplicației FixRo ("Aplicația") sau accesarea site-ului nostru web, sunteți de acord să respectați acești Termeni și Condiții.',
        'By downloading, installing, or using the FixRo application ("App") or accessing our website, you agree to be bound by these Terms of Service.'
      )}</p>

      <h2>{t("2. Descrierea serviciului", "2. Description of Service")}</h2>
      <p>{t(
        "FixRo operează o platformă de marketplace care conectează clienții cu profesioniști independenți. FixRo nu este un furnizor de servicii; facilităm conexiunile și procesăm plățile.",
        "FixRo operates a marketplace platform that connects customers with independent service providers. FixRo is not a service provider; we facilitate connections and process payments."
      )}</p>

      <h2>{t("3. Înregistrarea contului", "3. Account Registration")}</h2>
      <ul>
        <li>{t("Să aveți cel puțin 18 ani", "Be at least 18 years of age")}</li>
        <li>{t("Să furnizați informații corecte și complete", "Provide accurate and complete registration information")}</li>
        <li>{t("Să mențineți securitatea acreditărilor contului", "Maintain the security of your account credentials")}</li>
        <li>{t("Să ne notificați imediat în caz de utilizare neautorizată", "Notify us immediately of any unauthorized account use")}</li>
      </ul>

      <h2>{t("4. Termeni pentru clienți", "4. Customer Terms")}</h2>
      <ul>
        <li>{t("Furnizați informații corecte despre serviciile necesare", "Provide accurate information about the services needed")}</li>
        <li>{t("Fiți prezenți la locația și ora convenite", "Be present at the agreed service location and time")}</li>
        <li>{t("Plătiți prin sistemul securizat al aplicației", "Pay for services through the App's secure payment system")}</li>
        <li>{t("Tratați profesioniștii cu respect", "Treat providers with respect and professionalism")}</li>
        <li>{t("Lăsați recenzii oneste și corecte", "Leave honest and fair reviews based on actual experiences")}</li>
        <li>{t("Nu încercați să ocoliți sistemul de plată", "Do not attempt to bypass the payment system")}</li>
      </ul>

      <h2>{t("5. Termeni pentru profesioniști", "5. Provider Terms")}</h2>
      <ul>
        <li>{t("Să fiți un profesionist autorizat conform legislației române", "Be a licensed professional where required by Romanian law")}</li>
        <li>{t("Să completați verificarea identității", "Complete identity verification and background check requirements")}</li>
        <li>{t("Să sosiți la timp și să prestați servicii profesionale", "Arrive on time and perform services professionally")}</li>
        <li>{t("Să acceptați plăți exclusiv prin FixRo", "Accept payments exclusively through FixRo's payment system")}</li>
        <li>{t("Să configurați un cont Stripe Connect", "Set up a Stripe Connect account for receiving payouts")}</li>
        <li>{t("Să nu solicitați clienți pentru tranzacții în afara platformei", "Do not solicit customers for off-platform transactions")}</li>
      </ul>

      <h2>{t("6. Plăți și taxe", "6. Payments & Fees")}</h2>
      <ul>
        <li><strong>{t("Comision platformă:", "Platform Commission:")}</strong> {t("Fixro percepe un comision de 15% din fiecare tranzacție. Profesioniștii primesc 85%.", "FixRo charges a 15% commission on each transaction. Providers receive 85%.")}</li>
        <li><strong>{t("Procesare plăți:", "Payment Processing:")}</strong> {t("Toate plățile sunt procesate securizat prin Stripe.", "All payments are processed securely through Stripe.")}</li>
        <li><strong>{t("Transferuri:", "Payouts:")}</strong> {t("Transferurile către profesioniști se procesează zilnic prin Stripe Connect.", "Provider payouts are processed daily via Stripe Connect.")}</li>
        <li><strong>{t("Bacșiș:", "Tips:")}</strong> {t("Clienții pot adăuga opțional bacșiș, care merge 100% la profesionist.", "Customers may optionally add tips, which go 100% to the provider.")}</li>
      </ul>

      <h2>{t("7. Politica de anulare și rambursare", "7. Cancellation & Refund Policy")}</h2>
      <ul>
        <li>{t("Anulare gratuită cu cel puțin 24 de ore înainte", "Free cancellation up to 24 hours before the scheduled service")}</li>
        <li>{t("Anulările în mai puțin de 24 de ore pot implica o taxă de până la 50%", "Cancellations within 24 hours may incur a fee of up to 50%")}</li>
        <li>{t("Dacă profesionistul nu se prezintă, clientul primește rambursare integrală", "If a provider fails to show, the customer receives a full refund")}</li>
        <li>{t("Disputele privind calitatea se raportează în 48 de ore", "Disputes about service quality should be reported within 48 hours")}</li>
        <li>{t("FixRo va media disputele și poate emite rambursări", "FixRo will mediate disputes and may issue refunds at its discretion")}</li>
      </ul>

      <h2>{t("8. Conduită interzisă", "8. Prohibited Conduct")}</h2>
      <ul>
        <li>{t("Furnizarea de informații false sau înșelătoare", "Provide false or misleading information")}</li>
        <li>{t("Hărțuirea sau discriminarea altor utilizatori", "Harass, threaten, or discriminate against any user")}</li>
        <li>{t("Încercarea de a eluda sistemul de plăți", "Attempt to circumvent the payment system")}</li>
        <li>{t("Utilizarea platformei pentru activități ilegale", "Use the platform for illegal activities")}</li>
        <li>{t("Manipularea recenziilor sau evaluărilor", "Manipulate reviews or ratings")}</li>
      </ul>

      <h2>{t("9. Limitarea răspunderii", "9. Limitation of Liability")}</h2>
      <p>{t(
        "Fixro este o platformă de marketplace și nu este parte a acordului de servicii dintre clienți și profesioniști. Nu garantăm calitatea sau siguranța serviciilor oferite.",
        "FixRo is a marketplace platform and is not a party to the service agreement between customers and providers. We do not guarantee the quality or safety of services offered."
      )}</p>

      <h2>{t("10. Legislația aplicabilă", "10. Governing Law")}</h2>
      <p>{t(
        "Acești Termeni sunt guvernați de legile din România. Orice dispute se vor soluționa în instanțele din București.",
        "These Terms are governed by the laws of Romania. Any disputes shall be resolved in the courts of Bucharest."
      )}</p>

      <h2>{t("11. Contact", "11. Contact")}</h2>
      <p>Email: <a href="mailto:legal@fixro.app">legal@fixro.app</a></p>
    </LegalLayout>
  );
}
