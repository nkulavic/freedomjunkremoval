"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, ChevronDown, Menu } from "lucide-react";
import { siteConfig, navLinks } from "@/app/data/site-config";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-navy text-white shadow-lg">
        {/* Top bar */}
        <div className="bg-navy-light/50 border-b border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-1.5 flex items-center justify-between text-sm">
            <span className="hidden sm:block text-white/80">
              Serving Springfield, IL & Surrounding Areas
            </span>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center gap-1.5 text-white hover:text-red-light transition-colors font-medium"
            >
              <Phone className="h-3.5 w-3.5" />
              {siteConfig.phone}
            </a>
          </div>
        </div>

        {/* Main nav */}
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <span className="text-red">Freedom</span>
              <span>Junk Removal</span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                "children" in link ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                      onClick={() => setServicesOpen(!servicesOpen)}
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          servicesOpen && "rotate-180"
                        )}
                      />
                    </button>
                    {servicesOpen && (
                      <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl py-2 border border-silver/20">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-charcoal hover:bg-light-gray hover:text-navy transition-colors"
                            onClick={() => setServicesOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="px-3 py-2 rounded-md text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center px-5 py-2.5 bg-red hover:bg-red-dark text-white text-sm font-semibold rounded-lg transition-colors"
              >
                Get Free Quote
              </Link>
              <button
                className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
