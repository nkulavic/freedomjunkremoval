import { Hero } from "@/components/sections/Hero";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { ServiceOverview } from "@/components/sections/ServiceOverview";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { WhyFreedom } from "@/components/sections/WhyFreedom";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQPreview } from "@/components/sections/FAQPreview";
import { CTABanner } from "@/components/sections/CTABanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { MapPin } from "lucide-react";
import { siteConfig } from "@/app/data/site-config";

export default function HomePage() {
  return (
    <>
      <JsonLd type="LocalBusiness" />

      <Hero
        title="Springfield's Most Trusted Junk Removal"
        subtitle="Upfront pricing. Same-day service. We load, haul, and clean up — you just point."
        image="/images/hero-home.jpg"
      />

      <TrustSignals />

      <ServiceOverview />

      <ProcessSteps />

      <PricingPreview />

      <WhyFreedom />

      <Testimonials />

      <FAQPreview />

      {/* Service Area */}
      <section className="py-section-sm md:py-section bg-light-gray">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <div className="inline-flex items-center gap-2 text-red mb-4">
            <MapPin className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Service Area
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy">
            Serving Springfield &amp; Sangamon County
          </h2>
          <p className="mt-3 text-lg text-slate max-w-2xl mx-auto">
            Locally owned and operated. We proudly serve the greater Springfield
            metro and surrounding communities.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {siteConfig.serviceArea.map((area) => (
              <span
                key={area}
                className="px-5 py-2.5 bg-white rounded-full text-sm font-medium text-navy border border-silver/20 shadow-sm"
              >
                {area}, IL
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTABanner variant="red" image="/images/eco-recycling.jpg" />
    </>
  );
}
