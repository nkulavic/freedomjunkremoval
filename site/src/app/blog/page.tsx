import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { CTABanner } from "@/components/sections/CTABanner";
import { FileText, Lightbulb, Calendar, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tips, guides, and local news from Freedom Junk Removal in Springfield, IL. Decluttering tips, moving guides, and more.",
};

const upcomingTopics = [
  {
    icon: Lightbulb,
    title: "Decluttering Tips",
    description: "Room-by-room guides to finally tackle the clutter.",
  },
  {
    icon: Calendar,
    title: "Seasonal Cleanup",
    description: "Spring cleaning checklists and fall prep guides.",
  },
  {
    icon: FileText,
    title: "Moving Guides",
    description: "How to handle junk before, during, and after a move.",
  },
  {
    icon: MapPin,
    title: "Springfield News",
    description: "Local community events, recycling tips, and more.",
  },
];

export default function BlogPage() {
  return (
    <>
      <Hero
        title="Freedom Blog"
        subtitle="Tips, tricks, and local insights for a clutter-free life."
        showPhone={false}
        compact
        image="/images/declutter.jpg"
      />
      <section className="py-section-sm md:py-section">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-red uppercase tracking-wider mb-2">
              Coming Soon
            </p>
            <h2 className="text-3xl font-bold text-navy">
              We&apos;re Working on Something Good
            </h2>
            <p className="mt-3 text-lg text-slate max-w-xl mx-auto">
              Our blog is launching soon with helpful content for Springfield
              homeowners. Here&apos;s what to expect:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {upcomingTopics.map((topic) => (
              <div
                key={topic.title}
                className="flex items-start gap-4 p-5 bg-light-gray rounded-xl border border-silver/20"
              >
                <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center shrink-0">
                  <topic.icon className="h-5 w-5 text-navy" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy">{topic.title}</h3>
                  <p className="mt-1 text-sm text-slate">{topic.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-slate mb-4">
              In the meantime, have a question or need junk removed?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-red hover:bg-red-dark text-white font-semibold rounded-lg transition-colors"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>
      <CTABanner variant="red" />
    </>
  );
}
