import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { CTABanner } from "@/components/sections/CTABanner";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServicePageContent } from "@/components/sections/ServicePageContent";
import { services } from "@/app/data/services";

const service = services.find((s) => s.slug === "commercial")!;

export const metadata: Metadata = {
  title: service.seo.title,
  description: service.seo.description,
  keywords: service.seo.keywords,
};

export default function CommercialPage() {
  return (
    <>
      <JsonLd
        type="Service"
        data={{ name: service.name, description: service.description }}
      />
      <Hero title={service.name} subtitle={service.tagline} compact image={service.image} />
      <TrustSignals />
      <ServicePageContent service={service} />
      <CTABanner />
    </>
  );
}
