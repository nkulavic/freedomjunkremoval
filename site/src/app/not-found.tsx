import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/app/data/site-config";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description:
    "The page you're looking for doesn't exist. Visit Freedom Junk Removal's homepage or contact us for help.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="py-24 md:py-40">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <p className="text-sm font-semibold text-red uppercase tracking-wider mb-2">
          404 — Page Not Found
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-navy">
          This Page Doesn&apos;t Exist
        </h1>
        <p className="mt-4 text-lg text-slate max-w-md mx-auto">
          The page you&apos;re looking for may have been moved or no longer
          exists. Let us help you find what you need.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center px-8 py-4 bg-red hover:bg-red-dark text-white font-semibold rounded-lg text-lg transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-navy hover:bg-navy-light text-white font-semibold rounded-lg text-lg transition-colors"
          >
            Contact Us
          </Link>
        </div>
        <p className="mt-8 text-sm text-slate">
          Or call us directly at{" "}
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="text-red font-semibold hover:underline"
          >
            {siteConfig.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
