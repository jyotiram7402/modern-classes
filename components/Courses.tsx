"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookMarked, Sparkles, Target } from "lucide-react";
import { COURSES } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function Courses() {
  return (
    <section id="courses" className="section bg-slate-50/70">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow="Courses Offered"
          title={
            <>
              Structured programs for{" "}
              <span className="gradient-text">every stage</span>
            </>
          }
          description="From building early fundamentals to launching careers, every course is board-aligned and taught by subject specialists."
        />

        <RevealGroup className="mt-16 grid gap-6 md:grid-cols-2">
          {COURSES.map((course) => (
            <RevealItem key={course.id}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="card group relative h-full overflow-hidden p-7"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${course.color}`}
                />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                      {course.level}
                    </span>
                    <h3 className="mt-1 text-2xl font-bold text-secondary">
                      {course.title}
                    </h3>
                    <p className="text-sm font-medium text-slate-500">
                      {course.standards}
                    </p>
                  </div>
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${course.color} text-white shadow-soft`}
                  >
                    <BookMarked className="h-5 w-5" />
                  </span>
                </div>

                <p className="mt-4 text-slate-600">{course.overview}</p>

                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Subjects
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {course.subjects.map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                      <Sparkles className="h-3.5 w-3.5 text-accent" /> Benefits
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {course.benefits.map((b) => (
                        <li key={b} className="text-sm text-slate-600">
                          • {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                      <Target className="h-3.5 w-3.5 text-primary" /> Outcomes
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {course.outcomes.map((o) => (
                        <li key={o} className="text-sm text-slate-600">
                          • {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:gap-2.5"
                >
                  Enquire about this course
                  <ArrowRight className="h-4 w-4 transition-all" />
                </a>
              </motion.article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
