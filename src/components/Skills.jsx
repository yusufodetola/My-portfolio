"use client";

import { motion } from "framer-motion";
import {
  Code2,
  PanelsTopLeft,
  Palette,
  Workflow,
  Wrench,
  Sparkles,
  Braces,
  Terminal,
  Layers3,
  ArrowUpRight,
} from "lucide-react";

import portfolio from "@/data/portfolio";

const skillGroups = [
  {
    number: "01",
    title: "Frontend Technologies",
    subtitle: "Core Development Stack",
    description:
      "Modern programming languages and frameworks for building responsive, scalable web applications.",
    icon: Code2,
    skills: "frontend",
    layout: "lg:col-span-7",
    accent: "blue",
  },
  {
    number: "02",
    title: "UI Libraries & Frameworks",
    subtitle: "Interface Development",
    description:
      "Libraries and tools for building consistent, accessible and polished interfaces.",
    icon: PanelsTopLeft,
    skills: "uiLibraries",
    layout: "lg:col-span-5",
    accent: "cyan",
  },
  {
    number: "03",
    title: "Design & Creative Tools",
    subtitle: "Product and Visual Design",
    description:
      "Design tools, visual communication and bilingual Arabic design capabilities.",
    icon: Palette,
    skills: "design",
    layout: "lg:col-span-5",
    accent: "purple",
  },
  {
    number: "04",
    title: "AI & Automation",
    subtitle: "Intelligent Technologies",
    description:
      "AI platforms, workflow automation and intelligent tools for connecting digital processes.",
    icon: Workflow,
    skills: "automation",
    layout: "lg:col-span-7",
    accent: "cyan",
  },
  {
    number: "05",
    title: "Development Ecosystem",
    subtitle: "Tools & Infrastructure",
    description:
      "The development environment, version control, integrations and deployment tools used throughout my workflow.",
    icon: Wrench,
    skills: "tools",
    layout: "lg:col-span-12",
    accent: "blue",
  },
];

const accentStyles = {
  blue: {
    icon: "border-blue-400/20 bg-blue-500/10 text-blue-400",
    glow: "group-hover:bg-blue-500/15",
    dot: "bg-blue-400",
    text: "text-blue-400",
  },
  cyan: {
    icon: "border-cyan-400/20 bg-cyan-400/10 text-cyan-300",
    glow: "group-hover:bg-cyan-400/15",
    dot: "bg-cyan-400",
    text: "text-cyan-300",
  },
  purple: {
    icon: "border-violet-400/20 bg-violet-500/10 text-violet-300",
    glow: "group-hover:bg-violet-500/15",
    dot: "bg-violet-400",
    text: "text-violet-300",
  },
};

export default function Skills() {
  const { skills } = portfolio;

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#060D19] py-24 md:py-32"
    >
      {/* BACKGROUND LIGHTING */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[15%] h-[400px] w-[400px] rounded-full bg-blue-600/[0.07] blur-[130px]" />

        <div className="absolute bottom-[10%] right-[-10%] h-[450px] w-[450px] rounded-full bg-cyan-500/[0.06] blur-[140px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.025)_1px,transparent_1px)] bg-[size:55px_55px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-5 py-2.5">
            <Sparkles size={15} className="text-cyan-300" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              Technical Expertise
            </span>
          </div>

          <h2 className="text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
            My Technology
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
              Stack & Toolkit.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
            A closer look at the technologies, frameworks, creative tools and
            intelligent platforms I use to design, develop and deliver digital
            products.
          </p>
        </motion.div>

        {/* TECHNOLOGY SUMMARY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-4"
        >
          {[
            { icon: Braces, label: "Development" },
            { icon: Layers3, label: "Product Design" },
            { icon: Workflow, label: "Automation" },
            { icon: Terminal, label: "Digital Tools" },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.035] px-5 py-3 text-sm font-medium text-slate-300"
              >
                <Icon size={16} className="text-cyan-400" />
                {item.label}
              </div>
            );
          })}
        </motion.div>

        {/* SKILLS TECHNOLOGY GRID */}
        <div className="mt-16 grid gap-5 lg:grid-cols-12">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            const items = skills[group.skills] || [];
            const accent = accentStyles[group.accent];

            return (
              <motion.article
                key={group.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                }}
                className={`group relative overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#0B1728]/90 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/25 hover:shadow-[0_20px_60px_rgba(34,211,238,0.06)] md:p-9 ${group.layout}`}
              >
                {/* CARD GLOW */}
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-500/[0.07] blur-[80px] transition duration-700 ${accent.glow}`}
                />

                <div className="relative z-10">
                  {/* CARD HEADER */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border transition duration-500 group-hover:scale-110 ${accent.icon}`}
                      >
                        <Icon size={26} strokeWidth={1.7} />
                      </div>

                      <div>
                        <p
                          className={`text-[10px] font-bold uppercase tracking-[0.2em] ${accent.text}`}
                        >
                          {group.subtitle}
                        </p>

                        <h3 className="mt-2 text-xl font-bold text-white md:text-2xl">
                          {group.title}
                        </h3>
                      </div>
                    </div>

                    <span className="font-mono text-sm text-slate-600">
                      {group.number}
                    </span>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400">
                    {group.description}
                  </p>

                  {/* TECHNOLOGY COUNT */}
                  <div className="mt-7 flex items-center justify-between border-t border-white/[0.07] pt-5">
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                      Technologies & Tools
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-slate-400">
                      {items.length} {items.length === 1 ? "Item" : "Items"}
                    </span>
                  </div>

                  {/* SKILL TAGS */}
                  <div className="mt-5 flex flex-wrap gap-3">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-2 rounded-xl border border-white/[0.09] bg-slate-900/70 px-4 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/35 hover:bg-cyan-400/[0.06] hover:text-cyan-200"
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${accent.dot}`}
                        />
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* BOTTOM ACCENT */}
                  <div className="mt-7 flex justify-end">
                    <ArrowUpRight
                      size={19}
                      className="text-slate-600 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300"
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* CLOSING STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 overflow-hidden rounded-[28px] border border-cyan-400/15 bg-gradient-to-r from-blue-500/[0.08] via-slate-900/60 to-cyan-400/[0.06] p-8 text-center md:p-12"
        >
          <Sparkles size={27} className="mx-auto mb-5 text-cyan-300" />

          <h3 className="text-xl font-bold leading-relaxed text-white md:text-3xl">
            The right tools.
            <span className="text-blue-400"> Thoughtful design.</span>
            <span className="text-cyan-300"> Meaningful results.</span>
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400">
            I continuously develop my technical capabilities to create better
            digital experiences and solve practical problems through technology.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
