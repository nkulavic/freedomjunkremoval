import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { CTABanner } from "@/components/sections/CTABanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { FAQContent } from "@/components/sections/FAQContent";
import { faqItems } from "@/app/data/faq";
import { siteConfig } from "@/app/data/site-config";

const pageTitle = "Frequently Asked Questions";
const pageDescription =
  "Answers to common questions about Freedom Junk Removal in Springfield, IL. Learn about our pricing, services, booking process, recycling practices, and what to expect.";
const pageUrl = `${siteConfig.url}/faq`;

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

export default function FAQPage() {
  return (
    <>
      <JsonLd
        type="FAQPage"
        data={{
          questions: faqItems.map((item) => ({
            question: item.question,
            answer: item.answer,
          })),
        }}
      />
      <Hero
        title="Frequently Asked Questions"
        subtitle="Got questions? We've got answers."
        showPhone={false}
        compact
        image="/images/declutter.jpg"
      />
      <FAQContent />
      <CTABanner
        title="Still Have Questions?"
        subtitle="Give us a call or send a message. We're happy to help."
      />
    </>
  );
}
