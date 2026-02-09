import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { CTABanner } from "@/components/sections/CTABanner";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServicePageContent } from "@/components/sections/ServicePageContent";
import { services } from "@/app/data/services";
import { siteConfig } from "@/app/data/site-config";

const service = services.find((s) => s.slug === "residential")!;
const pageUrl = `${siteConfig.url}/services/${service.slug}`;

export const metadata: Metadata = {
  title: { absolute: service.seo.title },
  description: service.seo.description,
  keywords: service.seo.keywords,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: service.seo.title,
    description: service.seo.description,
    url: pageUrl,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: service.seo.title,
    description: service.seo.description,
  },
};

export default function ResidentialPage() {
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
