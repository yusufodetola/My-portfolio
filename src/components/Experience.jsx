"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, CalendarDays, CheckCircle2 } from "lucide-react";
import portfolio from "@/data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(37,99,235,0.12),transparent_42%)]" />

      <div className="container-custom relative z-10">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="section-eyebrow">Experience</p>

          <h2 className="section-title mt-4">
            Professional Experience & Growth Journey
          </h2>

          <p className="section-subtitle mt-6">
            My experience so far has focused on frontend development, responsive
            UI building, and contributing to practical web projects with modern
            tools and collaborative workflows.
          </p>
        </motion.div>

        {/* timeline cards */}
        <div className="mt-16 space-y-8">
          {portfolio.experience.map((item, index) => (
            <motion.article
              key={`${item.company}-${item.role}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-7 md:p-10 backdrop-blur-xl"
            >
              {/* top glow */}
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition duration-300 group-hover:bg-cyan-400/15" />

              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                {/* left side */}
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/70 text-blue-400 shadow-[0_0_30px_rgba(37,99,235,0.18)]">
                    <BriefcaseBusiness size={26} />
                  </div>

                  <h3 className="mt-6 text-3xl font-bold text-white">
                    {item.role}
                  </h3>

                  <p className="mt-3 text-xl font-semibold text-blue-400">
                    {item.company}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-slate-300">
                    <CalendarDays size={16} className="text-blue-400" />
                    <span>{item.duration}</span>
                  </div>
                </div>

                {/* right side */}
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Key Contributions
                  </h4>

                  <div className="mt-6 space-y-4">
                    {item.description.map((point, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 rounded-2xl border border-white/8 bg-slate-950/35 p-4"
                      >
                        <CheckCircle2
                          size={20}
                          className="mt-0.5 shrink-0 text-blue-400"
                        />
                        <p className="text-[15px] leading-8 text-slate-300">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* bottom highlight */}
              <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent opacity-70" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
