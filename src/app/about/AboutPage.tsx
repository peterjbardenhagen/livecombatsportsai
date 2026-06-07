"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Globe, Users, Award, Target } from "lucide-react";

const values = [
  { icon: Shield, title: "Integrity", text: "Honest, transparent, and fair — that's how we operate." },
  { icon: Zap, title: "Innovation", text: "Pushing boundaries with AI-powered fight technology." },
  { icon: Globe, title: "Global", text: "Bringing the best combat sports from around the world." },
  { icon: Users, title: "Community", text: "Built by fight fans, for fight fans." },
  { icon: Award, title: "Excellence", text: "Premium production quality that rivals the biggest names." },
  { icon: Target, title: "Accessibility", text: "Making combat sports accessible to everyone, everywhere." },
];

export function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-accent-green">
            Our Story
          </span>
          <h1 className="mt-4 text-4xl sm:text-6xl font-display font-bold text-white">
            About <span className="text-gradient-green">LCS</span>
          </h1>
          <p className="mt-6 text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            LiveCombatSports was born from a passion for combat sports and a vision to make
            every fight accessible to fans worldwide. We combine premium production with
            cutting-edge AI technology to deliver an unmatched viewing experience.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-8 rounded-2xl glass border border-border-default hover:border-accent-green/20 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-green/10 flex items-center justify-center mb-5">
                <v.icon className="w-6 h-6 text-accent-green" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">{v.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
