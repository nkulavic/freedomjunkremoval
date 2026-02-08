"use client";

import { Shield, Leaf, Star, Clock } from "lucide-react";
import { motion } from "framer-motion";

const signals = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Leaf, label: "Eco-Friendly Disposal" },
  { icon: Star, label: "5-Star Rated" },
  { icon: Clock, label: "Same-Day Available" },
];

export function TrustSignals() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-light-gray border-b border-silver/20"
    >
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {signals.map((signal) => (
            <div
              key={signal.label}
              className="flex items-center justify-center gap-2.5 py-1"
            >
              <div className="w-8 h-8 rounded-full bg-red/10 flex items-center justify-center shrink-0">
                <signal.icon className="h-4 w-4 text-red" />
              </div>
              <span className="text-sm font-semibold text-navy">
                {signal.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
