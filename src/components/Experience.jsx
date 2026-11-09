"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  CalendarDays,
  CheckCircle2,
  MapPin,
  GraduationCap,
  Workflow,
  ExternalLink,
  Code2,
  Rocket,
  Sparkles,
} from "lucide-react";

import portfolio from "@/data/portfolio";

const products = [
  {
    name: "MECHLAB",
    category: "Independent Product Development",
    description:
      "Designed and developed an interactive automotive learning platform featuring structured courses, automotive learning modules, an Interactive Anatomy Lab, AutoMentor AI and diagnostic practice.",
    link: "https://mechlab-seven.vercel.app/",
    icon: Code2,
  },
  {
    name: "MARJA FLOW",
    category: "Bilingual SaaS Product",
    description:
      "Built a bilingual business knowledge and operations platform designed around English and Arabic experiences, including LTR and RTL interfaces, document management, tasks, AI-assisted knowledge and workflow automation.",
    link: "https://marja-flow.vercel.app/",
    icon: Rocket,
  },
];

export default function Experience() {
  // Explicitly exclude Notzero Academy
  const experiences = (portfolio.experience || []).filter(
    (item) => item.company?.trim().toLowerCase() !== "notzero academy",
  );

  return (
    <section
      id="experience"
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* BACKGROUND EFFECTS */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(37,99,235,0.13),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(34,211,238,0.07),transparent_35%)]" />

      <div className="container-custom relative z-10">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="section-eyebrow">
            <Briefcase size={15} className="mr-2" />
            Professional Journey
          </div>

          <h2 className="section-title mt-5">
            Experience That
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Shapes My Work.
            </span>
          </h2>

          <p className="section-subtitle mt-6">
            My professional journey combines frontend engineering, independent
            product development, digital design and continuous development in
            intelligent automation.
          </p>
        </motion.div>

        {/* PROFESSIONAL EXPERIENCE */}
        <div className="mt-16 space-y-7">
          {experiences.map((item, index) => (
            <motion.article
              key={`${item.company}-${item.role}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
              }}
              className="group relative overflow-hidden rounded-[28px] border border-cyan-400/15 bg-[#0b1425]/90 p-7 shadow-[0_15px_50px_rgba(0,0,0,0.15)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 md:p-9"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/[0.06] blur-3xl transition group-hover:bg-blue-400/[0.10]" />

              <div className="relative z-10">
                {/* COMPANY AND ROLE */}
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                      {item.company}
                    </p>

                    <h3 className="mt-3 text-2xl font-bold tracking-tight text-white md:text-3xl">
                      {item.role}
                    </h3>

                    <div className="mt-4 flex items-center gap-3 text-sm text-slate-400">
                      <MapPin size={19} className="shrink-0 text-blue-400" />
                      {item.type}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-slate-900/80 px-5 py-3 text-sm font-semibold text-slate-300">
                      <CalendarDays size={19} className="text-cyan-400" />
                      {item.duration}
                    </div>

                    {item.duration?.includes("Present") && (
                      <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-5 py-3 text-sm font-bold text-emerald-300">
                        Current
                      </span>
                    )}
                  </div>
                </div>

                {/* DIVIDER */}
                <div className="my-9 h-px bg-gradient-to-r from-cyan-400/30 via-white/[0.08] to-transparent" />

                {/* RESPONSIBILITIES */}
                <div>
                  <p className="mb-7 text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
                    Key Responsibilities & Contributions
                  </p>

                  <div className="grid gap-x-10 gap-y-6 md:grid-cols-2">
                    {(Array.isArray(item.description)
                      ? item.description
                      : [item.description]
                    )
                      .filter(Boolean)
                      .map((point, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                          <CheckCircle2
                            size={21}
                            className="mt-1 shrink-0 text-cyan-400"
                          />

                          <p className="text-[15px] leading-8 text-slate-300">
                            {point}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>

                {/* BOTTOM LABEL */}
                <div className="mt-9 flex items-center justify-between border-t border-white/[0.07] pt-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Professional Experience
                  </span>

                  <Sparkles
                    size={19}
                    className="text-cyan-400 transition group-hover:rotate-12"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* INDEPENDENT PRODUCT DEVELOPMENT */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-eyebrow">Building & Shipping</p>

            <h3 className="mt-5 text-3xl font-bold text-white md:text-4xl">
              Independent Product Development
            </h3>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
              Turning ideas into functional digital products through product
              thinking, interface design, frontend development and practical
              implementation.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {products.map((product, index) => {
              const Icon = product.icon;

              return (
                <motion.article
                  key={product.name}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.12,
                  }}
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0b1425]/90 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 md:p-9"
                >
                  <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-500/[0.08] blur-3xl transition group-hover:bg-cyan-400/10" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                        <Icon size={27} />
                      </div>

                      <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-bold text-emerald-300">
                        Live Product
                      </span>
                    </div>

                    <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                      {product.category}
                    </p>

                    <h4 className="mt-3 text-2xl font-bold text-white">
                      {product.name}
                    </h4>

                    <p className="mt-5 min-h-[120px] text-[15px] leading-8 text-slate-400">
                      {product.description}
                    </p>

                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-7 inline-flex items-center gap-3 font-semibold text-cyan-300 transition hover:text-white"
                    >
                      Explore Project
                      <ExternalLink size={17} />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* AI AUTOMATION DEVELOPMENT */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-24 overflow-hidden rounded-[30px] border border-blue-400/20 bg-gradient-to-br from-[#101d35] to-[#091321] p-8 md:p-11"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative z-10">
            <div className="flex flex-col gap-5 md:flex-row md:items-center">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                <GraduationCap size={31} />
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                  Continuous Learning
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                  AI Automation & Workflow Engineering
                </h3>
              </div>
            </div>

            <p className="mt-7 max-w-3xl text-sm leading-8 text-slate-400 md:text-base">
              Completed specialised training in AI automation and n8n,
              developing practical knowledge of workflow architecture, API
              integrations, webhooks, Docker deployment, automation logic and
              AI-powered systems.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {[
                "n8n",
                "AI Workflows",
                "API Integration",
                "Webhooks",
                "Docker",
                "Workflow Engineering",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-cyan-300">
              <Workflow size={20} />
              <span>Building intelligent digital workflows</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
