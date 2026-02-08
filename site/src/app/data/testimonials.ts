export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  serviceType: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    location: "Springfield, IL",
    rating: 5,
    text: "Freedom Junk Removal made our estate cleanout so much easier during a difficult time. They were respectful, efficient, and left the house spotless. Highly recommend!",
    serviceType: "Estate Cleanout",
    date: "2025-09-15",
  },
  {
    name: "Mike R.",
    location: "Chatham, IL",
    rating: 5,
    text: "I couldn't believe how fast they cleared out my garage. Two guys showed up on time, hauled everything away, and even swept up after. Best money I've spent all year.",
    serviceType: "Garage Cleanout",
    date: "2025-10-02",
  },
  {
    name: "Jennifer L.",
    location: "Rochester, IL",
    rating: 5,
    text: "Called in the morning, they came that afternoon. Got rid of an old couch, broken treadmill, and a pile of junk from the basement. Fair price, great service.",
    serviceType: "Residential Junk Removal",
    date: "2025-10-20",
  },
  {
    name: "David K.",
    location: "Springfield, IL",
    rating: 5,
    text: "As a property manager, I need reliable junk removal. Freedom shows up when they say they will and handles everything professionally. They're my go-to now.",
    serviceType: "Commercial",
    date: "2025-11-05",
  },
  {
    name: "Linda P.",
    location: "Sherman, IL",
    rating: 5,
    text: "The whole experience was wonderful. They gave us a clear price upfront, no surprises. Plus they donated the furniture that was still in good shape. Love that they recycle!",
    serviceType: "Residential Junk Removal",
    date: "2025-11-18",
  },
  {
    name: "Tom & Janet W.",
    location: "Williamsville, IL",
    rating: 5,
    text: "We had 30 years of stuff in our basement. Freedom came out, gave us a fair quote, and had everything cleared in one day. Wish we'd called them sooner!",
    serviceType: "Residential Junk Removal",
    date: "2025-12-03",
  },
];
