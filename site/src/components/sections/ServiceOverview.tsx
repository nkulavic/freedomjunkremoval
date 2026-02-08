"use client";

import Image from "next/image";
import Link from "next/link";
import { Home, Heart, Warehouse, Building2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { services } from "@/app/data/services";

const iconMap: Record<string, React.ElementType> = {
  Home,
  Heart,
  Warehouse,
  Building2,
};

export function ServiceOverview() {
  return (
    <section className="py-section-sm md:py-section bg-light-gray">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">
            Our Services
          </h2>
          <p className="mt-3 text-lg text-slate max-w-2xl mx-auto">
            From single items to full property cleanouts — we handle it all so
            you don&apos;t have to.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Home;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group block bg-white rounded-xl overflow-hidden shadow-sm border border-silver/20 hover:shadow-md hover:border-navy/20 transition-all h-full"
                >
                  <div className="relative h-40 w-full">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/10 transition-colors" />
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-lg bg-white/90 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-navy" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-lg text-navy">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-sm text-slate leading-relaxed">
                      {service.shortDescription}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-red group-hover:gap-2 transition-all">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
