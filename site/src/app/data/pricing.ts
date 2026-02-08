export interface PricingTier {
  name: string;
  priceRange: string;
  description: string;
  examples: string[];
  fillLevel: number; // 0-100 for visual truck fill indicator
  popular?: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Single Items",
    priceRange: "$75 – $150",
    description:
      "Perfect for a single piece of furniture, appliance, or a few small items.",
    examples: [
      "Couch or recliner",
      "Mattress & box spring",
      "Washer or dryer",
      "TV or electronics",
      "Exercise equipment",
    ],
    fillLevel: 15,
  },
  {
    name: "Partial Truck Load",
    priceRange: "$200 – $350",
    description:
      "Great for room cleanouts, garage decluttering, or multiple items.",
    examples: [
      "Bedroom set",
      "Multiple appliances",
      "Garage partial cleanout",
      "Office furniture",
      "Yard waste pile",
    ],
    fillLevel: 50,
    popular: true,
  },
  {
    name: "Full Truck Load",
    priceRange: "$400 – $600+",
    description:
      "Complete cleanouts — garages, basements, estates, or full-property jobs.",
    examples: [
      "Full garage cleanout",
      "Estate cleanout",
      "Basement clearing",
      "Move-out cleanout",
      "Construction debris",
    ],
    fillLevel: 100,
  },
];

export const pricingFactors = [
  {
    title: "Volume",
    description: "How much space your items take up in our truck.",
  },
  {
    title: "Weight",
    description: "Heavier items like concrete or dirt may cost more.",
  },
  {
    title: "Accessibility",
    description: "Stairs, tight spaces, or long carry distances.",
  },
  {
    title: "Disposal Type",
    description: "Special disposal for electronics, mattresses, or appliances.",
  },
];
