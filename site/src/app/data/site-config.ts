export const siteConfig = {
  name: "Freedom Junk Removal",
  tagline: "Break Free From the Clutter.",
  description:
    "Springfield IL's most trusted junk removal service. Licensed, insured, and eco-friendly. Residential, estate cleanouts, garage cleanouts, and commercial junk hauling. Free estimates. Serving Sangamon County.",
  url: "https://freedomjunkremoval.com",
  phone: "(217) 555-FREE",
  phoneRaw: "+12175553733",
  email: "info@freedomjunkremoval.com",
  address: {
    street: "",
    city: "Springfield",
    state: "IL",
    zip: "62701",
    full: "Springfield, IL 62701",
  },
  serviceArea: [
    "Springfield",
    "Chatham",
    "Rochester",
    "Sherman",
    "Williamsville",
    "Riverton",
    "Jerome",
    "Leland Grove",
    "Southern View",
  ],
  social: {
    facebook: "https://facebook.com/freedomjunkremoval",
    instagram: "https://instagram.com/freedomjunkremoval",
    youtube: "https://youtube.com/@freedomjunkremoval",
    google:
      "https://g.page/freedomjunkremoval",
  },
  hours: {
    weekday: "7:00 AM – 7:00 PM",
    saturday: "8:00 AM – 5:00 PM",
    sunday: "By Appointment",
  },
  owner: "Nick Bromer",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Residential Junk Removal", href: "/services/residential" },
      { label: "Estate Cleanout", href: "/services/estate-cleanout" },
      { label: "Garage Cleanout", href: "/services/garage-cleanout" },
      { label: "Commercial", href: "/services/commercial" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;
