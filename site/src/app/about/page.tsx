import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { CTABanner } from "@/components/sections/CTABanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { AboutContent } from "@/components/sections/AboutContent";
import { siteConfig } from "@/app/data/site-config";

const pageTitle = "About Us";
const pageDescription =
  "Meet the team behind Freedom Junk Removal. Locally owned in Springfield, IL. Learn about our mission, values, and commitment to eco-friendly junk removal.";
const pageUrl = `${siteConfig.url}/about`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: `${pageTitle} | ${siteConfig.name}`,
    description: pageDescription,
    url: pageUrl,
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: `${pageTitle} | ${siteConfig.name}`,
    description: pageDescription,
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd type="LocalBusiness" />
      <Hero
        title="About Freedom Junk Removal"
        subtitle="Locally owned. Community focused. Eco-friendly."
        showPhone={false}
        compact
        image="/images/about-team.jpg"
      />
      <AboutContent />
      <CTABanner
        title="Ready to Reclaim Your Space?"
        subtitle="Get a free estimate today. We'll handle the heavy lifting."
      />
    </>
  );
}
