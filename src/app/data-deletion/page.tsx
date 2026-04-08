import type { Metadata } from "next";
import LegalLayout from "../components/LegalLayout";

export const metadata: Metadata = {
  title: "Delete My Data — FixRo",
  description: "Request deletion of your FixRo account and personal data.",
};

export default function DataDeletion() {
  return (
    <LegalLayout title="Delete My Data">
      <h2>How to Delete Your FixRo Account and Data</h2>
      <p>
        You have the right to request the deletion of your personal data at any time, in accordance with GDPR Article 17 (&quot;Right to Erasure&quot;).
      </p>

      <h2>Option 1: Delete Through the App</h2>
      <p>The easiest way to delete your account and data:</p>
      <ol className="list-decimal list-inside space-y-2">
        <li>Open the FixRo app</li>
        <li>Go to <strong>Profile</strong> → <strong>Settings</strong></li>
        <li>Scroll to <strong>&quot;Delete Account&quot;</strong></li>
        <li>Confirm the deletion</li>
      </ol>
      <p>Your account and associated personal data will be permanently deleted within 30 days.</p>

      <h2>Option 2: Request by Email</h2>
      <p>
        Send an email to <a href="mailto:privacy@fixro.app">privacy@fixro.app</a> with:
      </p>
      <ul>
        <li>Subject line: &quot;Data Deletion Request&quot;</li>
        <li>The email address associated with your FixRo account</li>
        <li>Your full name for verification</li>
      </ul>
      <p>We will process your request within 30 days and confirm deletion by email.</p>

      <h2>What Gets Deleted</h2>
      <ul>
        <li>Your profile information (name, email, phone, photo)</li>
        <li>Your booking history and preferences</li>
        <li>Your chat messages</li>
        <li>Your saved addresses</li>
        <li>Your reviews (anonymized but not removed)</li>
        <li>Provider verification documents</li>
      </ul>

      <h2>What We Must Retain</h2>
      <p>Romanian law requires us to retain certain records:</p>
      <ul>
        <li><strong>Financial records:</strong> Transaction data, invoices, and payment records are retained for 6 years for tax and fiscal compliance.</li>
        <li><strong>Legal obligations:</strong> Data related to active disputes or legal proceedings may be retained until resolution.</li>
      </ul>
      <p>Retained data is pseudonymized and used only for legal compliance purposes.</p>

      <h2>Contact</h2>
      <p>
        For questions about data deletion:<br />
        Email: <a href="mailto:privacy@fixro.app">privacy@fixro.app</a>
      </p>
    </LegalLayout>
  );
}
