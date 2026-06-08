"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is LiveCombatSports?",
    a: "LiveCombatSports is a premium combat sports streaming platform offering live PPV events, a 24/7 free channel, past event replays, and AI-powered fight analysis — all accessible from any device.",
  },
  {
    q: "How do I purchase a PPV event?",
    a: "Simply browse our upcoming shows, select the event you want to watch, and click 'Buy PPV'. You'll be guided through our secure checkout process. Once purchased, the stream will be available on the event date.",
  },
  {
    q: "What devices can I watch on?",
    a: "LiveCombatSports works on desktop, tablet, and mobile devices. You can watch on any modern browser — Chrome, Safari, Firefox, or Edge. We also support Chromecast and AirPlay for big-screen viewing.",
  },
  {
    q: "Is there a free channel?",
    a: "Yes! LCS TV is our 24/7 free channel featuring combat sports content including classic fights, documentaries, and exclusive programming. No subscription required.",
  },
  {
    q: "Can I watch past events?",
    a: "Absolutely. Our Past Shows archive contains replays of previous events available for on-demand viewing. Most replays are available at a reduced price compared to the live PPV.",
  },
  {
    q: "What is AI Fight Analyst?",
    a: "AI Fight Analyst is our proprietary AI system that provides real-time fight predictions, fighter statistics analysis, and performance insights during live events. It uses machine learning models trained on thousands of fights.",
  },
  {
    q: "How do refunds work?",
    a: "If a live event is cancelled or experiences technical issues on our end, you are eligible for a full refund. Please contact our support team within 48 hours of the event. See our Refund Policy for full details.",
  },
  {
    q: "Can I watch from outside Australia?",
    a: "Yes! LiveCombatSports is accessible globally. However, some events may have regional restrictions based on broadcasting rights. Check the event details for any restrictions.",
  },
];

export function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-primary">
            Help Centre
          </span>
          <h1 className="mt-4 text-4xl sm:text-6xl font-display font-bold text-white">
            FAQ
          </h1>
          <p className="mt-4 text-text-secondary">
            Everything you need to know about LiveCombatSports.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl glass border border-border-default overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
              >
                <span className="text-sm sm:text-base font-medium text-white pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-sm text-text-secondary leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
