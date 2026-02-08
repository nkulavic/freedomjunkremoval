import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { CTABanner } from "@/components/sections/CTABanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { AboutContent } from "@/components/sections/AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the team behind Freedom Junk Removal. Locally owned in Springfield, IL. Learn about our mission, values, and commitment to eco-friendly junk removal.",
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
