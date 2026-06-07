"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Flame, Shield, Zap, Trophy, ArrowRight, Tv, Star } from "lucide-react";
import { ParticleField } from "@/components/ParticleField";
import { CountdownTimer } from "@/components/CountdownTimer";
import { EventCard } from "@/components/EventCard";

const features = [
  {
    icon: Zap,
    title: "Live PPV",
    description: "Premium live pay-per-view events in crystal-clear HD. Never miss a punch.",
  },
  {
    icon: Tv,
    title: "24/7 Free Channel",
    description: "LCS TV delivers non-stop combat sports action, completely free.",
  },
  {
    icon: Shield,
    title: "AI Fight Analyst",
    description: "Advanced AI predictions and real-time fight analytics you won't find anywhere else.",
  },
  {
    icon: Star,
    title: "Exclusive Content",
    description: "Behind-the-scenes access, fighter interviews, and original programming.",
  },
];

const upcomingEvents = [
  {
    title: "Thunderdome 15: Night of Champions",
    promotion: "Thunderdome",
    date: "June 28, 2026",
    time: "7:00 PM AEST",
    venue: "Brisbane Entertainment Centre",
    imageUrl: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80",
    channelId: "488",
    price: "$29.99 PPV",
    featured: true,
  },
  {
    title: "Cabra Promotions: Rise of the Warriors",
    promotion: "Cabra Promotions",
    date: "July 12, 2026",
    time: "6:30 PM AEST",
    venue: "Sydney Olympic Park",
    imageUrl: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=600&q=80",
    channelId: "489",
    price: "$24.99 PPV",
  },
  {
    title: "Nemesis Muaythai: Clash of Titans",
    promotion: "Nemesis Muaythai",
    date: "July 19, 2026",
    time: "8:00 PM AEST",
    venue: "Melbourne Arena",
    imageUrl: "https://images.unsplash.com/photo-1517438322307-e67111335449?w=600&q=80",
    channelId: "490",
    price: "$19.99 PPV",
  },
  {
    title: "Thunderdome 16: Summer Showdown",
    promotion: "Thunderdome",
    date: "August 2, 2026",
    time: "7:00 PM AEST",
    venue: "Gold Coast Convention Centre",
    imageUrl: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&q=80",
    channelId: "491",
    price: "$29.99 PPV",
  },
];

const stats = [
  { value: "500+", label: "Live Events" },
  { value: "50K+", label: "Subscribers" },
  { value: "24/7", label: "Free Channel" },
  { value: "4K", label: "HD Quality" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <ParticleField />
        <div className="absolute inset-0 bg-radial-green" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-primary/50 to-bg-primary" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent-green/20 mb-8">
                <Zap className="w-4 h-4 text-accent-yellow" fill="currentColor" />
                <span className="text-xs font-bold uppercase tracking-widest text-accent-green">
                  Premium Combat Sports
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[0.95] tracking-tight">
                <span className="text-white">Where</span>{" "}
                <span className="text-gradient-green">Legends</span>
                <br />
                <span className="text-gradient-yellow">Are Made</span>
              </h1>

              <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-lg">
                Experience the raw power, precision, and adrenaline of live combat sports.
                Stream the biggest fights in HD with AI-powered insights you can&apos;t get anywhere else.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/shows"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-accent-green hover:bg-accent-green-glow text-black font-bold rounded-xl transition-all duration-300 hover:shadow-glow-green text-base group"
                >
                  <Flame className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Watch Live Now
                </Link>
                <Link
                  href="/past-shows"
                  className="inline-flex items-center gap-2 px-8 py-4 glass border border-border-default hover:border-accent-green/30 text-white font-bold rounded-xl transition-all duration-300 text-base group"
                >
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Browse Past Shows
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-4 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl sm:text-3xl font-display font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-text-muted uppercase tracking-wider mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Hero Visual + Countdown */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
              className="relative"
            >
              {/* Glow orbs */}
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-accent-green/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent-yellow/5 rounded-full blur-3xl" />

              {/* Featured fight card */}
              <div className="relative glass-strong rounded-3xl border border-border-default overflow-hidden shadow-card-hover">
                <div className="aspect-[4/3] bg-gradient-to-br from-bg-elevated to-bg-secondary p-8 flex flex-col justify-end">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-green via-transparent to-transparent" />
                  
                  <div className="relative">
                    <CountdownTimer
                      targetDate="2026-06-28T19:00:00+10:00"
                      label="Next Event In"
                    />
                    <div className="mt-6">
                      <h2 className="text-2xl font-display font-bold text-white">
                        Thunderdome 15
                      </h2>
                      <p className="mt-1 text-text-secondary">Night of Champions</p>
                      <p className="mt-4 text-xs text-text-muted uppercase tracking-widest">
                        Brisbane Entertainment Centre &bull; June 28
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-bold uppercase tracking-widest text-accent-green">
              Why LCS
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-display font-bold text-white">
              Next-Level <span className="text-gradient-green">Experience</span>
            </h2>
            <p className="mt-4 text-text-secondary max-w-xl mx-auto">
              Built for the modern fight fan. Every feature designed to bring you closer to the action.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-6 rounded-2xl glass border border-border-default hover:border-accent-green/20 transition-all duration-500 hover:shadow-card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-green/10 flex items-center justify-center mb-5 group-hover:bg-accent-green/20 transition-colors">
                  <f.icon className="w-6 h-6 text-accent-green" />
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-2">{f.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-end justify-between mb-12"
          >
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-accent-green">
                Fight Card
              </span>
              <h2 className="mt-4 text-4xl sm:text-5xl font-display font-bold text-white">
                Upcoming <span className="text-gradient-yellow">Events</span>
              </h2>
            </div>
            <Link
              href="/shows"
              className="hidden sm:inline-flex items-center gap-2 text-accent-green hover:text-accent-green-glow font-bold text-sm transition-colors group"
            >
              View All Events
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, i) => (
              <EventCard key={i} {...event} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/shows"
              className="inline-flex items-center gap-2 text-accent-green font-bold"
            >
              View All Events <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-radial-green" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-3xl border border-accent-green/20 p-12 sm:p-16"
          >
            <Trophy className="w-16 h-16 text-accent-yellow mx-auto mb-6" />
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white">
              Ready for <span className="text-gradient-green">Battle</span>?
            </h2>
            <p className="mt-4 text-lg text-text-secondary max-w-lg mx-auto">
              Join thousands of fight fans. Get access to live PPV events, exclusive content, and
              AI-powered fight analysis.
            </p>
            <Link
              href="/shows"
              className="mt-8 inline-flex items-center gap-2 px-10 py-5 bg-accent-green hover:bg-accent-green-glow text-black font-bold rounded-xl transition-all duration-300 hover:shadow-glow-intense text-lg group"
            >
              <Flame className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Join the Action
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
