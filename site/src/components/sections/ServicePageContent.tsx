"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Service } from "@/app/data/services";

interface ServicePageContentProps {
  service: Service;
}

export function ServicePageContent({ service }: ServicePageContentProps) {
  return (
    <>
      {/* Description + Features */}
      <section className="py-section-sm md:py-section">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-semibold text-red uppercase tracking-wider mb-2">
                {service.name}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy">
                {service.tagline}
              </h2>
              <p className="mt-4 text-slate leading-relaxed text-lg">
                {service.description}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="text-lg font-semibold text-navy">
                  Starting at
                </span>
                <span className="text-2xl font-bold text-red">
                  {service.priceRange}
                </span>
              </div>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 px-7 py-3.5 bg-red hover:bg-red-dark text-white font-semibold rounded-lg transition-colors shadow-lg shadow-red/20"
              >
                Get Your Free Estimate
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-light-gray rounded-xl p-8 border border-silver/20"
            >
              <h3 className="text-xl font-bold text-navy mb-5">
                Why Choose Freedom?
              </h3>
              <ul className="space-y-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5 text-red" />
                    </div>
                    <span className="text-charcoal">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Remove */}
      <section className="py-section-sm md:py-section bg-light-gray">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-red uppercase tracking-wider mb-2">
              Common Items
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              What We Remove
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {service.items.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2.5 bg-white rounded-lg px-4 py-3.5 border border-silver/20 shadow-sm"
              >
                <Check className="h-4 w-4 text-red shrink-0" />
                <span className="text-sm font-medium text-charcoal">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
