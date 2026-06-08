import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "LiveCombatSports.ai | Live Combat Sports Streaming & AI Fight Analysis",
    template: "%s | LiveCombatSports.ai",
  },
  metadataBase: new URL("https://livecombatsportsai.vercel.app"),
  description:
    "Watch premium live combat sports, PPV events, LCS TV, on-demand fight replays, and AI-powered fight analysis on LiveCombatSports.ai by Digital Response.",
  keywords: [
    "combat sports",
    "boxing",
    "MMA",
    "muay thai",
    "live streaming",
    "PPV",
    "fight sports",
    "Australia",
    "live combat sports streaming",
    "AI fight analysis",
    "LiveCombatSports.ai",
  ],
  authors: [{ name: "Digital Response" }],
  creator: "Digital Response",
  publisher: "Digital Response",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "LiveCombatSports.ai",
    title: "LiveCombatSports.ai | Live Combat Sports Streaming & AI Fight Analysis",
    description:
      "Premium live PPV combat sports, 24/7 fight programming, on-demand shows, and AI-powered fight intelligence.",
    url: "https://livecombatsportsai.vercel.app/",
    images: [
      {
        url: "/design/homepage-concept.png",
        width: 1440,
        height: 1024,
        alt: "LiveCombatSports.ai premium combat sports streaming platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LiveCombatSports.ai | Live Combat Sports Streaming & AI Fight Analysis",
    description:
      "Watch live PPV combat sports, LCS TV, on-demand shows, and AI-powered fight analysis.",
    images: ["/design/homepage-concept.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-bg-primary text-text-primary antialiased`}>
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
