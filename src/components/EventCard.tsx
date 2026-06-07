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
      whileHover={{ y: -4 }}
      className={`group relative overflow-hidden rounded-2xl border border-border-default bg-bg-card backdrop-blur-xl transition-all duration-500 hover:border-accent-green/30 hover:shadow-card-hover ${
        featured ? "lg:col-span-2 lg:row-span-2" : ""
      }`}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes={featured ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/30 to-transparent" />
        
        {/* Price Badge */}
        {price && (
          <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-accent-yellow text-black text-xs font-bold uppercase tracking-wider">
            {price}
          </div>
        )}

        {/* Live Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-500/90 text-white text-xs font-bold uppercase tracking-wider animate-glow-pulse">
          <span className="w-1.5 h-1.5 bg-white rounded-full" />
          Live
        </div>

        {/* Play Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full bg-accent-green/90 flex items-center justify-center backdrop-blur-sm shadow-glow-intense">
            <Play className="w-6 h-6 text-white ml-1" fill="white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Promotion */}
        <span className="text-accent-green text-xs font-bold uppercase tracking-widest">
          {promotion}
        </span>

        {/* Title */}
        <h3 className="mt-2 text-lg font-display font-bold text-white line-clamp-2 leading-tight group-hover:text-accent-green-glow transition-colors">
          {title}
        </h3>

        {/* Meta */}
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2 text-text-muted text-xs">
            <Calendar className="w-3.5 h-3.5 text-accent-green" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-text-muted text-xs">
            <Clock className="w-3.5 h-3.5 text-accent-green" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2 text-text-muted text-xs">
            <MapPin className="w-3.5 h-3.5 text-accent-green" />
            <span>{venue}</span>
          </div>
        </div>

        {/* CTA */}
        {channelId && (
          <Link
            href={`/watch?channel=${channelId}`}
            className="mt-4 flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-accent-green/10 hover:bg-accent-green text-accent-green hover:text-black font-bold text-sm transition-all duration-300 border border-accent-green/30 hover:border-accent-green hover:shadow-glow-green"
          >
            <Play className="w-4 h-4" fill="currentColor" />
            Watch Now
          </Link>
        )}
      </div>
    </motion.div>
  );
}
