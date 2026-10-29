"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
} from "lucide-react";
import { toast } from "sonner";
import { personal } from "@/lib/portfolio-data";

const contactItems = [
  {
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: Mail,
    accent: "rose",
  },
  {
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phoneHref}`,
    icon: Phone,
    accent: "cyan",
  },
  {
    label: "LinkedIn",
    value: "zukhruftoufeeq",
    href: personal.linkedin,
    icon: Linkedin,
    accent: "violet",
  },
  {
    label: "GitHub",
    value: "zukhruftoufeeq",
    href: personal.github,
    icon: Github,
    accent: "emerald",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    // Open the user's mail client pre-filled
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSent(true);
    toast.success("Opening your mail client…", {
      description: "Thanks for reaching out — I'll get back to you soon!",
    });
    setTimeout(() => setSent(false), 4000);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      toast.success("Email copied to clipboard.");
    } catch {
      toast.error("Couldn't copy — please copy manually.");
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-28">
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
            Get In Touch
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight">
            Let&apos;s build something{" "}
            <span className="gradient-text-rose">together</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Whether it&apos;s an internship, a project collaboration, or just a
            quick hello — my inbox is always open.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`lift-card accent-${item.accent} group flex items-center gap-4 rounded-2xl glass p-5`}
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--a-soft)] text-[var(--a)]">
                  <item.icon className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground/70">
                    {item.label}
                  </div>
                  <div className="font-medium truncate group-hover:text-[var(--a)] transition-colors">
                    {item.value}
                  </div>
                </div>
              </a>
            ))}

            <div className="lift-card accent-rose flex items-center gap-4 rounded-2xl glass p-5">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--a-soft)] text-[var(--a)]">
                <MapPin className="h-6 w-6" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground/70">
                  Location
                </div>
                <div className="font-medium">{personal.location}</div>
              </div>
            </div>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-rose-300 transition-colors"
            >
              <Copy className="h-4 w-4" />
              Copy email address
            </button>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl glass-strong p-6 sm:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Jane Doe"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-rose-500/50 focus:outline-none focus:ring-2 focus:ring-rose-500/20 transition"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="jane@example.com"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-rose-500/50 focus:outline-none focus:ring-2 focus:ring-rose-500/20 transition"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Hi Zukhruf, I'd love to talk about…"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-rose-500/50 focus:outline-none focus:ring-2 focus:ring-rose-500/20 transition resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={sent}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-500/25 transition-transform hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:hover:scale-100"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Message Ready
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
              <p className="text-center text-xs text-muted-foreground/70">
                This opens your email client pre-filled with your message.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
