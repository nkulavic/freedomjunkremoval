"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Phone,
  Truck,
  Sparkles,
  Shield,
  Leaf,
  Star,
  Clock,
  Send,
  ChevronRight,
  Sofa,
  Home,
  Building2,
  Warehouse,
  HardHat,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/app/data/site-config";
import { testimonials } from "@/app/data/testimonials";

/* ─── trust badges ─── */
const trustBadges = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Leaf, label: "Eco-Friendly" },
  { icon: Star, label: "5-Star Rated" },
  { icon: Clock, label: "Same-Day Available" },
];

/* ─── services quick grid ─── */
const services = [
  {
    icon: Sofa,
    title: "Residential",
    desc: "Furniture, appliances, basement & attic cleanouts",
    image: "/images/residential.jpg",
  },
  {
    icon: Home,
    title: "Estate Cleanout",
    desc: "Full-property clearing with care and respect",
    image: "/images/estate-cleanout.jpg",
  },
  {
    icon: Warehouse,
    title: "Garage Cleanout",
    desc: "Reclaim your garage — we handle everything",
    image: "/images/garage.jpg",
  },
  {
    icon: Building2,
    title: "Commercial",
    desc: "Office cleanouts, tenant turnovers, construction debris",
    image: "/images/commercial.jpg",
  },
  {
    icon: HardHat,
    title: "Demolition",
    desc: "Sheds, decks, fences, hot tubs, and more",
    image: "/images/declutter.jpg",
  },
];

/* ─── process steps ─── */
const steps = [
  {
    icon: Phone,
    num: 1,
    title: "You Point",
    desc: "Tell us what goes. Send photos, text us, or show us on-site. We give you a firm price — no surprises.",
  },
  {
    icon: Truck,
    num: 2,
    title: "We Load",
    desc: "Our crew handles everything. Heavy lifting, sorting, hauling — all included. You don't touch a thing.",
  },
  {
    icon: Sparkles,
    num: 3,
    title: "You're Free",
    desc: "Clean space, no mess left behind. We donate, recycle, and dispose of everything responsibly.",
  },
];

/* ─── pricing quick view ─── */
const quickPricing = [
  { label: "Single Item", price: "$100", note: "minimum" },
  { label: "Quarter Load", price: "$200", note: "" },
  { label: "Half Load", price: "$400", note: "most common", popular: true },
  { label: "Full Load", price: "$800", note: "" },
];

/* ─── selected testimonials for funnel ─── */
const featuredTestimonials = testimonials.slice(0, 3);

