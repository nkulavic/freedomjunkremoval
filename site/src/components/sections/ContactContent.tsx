"use client";

import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/app/data/site-config";

export function ContactContent() {
  return (
    <section className="py-section-sm md:py-section">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto mb-8">
            Book your free estimate online or reach out directly. We're here to help with all your junk removal needs.
          </p>
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-red hover:bg-red-dark text-white font-semibold rounded-lg transition-colors text-lg shadow-lg shadow-red/20"
          >
            Book Your Free Estimate
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.a
            href={`tel:${siteConfig.phoneRaw}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4 p-6 bg-white rounded-xl border border-silver/20 hover:border-red/30 hover:shadow-lg transition-all group"
          >
            <div className="w-14 h-14 rounded-full bg-red/10 flex items-center justify-center group-hover:bg-red/20 transition-colors shrink-0">
              <Phone className="h-7 w-7 text-red" />
            </div>
            <div>
              <p className="text-sm text-slate mb-1">Call Us</p>
              <p className="text-xl font-semibold text-navy">{siteConfig.phone}</p>
            </div>
          </motion.a>

          <motion.a
            href={`mailto:${siteConfig.email}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 p-6 bg-white rounded-xl border border-silver/20 hover:border-navy/30 hover:shadow-lg transition-all group"
          >
            <div className="w-14 h-14 rounded-full bg-navy/10 flex items-center justify-center group-hover:bg-navy/20 transition-colors shrink-0">
              <Mail className="h-7 w-7 text-navy" />
            </div>
            <div>
              <p className="text-sm text-slate mb-1">Email Us</p>
              <p className="text-lg font-semibold text-navy break-all">{siteConfig.email}</p>
            </div>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-start gap-4 p-6 bg-white rounded-xl border border-silver/20"
          >
            <div className="w-14 h-14 rounded-full bg-navy/10 flex items-center justify-center shrink-0">
              <MapPin className="h-7 w-7 text-navy" />
            </div>
            <div>
              <p className="text-sm text-slate mb-1">Service Area</p>
              <p className="font-semibold text-navy">
                {siteConfig.address.full}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex items-start gap-4 p-6 bg-white rounded-xl border border-silver/20"
          >
            <div className="w-14 h-14 rounded-full bg-navy/10 flex items-center justify-center shrink-0">
              <Clock className="h-7 w-7 text-navy" />
            </div>
            <div>
              <p className="text-sm text-slate mb-2">Business Hours</p>
              <p className="text-sm text-charcoal">
                Mon–Fri: {siteConfig.hours.weekday}
              </p>
              <p className="text-sm text-charcoal">
                Sat: {siteConfig.hours.saturday}
              </p>
              <p className="text-sm text-charcoal">
                Sun: {siteConfig.hours.sunday}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
