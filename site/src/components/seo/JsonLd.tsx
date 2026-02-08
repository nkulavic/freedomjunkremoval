import { siteConfig } from "@/app/data/site-config";
import { testimonials } from "@/app/data/testimonials";

interface JsonLdProps {
  type: "LocalBusiness" | "Service" | "FAQPage";
  data?: Record<string, unknown>;
}

function getLocalBusinessSchema() {
  const avgRating =
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    founder: {
      "@type": "Person",
      name: siteConfig.owner,
    },
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: avgRating.toFixed(1),
      reviewCount: testimonials.length,
      bestRating: "5",
      worstRating: "1",
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      datePublished: t.date,
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: "5",
      },
      reviewBody: t.text,
    })),
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
