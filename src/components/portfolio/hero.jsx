"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ArrowDown, MapPin } from "lucide-react";
import { personal } from "@/lib/portfolio-data";

function useTypewriter(words, speed = 90, pause = 1600) {
  const [display, setDisplay] = useState("");
  const [phase, setPhase] = useState("typing");
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout;

    if (phase === "typing") {
      const nextLen = display.length + 1;
      if (nextLen <= current.length) {
        timeout = setTimeout(() => setDisplay(current.slice(0, nextLen)), speed);
      } else {
        // finished typing this word — pause, then start deleting
        timeout = setTimeout(() => setPhase("deleting"), pause);
      }
    } else {
      // deleting
      const nextLen = display.length - 1;
      if (nextLen >= 0) {
        timeout = setTimeout(
          () => setDisplay(current.slice(0, nextLen)),
          speed / 2
        );
      } else {
        // word fully erased — advance to the next word
        timeout = setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % words.length);
          setPhase("typing");
        }, speed);
      }
    }
    return () => clearTimeout(timeout);
  }, [display, phase, wordIndex, words, speed, pause]);

  return display;
}

export default function Hero() {
  const typed = useTypewriter(personal.roles);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      {/* Animated background blobs */}
      <div className="bg-blob bg-rose-500/40 w-[32rem] h-[32rem] -top-20 -left-20 animate-float" />
      <div
        className="bg-blob bg-violet-500/30 w-[28rem] h-[28rem] top-40 right-0 animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="bg-blob bg-cyan-500/20 w-[24rem] h-[24rem] bottom-0 left-1/3 animate-float"
        style={{ animationDelay: "4s" }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "4rem 4rem",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left: text */}
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-label"
            >
              Hello, I&apos;m
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
            >
              {personal.firstName}{" "}
              <span className="gradient-text">{personal.lastName}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 flex items-center gap-2 font-display text-xl sm:text-2xl font-medium text-foreground/90 h-9"
            >
              <span className="text-rose-400">&gt;</span>
              <span>{typed}</span>
              <span className="cursor-blink text-rose-400 font-mono">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground"
            >
              {personal.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 flex items-center gap-2 text-sm text-muted-foreground"
            >
              <MapPin className="h-4 w-4 text-rose-400" />
              {personal.location}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-500/25 transition-transform hover:scale-105 active:scale-95"
              >
                View My Work
                <ArrowDown className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex items-center gap-3"
            >
              {[
                {
                  href: personal.github,
                  icon: Github,
                  label: "GitHub",
                },
                {
                  href: personal.linkedin,
                  icon: Linkedin,
                  label: "LinkedIn",
                },
                {
                  href: `mailto:${personal.email}`,
                  icon: Mail,
                  label: "Email",
                },
                {
                  href: `tel:${personal.phoneHref}`,
                  icon: Phone,
                  label: "Phone",
                },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl glass text-muted-foreground transition-all hover:text-white hover:border-rose-500/50 hover:-translate-y-0.5"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: decorative code card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-sm">
              {/* glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-rose-500/20 via-violet-500/20 to-cyan-500/20 rounded-3xl blur-2xl" />

              <div className="relative glass-strong rounded-2xl overflow-hidden shadow-2xl">
                {/* window chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                  <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs text-muted-foreground font-mono">
                    developer.js
                  </span>
                </div>
                {/* code body */}
                <pre className="p-5 text-[13px] leading-relaxed font-mono overflow-x-auto">
                  <code>
                    <span className="text-violet-400">const</span>{" "}
                    <span className="text-cyan-300">developer</span>{" "}
                    <span className="text-muted-foreground">=</span>{" "}
                    <span className="text-rose-300">{"{"}</span>
                    {"\n"}
                    {"  "}
                    <span className="text-emerald-300">name</span>
                    <span className="text-muted-foreground">:</span>{" "}
                    <span className="text-amber-300">&apos;Zukhruf Toufeeq&apos;</span>
                    <span className="text-muted-foreground">,</span>
                    {"\n"}
                    {"  "}
                    <span className="text-emerald-300">role</span>
                    <span className="text-muted-foreground">:</span>{" "}
                    <span className="text-amber-300">&apos;Full-Stack Dev&apos;</span>
                    <span className="text-muted-foreground">,</span>
                    {"\n"}
                    {"  "}
                    <span className="text-emerald-300">stack</span>
                    <span className="text-muted-foreground">:</span> [
                    {"\n"}
                    {"    "}
                    <span className="text-amber-300">&apos;FastAPI&apos;</span>,{" "}
                    <span className="text-amber-300">&apos;React&apos;</span>,
                    {"\n"}
                    {"    "}
                    <span className="text-amber-300">&apos;Python&apos;</span>,{" "}
                    <span className="text-amber-300">&apos;PostgreSQL&apos;</span>
                    <span className="text-muted-foreground">,</span>
                    {"\n  "}
                    ],
                    {"\n"}
                    {"  "}
                    <span className="text-emerald-300">ai</span>
                    <span className="text-muted-foreground">:</span>{" "}
                    <span className="text-amber-300">
                      &apos;LLMs · LangChain · RAG&apos;
                    </span>
                    <span className="text-muted-foreground">,</span>
                    {"\n"}
                    {"  "}
                    <span className="text-emerald-300">cgpa</span>
                    <span className="text-muted-foreground">:</span>{" "}
                    <span className="text-orange-300">3.79</span>
                    <span className="text-muted-foreground">,</span>
                    {"\n"}
                    {"  "}
                    <span className="text-emerald-300">openToWork</span>
                    <span className="text-muted-foreground">:</span>{" "}
                    <span className="text-violet-400">true</span>
                    <span className="text-muted-foreground">,</span>
                    {"\n"}
                    <span className="text-rose-300">{"}"}</span>
                    <span className="cursor-blink text-rose-400">▋</span>
                  </code>
                </pre>
              </div>

              {/* floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-5 -left-5 glass-strong rounded-xl px-4 py-3 shadow-xl"
              >
                <div className="text-xs text-muted-foreground">Currently</div>
                <div className="text-sm font-semibold text-rose-300">
                  BS Computer Science
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -top-4 -right-4 glass-strong rounded-xl px-4 py-3 shadow-xl"
              >
                <div className="text-xs text-muted-foreground">Focus</div>
                <div className="text-sm font-semibold text-cyan-300">
                  AI · Full-Stack
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
