import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { CTABanner } from "@/components/sections/CTABanner";
import { Testimonials } from "@/components/sections/Testimonials";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/app/data/site-config";

const pageTitle = "Reviews & Testimonials";
const pageDescription =
  "See what Springfield, IL homeowners say about Freedom Junk Removal. 5-star rated junk removal with real customer reviews. Licensed, insured, and locally owned.";
const pageUrl = `${siteConfig.url}/reviews`;

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

export default function ReviewsPage() {
  return (
    <>
      <JsonLd type="LocalBusiness" />
      <Hero
        title="What Our Customers Say"
        subtitle="Real reviews from real Springfield homeowners. We let our work speak for itself."
        showPhone={false}
        compact
        image="/images/clean-space.jpg"
      />
      <Testimonials />
      <CTABanner
        title="Join Our Happy Customers"
        subtitle="Experience the Freedom difference. Get your free estimate today."
      />
    </>
  );
}
