"use client";

import { motion } from "framer-motion";
import { EventCard } from "@/components/EventCard";
import { Flame } from "lucide-react";

const allShows = [
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
  {
    title: "Cabra Promotions: Fight Night 22",
    promotion: "Cabra Promotions",
    date: "August 16, 2026",
    time: "7:30 PM AEST",
    venue: "Brisbane Convention Centre",
    imageUrl: "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=600&q=80",
    channelId: "492",
    price: "$24.99 PPV",
  },
  {
    title: "Nemesis Muaythai: Ultimate Showdown",
    promotion: "Nemesis Muaythai",
    date: "September 6, 2026",
    time: "8:00 PM AEST",
    venue: "Perth Arena",
    imageUrl: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&q=80",
    channelId: "493",
    price: "$19.99 PPV",
  },
];

export function ShowsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent-green/20 mb-6">
            <Flame className="w-4 h-4 text-accent-yellow" fill="currentColor" />
            <span className="text-xs font-bold uppercase tracking-widest text-accent-green">
              Fight Card
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-bold text-white">
            Upcoming <span className="text-gradient-green">Events</span>
          </h1>
          <p className="mt-4 text-text-secondary max-w-lg mx-auto">
            Browse all upcoming live combat sports events. Purchase PPV access and watch in HD.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allShows.map((show, i) => (
            <EventCard key={i} {...show} featured={show.featured && i === 0} />
          ))}
        </div>
      </div>
    </div>
  );
}
