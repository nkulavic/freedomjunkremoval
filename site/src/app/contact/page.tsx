import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { JsonLd } from "@/components/seo/JsonLd";
import { ContactContent } from "@/components/sections/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Freedom Junk Removal for a free, no-obligation junk removal estimate in Springfield, IL. Call, email, or book online. Same-day and next-day service available.",
};

export default function ContactPage() {
  return (
    <>
      <JsonLd type="LocalBusiness" />
      <Hero
        title="Get Your Free Estimate"
        subtitle="Book online in minutes or reach out directly by phone or email."
        showCta={false}
        compact
        image="/images/truck.jpg"
      />
      <ContactContent />
    </>
  );
}
