"use client";

import { motion } from "framer-motion";
import {
  Plane,
  CloudSun,
  Gamepad2,
  ShieldCheck,
  Github,
  ArrowUpRight,
  Star,
} from "lucide-react";
import { projects } from "@/lib/portfolio-data";

const iconMap = {
  plane: Plane,
  cloud: CloudSun,
  gamepad: Gamepad2,
  shield: ShieldCheck,
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose-500/30 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div className="max-w-2xl">
            <span className="section-label">Projects</span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Things I&apos;ve <span className="gradient-text-rose">Built</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              From an AI-powered travel planner to compact browser tools — each
              project sharpened a different part of my full-stack & AI toolkit.
            </p>
          </div>
        </motion.div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {projects.map((project, i) => {
            const Icon = iconMap[project.icon];
            return (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className={`lift-card accent-${project.accent} group relative rounded-2xl glass p-6 sm:p-7 flex flex-col ${
                  project.featured ? "lg:col-span-2" : ""
                }`}
              >
                {project.featured && (
                  <span className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-amber-500/15 border border-amber-500/25 px-2.5 py-1 text-[11px] font-semibold text-amber-300">
                    <Star className="h-3 w-3 fill-amber-300" />
                    Featured
                  </span>
                )}

                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--a-soft)] text-[var(--a)]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold leading-tight">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--a)] font-medium">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                <ul
                  className={`mt-5 space-y-2 text-sm text-muted-foreground ${
                    project.featured
                      ? "sm:grid sm:grid-cols-2 sm:gap-x-6 sm:space-y-0"
                      : ""
                  }`}
                >
                  {project.description.map((point, idx) => (
                    <li key={idx} className="flex gap-2 leading-relaxed">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--a)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-foreground/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--a)] hover:gap-2.5 transition-all self-start"
                  >
                    <Github className="h-4 w-4" />
                    View on GitHub
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
