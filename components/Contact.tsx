"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { SITE, FORMSPREE_ENDPOINT } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { fromLeft, fromRight } from "@/lib/motion";

type Status = "idle" | "loading" | "success" | "error";

const STANDARDS = [
  "Std. 1", "Std. 2", "Std. 3", "Std. 4", "Std. 5", "Std. 6",
  "Std. 7", "Std. 8", "Std. 9", "Std. 10", "Std. 11", "Std. 12",
];

const CONTACT_INFO = [
  { icon: MapPin, label: "Address", value: SITE.address },
  { icon: Phone, label: "Phone", value: SITE.phone, href: SITE.phoneHref },
  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: Clock, label: "Working Hours", value: SITE.hours },
];

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("loading");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow="Get In Touch"
          title={
            <>
              Ready to begin your child&apos;s{" "}
              <span className="gradient-text">success story?</span>
            </>
          }
          description="Send us an enquiry and our team will reach out with batch details, fees and a free counselling session."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          {/* Info + map */}
          <motion.div
            variants={fromLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="space-y-4">
              {CONTACT_INFO.map((info) => {
                const Inner = (
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <info.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        {info.label}
                      </p>
                      <p className="mt-0.5 text-sm text-slate-700">{info.value}</p>
                    </div>
                  </div>
                );
                return (
                  <div key={info.label} className="card p-5">
                    {info.href ? (
                      <a href={info.href} className="block hover:opacity-80">
                        {Inner}
                      </a>
                    ) : (
                      Inner
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-100 shadow-soft">
              <iframe
                title="Modern Classes location"
                src={`https://www.google.com/maps?q=${SITE.mapsQuery}&output=embed`}
                width="100%"
                height="240"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block grayscale-[0.2]"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={fromRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={onSubmit}
              className="card h-full p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" htmlFor="name">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Parent / Student name"
                    className="input"
                  />
                </Field>
                <Field label="Mobile Number" htmlFor="mobile">
                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    required
                    pattern="[0-9+ ]{8,15}"
                    placeholder="e.g. 98765 43210"
                    className="input"
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Standard / Class" htmlFor="standard">
                  <select id="standard" name="standard" required className="input" defaultValue="">
                    <option value="" disabled>
                      Select standard
                    </option>
                    {STANDARDS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Message" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your requirement (medium, board, subjects)…"
                    className="input resize-none"
                  />
                </Field>
              </div>

              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" /> Enquiry Sent
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Send Enquiry
                  </>
                )}
              </button>

              {status === "success" && (
                <p className="mt-4 flex items-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                  <CheckCircle2 className="h-4 w-4" />
                  Thank you! We&apos;ve received your enquiry and will contact you soon.
                </p>
              )}
              {status === "error" && (
                <p className="mt-4 flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                  <AlertCircle className="h-4 w-4" />
                  Something went wrong. Please call us at {SITE.phone} instead.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        :global(.input) {
          width: 100%;
          border-radius: 0.85rem;
          border: 1px solid rgb(226 232 240);
          background: white;
          padding: 0.7rem 0.95rem;
          font-size: 0.9rem;
          color: #111827;
          transition: all 0.2s;
        }
        :global(.input:focus) {
          outline: none;
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-medium text-secondary"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
