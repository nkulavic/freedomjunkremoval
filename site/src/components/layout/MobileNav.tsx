"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ChevronDown, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig, navLinks } from "@/app/data/site-config";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const [servicesExpanded, setServicesExpanded] = useState(false);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 lg:hidden"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-navy z-50 lg:hidden flex flex-col"
          >
            {/* Close */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <span className="text-white font-bold text-lg">Menu</span>
              <button
                onClick={onClose}
                className="p-2 rounded-md hover:bg-white/10 text-white transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 overflow-y-auto py-4">
              {navLinks.map((link) =>
                "children" in link ? (
                  <div key={link.label}>
                    <button
                      className="w-full flex items-center justify-between px-6 py-3 text-white/90 hover:text-white hover:bg-white/5 transition-colors"
                      onClick={() => setServicesExpanded(!servicesExpanded)}
                    >
                      <span className="font-medium">{link.label}</span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          servicesExpanded && "rotate-180"
                        )}
                      />
                    </button>
                    <AnimatePresence>
                      {servicesExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden bg-white/5"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={onClose}
                              className="block px-10 py-2.5 text-sm text-white/70 hover:text-white transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={onClose}
                    className="block px-6 py-3 font-medium text-white/90 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Bottom CTA */}
            <div className="p-4 border-t border-white/10 space-y-3">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </a>
              <Link
                href="/contact"
                onClick={onClose}
                className="block w-full py-3 bg-red hover:bg-red-dark text-white text-center rounded-lg font-semibold transition-colors"
              >
                Get Free Quote
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
