"use client";

import { motion } from "framer-motion";
import { EventCard } from "@/components/EventCard";
import { History } from "lucide-react";

const pastEvents = [
  {
    title: "Thunderdome 14: Final Stand",
    promotion: "Thunderdome",
    date: "May 15, 2026",
    time: "7:00 PM AEST",
    venue: "Brisbane Entertainment Centre",
    imageUrl: "/logos/logo-green-long.png",
    price: "$14.99 Replay",
  },
  {
    title: "Cabra Promotions: Warriors Collide",
    promotion: "Cabra Promotions",
    date: "April 28, 2026",
    time: "6:30 PM AEST",
    venue: "Sydney Olympic Park",
    imageUrl: "/logos/logo-dark-long.png",
    price: "$14.99 Replay",
  },
  {
    title: "Nemesis Muaythai: Battle for Glory",
    promotion: "Nemesis Muaythai",
    date: "April 10, 2026",
    time: "8:00 PM AEST",
    venue: "Melbourne Arena",
    imageUrl: "/logos/logo-green-long.png",
    price: "$12.99 Replay",
  },
];

export function PastShowsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-border-default mb-6">
            <History className="w-4 h-4 text-text-muted" />
            <span className="text-xs font-bold uppercase tracking-widest text-text-muted">
              Archive
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-bold text-white">
            Past <span className="text-gradient-green">Shows</span>
          </h1>
          <p className="mt-4 text-text-secondary max-w-lg mx-auto">
            Relive the greatest moments in combat sports. Watch replays on demand.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastEvents.map((event, i) => (
            <EventCard key={i} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
}
