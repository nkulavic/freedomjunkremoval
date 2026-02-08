"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { testimonials } from "@/app/data/testimonials";

export function Testimonials() {
  return (
    <section className="py-section-sm md:py-section bg-light-gray">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">
            What Our Customers Say
          </h2>
          <p className="mt-3 text-lg text-slate max-w-2xl mx-auto">
            Don&apos;t just take our word for it — hear from Springfield
            homeowners who chose Freedom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-silver/20"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-charcoal text-sm leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="mt-4 pt-4 border-t border-silver/20">
                <p className="font-semibold text-sm text-navy">
                  {testimonial.name}
                </p>
                <p className="text-xs text-slate">
                  {testimonial.location} &middot; {testimonial.serviceType}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
