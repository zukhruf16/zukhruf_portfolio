"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { experience } from "@/lib/portfolio-data";

export default function Experience() {
    return (
        <section id="experience" className="relative py-24 sm:py-28">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl"
                >
                    <span className="section-label">Experience</span>
                    <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight">
                        Where I&apos;ve <span className="gradient-text-rose">Worked</span>
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                        Real-world experience applying full-stack development and AI skills
                        to build meaningful solutions.
                    </p>
                </motion.div>

                <div className="mt-14 space-y-6">
                    {experience.map((exp, i) => (
                        <motion.div
                            key={`${exp.role}-${exp.company}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`lift-card accent-${exp.accent} relative rounded-2xl glass p-6 sm:p-7`}
                        >
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                                <div className="flex items-start gap-4">
                                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--a-soft)] text-[var(--a)]">
                                        <Briefcase className="h-6 w-6" />
                                    </span>
                                    <div>
                                        <h3 className="font-display text-xl font-bold leading-tight">
                                            {exp.role}
                                        </h3>
                                        <p className="mt-1 text-sm text-[var(--a)] font-medium">
                                            {exp.company}
                                        </p>
                                        <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                                            <span className="inline-flex items-center gap-1">
                                                <MapPin className="h-3 w-3" />
                                                {exp.location}
                                            </span>
                                            <span className="inline-flex items-center gap-1">
                                                <Calendar className="h-3 w-3" />
                                                {exp.period}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {exp.period.endsWith("Present") && (
                                    <span className="inline-flex items-center gap-1 self-start rounded-full bg-emerald-500/15 border border-emerald-500/20 px-2.5 py-1 text-[11px] font-semibold text-emerald-300 sm:shrink-0">
                                        <span className="relative flex h-2 w-2">
                                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                                        </span>
                                        Current
                                    </span>
                                )}
                            </div>

                            <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground">
                                {exp.bullets.map((point, idx) => (
                                    <li key={idx} className="flex gap-2.5 leading-relaxed">
                                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--a)]" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {exp.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-foreground/80"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}