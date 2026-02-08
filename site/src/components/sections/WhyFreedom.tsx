"use client";

import Link from "next/link";
import { Shield, Star, Leaf, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    icon: Shield,
    title: "Show Up Ready",
    description:
      "On time, in uniform, prepared. Your first impression answers every question about whether you made the right call.",
  },
  {
    icon: Star,
    title: "Own It",
    description:
      "Clear pricing. No surprises. If something goes wrong, we fix it before you have to ask.",
  },
  {
    icon: Leaf,
    title: "Leave It Better",
    description:
      "Every space we touch looks better than you expected. Every item is recycled, donated, or responsibly disposed of.",
  },
  {
    icon: Users,
    title: "Build Locally",
    description:
      "This is a Springfield company. We hire, spend, and donate locally. Your dollars stay in our community.",
  },
];

export function WhyFreedom() {
  return (
    <section className="py-section-sm md:py-section bg-light-gray">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-red uppercase tracking-wider mb-2">
            Why Freedom
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy">
            Why Customers Choose Us
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-silver/20"
            >
              <div className="w-11 h-11 rounded-lg bg-red/10 flex items-center justify-center mb-4">
                <value.icon className="h-5 w-5 text-red" />
              </div>
              <h3 className="font-bold text-navy">{value.title}</h3>
              <p className="mt-2 text-sm text-slate leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-red font-semibold hover:gap-3 transition-all"
          >
            Learn More About Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
