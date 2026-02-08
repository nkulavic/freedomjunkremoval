import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { JsonLd } from "@/components/seo/JsonLd";
import { ContactContent } from "@/components/sections/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Freedom Junk Removal for a free, no-obligation junk removal estimate in Springfield, IL. Call, email, or fill out our form. Same-day and next-day service available.",
};

export default function ContactPage() {
  return (
    <>
      <JsonLd type="LocalBusiness" />
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
