"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Trophy } from "lucide-react";
import { TOPPERS } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealItem } from "@/components/ui/Reveal";
import { staggerFast, viewportOnce, scaleIn } from "@/lib/motion";

function TopperCard({ topper }: { topper: (typeof TOPPERS)[number] }) {
  return (
    <motion.article
      variants={scaleIn}
      whileHover={{ y: -6 }}
      className="card group relative overflow-hidden p-6 text-center"
    >
      <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-600">
        <Trophy className="h-3 w-3" />
        {topper.achievement}
      </span>
      <div className="mx-auto mt-2 h-20 w-20 overflow-hidden rounded-full ring-4 ring-primary/10">
        <Image
          src={topper.image}
          alt={topper.name}
          width={96}
          height={96}
          className="h-full w-full object-cover"
        />
      </div>
      <h3 className="mt-4 text-base font-semibold text-secondary">
        {topper.name}
      </h3>
      <p className="text-xs text-slate-500">{topper.standard}</p>
      <p className="mt-3 text-3xl font-bold gradient-text">{topper.percentage}</p>
    </motion.article>
  );
}

export function Results() {
  return (
    <section id="results" className="section bg-secondary text-white">
      <div className="container mx-auto">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow border-white/15 bg-white/10 text-accent-light">
            <Award className="h-3.5 w-3.5" />
            Academic Results
          </span>
          <h2 className="heading-lg mt-5 text-white">
            Celebrating our{" "}
            <span className="bg-gradient-to-r from-accent-light to-blue-300 bg-clip-text text-transparent">
              top rankers
            </span>
          </h2>
          <p className="mt-4 text-base text-white/70">
            Real students, real results. Every year our students set new
            benchmarks of excellence across all boards.
          </p>
        </div>

        {/* Desktop grid */}
        <motion.div
          variants={staggerFast}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-4"
        >
          {TOPPERS.map((t) => (
            <div key={t.id} className="[&>article]:bg-white">
              <TopperCard topper={t} />
            </div>
          ))}
        </motion.div>

        {/* Mobile carousel */}
        <div className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 sm:hidden">
          {TOPPERS.map((t) => (
            <div
              key={t.id}
              className="w-[75%] shrink-0 snap-center [&>article]:bg-white"
            >
              <RevealItem variants={scaleIn}>
                <TopperCard topper={t} />
              </RevealItem>
            </div>
          ))}
        </div>
        <p className="mt-2 text-center text-xs text-white/40 sm:hidden">
          ← Swipe to see more rankers →
        </p>
      </div>
    </section>
  );
}
