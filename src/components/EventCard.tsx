"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, MapPin, Play } from "lucide-react";

interface EventCardProps {
  title: string;
  promotion: string;
  date: string;
  time: string;
  venue: string;
  imageUrl: string;
  channelId?: string;
  price?: string;
  featured?: boolean;
}

export function EventCard({
  title,
  promotion,
  date,
  time,
  venue,
  imageUrl,
  channelId,
  price,
  featured,
}: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
      whileHover={{ y: -8 }}
      className={`group relative overflow-hidden rounded-xl border border-border-default bg-bg-surface backdrop-blur-xl transition-all duration-500 hover:border-primary/60 hover:shadow-card-hover ${
        featured ? "lg:col-span-2 lg:row-span-2" : ""
      }`}
    >
      {/* Portrait Image Container - 3:4 ratio */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes={featured ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
          unoptimized
          priority={featured}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-surface via-bg-surface/20 to-transparent" />

        {/* Price Badge - Top Right */}
        {price && (
          <div className="absolute top-3 right-3 px-3 py-1.5 rounded-lg bg-primary text-[#0D0D0D] text-xs font-black uppercase tracking-widest shadow-glow-primary">
            {price}
          </div>
        )}

        {/* Play Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-20 h-20 rounded-full bg-primary/95 flex items-center justify-center backdrop-blur-sm shadow-glow-primary">
            <Play className="w-8 h-8 text-[#0D0D0D] ml-1" fill="currentColor" />
          </div>
        </div>
      </div>

      {/* Content Overlay - Positioned at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-bg-surface via-bg-surface/80 to-transparent">
        {/* Promotion + Channel - Bottom Left */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-accent text-xs font-black uppercase tracking-widest">
            {promotion}
          </span>
          {channelId && (
            <span className="text-text-muted text-xs font-semibold">
              • {channelId}
            </span>
          )}
        </div>

        {/* Event Title - Large Condensed */}
        <h3 className="font-display text-xl md:text-2xl font-black text-white line-clamp-3 leading-tight group-hover:text-primary-glow transition-colors mb-2 tracking-tighter">
          {title}
        </h3>

        {/* Date and Venue */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-text-muted text-xs">
            <Calendar className="w-3.5 h-3.5 text-primary" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-text-muted text-xs">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            <span>{venue}</span>
          </div>
        </div>

        {/* CTA Button */}
        {channelId && (
          <Link
            href={`/watch?channel=${channelId}`}
            className="mt-3 flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-primary/20 hover:bg-primary text-primary hover:text-[#0D0D0D] font-black text-sm transition-all duration-300 border border-primary/30 hover:border-primary hover:shadow-glow-primary"
          >
            <Play className="w-4 h-4" fill="currentColor" />
            Watch
          </Link>
        )}
      </div>
    </motion.div>
  );
}
