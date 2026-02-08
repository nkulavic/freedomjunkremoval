"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/app/data/site-config";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  variant?: "navy" | "red";
  image?: string;
}

export function CTABanner({
  title = "Ready to Get Rid of Your Junk?",
  subtitle = "Contact us today for a free, no-obligation estimate. Same-day service available.",
  variant = "navy",
  image,
}: CTABannerProps) {
  const bg = variant === "red" ? "bg-red" : "bg-navy";
  const overlay = variant === "red" ? "bg-red/80" : "bg-navy/80";
  const hoverBg =
    variant === "red" ? "hover:bg-white hover:text-red" : "hover:bg-white hover:text-navy";

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={`${bg} text-white relative overflow-hidden`}
    >
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className={`absolute inset-0 ${overlay}`} />
        </>
      )}
      <div className="relative mx-auto max-w-7xl px-4 py-14 md:py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        <p className="mt-3 text-lg text-white/80 max-w-xl mx-auto">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className={`inline-flex items-center px-8 py-4 bg-white/10 border-2 border-white text-white font-semibold rounded-lg text-lg transition-colors ${hoverBg}`}
          >
            Get Your Free Quote
          </Link>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold text-lg hover:text-white/80 transition-colors"
          >
            <Phone className="h-5 w-5" />
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </motion.section>
  );
}
