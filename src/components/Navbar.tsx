"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Play, X } from "lucide-react";
import { Logo } from "./Logo";

const navLinks = [
  { href: "/shows", label: "Upcoming" },
  { href: "/past-shows", label: "Past Shows" },
  { href: "/watch", label: "LCS TV" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-bg-primary/82 shadow-card backdrop-blur-2xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="LiveCombatSports home">
          <Logo size="md" variant="full" />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3.5 py-2 text-sm font-semibold text-text-secondary transition-colors hover:bg-white/[0.055] hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/shows" className="ml-2 inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-4 text-sm font-extrabold text-[#0D0D0D] shadow-glow-primary transition-transform hover:-translate-y-0.5">
            <Play className="h-4 w-4" fill="currentColor" />
            Watch Live
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/15 bg-white/[0.055] text-white lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="animate-slide-up border-t border-white/10 bg-bg-primary/95 px-5 pb-5 pt-2 backdrop-blur-2xl lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-3 text-base font-semibold text-text-secondary hover:bg-white/[0.055] hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/shows"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-4 font-extrabold text-[#0D0D0D]"
            >
              <Play className="h-4 w-4" fill="currentColor" />
              Watch Live
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
