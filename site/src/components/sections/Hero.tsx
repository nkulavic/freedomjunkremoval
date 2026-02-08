"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/app/data/site-config";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
  showPhone?: boolean;
  compact?: boolean;
  image?: string;
  imageAlt?: string;
}

export function Hero({
  title,
  subtitle,
  ctaText = "Get Your Free Quote",
  ctaHref = "/contact",
  showPhone = true,
  compact = false,
  image,
  imageAlt = "Freedom Junk Removal serving Springfield IL",
}: HeroProps) {
  return (
    <section
      className={`relative text-white overflow-hidden ${
        compact ? "py-16 md:py-24" : "py-24 md:py-40"
      }`}
    >
      {/* Background image */}
      {image ? (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy/70" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-navy" />
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>
        </>
      )}

      <div className="relative mx-auto max-w-7xl px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`font-bold leading-tight drop-shadow-lg ${
            compact
              ? "text-3xl md:text-4xl"
              : "text-4xl md:text-5xl lg:text-6xl"
          }`}
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 md:mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href={ctaHref}
            className="inline-flex items-center px-8 py-4 bg-red hover:bg-red-dark text-white font-semibold rounded-lg text-lg transition-colors shadow-lg shadow-red/25"
          >
            {ctaText}
          </Link>

          {showPhone && (
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg text-lg transition-colors border border-white/20 backdrop-blur-sm"
            >
              <Phone className="h-5 w-5" />
              Call {siteConfig.phone}
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
