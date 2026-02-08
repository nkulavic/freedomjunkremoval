"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/app/data/site-config";

export function ContactContent() {
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
    <section className="py-section-sm md:py-section">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h2 className="text-2xl font-bold text-navy mb-6">
              Request a Free Estimate
            </h2>

            {status === "sent" ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <p className="text-lg font-semibold text-green-800">
                  Thank you! We&apos;ll get back to you shortly.
                </p>
                <p className="mt-2 text-green-700">
                  Expect a response within 1–2 hours during business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-silver focus:ring-2 focus:ring-navy focus:border-navy transition-colors text-charcoal"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate mb-1.5">
                      Phone Number *
                    </label>
                    <input
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
                    <label className="block text-sm font-medium text-slate mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-silver focus:ring-2 focus:ring-navy focus:border-navy transition-colors text-charcoal"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate mb-1.5">
                      Service Type
                    </label>
                    <select
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
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate mb-1.5">
                    Service Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-silver focus:ring-2 focus:ring-navy focus:border-navy transition-colors text-charcoal"
                    placeholder="123 Main St, Springfield, IL"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate mb-1.5">
                    What do you need removed?
                  </label>
                  <textarea
                    name="description"
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-silver focus:ring-2 focus:ring-navy focus:border-navy transition-colors text-charcoal resize-none"
                    placeholder="Describe the items or job..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-silver focus:ring-2 focus:ring-navy focus:border-navy transition-colors text-charcoal"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red text-sm">
                    Something went wrong. Please call us directly or try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-red hover:bg-red-dark text-white font-semibold rounded-lg text-lg transition-colors disabled:opacity-50"
                >
                  <Send className="h-5 w-5" />
                  {status === "sending" ? "Sending..." : "Send Request"}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-light-gray rounded-xl p-6 border border-silver/20 space-y-6">
              <h3 className="text-xl font-bold text-navy">Get In Touch</h3>

              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center gap-3 p-4 bg-white rounded-lg border border-silver/20 hover:border-red/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-red/10 flex items-center justify-center group-hover:bg-red/20 transition-colors">
                  <Phone className="h-5 w-5 text-red" />
                </div>
                <div>
                  <p className="text-sm text-slate">Call Us</p>
                  <p className="font-semibold text-navy">{siteConfig.phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 p-4 bg-white rounded-lg border border-silver/20 hover:border-navy/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center group-hover:bg-navy/20 transition-colors">
                  <Mail className="h-5 w-5 text-navy" />
                </div>
                <div>
                  <p className="text-sm text-slate">Email Us</p>
                  <p className="font-semibold text-navy">{siteConfig.email}</p>
                </div>
              </a>

              <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-silver/20">
                <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-navy" />
                </div>
                <div>
                  <p className="text-sm text-slate">Service Area</p>
                  <p className="font-semibold text-navy">
                    {siteConfig.address.full}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-silver/20">
                <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-navy" />
                </div>
                <div>
                  <p className="text-sm text-slate">Business Hours</p>
                  <p className="text-sm text-charcoal">
                    Mon–Fri: {siteConfig.hours.weekday}
                  </p>
                  <p className="text-sm text-charcoal">
                    Sat: {siteConfig.hours.saturday}
                  </p>
                  <p className="text-sm text-charcoal">
                    Sun: {siteConfig.hours.sunday}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
