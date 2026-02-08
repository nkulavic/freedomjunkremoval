import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { CTABanner } from "@/components/sections/CTABanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { FAQContent } from "@/components/sections/FAQContent";
import { faqItems } from "@/app/data/faq";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Freedom Junk Removal in Springfield, IL. Pricing, services, process, and more.",
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
