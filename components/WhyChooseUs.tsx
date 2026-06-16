"use client";

import { motion } from "framer-motion";
import { WHY_US } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { scaleIn } from "@/lib/motion";

export function WhyChooseUs() {
  return (
    <section id="why-us" className="section">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow="Why Choose Us"
          title={
            <>
              Everything your child needs to{" "}
              <span className="gradient-text">succeed</span>
            </>
          }
          description="A complete learning ecosystem built around attention, accountability and measurable results."
        />

        <RevealGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {WHY_US.map((item) => (
            <RevealItem key={item.title} variants={scaleIn}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-soft transition-shadow hover:shadow-glow"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon name={item.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-secondary">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
