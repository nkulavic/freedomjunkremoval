"use client";

import { Shield, Leaf, Star, Clock } from "lucide-react";
import { motion } from "framer-motion";

const signals = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Leaf, label: "Eco-Friendly Disposal" },
  { icon: Star, label: "5-Star Rated" },
  { icon: Clock, label: "Same-Day Service" },
];

export function TrustSignals() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-white border-y border-silver/20"
    >
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {signals.map((signal) => (
            <div
              key={signal.label}
              className="flex items-center justify-center gap-2 py-2"
            >
              <signal.icon className="h-5 w-5 text-red shrink-0" />
              <span className="text-sm font-medium text-navy">
                {signal.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
