"use client";

import { motion } from "framer-motion";
import { FACILITIES } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { scaleIn } from "@/lib/motion";

export function Facilities() {
  return (
    <section id="facilities" className="section bg-slate-50/70">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow="Our Facilities"
          title={
            <>
              A complete{" "}
              <span className="gradient-text">learning environment</span>
            </>
          }
          description="Modern infrastructure and support systems designed to help every student focus, learn and grow."
        />

        <RevealGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FACILITIES.map((facility) => (
            <RevealItem key={facility.title} variants={scaleIn}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group flex h-full flex-col items-center rounded-2xl border border-slate-100 bg-white p-7 text-center shadow-soft transition-shadow hover:shadow-glow"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary transition-all group-hover:from-primary group-hover:to-accent group-hover:text-white">
                  <Icon name={facility.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-secondary">
                  {facility.title}
                </h3>
                <p className="mt-1.5 text-sm text-slate-600">
                  {facility.description}
                </p>
              </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
