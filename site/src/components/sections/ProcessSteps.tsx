"use client";

import { Phone, Truck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Phone,
    title: "You Point",
    description:
      "Tell us what goes. Send photos or show us on-site. We give you a firm price — no surprises.",
  },
  {
    icon: Truck,
    title: "We Load",
    description:
      "Our crew handles everything. Heavy lifting, sorting, hauling — all included. You don't touch a thing.",
  },
  {
    icon: Sparkles,
    title: "You're Free",
    description:
      "Clean space. No mess left behind. We donate, recycle, and dispose of everything responsibly.",
  },
];

export function ProcessSteps() {
  return (
    <section className="py-section-sm md:py-section">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">
            How It Works
          </h2>
          <p className="mt-3 text-lg text-slate max-w-2xl mx-auto">
            Getting rid of your junk is as easy as 1-2-3.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="relative mx-auto w-16 h-16 rounded-full bg-navy flex items-center justify-center mb-4">
                <step.icon className="h-7 w-7 text-white" />
                <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-red text-white text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-semibold text-lg text-navy">{step.title}</h3>
              <p className="mt-2 text-sm text-slate leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
