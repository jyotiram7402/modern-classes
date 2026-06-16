"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { TIMELINE } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { viewportOnce } from "@/lib/motion";

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });

  return (
    <section id="journey" className="section">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow="Academic Journey"
          title={
            <>
              The path from admission to{" "}
              <span className="gradient-text">excellence</span>
            </>
          }
          description="A clear, proven process that turns potential into consistent academic achievement."
        />

        <div ref={ref} className="relative mx-auto mt-16 max-w-3xl">
          {/* Track */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-slate-200 md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            style={{ scaleY }}
            className="absolute left-4 top-0 h-full w-0.5 origin-top bg-gradient-to-b from-primary to-accent md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-8">
            {TIMELINE.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className={`relative flex items-start gap-6 pl-12 md:pl-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Node */}
                  <span className="absolute left-4 top-1.5 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-primary text-xs font-bold text-white shadow-glow md:left-1/2">
                    {item.step}
                  </span>

                  <div className="md:w-1/2" />
                  <div
                    className={`card w-full p-5 md:w-1/2 ${
                      isLeft ? "md:mr-8 md:text-right" : "md:ml-8"
                    }`}
                  >
                    <h3 className="text-base font-semibold text-secondary">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
