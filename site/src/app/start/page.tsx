import type { Metadata } from "next";
import { siteConfig } from "@/app/data/site-config";
import { StartContent } from "@/components/sections/StartContent";

export const metadata: Metadata = {
  title: "Get Started",
  description: `Ready to clear the clutter? Get a free estimate from ${siteConfig.name} — Springfield IL's most trusted junk removal service. Fast, affordable, eco-friendly.`,
  openGraph: {
    title: `Get Started | ${siteConfig.name}`,
    description: `Ready to clear the clutter? Get a free estimate from ${siteConfig.name} — Springfield IL's most trusted junk removal service.`,
    url: `${siteConfig.url}/start`,
  },
  alternates: {
    canonical: `${siteConfig.url}/start`,
  },
};

export default function StartPage() {
  return <StartContent />;
}
