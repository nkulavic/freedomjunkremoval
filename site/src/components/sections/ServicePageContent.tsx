"use client";

import Image from "next/image";
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
      {/* Description */}
      <section className="py-section-sm md:py-section">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-navy">
                {service.tagline}
              </h2>
              <p className="mt-4 text-slate leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 text-lg font-semibold text-navy">
                Starting at{" "}
                <span className="text-red">{service.priceRange}</span>
              </div>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-red hover:bg-red-dark text-white font-semibold rounded-lg transition-colors"
              >
                Get Your Free Estimate
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-navy mb-4">
                Why Choose Freedom?
              </h3>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-red shrink-0 mt-0.5" />
                    <span className="text-charcoal">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Image */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-7xl px-4 py-section-sm md:py-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src={service.image}
              alt={service.name}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-navy/10" />
          </motion.div>
        </div>
      </section>

      {/* What We Remove */}
      <section className="py-section-sm md:py-section">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-8">
            What We Remove
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {service.items.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2 bg-white rounded-lg px-4 py-3 border border-silver/20"
              >
                <Check className="h-4 w-4 text-red shrink-0" />
                <span className="text-sm text-charcoal">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
