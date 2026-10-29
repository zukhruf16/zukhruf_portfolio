"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  BadgeCheck,
  Star,
} from "lucide-react";
import { personal, stats } from "@/lib/portfolio-data";

const iconMap = {
  graduation: GraduationCap,
  code: Code2,
  badge: BadgeCheck,
  star: Star,
};

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-12 gap-10 items-start"
        >
          {/* Left: label + heading */}
          <div className="lg:col-span-5">
            <span className="section-label">About Me</span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Turning ideas into{" "}
              <span className="gradient-text-rose">scalable, AI-powered</span>{" "}
              applications.
            </h2>
          </div>

          {/* Right: summary */}
          <div className="lg:col-span-7">
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
              {personal.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Full-Stack Development",
                "AI Applications",
                "Backend Engineering",
                "Problem Solving",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-foreground/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats grid */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => {
            const Icon = iconMap[stat.icon];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="lift-card accent-rose relative rounded-2xl glass p-6 text-center sm:text-left"
              >
                <div className="flex items-center justify-center sm:justify-start gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--a-soft)] text-[var(--a)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="font-display text-3xl font-bold">
                    {stat.value}
                    <span className="text-lg text-muted-foreground">
                      {stat.suffix}
                    </span>
                  </div>
                </div>
                <div className="mt-3 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
