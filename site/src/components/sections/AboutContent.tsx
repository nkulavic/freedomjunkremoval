"use client";

import Image from "next/image";
import Link from "next/link";
import { Leaf, Users, Shield, Star, Repeat, ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/app/data/site-config";

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
  {
    icon: Repeat,
    title: "Earn the Next Call",
    description:
      "We don't just want one job. We want to be the company you call every time — and tell your friends about.",
  },
];

export function AboutContent() {
  return (
    <>
      {/* Owner Story */}
      <section className="py-section-sm md:py-section">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-semibold text-red uppercase tracking-wider mb-2">
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy">
                Springfield Deserved Better
              </h2>
              <p className="mt-6 text-slate leading-relaxed">
                {siteConfig.owner} started Freedom Junk Removal after seeing a
                gap in Springfield&apos;s service landscape — too many operators who
                may or may not answer the phone, may or may not show up on time,
                and almost certainly won&apos;t leave a lasting impression.
              </p>
              <p className="mt-4 text-slate leading-relaxed">
                As the owner-operator, {siteConfig.owner} is on every single
                job. The person quoting your project is the same person doing
                the work. No middlemen, no miscommunication — just professional
                service from start to finish.
              </p>
              <p className="mt-4 text-slate leading-relaxed">
                We&apos;re not a franchise or a national chain. We&apos;re your
                neighbors — locally owned and operated, serving Sangamon County
                and the greater Springfield metro. Every dollar you spend with
                Freedom stays in our community.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-red hover:bg-red-dark text-white font-semibold rounded-lg transition-colors"
              >
                Get a Free Estimate
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-80 lg:h-[28rem] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/about-team.jpg"
                alt="Freedom Junk Removal team at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 md:py-16 bg-navy text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-medium leading-relaxed italic text-white/90"
          >
            &ldquo;To help Springfield residents and businesses break free from
            the clutter, junk, and unwanted belongings that weigh down their
            homes, properties, and lives — through reliable service, honest
            pricing, and hard work.&rdquo;
          </motion.blockquote>
          <p className="mt-4 text-sm text-white/50 uppercase tracking-wider font-semibold">
            Our Mission
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-section-sm md:py-section bg-light-gray">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-red uppercase tracking-wider mb-2">
              What Drives Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
        </div>
      </section>

      {/* Service Area */}
      <section className="py-section-sm md:py-section">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <div className="inline-flex items-center gap-2 text-red mb-4">
            <MapPin className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Service Area
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">
            Serving Sangamon County
          </h2>
          <p className="text-slate mb-8 max-w-xl mx-auto">
            We proudly serve Springfield, IL and the surrounding communities
            across the greater metro area.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {siteConfig.serviceArea.map((area) => (
              <span
                key={area}
                className="px-5 py-2.5 bg-light-gray rounded-full text-sm font-medium text-navy border border-silver/20"
              >
                {area}, IL
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
