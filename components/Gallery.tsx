"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/images";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { viewportOnce } from "@/lib/motion";

const spanClasses: Record<string, string> = {
  tall: "row-span-2",
  wide: "col-span-2",
  normal: "",
};

export function Gallery() {
  return (
    <section id="gallery" className="section">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow="Gallery"
          title={
            <>
              Inside <span className="gradient-text">Modern Classes</span>
            </>
          }
          description="A glimpse into our classrooms, learning sessions and the everyday energy of our institute."
        />

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4">
          {IMAGES.gallery.map((item, i) => (
            <motion.figure
              key={item.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl shadow-soft ring-1 ring-black/5 ${spanClasses[item.span]}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <figcaption className="absolute bottom-3 left-3 right-3 translate-y-2 text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {item.alt}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
