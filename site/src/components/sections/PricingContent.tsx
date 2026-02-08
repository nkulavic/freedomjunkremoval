"use client";

import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import { motion } from "framer-motion";
import { pricingTiers, pricingFactors } from "@/app/data/pricing";
import { cn } from "@/lib/utils";

export function PricingContent() {
  return (
    <>
      {/* Pricing Tiers */}
      <section className="py-section-sm md:py-section">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-red uppercase tracking-wider mb-2">
              Transparent Pricing
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              Pay Only for What You Need
            </h2>
            <p className="mt-3 text-slate max-w-xl mx-auto">
              Every job is priced based on how much space your items take in our truck. No hidden fees — the price we quote is the price you pay.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "relative rounded-xl border p-6 flex flex-col",
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

                {/* Truck fill indicator */}
                <div className="mb-4">
                  <div className="h-3 bg-light-gray rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tier.fillLevel}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="h-full bg-navy rounded-full"
                    />
                  </div>
                  <p className="text-xs text-slate mt-1 text-right">
                    {tier.fillLevel}% truck
                  </p>
                </div>

                <h3 className="text-xl font-bold text-navy">{tier.name}</h3>
                <p className="text-3xl font-bold text-red mt-2">
                  {tier.priceRange}
                </p>
                <p className="mt-3 text-sm text-slate leading-relaxed">
                  {tier.description}
                </p>

                <ul className="mt-4 space-y-2 flex-1">
                  {tier.examples.map((example) => (
                    <li
                      key={example}
                      className="text-sm text-charcoal flex items-start gap-2"
                    >
                      <span className="text-red mt-0.5">&#8226;</span>
                      {example}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={cn(
                    "mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg transition-colors text-sm",
                    tier.popular
                      ? "bg-red hover:bg-red-dark text-white"
                      : "bg-navy hover:bg-navy-light text-white"
                  )}
                >
                  Get Free Estimate
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Affects Pricing */}
      <section className="py-section-sm md:py-section bg-light-gray">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-8">
            What Affects Your Price?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {pricingFactors.map((factor, i) => (
              <motion.div
                key={factor.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-5 shadow-sm border border-silver/20 text-center"
              >
                <Info className="h-6 w-6 text-navy mx-auto mb-3" />
                <h3 className="font-semibold text-navy">{factor.title}</h3>
                <p className="mt-2 text-sm text-slate">{factor.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
