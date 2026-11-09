"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import {
  Code2,
  Palette,
  Bot,
  Languages,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import portfolio from "@/data/portfolio";

/* =========================================
   SERVICE THEMES
   Names MATCH portfolio.js exactly
========================================= */

const serviceStyles = {
  "Frontend Development": {
    icon: Code2,
    number: "01",
    color: "text-blue-400",
    background: "bg-blue-500/15",
    border: "hover:border-blue-400/40",
    orb: "59,130,246",
    skills: ["React", "Next.js", "Responsive Design"],
  },

  "UI/UX Design": {
    icon: Palette,
    number: "02",
    color: "text-purple-400",
    background: "bg-purple-500/15",
    border: "hover:border-purple-400/40",
    orb: "168,85,247",
    skills: ["Figma", "User Experience", "Prototyping"],
  },

  "AI Automation Engineering": {
    icon: Bot,
    number: "03",
    color: "text-emerald-400",
    background: "bg-emerald-500/15",
    border: "hover:border-emerald-400/40",
    orb: "34,197,94",
    skills: ["n8n", "AI Agents", "Workflow Automation"],
  },

  "Arabic Digital Design": {
    icon: Languages,
    number: "04",
    color: "text-cyan-400",
    background: "bg-cyan-500/15",
    border: "hover:border-cyan-400/40",
    orb: "34,211,238",
    skills: ["Arabic Typography", "RTL Layouts", "Typesetting"],
  },
};

/* =========================================
   GLOWING CONCENTRIC ORB
========================================= */

function GlowingOrb({ style, Icon }) {
  const circleSizes = [250, 205, 160, 115];

  return (
    <div className="pointer-events-none absolute -right-[105px] -top-[105px] z-0 h-[270px] w-[270px]">
      {circleSizes.map((size, index) => (
        <div
          key={size}
          className="absolute left-1/2 top-1/2 rounded-full"
          style={{
            width: size,
            height: size,
            transform: "translate(-50%, -50%)",
            background: `rgba(${style.orb}, ${
              [0.035, 0.07, 0.12, 0.19][index]
            })`,
            border: `1px solid rgba(${style.orb}, ${
              [0.12, 0.15, 0.2, 0.25][index]
            })`,
            boxShadow:
              index === 0 ? `0 0 45px rgba(${style.orb}, 0.12)` : "none",
          }}
        />
      ))}

      {/* CENTER ICON BADGE */}
      <div
        className="absolute left-1/2 top-1/2 flex h-[66px] w-[66px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 shadow-[0_0_35px_rgba(255,255,255,0.08)]"
        style={{
          background: `rgba(${style.orb}, 0.22)`,
          color: `rgb(${style.orb})`,
          boxShadow: `0 0 35px rgba(${style.orb}, 0.25)`,
        }}
      >
        <Icon size={29} strokeWidth={2.3} />
      </div>
    </div>
  );
}

/* =========================================
   INTERACTIVE SERVICE CARD
========================================= */

function ServiceCard({ service, index, style }) {
  const Icon = style.icon;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = {
    stiffness: 160,
    damping: 22,
    mass: 0.5,
  };

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [7, -7]),
    springConfig,
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-7, 7]),
    springConfig,
  );

  const glowX = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-12, 12]),
    springConfig,
  );

  const glowY = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [-12, 12]),
    springConfig,
  );

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1100,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ y: -7 }}
      className={`group relative flex min-h-[410px] flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#101c2e] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.22)] transition-colors duration-500 ${style.border}`}
    >
      {/* VISIBLE COLOURED ORB */}
      <GlowingOrb style={style} Icon={Icon} />

      {/* AMBIENT LIGHT FOLLOWING POINTER */}
      <motion.div
        style={{
          x: glowX,
          y: glowY,
          background: `radial-gradient(circle, rgba(${style.orb}, 0.13), transparent 70%)`,
        }}
        className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full blur-3xl"
      />

      {/* CARD CONTENT */}
      <div className="relative z-10 flex h-full flex-1 flex-col">
        {/* NUMBER AND ARROW */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold tracking-[0.2em] text-slate-500">
            {style.number}
          </span>

          <ArrowUpRight
            size={19}
            className="text-slate-500 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
          />
        </div>

        {/* SERVICE TITLE */}
        <h3
          style={{ transform: "translateZ(22px)" }}
          className="mt-24 max-w-[95%] text-2xl font-extrabold leading-tight tracking-tight text-white"
        >
          {service.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="mt-4 text-sm leading-7 text-slate-400">
          {service.description}
        </p>

        {/* SKILLS */}
        <div className="mt-6 flex flex-wrap gap-2">
          {style.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-[10px] font-medium text-slate-300"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* AVAILABILITY */}
        <div className="mt-auto flex items-center gap-2 border-t border-white/[0.08] pt-6">
          <CheckCircle2 size={16} className="text-emerald-400" />

          <span className="text-xs font-semibold text-slate-300">
            Available for projects
          </span>
        </div>
      </div>

      {/* BOTTOM COLOURED LINE */}
      <div
        className="absolute inset-x-8 bottom-0 h-px opacity-60 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(${style.orb}, 0.9), transparent)`,
        }}
      />
    </motion.article>
  );
}

/* =========================================
   MAIN SERVICES SECTION
========================================= */

export default function Services() {
  const services = portfolio.services || [];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#07101E] px-5 py-24 text-white md:px-8 md:py-32 lg:px-12"
    >
      {/* BACKGROUND EFFECTS */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-blue-600/[0.07] blur-[130px]" />

        <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/[0.06] blur-[130px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.018)_1px,transparent_1px)] bg-[size:65px_65px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1380px]">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-5 py-2.5">
            <Sparkles size={15} className="text-cyan-300" />

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
              What I Do
            </span>
          </div>

          <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
            What I Bring to
            <span className="mt-2 block bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300 bg-clip-text text-transparent">
              Your Next Project.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-400 md:text-lg">
            I combine frontend engineering, product design, intelligent
            automation and Arabic digital expertise to create functional,
            engaging and scalable digital experiences.
          </p>
        </motion.div>

        {/* FOUR SERVICE CARDS */}
        <div
          className="mt-16 grid gap-7 sm:grid-cols-2 xl:grid-cols-4"
          style={{ perspective: "1200px" }}
        >
          {services.map((service, index) => {
            const style = serviceStyles[service.title];

            if (!style) return null;

            return (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
                style={style}
              />
            );
          })}
        </div>

        {/* CLOSING CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 text-center"
        >
          <p className="text-sm leading-7 text-slate-500 md:text-base">
            Have a project in mind? Let's turn your idea into a meaningful
            digital experience.
          </p>

          <a
            href="#contact"
            className="mt-5 inline-flex items-center gap-2 font-semibold text-cyan-300 transition hover:text-white"
          >
            Let's work together
            <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
