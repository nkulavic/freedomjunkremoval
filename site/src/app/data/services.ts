export interface Service {
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  description: string;
  features: string[];
  items: string[];
  priceRange: string;
  icon: string;
  image: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const services: Service[] = [
  {
    slug: "residential",
    name: "Residential Junk Removal",
    tagline: "Reclaim Your Space",
    shortDescription:
      "We handle everything from single items to full cleanouts. Furniture, appliances, yard waste, and more.",
    description:
      "Whether you're decluttering a single room or clearing out an entire home, Freedom Junk Removal makes it easy. We haul away furniture, appliances, electronics, yard waste, tires, scrap metal, and general household junk — so you don't have to lift a finger. We also handle curbside pickups and storm debris removal.",
    features: [
      "Same-day and next-day service available",
      "We do all the heavy lifting",
      "Eco-friendly disposal — we donate and recycle",
      "Upfront, transparent pricing",
      "Licensed and fully insured",
      "Curbside pickup available",
    ],
    items: [
      "Furniture & couches",
      "Appliances",
      "Mattresses & beds",
      "Electronics & TVs",
      "Yard waste & debris",
      "Carpets & rugs",
      "Tires",
      "Scrap metal & any metal",
      "Scrap wood",
      "Construction debris",
      "Exercise equipment",
      "Hot tubs",
      "Trash & general junk",
      "Storm debris",
    ],
    priceRange: "$100 – $800",
    icon: "Home",
    image: "/images/residential.jpg",
    seo: {
      title: "Residential Junk Removal Springfield IL | Freedom Junk Removal",
      description:
        "Professional residential junk removal in Springfield, IL. Furniture, appliances, yard waste, tires, scrap metal removal. Free estimates. Licensed & insured. Call today!",
      keywords: [
        "residential junk removal springfield il",
        "furniture removal springfield",
        "appliance removal springfield il",
        "junk hauling springfield",
        "storm debris removal springfield",
        "curbside pickup springfield il",
      ],
    },
  },
  {
    slug: "estate-cleanout",
    name: "Estate Cleanout Services",
    tagline: "Compassionate & Complete",
    shortDescription:
      "Full-property cleanouts handled with care. We work with families, realtors, and attorneys.",
    description:
      "Estate cleanouts require sensitivity and thoroughness. Freedom Junk Removal works with families, realtors, and estate attorneys to completely clear properties — handling everything from furniture and personal items to garage and basement contents. We also specialize in hoarder cleanouts and eviction cleanouts, treating every home with the respect it deserves.",
    features: [
      "Full-property cleanout capability",
      "Work with realtors and estate attorneys",
      "Compassionate, respectful service",
      "Donation coordination for usable items",
      "Flexible scheduling around closings",
      "Hoarder & eviction cleanouts handled with care",
    ],
    items: [
      "Complete home contents",
      "Basement clearing",
      "Attic clearing",
      "Garage & shed cleanout",
      "Furniture & personal items",
      "Appliances & electronics",
      "Yard debris & outdoor items",
      "Hoarder cleanouts",
      "Eviction cleanouts",
    ],
    priceRange: "$400 – $2,000+",
    icon: "Heart",
    image: "/images/estate-cleanout.jpg",
    seo: {
      title: "Estate Cleanout Services Springfield IL | Freedom Junk Removal",
      description:
        "Compassionate estate cleanout services in Springfield, IL. Full-property, hoarder, and eviction cleanouts for families, realtors, and attorneys. Free estimates. Licensed & insured.",
      keywords: [
        "estate cleanout springfield il",
        "estate cleanout services",
        "property cleanout springfield",
        "house cleanout service",
        "hoarder cleanout springfield il",
        "eviction cleanout springfield",
      ],
    },
  },
  {
    slug: "garage-cleanout",
    name: "Garage Cleanout",
    tagline: "Park Your Car Again",
    shortDescription:
      "Take back your garage. We remove everything from old tools to broken equipment fast.",
    description:
      "Is your garage so full you can't park your car? Freedom Junk Removal specializes in garage cleanouts — removing old tools, broken equipment, stored junk, scrap metal, tires, and everything else that's been piling up. We'll have your garage cleared and usable in just a few hours.",
    features: [
      "Fast turnaround — most garages done in 2–4 hours",
      "We sort, haul, and dispose of everything",
      "Recycling for metals, electronics, and hazard-free items",
      "Perfect for spring cleaning or moving prep",
      "Free on-site estimates",
    ],
    items: [
      "Old tools & workbenches",
      "Broken lawn equipment",
      "Stored boxes & clutter",
      "Bikes & sports equipment",
      "Paint cans & chemicals (non-hazmat)",
      "Shelving & storage units",
      "Tires",
      "Scrap metal & any metal",
      "Scrap wood",
    ],
    priceRange: "$200 – $800",
    icon: "Warehouse",
    image: "/images/garage.jpg",
    seo: {
      title: "Garage Cleanout Springfield IL | Freedom Junk Removal",
      description:
        "Professional garage cleanout service in Springfield, IL. Fast, affordable garage junk removal and organization. Free on-site estimates. Licensed and insured. We haul it all!",
      keywords: [
        "garage cleanout springfield il",
        "garage junk removal",
        "garage cleaning service springfield",
        "clean out garage",
      ],
    },
  },
  {
    slug: "commercial",
    name: "Commercial Junk Removal",
    tagline: "Keep Your Business Clean",
    shortDescription:
      "Office cleanouts, construction debris, and recurring service for property managers and businesses.",
    description:
      "Freedom Junk Removal serves Springfield businesses with reliable commercial junk removal. Whether you're clearing out an office, cleaning up a construction site, or need recurring waste removal for rental properties — we handle it all with minimal disruption to your operations.",
    features: [
      "Office & retail cleanouts",
      "Construction debris removal",
      "Recurring service contracts available",
      "Flexible scheduling — evenings and weekends",
      "Volume discounts for regular clients",
      "Certificate of insurance available",
    ],
    items: [
      "Office furniture & cubicles",
      "Electronics & IT equipment",
      "Construction debris",
      "Retail fixtures & displays",
      "Warehouse cleanouts",
      "Property management turnovers",
      "Carpets & flooring",
      "Scrap metal & any metal",
    ],
    priceRange: "$200 – $1,500+",
    icon: "Building2",
    image: "/images/commercial.jpg",
    seo: {
      title: "Commercial Junk Removal Springfield IL | Freedom Junk Removal",
      description:
        "Commercial junk removal for Springfield, IL businesses. Office cleanouts, construction debris, recurring service. Free estimates. Licensed & insured.",
      keywords: [
        "commercial junk removal springfield il",
        "office cleanout springfield",
        "construction debris removal",
        "business junk removal",
      ],
    },
  },
  {
    slug: "demolition",
    name: "Demolition Services",
    tagline: "Tear It Down. Haul It Away.",
    shortDescription:
      "Shed, deck, fence, and swingset demolition — we break it down and remove all debris.",
    description:
      "From old sheds and rotting decks to chain-link fences and backyard swingsets, Freedom Junk Removal handles full demolition and debris removal. We tear it down safely and haul every last piece away, leaving your property clean. We also handle light interior demolition such as cabinet removal.",
    features: [
      "Safe, controlled structure removal",
      "Full debris hauling included — no extra trips",
      "No heavy equipment needed for most jobs",
      "Licensed and fully insured",
      "Free on-site estimates",
      "Light interior demolition available",
    ],
    items: [
      "Shed demolition",
      "Deck demolition & removal",
      "Fence removal",
      "Swingset & playset removal",
      "Cabinet removal",
      "Light interior demolition",
      "Construction debris hauling",
    ],
    priceRange: "$200 – $800+",
    icon: "Hammer",
    image: "/images/commercial.jpg",
    seo: {
      title: "Demolition Services Springfield IL | Freedom Junk Removal",
      description:
        "Professional shed, deck, fence, and swingset demolition in Springfield, IL. Full debris removal included. Free estimates. Licensed and insured.",
      keywords: [
        "shed demolition springfield il",
        "deck removal springfield",
        "fence removal springfield il",
        "demolition services springfield",
        "swingset removal springfield",
      ],
    },
  },
];
