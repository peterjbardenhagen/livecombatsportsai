import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "LiveCombatSports | Premium Combat Sports Streaming",
    template: "%s | LiveCombatSports",
  },
  metadataBase: new URL("https://livecombatsportsai.vercel.app"),
  description:
    "Experience combat sports like never before. Live PPV streaming, AI-powered fight analysis, and the most immersive combat sports platform in the world.",
  keywords: [
    "combat sports",
    "boxing",
    "MMA",
    "muay thai",
    "live streaming",
    "PPV",
    "fight sports",
    "Australia",
  ],
  authors: [{ name: "LiveCombatSports" }],
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "LiveCombatSports",
    title: "LiveCombatSports | Premium Combat Sports Streaming",
    description: "Experience combat sports like never before.",
    images: ["/logos/logo-green-square.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "LiveCombatSports | Premium Combat Sports Streaming",
    description: "Experience combat sports like never before.",
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
      <body className="min-h-screen bg-bg-primary text-text-primary antialiased">
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
