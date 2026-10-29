"use client";

import { motion } from "framer-motion";
import {
  Terminal,
  Globe,
  Sparkles,
  Database,
  Wrench,
  Server,
  Layers,
} from "lucide-react";
import { skillCategories } from "@/lib/portfolio-data";

const iconMap = {
  terminal: Terminal,
  globe: Globe,
  sparkles: Sparkles,
  database: Database,
  wrench: Wrench,
  server: Server,
  layers: Layers,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-28">
      {/* subtle top divider glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose-500/30 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="section-label mx-auto justify-center">
            Technical Skills
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight">
            My <span className="gradient-text-rose">Toolkit</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A blend of full-stack web technologies, modern AI tooling, and
            databases I use to ship reliable products end-to-end.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon];
            // Make the first (Programming) and AI cards span wider on lg
            const wide = i === 0 || cat.title.includes("Artificial");
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className={`lift-card accent-${cat.accent} relative rounded-2xl glass p-6 ${
                  wide ? "lg:col-span-1" : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--a-soft)] text-[var(--a)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold">
                    {cat.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-foreground/85 transition-colors hover:border-[var(--a)] hover:bg-[var(--a-soft)] hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}

          {/* Decorative "always learning" card to fill the grid nicely */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="relative rounded-2xl p-6 overflow-hidden bg-gradient-to-br from-rose-500/15 via-pink-500/10 to-violet-500/15 border border-rose-500/20"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <Sparkles className="h-8 w-8 text-rose-300" />
              <div className="mt-6">
                <h3 className="font-display text-lg font-semibold">
                  Always Learning
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Exploring agentic AI patterns, RAG pipelines, and production
                  LLM deployments to keep building things that matter.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
