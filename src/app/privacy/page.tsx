import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for LiveCombatSports viewers and customers.",
};

export default function PrivacyPage() {
  return (
    <section className="section-band min-h-screen">
      <div className="legal-shell">
        <div className="section-mark">Legal</div>
        <h1 className="mt-5 text-5xl font-black tracking-tight text-white sm:text-6xl">
          Privacy Policy
        </h1>
        <div className="legal-card">
          <p>
            LiveCombatSports collects the information needed to provide streaming access,
            process support requests, improve the platform, and protect customers from
            misuse or fraud.
          </p>
          <p>
            We use trusted service providers for hosting, analytics, payments, email, and
            customer support. We do not sell personal information.
          </p>
          <p>
            Contact us to request access, correction, or deletion of your information.
            Some records may be retained where required for security, accounting, or legal
            obligations.
          </p>
        </div>
        <Link
          href="/contact"
          className="legal-action transition-colors hover:bg-accent-green-glow"
        >
          Contact Support
        </Link>
      </div>
    </section>
  );
}
