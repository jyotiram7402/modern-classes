"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { FACULTY } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function Faculty() {
  return (
    <section id="faculty" className="section">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow="Our Faculty"
          title={
            <>
              Mentors who make learning{" "}
              <span className="gradient-text">click</span>
            </>
          }
          description="Experienced, dedicated teachers who combine deep subject mastery with genuine care for every student."
        />

        <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FACULTY.map((member) => (
            <RevealItem key={member.id}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="card group h-full overflow-hidden"
              >
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 90vw, 30vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
                    <BookOpen className="h-3.5 w-3.5" />
                    {member.subject}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-secondary">
                      {member.name}
                    </h3>
                    <span className="rounded-full bg-accent/10 px-2.5 py-1 text-[11px] font-semibold text-accent">
                      {member.experience}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{member.bio}</p>
                </div>
              </motion.article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
