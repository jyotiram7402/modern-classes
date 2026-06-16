"use client";

import { GraduationCap, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { NAV_LINKS, SOCIAL_LINKS, SITE } from "@/lib/constants";
import { COURSES } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-secondary text-white">
      <div className="absolute -top-24 left-1/3 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />

      <div className="container relative mx-auto py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white">
                <GraduationCap className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold font-display">
                Modern<span className="text-accent-light"> Classes</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              {SITE.description}
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-white/70 transition-colors hover:bg-primary hover:text-white"
                >
                  <Icon name={s.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-accent-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Courses
            </h3>
            <ul className="mt-4 space-y-2.5">
              {COURSES.map((c) => (
                <li key={c.id}>
                  <a
                    href="#courses"
                    className="text-sm text-white/60 transition-colors hover:text-accent-light"
                  >
                    {c.title}{" "}
                    <span className="text-white/30">({c.standards})</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-light" />
                {SITE.shortAddress}
              </li>
              <li>
                <a href={SITE.phoneHref} className="flex items-center gap-2.5 hover:text-accent-light">
                  <Phone className="h-4 w-4 shrink-0 text-accent-light" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-2.5 hover:text-accent-light">
                  <Mail className="h-4 w-4 shrink-0 text-accent-light" />
                  {SITE.email}
                </a>
              </li>
            </ul>
            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary"
            >
              Enquire Now <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center text-sm text-white/50 sm:flex-row sm:text-left">
          <p>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <p>
            Designed for academic excellence · Std. 1 to 12 · All boards &amp;
            mediums
          </p>
        </div>
      </div>
    </footer>
  );
}
