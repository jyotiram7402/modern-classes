"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Sparkles, Star, CheckCircle2 } from "lucide-react";
import { IMAGES } from "@/lib/images";
import { HERO_STATS } from "@/lib/data";
import { Counter } from "@/components/ui/Counter";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-hero-radial pt-28 md:pt-36"
    >
      <div className="absolute inset-0 -z-10 bg-grid-pattern bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
      <div className="absolute -left-24 top-24 -z-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -right-24 top-40 -z-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

      <div className="container mx-auto pb-20 md:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.span variants={fadeUp} className="eyebrow">
              <Sparkles className="h-3.5 w-3.5" />
              Trusted coaching since 2012
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="heading-xl mt-6 text-secondary"
            >
              Shaping Bright Futures Through{" "}
              <span className="gradient-text">Quality Education</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="lead mt-6 max-w-xl">
              Modern Classes provides expert coaching from Std. 1 to Std. 12
              across all mediums with a focus on academic excellence and
              student success.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#contact" className="btn-primary">
                Enquire Now
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#courses" className="btn-secondary">
                <BookOpen className="h-4 w-4" />
                Explore Courses
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500"
            >
              {["English Medium", "Marathi Medium", "Hindi Medium", "All Boards"].map(
                (m) => (
                  <span key={m} className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    {m}
                  </span>
                )
              )}
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative"
          >
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl shadow-glow ring-1 ring-black/5 sm:max-w-lg">
              <Image
                src={IMAGES.hero}
                alt="Students learning at Modern Classes"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent" />
            </div>

            {/* Floating rating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -left-2 top-10 glass rounded-2xl p-4 shadow-card sm:-left-6"
            >
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-1 text-sm font-semibold text-secondary">4.9 / 5 Rating</p>
              <p className="text-xs text-slate-500">From 248+ parents</p>
            </motion.div>

            {/* Floating result card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="absolute -right-2 bottom-10 glass rounded-2xl p-4 shadow-card sm:-right-6"
            >
              <p className="text-2xl font-bold gradient-text">98.2%</p>
              <p className="text-xs font-medium text-slate-500">
                Highest Std. 10 score
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-slate-100 bg-slate-100 shadow-card md:mt-20 md:grid-cols-4"
        >
          {HERO_STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="bg-white p-6 text-center md:p-8"
            >
              <p className="text-3xl font-bold text-secondary md:text-4xl">
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                />
              </p>
              <p className="mt-1.5 text-sm font-medium text-slate-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
