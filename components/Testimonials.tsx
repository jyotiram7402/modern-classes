"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

type Filter = "parent" | "student";

function Card({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="card flex h-full flex-col p-6"
    >
      <Quote className="h-7 w-7 text-primary/25" />
      <div className="mt-2 flex items-center gap-0.5 text-amber-400">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
        <Image
          src={t.image}
          alt={t.name}
          width={44}
          height={44}
          className="h-11 w-11 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-secondary">{t.name}</p>
          <p className="text-xs text-slate-500">{t.role}</p>
        </div>
      </div>
    </motion.article>
  );
}

export function Testimonials() {
  const [filter, setFilter] = useState<Filter>("parent");
  const list = TESTIMONIALS.filter((t) => t.type === filter);

  return (
    <section id="testimonials" className="section bg-slate-50/70">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow="Testimonials"
          title={
            <>
              Loved by parents and{" "}
              <span className="gradient-text">students alike</span>
            </>
          }
          description="Honest words from the families who trust us with their child's education."
        />

        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-soft">
            {(["parent", "student"] as Filter[]).map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`relative rounded-full px-6 py-2 text-sm font-semibold capitalize transition-colors ${
                  filter === f ? "text-white" : "text-slate-600 hover:text-secondary"
                }`}
              >
                {filter === f && (
                  <motion.span
                    layoutId="testimonial-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {f}s
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <RevealGroup
            key={filter}
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {list.map((t) => (
              <RevealItem key={t.id}>
                <Card t={t} />
              </RevealItem>
            ))}
          </RevealGroup>
        </AnimatePresence>
      </div>
    </section>
  );
}