export function StartContent() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    serviceType: "",
    description: "",
    preferredDate: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({
          name: "",
          phone: "",
          email: "",
          address: "",
          serviceType: "",
          description: "",
          preferredDate: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* ════════════════════════════════════════════════
          SECTION 1 — Hero / Welcome
      ════════════════════════════════════════════════ */}
      <section className="relative text-white overflow-hidden py-24 md:py-36">
        <Image
          src="/images/hero-home.jpg"
          alt="Freedom Junk Removal truck and crew"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/75" />

        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm md:text-base font-semibold text-red-light uppercase tracking-wider mb-4"
          >
            Thanks for checking us out
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg"
          >
            Ready to Clear the Clutter?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow"
          >
            Springfield&apos;s most trusted junk removal crew. Tell us what
            needs to go — we&apos;ll handle the rest.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#estimate"
              className="inline-flex items-center gap-2 px-8 py-4 bg-red hover:bg-red-dark text-white font-semibold rounded-lg text-lg transition-colors shadow-lg shadow-red/25"
            >
              Get Your Free Estimate
              <ChevronRight className="h-5 w-5" />
            </a>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg text-lg transition-colors border border-white/20 backdrop-blur-sm"
            >
              <Phone className="h-5 w-5" />
              Call {siteConfig.phone}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 2 — Trust Badges
      ════════════════════════════════════════════════ */}
      <section className="bg-light-gray border-b border-silver/20">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustBadges.map((b) => (
              <div
                key={b.label}
                className="flex items-center justify-center gap-2.5 py-1"
              >
                <div className="w-8 h-8 rounded-full bg-red/10 flex items-center justify-center shrink-0">
                  <b.icon className="h-4 w-4 text-red" />
                </div>
                <span className="text-sm font-semibold text-navy">
                  {b.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 3 — What We Handle
      ════════════════════════════════════════════════ */}
      <section className="py-section-sm md:py-section">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-red uppercase tracking-wider mb-2">
              Our Services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              What We Handle
            </h2>
            <p className="mt-3 text-slate max-w-xl mx-auto">
              From a single couch to a full estate — if it needs to go, we take
              care of it.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative rounded-xl overflow-hidden border border-silver/20 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-36">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/30 transition-colors" />
                  <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-white/90 flex items-center justify-center">
                    <s.icon className="h-5 w-5 text-navy" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-navy">{s.title}</h3>
                  <p className="mt-1 text-sm text-slate leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 4 — How It Works
      ════════════════════════════════════════════════ */}
      <section className="py-section-sm md:py-section bg-light-gray">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-red uppercase tracking-wider mb-2">
              Simple Process
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              How It Works
            </h2>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-0.5 bg-silver/40" />

            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="relative text-center bg-white rounded-xl p-6 border border-silver/20 shadow-sm"
              >
                <div className="relative mx-auto w-16 h-16 rounded-full bg-navy flex items-center justify-center mb-5">
                  <step.icon className="h-7 w-7 text-white" />
                  <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-red text-white text-sm font-bold flex items-center justify-center shadow-sm">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-bold text-lg text-navy">{step.title}</h3>
                <p className="mt-2 text-sm text-slate leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 5 — Transparent Pricing
      ════════════════════════════════════════════════ */}
      <section className="py-section-sm md:py-section">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-red uppercase tracking-wider mb-2">
              No Surprises
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              Straightforward Pricing
            </h2>
            <p className="mt-3 text-slate max-w-xl mx-auto">
              We quote a firm price before we start. No hidden fees, no hourly
              charges.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {quickPricing.map((tier, i) => (
              <motion.div
                key={tier.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className={`text-center rounded-xl p-5 border shadow-sm ${
                  tier.popular
                    ? "border-red/30 bg-red/5 ring-1 ring-red/20"
                    : "border-silver/20 bg-white"
                }`}
              >
                {tier.popular && (
                  <span className="inline-block text-xs font-bold text-red uppercase tracking-wide mb-1">
                    Most Common
                  </span>
                )}
                <p className="text-2xl md:text-3xl font-bold text-navy">
                  {tier.price}
                </p>
                <p className="text-sm font-medium text-slate mt-1">
                  {tier.label}
                </p>
                {tier.note && !tier.popular && (
                  <p className="text-xs text-slate/70 mt-0.5">{tier.note}</p>
                )}
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm text-slate mt-6">
            Exact price depends on volume, weight, and accessibility. We always
            quote before we load.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 6 — What Customers Say
      ════════════════════════════════════════════════ */}
      <section className="py-section-sm md:py-section bg-light-gray">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-red uppercase tracking-wider mb-2">
              Real Reviews
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              What Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {featuredTestimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 border border-silver/20 shadow-sm"
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star
                      key={s}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-sm text-charcoal leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-4 pt-3 border-t border-silver/20">
                  <p className="text-sm font-semibold text-navy">{t.name}</p>
                  <p className="text-xs text-slate">{t.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 7 — Inline Estimate Form
      ════════════════════════════════════════════════ */}
      <section id="estimate" className="py-section-sm md:py-section">
        <div className="mx-auto max-w-3xl px-4">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-red uppercase tracking-wider mb-2">
              Free Estimate
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              Let&apos;s Get You a Price
            </h2>
            <p className="mt-3 text-slate max-w-lg mx-auto">
              Tell us a little about the job and we&apos;ll get back to you with
              a no-obligation quote — usually within a couple hours.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl p-6 md:p-10 border border-silver/20 shadow-sm"
          >
            {status === "sent" ? (
              <div className="text-center py-8">
                <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-navy">
                  We Got Your Request!
                </h3>
                <p className="mt-2 text-slate max-w-md mx-auto">
                  Expect to hear back within 1–2 hours during business hours. If
                  you need us sooner, give us a call.
                </p>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-navy hover:bg-navy-light text-white font-semibold rounded-lg transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  Call {siteConfig.phone}
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="start-name"
                      className="block text-sm font-medium text-slate mb-1.5"
                    >
                      Your Name *
                    </label>
                    <input
                      id="start-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-silver focus:ring-2 focus:ring-navy focus:border-navy transition-colors text-charcoal"
                      placeholder="First & last name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="start-phone"
                      className="block text-sm font-medium text-slate mb-1.5"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="start-phone"
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-silver focus:ring-2 focus:ring-navy focus:border-navy transition-colors text-charcoal"
                      placeholder="(217) 555-1234"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="start-email"
                      className="block text-sm font-medium text-slate mb-1.5"
                    >
                      Email *
                    </label>
                    <input
                      id="start-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-silver focus:ring-2 focus:ring-navy focus:border-navy transition-colors text-charcoal"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="start-service"
                      className="block text-sm font-medium text-slate mb-1.5"
                    >
                      What do you need?
                    </label>
                    <select
                      id="start-service"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-silver focus:ring-2 focus:ring-navy focus:border-navy transition-colors text-charcoal"
                    >
                      <option value="">Select a service</option>
                      <option value="residential">
                        Residential Junk Removal
                      </option>
                      <option value="estate">Estate Cleanout</option>
                      <option value="garage">Garage Cleanout</option>
                      <option value="commercial">Commercial</option>
                      <option value="demolition">Demolition</option>
                      <option value="other">Not Sure / Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="start-address"
                    className="block text-sm font-medium text-slate mb-1.5"
                  >
                    Service Address
                  </label>
                  <input
                    id="start-address"
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-silver focus:ring-2 focus:ring-navy focus:border-navy transition-colors text-charcoal"
                    placeholder="123 Main St, Springfield, IL"
                  />
                </div>

                <div>
                  <label
                    htmlFor="start-description"
                    className="block text-sm font-medium text-slate mb-1.5"
                  >
                    Tell us about the job
                  </label>
                  <textarea
                    id="start-description"
                    name="description"
                    rows={3}
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-silver focus:ring-2 focus:ring-navy focus:border-navy transition-colors text-charcoal resize-none"
                    placeholder="What needs to go? How much stuff? Any stairs or tight access?"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red text-sm" role="alert" aria-live="assertive">
                    Something went wrong. Please call us directly or try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-red hover:bg-red-dark text-white font-bold rounded-lg text-lg transition-colors disabled:opacity-50 shadow-lg shadow-red/20"
                >
                  <Send className="h-5 w-5" />
                  {status === "sending"
                    ? "Sending..."
                    : "Get My Free Estimate"}
                </button>

                <p className="text-center text-xs text-slate">
                  No spam, no obligation. We&apos;ll reach out to talk through
                  your project.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 8 — Final CTA Strip
      ════════════════════════════════════════════════ */}
      <section className="relative py-16 md:py-20 text-white overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let&apos;s Get Rid of It
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Call or text right now for a fast, free quote. Most jobs completed
            within 24 hours.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-red hover:bg-red-dark text-white font-semibold rounded-lg text-lg transition-colors shadow-lg shadow-red/25"
            >
              <Phone className="h-5 w-5" />
              Call {siteConfig.phone}
            </a>
            <a
              href="#estimate"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg text-lg transition-colors border border-white/20"
            >
              Send a Request
              <ChevronRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
