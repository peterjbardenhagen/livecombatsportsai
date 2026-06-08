import Link from "next/link";
import { Camera, MessageCircle, Play, Video } from "lucide-react";

const footerLinks = [
  {
    title: "Platform",
    links: [
      { href: "/shows", label: "Upcoming Shows" },
      { href: "/past-shows", label: "Past Shows" },
      { href: "/watch", label: "LCS TV 24/7" },
      { href: "/pb", label: "LCS-PB BI" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Use" },
      { href: "/refund", label: "Refund Policy" },
    ],
  },
];

const socials = [
  { href: "#", label: "YouTube", icon: Video },
  { href: "#", label: "Facebook", icon: MessageCircle },
  { href: "#", label: "Instagram", icon: Camera },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#050706]">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Link href="/" className="inline-flex" aria-label="LiveCombatSports.ai home">
              <span className="brand-wordmark brand-wordmark-footer">
                Live<span>Combat</span>Sports.ai
              </span>
            </Link>
            <p className="mt-5 max-w-xl text-sm leading-7 text-text-muted">
              Premium live combat sports streaming, on-demand replays, LCS TV, and AI-powered
              fight insight in one high-performance platform.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/shows" className="inline-flex min-h-11 items-center gap-2 rounded-md bg-accent-green px-4 text-sm font-extrabold text-[#021108]">
                <Play className="h-4 w-4" fill="currentColor" />
                Watch Live
              </Link>
              <div className="flex gap-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="grid h-11 w-11 place-items-center rounded-md border border-white/12 bg-white/[0.04] text-text-secondary transition-colors hover:border-accent-green/40 hover:text-accent-green-glow"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h2 className="font-mono text-xs font-extrabold uppercase text-text-secondary">
                  {group.title}
                </h2>
                <ul className="mt-4 grid gap-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm font-semibold text-text-muted transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs font-semibold text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} LiveCombatSports.ai. All rights reserved.</p>
          <p>
            Website design &amp; development by{" "}
            <a
              href="https://www.digitalresponse.com.au/"
              target="_blank"
              rel="noreferrer"
              className="text-white underline decoration-accent-green/60 underline-offset-4 hover:text-accent-green-glow"
            >
              Digital Response
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
