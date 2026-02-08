import { siteConfig } from "@/app/data/site-config";

interface JsonLdProps {
  type: "LocalBusiness" | "Service" | "FAQPage";
  data?: Record<string, unknown>;
}

function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    areaServed: siteConfig.serviceArea.map((area) => ({
      "@type": "City",
      name: `${area}, IL`,
    })),
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "17:00",
      },
    ],
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram, siteConfig.social.youtube],
  };
}

function getServiceSchema(data?: Record<string, unknown>) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data?.name || "Junk Removal",
    description: data?.description || siteConfig.description,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "City",
      name: "Springfield, IL",
    },
    ...(data || {}),
  };
}

function getFAQSchema(data?: Record<string, unknown>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: (data?.questions as Array<{ question: string; answer: string }> || []).map(
      (q) => ({
        "@type": "Question",
        name: q.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: q.answer,
        },
      })
    ),
  };
}

export function JsonLd({ type, data }: JsonLdProps) {
  let schema;
  switch (type) {
    case "LocalBusiness":
      schema = getLocalBusinessSchema();
      break;
    case "Service":
      schema = getServiceSchema(data);
      break;
    case "FAQPage":
      schema = getFAQSchema(data);
      break;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
