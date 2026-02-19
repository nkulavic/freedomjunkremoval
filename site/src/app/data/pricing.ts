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
    name: "Single Item Pickup",
    priceRange: "$100 minimum",
    description:
      "Perfect for a single piece of furniture, appliance, or a few small items.",
    examples: [
      "Couch or recliner",
      "Mattress & box spring",
      "Washer or dryer",
      "TV or electronics",
      "Exercise equipment",
    ],
    fillLevel: 10,
  },
  {
    name: "¼ Load",
    priceRange: "$200",
    description:
      "A few items — great for small room cleanouts or a handful of bulky pieces.",
    examples: [
      "Small furniture set",
      "Appliance + extras",
      "Bags of yard waste",
      "Office chair & desk",
      "Tires & scrap metal",
    ],
    fillLevel: 25,
  },
  {
    name: "½ Load",
    priceRange: "$400",
    description:
      "Great for room cleanouts, garage decluttering, or multiple large items.",
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
    name: "¾ Load",
    priceRange: "$600",
    description:
      "Large cleanouts — multiple rooms, big garage jobs, or mixed debris.",
    examples: [
      "Multi-room furniture",
      "Large garage cleanout",
      "Construction debris",
      "Basement partial clear",
      "Mixed junk & appliances",
    ],
    fillLevel: 75,
  },
  {
    name: "Full Load",
    priceRange: "$800",
    description:
      "Complete cleanouts — garages, basements, estates, or full-property jobs.",
    examples: [
      "Full garage cleanout",
      "Estate cleanout",
      "Basement clearing",
      "Move-out cleanout",
      "Full construction debris",
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
