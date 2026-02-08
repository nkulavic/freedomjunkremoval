"use client";

import Image from "next/image";
import { Leaf, Users, Shield, Star } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/app/data/site-config";

const values = [
  {
    icon: Shield,
    title: "Show Up Ready",
    description:
      "On time, in uniform, prepared. Your first impression should answer every question about whether you made the right call.",
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
      "Every space we touch should look better than you expected. Every item we remove is recycled, donated, or responsibly disposed of.",
  },
  {
    icon: Users,
    title: "Build Locally",
    description:
      "This is a Springfield company. We hire, spend, and donate locally. When you wear our shirt, you're supporting a neighbor.",
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
              <h2 className="text-3xl font-bold text-navy">Our Story</h2>
              <p className="mt-4 text-slate leading-relaxed">
                Freedom Junk Removal was started by {siteConfig.owner} right
                here in Springfield, IL. He saw a gap — too many junk removal
                operators who may or may not answer the phone, may or may not
                show up on time, and almost certainly won&apos;t leave a lasting
                impression. Springfield deserved better.
              </p>
              <p className="mt-4 text-slate leading-relaxed">
                As the owner-operator, {siteConfig.owner} is on every single
                job. The person quoting your project is the same person doing
                the work. No miscommunication, no surprises — just professional
                service from start to finish.
              </p>
              <p className="mt-4 text-slate leading-relaxed">
                We&apos;re not a franchise. We&apos;re not a national chain. We&apos;re your
                neighbors — locally owned and operated, serving Sangamon County
                and the greater Springfield metro. Every dollar you spend with
                Freedom stays in our community.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src="/images/about-team.jpg"
                alt="Freedom Junk Removal team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-section-sm md:py-section bg-light-gray">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-10">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-silver/20 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-6 w-6 text-navy" />
                </div>
                <h3 className="font-semibold text-navy">{value.title}</h3>
                <p className="mt-2 text-sm text-slate leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Walking Billboard */}
      <section className="py-section-sm md:py-section">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-navy">
                The Walking Billboard
              </h2>
              <p className="mt-4 text-slate leading-relaxed">
                Every customer receives a branded Freedom Junk Removal t-shirt,
                fridge magnet, and referral card after their service. It&apos;s our
                way of saying thank you — and turning every satisfied customer
                into an ambassador for our brand across Springfield.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-section-sm md:py-section bg-light-gray">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Our Service Area
          </h2>
          <p className="text-slate mb-8">
            We proudly serve the greater Springfield, IL area:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {siteConfig.serviceArea.map((area) => (
              <span
                key={area}
                className="px-4 py-2 bg-white rounded-full text-sm font-medium text-navy border border-silver/20"
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
