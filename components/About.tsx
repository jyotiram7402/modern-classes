"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Eye, CheckCircle2, ShieldCheck } from "lucide-react";
import { IMAGES } from "@/lib/images";
import { ABOUT } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { fromLeft } from "@/lib/motion";

export function About() {
  return (
    <section id="about" className="section">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow="About Modern Classes"
          title={
            <>
              A foundation of <span className="gradient-text">trust</span> and
              academic excellence
            </>
          }
          description="For over a decade, we have helped students build strong fundamentals, confidence and consistent results — guided by teachers who genuinely care."
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            variants={fromLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-[5/4] overflow-hidden rounded-3xl shadow-card ring-1 ring-black/5">
              <Image
                src={IMAGES.about}
                alt="A classroom session at Modern Classes"
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-secondary p-5 text-white shadow-glow sm:block">
              <p className="text-3xl font-bold">12+</p>
              <p className="text-xs text-white/70">Years of trusted teaching</p>
            </div>
          </motion.div>

          <div className="space-y-6">
            <Reveal className="card p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Target className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-secondary">Our Mission</h3>
                  <p className="mt-1.5 text-slate-600">{ABOUT.mission}</p>
                </div>
              </div>
            </Reveal>

            <Reveal className="card p-6" delay={0.1}>
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Eye className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-secondary">Our Vision</h3>
                  <p className="mt-1.5 text-slate-600">{ABOUT.vision}</p>
                </div>
              </div>
            </Reveal>

            <Reveal className="rounded-2xl border border-primary/15 bg-primary/[0.04] p-6" delay={0.2}>
              <div className="flex items-center gap-2 text-secondary">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Why Parents Trust Us</h3>
              </div>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {ABOUT.trustPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Core values */}
        <div className="mt-20">
          <Reveal className="mx-auto max-w-xl text-center">
            <h3 className="heading-md text-secondary">Our Core Values</h3>
            <p className="mt-3 text-slate-600">
              The principles that shape every class we teach.
            </p>
          </Reveal>

          <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT.values.map((value) => (
              <RevealItem
                key={value.title}
                className="group card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow hover:ring-1 hover:ring-primary/20"
              >
                <h4 className="text-base font-semibold text-secondary">
                  {value.title}
                </h4>
                <p className="mt-2 text-sm text-slate-600">{value.description}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
