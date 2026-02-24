export interface FAQItem {
  question: string;
  answer: string;
  category: "pricing" | "services" | "process" | "eco" | "booking";
}

export const faqItems: FAQItem[] = [
  {
    question: "How much does junk removal cost?",
    answer:
      "Our pricing is based on how much space your items take up in our truck. Single item pickups start at $100, and we price trailer loads in quarters: ¼ load ($200), ½ load ($400), ¾ load ($600), and full load ($800). We always provide a free, no-obligation estimate before any work begins.",
    category: "pricing",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes! We provide free on-site estimates for every job. We'll look at what needs to go, give you an upfront price, and only proceed if you're happy with the estimate. No surprises, no hidden fees.",
    category: "pricing",
  },
  {
    question: "What items do you take?",
    answer:
      "We remove almost anything non-hazardous: furniture, appliances, electronics, mattresses, beds, carpets, tires, scrap metal, scrap wood, yard waste, construction debris, hot tubs, exercise equipment, and general household junk. We also handle specialized cleanouts (garage, basement, attic, office, hoarder, eviction), curbside pickups, storm debris, and demolition. We cannot take hazardous materials like chemicals, asbestos, or medical waste.",
    category: "services",
  },
  {
    question: "Do you handle estate cleanouts?",
    answer:
      "Absolutely. We specialize in full-property estate cleanouts and work closely with families, realtors, and estate attorneys. We handle everything with care and respect, and coordinate donations for usable items.",
    category: "services",
  },
  {
    question: "Can you remove construction debris?",
    answer:
      "Yes, we handle construction and renovation debris including drywall, lumber, flooring, fixtures, and general demo waste. Contact us for an estimate on your project.",
    category: "services",
  },
  {
    question: "Do you offer demolition services?",
    answer:
      "Yes! We provide shed, fence, deck, and swingset demolition, as well as light interior demolition like cabinet removal. We tear it down and haul everything away — no need to hire a separate company. Contact us for a free estimate on your demolition project.",
    category: "services",
  },
  {
    question: "How does the process work?",
    answer:
      "It's simple: 1) Contact us for a free estimate by phone or our online form. 2) We show up at your scheduled time, assess the job, and confirm pricing. 3) We load everything up and haul it away. You don't lift a finger.",
    category: "process",
  },
  {
    question: "How quickly can you come out?",
    answer:
      "We offer same-day and next-day service in most cases. Call us in the morning and we can often be there that afternoon. For larger jobs like estate cleanouts, we recommend scheduling 48+ hours in advance.",
    category: "process",
  },
  {
    question: "Do I need to be home during the removal?",
    answer:
      "We prefer that someone is present to walk us through what needs to go, but it's not always required. For some jobs, you can simply point us in the right direction and we'll handle the rest.",
    category: "process",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. Freedom Junk Removal is fully licensed in Springfield, IL and carries general liability insurance ($1M–$2M), commercial auto insurance, and workers' compensation coverage. We're happy to provide proof of insurance upon request.",
    category: "process",
  },
  {
    question: "What happens to my junk after you take it?",
    answer:
      "We're committed to responsible disposal. We donate usable items to local charities, recycle metals, electronics, and other materials, and only send to the landfill as a last resort. Our goal is a 40–50% diversion rate.",
    category: "eco",
  },
  {
    question: "Do you recycle?",
    answer:
      "Yes! We sort every load and separate recyclable materials including metals, electronics, cardboard, and wood. We partner with local recycling facilities and donation centers to keep as much out of the landfill as possible.",
    category: "eco",
  },
  {
    question: "Do you donate items?",
    answer:
      "Whenever possible, yes. Furniture, clothing, appliances, and other items in good condition are donated to local charities and organizations in the Springfield area.",
    category: "eco",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Springfield, IL and surrounding communities including Chatham, Rochester, Sherman, Williamsville, Riverton, Jerome, Leland Grove, and Southern View.",
    category: "booking",
  },
  {
    question: "How do I schedule a pickup?",
    answer:
      "You can schedule a pickup by calling us, filling out our online contact form, or sending us an email. We'll confirm your appointment and give you a 2-hour arrival window on the day of service.",
    category: "booking",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, debit cards, cash, and digital payments through Square. Payment is collected after the job is complete and you're satisfied with our work.",
    category: "booking",
  },
];

export const faqCategories = [
  { key: "pricing" as const, label: "Pricing" },
  { key: "services" as const, label: "Services" },
  { key: "process" as const, label: "Process" },
  { key: "eco" as const, label: "Eco & Recycling" },
  { key: "booking" as const, label: "Booking" },
];
