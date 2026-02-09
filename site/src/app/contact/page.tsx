import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { JsonLd } from "@/components/seo/JsonLd";
import { ContactContent } from "@/components/sections/ContactContent";
import { siteConfig } from "@/app/data/site-config";

const pageTitle = "Contact Us";
const pageDescription =
  "Contact Freedom Junk Removal for a free, no-obligation junk removal estimate in Springfield, IL. Call, email, or fill out our form. Same-day and next-day service available.";
const pageUrl = `${siteConfig.url}/contact`;

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

export default function ContactPage() {
  return (
    <>
      <JsonLd type="LocalBusiness" />
      <JsonLd type="ContactPage" />
      <Hero
        title="Get Your Free Quote"
        subtitle="Fill out the form below or give us a call. We'll get back to you fast."
        showPhone
        compact
        image="/images/truck.jpg"
      />
      <ContactContent />
    </>
  );
}
