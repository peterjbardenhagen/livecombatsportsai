import Link from "next/link";
import { Flame } from "lucide-react";

// Brand icon components
function BrandIcon({ children, label }: { children: string; label: string }) {
  return (
    <span className="text-lg font-bold" role="img" aria-label={label}>
      {children}
    </span>
  );
}

const footerLinks = {
  platform: [
    { href: "/shows", label: "Upcoming Shows" },
    { href: "/past-shows", label: "Past Shows" },
    { href: "/watch", label: "LCS TV 24/7" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQ" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Use" },
    { href: "/refund", label: "Refund Policy" },
  ],
};

const socials = [
  { href: "#", label: "YouTube", icon: "▶" },
  { href: "#", label: "Facebook", icon: "f" },
  { href: "#", label: "Instagram", icon: "📷" },
  { href: "#", label: "Twitter", icon: "𝕏" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border-default bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Flame className="w-7 h-7 text-accent-yellow" />
              <span className="text-xl font-display font-bold text-white">
                LIVE<span className="text-accent-green">COMBAT</span>
                <span className="text-accent-yellow">SPORTS</span>
              </span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed max-w-sm">
              The ultimate destination for combat sports streaming. Live PPV events,
              exclusive content, and AI-powered fight analysis — all in one place.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="p-2.5 rounded-lg glass hover:bg-accent-green/10 hover:border-accent-green/30 transition-all group flex items-center justify-center w-10 h-10"
                >
                  <span className="text-sm text-text-muted group-hover:text-accent-green transition-colors font-bold">
                    {s.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-text-secondary mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.platform.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-text-muted hover:text-white text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-text-secondary mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-text-muted hover:text-white text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-text-secondary mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-text-muted hover:text-white text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border-default flex flex-col sm:flex-row items-center justify-between gap-4 text-text-muted text-xs">
          <p>&copy; {new Date().getFullYear()} LiveCombatSports. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Powered by{" "}
            <Flame className="w-3 h-3 text-accent-green" />
          </p>
        </div>
      </div>
    </footer>
  );
}
