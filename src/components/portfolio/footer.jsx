"use client";

import { Github, Linkedin, Mail, Phone, ArrowUp } from "lucide-react";
import { personal } from "@/lib/portfolio-data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/10 mt-auto">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-rose-500 to-pink-600 font-display font-bold text-sm text-white">
              {personal.initials}
            </span>
            <div className="text-sm">
              <span className="font-semibold">{personal.name}</span>
              <span className="text-muted-foreground">
                {" "}
                · Full-Stack & AI Developer
              </span>
            </div>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-2">
            {[
              { href: personal.github, icon: Github, label: "GitHub" },
              { href: personal.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: `mailto:${personal.email}`, icon: Mail, label: "Email" },
              { href: `tel:${personal.phoneHref}`, icon: Phone, label: "Phone" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg glass text-muted-foreground transition-all hover:text-white hover:border-rose-500/50"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          {/* Back to top */}
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-white transition-colors"
          >
            Back to top
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-muted-foreground/70">
          © {year} {personal.name}. Designed & built with React, Next.js &
          Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
