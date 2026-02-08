"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { faqItems, faqCategories } from "@/app/data/faq";
import { cn } from "@/lib/utils";

export function FAQContent() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "all"
      ? faqItems
      : faqItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-section-sm md:py-section">
      <div className="mx-auto max-w-3xl px-4">
        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => {
              setActiveCategory("all");
              setOpenIndex(null);
            }}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors",
              activeCategory === "all"
                ? "bg-navy text-white"
                : "bg-light-gray text-slate hover:bg-silver/30"
            )}
          >
            All
          </button>
          {faqCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                setActiveCategory(cat.key);
                setOpenIndex(null);
              }}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                activeCategory === cat.key
                  ? "bg-navy text-white"
                  : "bg-light-gray text-slate hover:bg-silver/30"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {filtered.map((item, i) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border border-silver/30 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-light-gray/50 transition-colors"
              >
                <span className="font-medium text-navy pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-slate shrink-0 transition-transform",
                    openIndex === i && "rotate-180"
                  )}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-slate text-sm leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
