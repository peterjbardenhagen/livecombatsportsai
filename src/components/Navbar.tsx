"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Flame, Tv, Play, Info, HelpCircle, Mail } from "lucide-react";

const navLinks = [
  { href: "/shows", label: "Upcoming", icon: Flame },
  { href: "/past-shows", label: "Past Shows", icon: Play },
  { href: "/watch", label: "LCS TV", icon: Tv },
  { href: "/about", label: "About", icon: Info },
  { href: "/faq", label: "FAQ", icon: HelpCircle },
  { href: "/contact", label: "Contact", icon: Mail },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-strong shadow-card py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-accent-green rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
            <Flame className="w-8 h-8 text-accent-yellow relative z-10" />
          </div>
          <div className="hidden sm:block">
            <span className="text-lg font-display font-bold tracking-tight text-white">
              LIVE<span className="text-accent-green">COMBAT</span>
              <span className="text-accent-yellow">SPORTS</span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-text-secondary hover:text-white hover:bg-glass-bg transition-all duration-200 text-sm font-medium"
            >
              <link.icon className="w-4 h-4" />
              {link.label}
            </Link>
          ))}
          <Link
            href="/shows"
            className="ml-3 px-6 py-2.5 bg-accent-green hover:bg-accent-green-glow text-black font-bold rounded-lg transition-all duration-300 hover:shadow-glow-green text-sm uppercase tracking-wider"
          >
            Watch Live
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-white hover:text-accent-green transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden glass-strong border-t border-border-default mt-3 animate-slide-up">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-secondary hover:text-white hover:bg-glass-bg transition-all"
              >
                <link.icon className="w-5 h-5" />
                {link.label}
              </Link>
            ))}
            <Link
              href="/shows"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 mt-3 px-4 py-3 bg-accent-green hover:bg-accent-green-glow text-black font-bold rounded-lg transition-all text-sm uppercase tracking-wider"
            >
              <Play className="w-4 h-4" /> Watch Live
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
