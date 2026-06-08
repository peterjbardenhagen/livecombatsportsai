"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Brain,
  Calendar,
  ChevronRight,
  CirclePlay,
  Flame,
  Gauge,
  Play,
  Radio,
  ScanLine,
  ShieldCheck,
  Star,
  Trophy,
  Tv,
  Zap,
} from "lucide-react";
import { CountdownTimer } from "@/components/CountdownTimer";
import { ParticleField } from "@/components/ParticleField";

const events = [
  {
    title: "Thunderdome 15: Night of Champions",
    promotion: "Thunderdome",
    date: "June 28, 2026",
    time: "7:00 PM AEST",
    venue: "Brisbane Entertainment Centre",
    price: "$29.99 PPV",
    channel: "Channel 488",
    image:
      "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1200&q=85",
    featured: true,
  },
  {
    title: "Cabra Promotions: Rise of the Warriors",
    promotion: "Cabra Promotions",
    date: "July 12, 2026",
    time: "6:30 PM AEST",
    venue: "Sydney Olympic Park",
    price: "$24.99 PPV",
    channel: "Channel 489",
    image:
      "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Nemesis Muaythai: Clash of Titans",
    promotion: "Nemesis Muaythai",
    date: "July 19, 2026",
    time: "8:00 PM AEST",
    venue: "Melbourne Arena",
    price: "$19.99 PPV",
    channel: "Channel 490",
    image:
      "https://images.unsplash.com/photo-1517438322307-e67111335449?auto=format&fit=crop&w=900&q=85",
  },
];

const stats = [
  { value: "500+", label: "Live events streamed" },
  { value: "24/7", label: "Free combat channel" },
  { value: "4K", label: "Streaming ready" },
  { value: "AI", label: "Fight intelligence" },
];

const platform = [
  {
    icon: Radio,
    title: "Live PPV Without Friction",
    text: "Purpose-built event pages, countdowns, fight-card hierarchy, and embedded stream paths for premium combat broadcasts.",
  },
  {
    icon: Tv,
    title: "LCS TV, Always On",
    text: "A 24/7 free channel for replays, interviews, training rooms, weigh-ins, and original fight programming.",
  },
  {
    icon: Brain,
    title: "AI Fight Analyst",
    text: "Prediction layers, momentum reads, round-by-round signals, and contextual insight designed to enhance the viewing experience.",
  },
  {
    icon: ShieldCheck,
    title: "Promotion-Grade Delivery",
    text: "High-trust design, mobile-first ticket paths, SEO-ready event content, and a premium broadcast surface for serious promotions.",
  },
];

const analystSignals = [
  { label: "Pressure index", value: "87", trend: "+12%" },
  { label: "Counter window", value: "0.42s", trend: "tight" },
  { label: "Output pace", value: "64/min", trend: "+8%" },
  { label: "Momentum", value: "Red", trend: "rising" },
];

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.19, 1, 0.22, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function HeroPlayer() {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      className="hero-player"
    >
      <div className="player-topbar">
        <span className="live-dot" />
        <span>Live Preview</span>
        <span className="ml-auto">LCS Broadcast Engine</span>
      </div>
      <div className="player-screen">
        <Image
          src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1200&q=90"
          alt="Live combat sports broadcast preview"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
        <div className="player-vignette" />
        <div className="broadcast-scan" />
        <button className="play-button" aria-label="Play featured stream preview">
          <Play className="h-6 w-6" fill="currentColor" />
        </button>
        <div className="player-event">
          <p>Thunderdome 15</p>
          <h2>Night of Champions</h2>
          <span>Brisbane Entertainment Centre / June 28</span>
        </div>
      </div>
      <div className="player-meta">
        <CountdownTimer targetDate="2026-06-28T19:00:00+10:00" label="Next Bell" />
      </div>
    </motion.div>
  );
}

