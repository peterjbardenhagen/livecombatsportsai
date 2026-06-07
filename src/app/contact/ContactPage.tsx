"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            Get In Touch
          </span>
          <h1 className="mt-4 text-4xl sm:text-6xl font-display font-bold text-white">
            Contact <span className="text-gradient-yellow">Us</span>
          </h1>
          <p className="mt-4 text-text-secondary max-w-lg mx-auto">
            Have a question? Want to partner with us? We&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-4">
            {[
              { icon: Mail, label: "Email", value: "info@livecombatsports.com.au" },
              { icon: Phone, label: "Phone", value: "+61 452 491 013" },
              { icon: MapPin, label: "Location", value: "Brisbane, Australia" },
            ].map((item) => (
              <div
                key={item.label}
                className="p-4 rounded-xl glass border border-border-default"
              >
                <item.icon className="w-5 h-5 text-accent-green mb-2" />
                <p className="text-xs text-text-muted uppercase tracking-wider">{item.label}</p>
                <p className="text-sm text-white font-medium mt-0.5">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 rounded-2xl glass border border-accent-green/20 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-accent-green/10 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-accent-green" />
                </div>
                <h2 className="text-2xl font-display font-bold text-white">Message Sent!</h2>
                <p className="mt-2 text-text-secondary">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-2xl glass border border-border-default space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-text-secondary mb-2">First Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-bg-elevated border border-border-default text-white text-sm focus:outline-none focus:border-accent-green transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-text-secondary mb-2">Last Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-bg-elevated border border-border-default text-white text-sm focus:outline-none focus:border-accent-green transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-text-secondary mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-bg-elevated border border-border-default text-white text-sm focus:outline-none focus:border-accent-green transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-text-secondary mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg bg-bg-elevated border border-border-default text-white text-sm focus:outline-none focus:border-accent-green transition-colors"
                    placeholder="+61 4XX XXX XXX"
                  />
                </div>
                <div>
                  <label className="block text-sm text-text-secondary mb-2">Message *</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-bg-elevated border border-border-default text-white text-sm focus:outline-none focus:border-accent-green transition-colors resize-none"
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-accent-green hover:bg-accent-green-glow text-black font-bold rounded-xl transition-all duration-300 hover:shadow-glow-green"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
