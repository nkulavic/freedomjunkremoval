"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { pricingTiers } from "@/app/data/pricing";
import { cn } from "@/lib/utils";

export function PricingPreview() {
  return (
    <section className="py-section-sm md:py-section">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-red uppercase tracking-wider mb-2">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-3 text-slate max-w-xl mx-auto">
            Based on how much space your items take in our truck. No hidden
            fees — the price we quote is the price you pay.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "relative rounded-xl border p-6 text-center",
                tier.popular
                  ? "border-red shadow-lg shadow-red/10 ring-2 ring-red"
                  : "border-silver/30 shadow-sm"
              )}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-red text-white text-xs font-semibold rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-bold text-navy">{tier.name}</h3>
              <p className="text-3xl font-bold text-red mt-2">
                {tier.priceRange}
              </p>
              <p className="mt-3 text-sm text-slate">{tier.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-red font-semibold hover:gap-3 transition-all"
          >
            See Full Pricing Details
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
