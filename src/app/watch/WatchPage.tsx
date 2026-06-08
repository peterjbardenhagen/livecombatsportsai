"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { motion } from "framer-motion";
import { Play, Maximize2, Volume2, MessageSquare, Brain } from "lucide-react";

function WatchContent() {
  const searchParams = useSearchParams();
  const channelId = searchParams.get("channel") || "488";
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Stream Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-glow-pulse" />
                <span className="text-sm font-bold uppercase tracking-widest text-red-400">
                  Live Now
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-display font-bold text-white">
                Live Combat Sports
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setChatOpen(!chatOpen)}
                className={`p-3 rounded-xl transition-all ${
                  chatOpen
                    ? "bg-primary text-[#0D0D0D]"
                    : "glass border border-border-default text-text-secondary hover:text-white"
                }`}
              >
                <MessageSquare className="w-5 h-5" />
              </button>
              <button className="p-3 rounded-xl glass border border-border-default text-text-secondary hover:text-white transition-all">
                <Volume2 className="w-5 h-5" />
              </button>
              <button className="p-3 rounded-xl glass border border-border-default text-text-secondary hover:text-white transition-all">
                <Maximize2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Stream + Chat */}
          <div className="grid lg:grid-cols-4 gap-4">
            {/* Stream Player */}
            <div className={`${chatOpen ? "lg:col-span-3" : "lg:col-span-4"} transition-all`}>
              <div className="relative aspect-video rounded-2xl overflow-hidden glass-strong border border-border-default shadow-card">
                {/* Castr embed */}
                <iframe
                  src={`https://ppv.livecombatsports.com.au/?cat_id=0&channel=${channelId}`}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title="Live Combat Sports Stream"
                />

                {/* Overlay when not playing */}
                <div className="absolute inset-0 flex items-center justify-center bg-bg-primary/60 group cursor-pointer">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-glow-primary animate-glow-pulse">
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                    </div>
                    <p className="text-white font-display font-bold text-xl">
                      Click to Watch
                    </p>
                    <p className="text-text-muted text-sm mt-1">
                      Live stream will begin shortly
                    </p>
                  </div>
                </div>
              </div>

              {/* Stream Info */}
              <div className="mt-4 p-4 rounded-xl glass border border-border-default">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Brain className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">AI Fight Analyst Active</h3>
                    <p className="text-xs text-text-muted">
                      Real-time fight predictions and analytics are being processed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Panel */}
            {chatOpen && (
              <motion.div
                initial={false}
                animate={{ opacity: 1, x: 0 }}
                className="glass-strong rounded-2xl border border-border-default p-4 h-[600px] flex flex-col"
              >
                <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  Live Chat
                </h3>
                <div className="flex-1 flex items-center justify-center text-text-muted text-sm">
                  <p className="text-center">
                    Chat coming soon.
                    <br />
                    <span className="text-primary">AI-powered moderation enabled.</span>
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function WatchPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen pt-32 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
        </div>
      }
    >
      <WatchContent />
    </Suspense>
  );
}
