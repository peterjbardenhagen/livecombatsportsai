import Link from "next/link";

export const metadata = {
  title: "Terms of Use",
  description: "Terms of use for LiveCombatSports streaming services.",
};

export default function TermsPage() {
  return (
    <section className="section-band min-h-screen">
      <div className="legal-shell">
        <div className="section-mark">Legal</div>
        <h1 className="mt-5 text-5xl font-black tracking-tight text-white sm:text-6xl">
          Terms of Use
        </h1>
        <div className="legal-card">
          <p>
            By using LiveCombatSports, you agree to access streams and platform features
            for personal viewing only and to follow all event, territory, and payment
            restrictions shown at checkout or on event pages.
          </p>
          <p>
            You must not copy, rebroadcast, record, scrape, share access credentials, or
            interfere with the platform. We may suspend access where misuse, chargeback
            fraud, or rights violations are detected.
          </p>
          <p>
            Event schedules, fight cards, and stream availability can change. We aim to
            keep listings current and provide support when an issue affects paid access.
          </p>
        </div>
        <Link
          href="/shows"
          className="legal-action transition-colors hover:bg-accent-green-glow"
        >
          View Events
        </Link>
      </div>
    </section>
  );
}
