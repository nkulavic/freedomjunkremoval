"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { faqItems } from "@/app/data/faq";
import { cn } from "@/lib/utils";

const previewQuestions = [
  "How much does junk removal cost?",
  "Do you offer free estimates?",
  "What items do you take?",
  "How quickly can you come out?",
  "Are you licensed and insured?",
];

const previewFaqs = faqItems.filter((item) =>
  previewQuestions.includes(item.question)
);

export function FAQPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-section-sm md:py-section">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-red uppercase tracking-wider mb-2">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy">
            Common Questions
          </h2>
        </div>
        <div className="space-y-3">
          {previewFaqs.map((item, i) => (
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
        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-red font-semibold hover:gap-3 transition-all"
          >
            See All FAQs
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
