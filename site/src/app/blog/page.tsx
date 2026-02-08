import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tips, guides, and local news from Freedom Junk Removal in Springfield, IL. Decluttering tips, moving guides, and more.",
};

export default function BlogPage() {
  return (
    <>
      <Hero
        title="Freedom Blog"
        subtitle="Tips, tricks, and local insights for a clutter-free life."
        showPhone={false}
        compact
      />
      <section className="py-section-sm md:py-section">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="text-lg text-slate">
            Blog posts coming soon! We&apos;ll be sharing decluttering tips,
            moving guides, seasonal cleanup advice, and Springfield community
            news.
          </p>
        </div>
      </section>
      <CTABanner variant="red" />
    </>
  );
}
