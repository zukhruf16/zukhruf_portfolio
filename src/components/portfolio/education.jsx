"use client";

import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen, CheckCircle2 } from "lucide-react";
import { education } from "@/lib/portfolio-data";

const iconByIndex = [GraduationCap, School, BookOpen];

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="section-label">Education</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight">
            Academic <span className="gradient-text-rose">Journey</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A consistent academic record reflecting dedication to computer
            science and continuous growth.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {education.map((edu, i) => {
            const Icon = iconByIndex[i] ?? BookOpen;
            const inProgress = edu.status === "In Progress";
            return (
              <motion.div
                key={edu.qualification}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="lift-card accent-rose relative rounded-2xl glass p-6 flex flex-col"
              >
                <div className="flex items-start justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--a-soft)] text-[var(--a)]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                      inProgress
                        ? "bg-amber-500/15 text-amber-300 border border-amber-500/20"
                        : "bg-emerald-500/15 text-emerald-300 border border-emerald-500/20"
                    }`}
                  >
                    <CheckCircle2 className="h-3 w-3" />
                    {edu.status}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-lg font-semibold leading-snug">
                  {edu.qualification}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {edu.institution}
                </p>

                <div className="mt-auto pt-5">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground/70">
                    Result
                  </div>
                  <div className="mt-1 font-display text-2xl font-bold gradient-text-rose">
                    {edu.result}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
