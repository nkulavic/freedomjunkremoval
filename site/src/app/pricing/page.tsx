import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { CTABanner } from "@/components/sections/CTABanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { PricingContent } from "@/components/sections/PricingContent";
import { siteConfig } from "@/app/data/site-config";

const pageTitle = "Pricing";
const pageDescription =
  "Transparent junk removal pricing in Springfield, IL. Single items from $75, partial loads from $200, full loads from $400. Free estimates. No hidden fees.";
const pageUrl = `${siteConfig.url}/pricing`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: `${pageTitle} | ${siteConfig.name}`,
    description: pageDescription,
    url: pageUrl,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${pageTitle} | ${siteConfig.name}`,
    description: pageDescription,
  },
};

export default function PricingPage() {
  return (
    <>
      <JsonLd type="LocalBusiness" />
      <Hero
        title="Simple, Transparent Pricing"
        subtitle="No hidden fees. No surprises. Just honest pricing for honest work."
        ctaText="Get Your Exact Price — Free Estimate"
        compact
        image="/images/truck.jpg"
      />
      <PricingContent />
      <CTABanner
        variant="red"
        title="Not Sure What It'll Cost?"
        subtitle="Every job is unique. Contact us for a free, no-obligation on-site estimate."
        image="/images/truck.jpg"
      />
    </>
  );
}
