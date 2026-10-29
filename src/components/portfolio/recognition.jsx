"use client";

import { motion } from "framer-motion";
import {
  Award,
  ExternalLink,
  BadgeCheck,
  GraduationCap,
  Sparkles,
  Layout,
  Languages as LanguagesIcon,
  Heart,
} from "lucide-react";
import {
  certifications,
  achievements,
  languages,
  interests,
} from "@/lib/portfolio-data";

const achievementIcons = {
  graduation: GraduationCap,
  sparkles: Sparkles,
  layout: Layout,
};

export default function Recognition() {
  return (
    <section id="recognition" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Certifications + Achievements header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="section-label">Recognition</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight">
            Certifications &{" "}
            <span className="gradient-text-rose">Achievements</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {/* Certifications */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
              <Award className="h-4 w-4 text-rose-400" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`lift-card accent-${cert.accent} rounded-2xl glass p-5`}
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--a-soft)] text-[var(--a)]">
                      <BadgeCheck className="h-6 w-6" />
                    </span>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold leading-tight">
                        {cert.title}
                      </h4>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {cert.issuer} · {cert.date}
                      </p>
                      {cert.credentialId && (
                        <p className="mt-2 text-xs font-mono text-muted-foreground/80">
                          Credential ID:{" "}
                          <span className="text-foreground/80">
                            {cert.credentialId}
                          </span>
                        </p>
                      )}
                      {cert.verifyUrl && (
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--a)] hover:underline"
                        >
                          Verify Certificate
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-rose-400" />
              Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((ach, i) => {
                const Icon = achievementIcons[ach.icon];
                return (
                  <motion.div
                    key={ach.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="lift-card accent-rose rounded-2xl glass p-5 flex gap-4"
                  >
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--a-soft)] text-[var(--a)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h4 className="font-semibold">{ach.title}</h4>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                        {ach.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Languages & Interests */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl glass p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <LanguagesIcon className="h-5 w-5 text-cyan-400" />
              <h3 className="font-display text-lg font-semibold">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5"
                >
                  <div className="font-semibold">{lang.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {lang.level}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl glass p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-5 w-5 text-rose-400" />
              <h3 className="font-display text-lg font-semibold">Interests</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-rose-500/20 bg-rose-500/5 px-3 py-1.5 text-sm text-foreground/85 transition-colors hover:bg-rose-500/10 hover:text-white"
                >
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