function EventTile({ event, index }: { event: (typeof events)[number]; index: number }) {
  return (
    <FadeIn delay={index * 0.08} className={event.featured ? "lg:col-span-2" : ""}>
      <Link href="/shows" className={`event-tile ${event.featured ? "event-tile-featured" : ""}`}>
        <div className="event-media">
          <Image src={event.image} alt={event.title} fill sizes="(max-width: 1024px) 100vw, 50vw" />
          <span className="event-price">{event.price}</span>
        </div>
        <div className="event-content">
          <div className="event-kicker">
            <span>{event.promotion}</span>
            <span>{event.channel}</span>
          </div>
          <h3>{event.title}</h3>
          <div className="event-details">
            <span>
              <Calendar className="h-4 w-4" />
              {event.date} / {event.time}
            </span>
            <span>{event.venue}</span>
          </div>
          <span className="event-action">
            Open event
            <ChevronRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </FadeIn>
  );
}

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "LiveCombatSports.ai",
    url: "https://livecombatsportsai.vercel.app/",
    publisher: {
      "@type": "Organization",
      name: "Digital Response",
      url: "https://www.digitalresponse.com.au/",
    },
    potentialAction: {
      "@type": "WatchAction",
      target: "https://livecombatsportsai.vercel.app/shows",
      name: "Watch live combat sports events",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="hero-stage">
        <ParticleField />
        <div className="hero-backdrop" />
        <div className="hero-grid max-w-7xl">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            className="hero-copy"
          >
            <h1>Stream the fight. Read the moment.</h1>
            <p>
              LiveCombatSports.ai is the premium streaming home for live PPV combat events,
              always-on fight programming, and AI-powered analysis built for the modern fight fan.
            </p>
            <div className="hero-actions">
              <Link href="/shows" className="btn-primary">
                <CirclePlay className="h-5 w-5" fill="currentColor" />
                Watch Live
              </Link>
              <Link href="/watch" className="btn-secondary">
                Open LCS TV
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <dl className="hero-stats">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt>{stat.value}</dt>
                  <dd>{stat.label}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
          <HeroPlayer />
        </div>
      </section>

      <section className="section-band section-events">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="section-heading">
            <FadeIn>
              <h2>Upcoming premium fight nights</h2>
            </FadeIn>
            <FadeIn delay={0.08}>
              <p>
                Event pages designed to convert attention into buys, with broadcast-grade visuals,
                clear timing, and a direct path into the stream.
              </p>
            </FadeIn>
          </div>
          <div className="event-grid">
            {events.map((event, index) => (
              <EventTile key={event.title} event={event} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-band section-analyst">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <FadeIn className="analyst-copy">
            <div className="section-mark">
              <Brain className="h-5 w-5" />
              AI Fight Analyst
            </div>
            <h2>Insight that moves at fight speed.</h2>
            <p>
              LCS layers fight intelligence over the broadcast experience: pressure reads,
              momentum shifts, pacing changes, and predictive context that helps fans understand
              why a round is turning before the scorecard catches up.
            </p>
            <Link href="/about" className="text-link">
              Explore the platform
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
          <FadeIn delay={0.1} className="analyst-panel">
            <div className="analyst-video">
              <Image
                src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=85"
                alt="Combat sports athlete in broadcast lighting"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="heatmap">
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className="signal-grid">
              {analystSignals.map((signal) => (
                <div key={signal.label} className="signal-card">
                  <span>{signal.label}</span>
                  <strong>{signal.value}</strong>
                  <em>{signal.trend}</em>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-band section-platform">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="section-heading section-heading-left">
            <FadeIn>
              <h2>A streaming platform built for combat.</h2>
            </FadeIn>
            <FadeIn delay={0.08}>
              <p>
                From PPV event launches to 24/7 content channels, LiveCombatSports.ai gives
                promoters and fans a premium digital fight-night home.
              </p>
            </FadeIn>
          </div>
          <div className="platform-grid">
            {platform.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.06}>
                <article className="platform-card">
                  <item.icon className="h-6 w-6" />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band section-control-room">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <FadeIn className="control-room">
            <div className="control-copy">
              <div className="section-mark">
                <ScanLine className="h-5 w-5" />
                Broadcast Control
              </div>
              <h2>Every screen feels like fight night.</h2>
              <p>
                Cinematic media, fast event discovery, responsive playback surfaces, and a
                restrained high-tech system give the product a premium signature without losing
                usability.
              </p>
            </div>
            <div className="control-stack">
              {[
                ["Stream health", "99.98%", Gauge],
                ["Replay library", "On demand", Star],
                ["Promoter trust", "Verified", BadgeCheck],
                ["Fight-night energy", "Live", Flame],
              ].map(([label, value, Icon]) => (
                <div key={label as string} className="control-row">
                  <Icon className="h-5 w-5" />
                  <span>{label as string}</span>
                  <strong>{value as string}</strong>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-band final-cta">
        <FadeIn className="mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-8">
          <Trophy className="mx-auto h-12 w-12 text-accent-yellow" />
          <h2>Bring the next combat audience online.</h2>
          <p>
            Watch live PPV events, discover past shows, and tune into LCS TV from a platform
            designed to make every bout feel premium.
          </p>
          <div className="hero-actions justify-center">
            <Link href="/shows" className="btn-primary">
              <Zap className="h-5 w-5" />
              View upcoming shows
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact LCS
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
