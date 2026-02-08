import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import { siteConfig } from "@/app/data/site-config";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-bold">
              <span className="text-red">Freedom</span> Junk Removal
            </Link>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              {siteConfig.tagline} Springfield IL&apos;s trusted junk removal
              service. Licensed, insured, and eco-friendly.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/services/residential"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Residential Junk Removal
                </Link>
              </li>
              <li>
                <Link
                  href="/services/estate-cleanout"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Estate Cleanout
                </Link>
              </li>
              <li>
                <Link
                  href="/services/garage-cleanout"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Garage Cleanout
                </Link>
              </li>
              <li>
                <Link
                  href="/services/commercial"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Commercial
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-red-light transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-sm text-white/70">
                  <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                  {siteConfig.address.full}
                </span>
              </li>
              <li>
                <span className="flex items-start gap-2 text-sm text-white/70">
                  <Clock className="h-4 w-4 shrink-0 mt-0.5" />
                  <span>
                    Mon–Fri: {siteConfig.hours.weekday}
                    <br />
                    Sat: {siteConfig.hours.saturday}
                    <br />
                    Sun: {siteConfig.hours.sunday}
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            &copy; {new Date().getFullYear()} Freedom Junk Removal. All rights
            reserved.
          </p>
          <p>Licensed & Insured | Springfield, IL</p>
        </div>
      </div>
    </footer>
  );
}
