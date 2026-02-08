import { Hero } from "@/components/sections/Hero";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { ServiceOverview } from "@/components/sections/ServiceOverview";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";
import { JsonLd } from "@/components/seo/JsonLd";
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

      {/* Service Area */}
      <section className="py-section-sm md:py-section">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">
            Serving Springfield & Beyond
          </h2>
          <p className="mt-3 text-lg text-slate max-w-2xl mx-auto">
            We proudly serve Springfield, IL and surrounding communities.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {siteConfig.serviceArea.map((area) => (
              <span
                key={area}
                className="px-4 py-2 bg-light-gray rounded-full text-sm font-medium text-navy border border-silver/20"
              >
                {area}, IL
              </span>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <CTABanner variant="red" image="/images/eco-recycling.jpg" />
    </>
  );
}
