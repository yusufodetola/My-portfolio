"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowUpRight,
  MessageSquare,
} from "lucide-react";
import portfolio from "@/data/portfolio";

export default function Contact() {
  const { contact, social } = portfolio;

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.14),transparent_42%)]" />

      <div className="container-custom relative z-10">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="section-eyebrow">Contact</p>

          <h2 className="section-title mt-4">
            Let’s Build Something Great Together
          </h2>

          <p className="section-subtitle mt-6">
            I’m open to frontend development work, UI/UX collaborations, AI
            automation projects, and selected Arabic design/typesetting work. If
            you have a project, opportunity, or idea you’d like to discuss, feel
            free to reach out.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT INFO PANEL */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="glass p-7 md:p-8"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/70 text-blue-400 shadow-[0_0_30px_rgba(37,99,235,0.18)]">
              <MessageSquare size={26} />
            </div>

            <h3 className="mt-6 text-3xl font-bold text-white">
              Let’s talk about your next project
            </h3>

            <p className="mt-5 text-[15px] leading-8 text-slate-400">
              Whether you need a modern website, a polished product interface,
              frontend support, workflow automation, or bilingual/Arabic design
              work, I’d be glad to hear more about it.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-slate-950/35 p-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-xl bg-blue-500/10 p-3 text-blue-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                      Email
                    </p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="mt-2 block text-base font-medium text-white hover:text-blue-400 transition"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/35 p-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-xl bg-blue-500/10 p-3 text-blue-400">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                      Phone
                    </p>
                    <a
                      href={`tel:${contact.phone}`}
                      className="mt-2 block text-base font-medium text-white hover:text-blue-400 transition"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/35 p-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-xl bg-blue-500/10 p-3 text-blue-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                      Location
                    </p>
                    <p className="mt-2 text-base font-medium text-white">
                      {contact.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CTA PANEL */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="glass relative overflow-hidden p-7 md:p-8 lg:p-10"
          >
            {/* glow */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/15 blur-3xl" />

            <div className="relative z-10">
              <p className="inline-flex rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
                Available for work
              </p>

              <h3 className="mt-6 text-3xl font-bold text-white md:text-4xl">
                Ready to work on impactful digital experiences
              </h3>

              <p className="mt-6 max-w-2xl text-[15px] leading-8 text-slate-400">
                I’m currently open to freelance opportunities, collaborations,
                internships, and frontend-focused projects where I can help turn
                ideas into clean, scalable, and engaging digital products.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href={`mailto:${contact.email}`} className="btn-primary">
                  <Send size={18} />
                  Send an Email
                </a>

                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <ArrowUpRight size={18} />
                  Connect on LinkedIn
                </a>
              </div>

              <div className="mt-10 rounded-[28px] border border-white/10 bg-slate-950/35 p-6">
                <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                  Preferred project areas
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  {[
                    "Frontend Development",
                    "Next.js Websites",
                    "UI/UX Design",
                    "AI Automation",
                    "Arabic Design",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
