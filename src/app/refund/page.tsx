import Link from "next/link";

export const metadata = {
  title: "Refund Policy",
  description: "Refund policy for LiveCombatSports event purchases.",
};

export default function RefundPage() {
  return (
    <section className="section-band min-h-screen">
      <div className="legal-shell">
        <div className="section-mark">Legal</div>
        <h1 className="mt-5 text-5xl font-black tracking-tight text-white sm:text-6xl">
          Refund Policy
        </h1>
        <div className="legal-card">
          <p>
            Refunds are reviewed case by case for paid events where verified platform
            issues prevent access during the live broadcast window.
          </p>
          <p>
            Refunds are generally not available for completed events, missed viewing,
            unsupported devices, network issues outside our control, or purchases made in
            error after stream access has been granted.
          </p>
          <p>
            If you need help with a purchase, contact support with the event name, order
            email, and a brief description of what happened.
          </p>
        </div>
        <Link
          href="/contact"
          className="legal-action transition-colors hover:bg-accent-green-glow"
        >
          Request Support
        </Link>
      </div>
    </section>
  );
}
