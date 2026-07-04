"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Sparkles } from "lucide-react";
import portfolio from "@/data/portfolio";

export default function About() {
  const { personal, stats, skills } = portfolio;

  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32">
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(37,99,235,0.12),transparent_40%)]" />

      <div className="container-custom relative z-10">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="section-eyebrow">About</p>

          <h2 className="section-title mt-4">
            Building Modern Interfaces with Design, Code, and Intelligent
            Automation
          </h2>

          <p className="section-subtitle mt-6">
            I focus on creating digital experiences that are visually polished,
            technically solid, and built around real user needs.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT PANEL */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="glass p-7 md:p-8 lg:p-10"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/70 text-blue-400 shadow-[0_0_30px_rgba(37,99,235,0.18)]">
                <Sparkles size={22} />
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                  Who I Am
                </p>
                <h3 className="text-2xl font-bold text-white">
                  About {personal.fullName}
                </h3>
              </div>
            </div>

            <p className="mt-7 text-[15px] leading-8 text-slate-300 md:text-base">
              {personal.about}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-950/35 p-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 text-blue-400" size={18} />
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                      Location
                    </p>
                    <p className="mt-2 text-white">{personal.location}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/35 p-4">
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 text-blue-400" size={18} />
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                      Email
                    </p>
                    <p className="mt-2 break-all text-white">
                      {personal.email}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/35 p-4 sm:col-span-2">
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 text-blue-400" size={18} />
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                      Phone
                    </p>
                    <p className="mt-2 text-white">{personal.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT PANEL */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {/* stats */}
            <div className="glass p-7 md:p-8">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                Highlights
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-slate-950/35 p-5 text-center"
                  >
                    <h4 className="text-3xl font-black text-white">
                      {item.number}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* skills */}
            <div className="glass p-7 md:p-8">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                  Core Frontend Stack
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  {skills.frontend.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                  Tools & Workflow
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  {skills.tools.map((item) => (
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
