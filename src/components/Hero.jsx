"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Code2,
  Palette,
  Workflow,
  Languages,
  Sparkles,
  ExternalLink,
} from "lucide-react";

import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiN8N,
  SiFigma,
} from "react-icons/si";

import portfolio from "@/data/portfolio";

/* =========================================
   AUTOMATED FLOATING CURSOR + NAME BADGE
========================================= */

function CursorNameTag() {
  return (
    <>
      {/* MOBILE CURSOR ANIMATION */}
      <motion.div
        className="pointer-events-none absolute left-[12%] top-[15%] z-[40] block md:hidden"
        animate={{
          x: [0, 18, 35, 15, -5, 0],
          y: [0, 12, 25, 8, 18, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "loop",
        }}
      >
        <div className="relative">
          <svg
            width="24"
            height="30"
            viewBox="0 0 32 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -left-4 -top-5 z-20 drop-shadow-md"
          >
            <path
              d="M3 2L28 23L16 24L12 36L3 2Z"
              fill="white"
              stroke="#111827"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>

          <div className="rounded-full border border-blue-400/30 bg-blue-600 px-3 py-2 shadow-[0_8px_25px_rgba(37,99,235,0.35)]">
            <span className="whitespace-nowrap text-[10px] font-semibold tracking-wide text-white">
              YUSUF ODETOLA
            </span>
          </div>
        </div>
      </motion.div>

      {/* DESKTOP CURSOR ANIMATION */}
      <motion.div
        className="pointer-events-none absolute left-[35%] top-[18%] z-[40] hidden md:block"
        animate={{
          x: [0, 100, 180, 90, -10, 0],
          y: [0, 55, 100, 35, 75, 0],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "loop",
        }}
      >
        <div className="relative">
          <svg
            width="32"
            height="40"
            viewBox="0 0 32 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -left-6 -top-7 z-20 drop-shadow-md"
          >
            <path
              d="M3 2L28 23L16 24L12 36L3 2Z"
              fill="white"
              stroke="#111827"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>

          <div className="rounded-full border border-blue-400/30 bg-blue-600 px-6 py-3 shadow-[0_8px_30px_rgba(37,99,235,0.35)]">
            <span className="whitespace-nowrap text-sm font-medium tracking-wide text-white">
              YUSUF ODETOLA
            </span>
          </div>
        </div>
      </motion.div>
    </>
  );
}

/* =========================================
   EXPERTISE DATA
========================================= */

const expertise = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Modern web applications",
  },
  {
    icon: Palette,
    title: "UI/UX & Product Design",
    description: "Intuitive digital experiences",
  },
  {
    icon: Workflow,
    title: "AI & Workflow Automation",
    description: "Intelligent business workflows",
  },
  {
    icon: Languages,
    title: "Arabic Digital Design",
    description: "Bilingual and RTL experiences",
  },
];

/* =========================================
   TECHNOLOGY DATA
========================================= */

const technologies = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "n8n", icon: SiN8N },
  { name: "Figma", icon: SiFigma },
];

/* =========================================
   MAIN HERO COMPONENT
========================================= */

export default function Hero() {
  const { personal, social } = portfolio;

  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[#060D19] px-5 pb-20 pt-32 text-white md:px-8 md:pt-36 lg:px-12"
    >
      <CursorNameTag />

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.035)_1px,transparent_1px)] bg-[size:55px_55px]" />

        <div className="absolute -right-40 top-20 h-[600px] w-[600px] rounded-full bg-blue-600/15 blur-[140px]" />

        <div className="absolute -left-40 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-[1440px]">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            {/* PROFESSIONAL LABEL */}
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-400/25 bg-cyan-400/[0.06] px-5 py-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-cyan-400" />
              </span>

              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-300 sm:text-xs">
                Digital Product Developer
              </span>
            </div>

            {/* MAIN PROFESSIONAL HEADLINE */}
            <h1 className="max-w-3xl text-[clamp(2.9rem,5.2vw,4.7rem)] font-black leading-[1.08] tracking-[-0.045em] text-white">
              I build digital experiences
              <span className="mt-2 block bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300 bg-clip-text text-transparent">
                that make an impact.
              </span>
            </h1>

            {/* INTRODUCTION */}
            <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 md:text-lg">
              I am a Frontend Developer and UI/UX Designer passionate about
              creating responsive digital products, building intelligent
              automation systems with n8n, and delivering professional Arabic
              digital design experiences.
            </p>

            {/* EXPERTISE CARDS */}
            <div className="mt-9 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
              {expertise.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.25 + index * 0.1,
                    }}
                    className="group flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.05]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-cyan-300 transition group-hover:bg-blue-500/20">
                      <Icon size={21} />
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-slate-100">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-xs text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* ACTION BUTTONS */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-900/30 transition duration-300 hover:-translate-y-1 hover:shadow-blue-500/30"
              >
                Explore My Projects
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/cv"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-8 py-5 font-semibold text-white transition duration-300 hover:border-cyan-400/40 hover:bg-white/[0.08]"
              >
                <Download size={20} />
                View CV
              </Link>
            </div>

            {/* SOCIAL LINKS */}
            <div className="mt-9 flex flex-wrap items-center gap-5 text-sm text-slate-500">
              <span>Connect with me</span>

              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-cyan-300"
              >
                GitHub <ExternalLink size={12} className="inline" />
              </a>

              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-cyan-300"
              >
                LinkedIn <ExternalLink size={12} className="inline" />
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE: PORTRAIT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 25 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative mx-auto w-full max-w-[590px] min-w-0"
          >
            <div className="absolute inset-8 rounded-full bg-blue-500/20 blur-[100px]" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#142844] via-[#0D1A2D] to-[#07101E] shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
              {/* RESPONSIVE CREATIVE TECHNOLOGY BADGE
              <div className="pointer-events-none absolute left-5 top-5 z-20 sm:left-6 sm:top-6 md:left-7 md:top-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#081426]/90 px-3 py-2.5 shadow-lg backdrop-blur-xl">
                  <Sparkles size={15} className="shrink-0 text-cyan-300" />

                  <span className="whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.10em] text-slate-300">
                    Creative Technology
                  </span>
                </div>
              </div> */}

              {/* PORTRAIT IMAGE */}
              <div className="absolute inset-0">
                <Image
                  src="/images/yusuf-hero.png"
                  alt="Portrait of Yusuf Odetola"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-contain object-bottom"
                />
              </div>

              {/* BOTTOM GRADIENT */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#07101E] via-[#07101E]/55 to-transparent" />

              {/* PORTRAIT CAPTION */}
              <div className="absolute bottom-7 left-7 right-7 z-20">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  Design. Develop. Automate.
                </p>

                <h3 className="mt-3 text-2xl font-bold tracking-tight text-white md:text-3xl">
                  Digital Experiences That Matter
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Building meaningful digital solutions.
                </p>
              </div>
            </div>

            {/* FLOATING DEVELOPMENT CARD */}
            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-8 top-[30%] hidden rounded-2xl border border-blue-400/25 bg-[#0C192B]/95 p-4 shadow-2xl backdrop-blur-xl sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-cyan-300">
                  <Code2 size={23} />
                </div>

                <div>
                  <p className="text-sm font-bold text-white">
                    Modern Development
                  </p>

                  <p className="text-xs text-slate-500">React · Next.js</p>
                </div>
              </div>
            </motion.div>

            {/* FLOATING AUTOMATION CARD */}
            <motion.div
              animate={{ y: [0, 9, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-5 bottom-[25%] hidden rounded-2xl border border-cyan-400/25 bg-[#0C192B]/95 p-4 shadow-2xl backdrop-blur-xl sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                  <Workflow size={22} />
                </div>

                <div>
                  <p className="text-sm font-bold text-white">AI Automation</p>

                  <p className="text-xs text-slate-500">Powered by n8n</p>
                </div>
              </div>
            </motion.div>

            {/* TECHNOLOGY STRIP */}
            <div className="absolute -bottom-7 left-1/2 flex w-max max-w-[95%] -translate-x-1/2 items-center gap-4 rounded-2xl border border-white/10 bg-[#0B1728]/95 px-5 py-4 shadow-2xl backdrop-blur-xl">
              {technologies.map((tech) => {
                const Icon = tech.icon;

                return (
                  <div
                    key={tech.name}
                    title={tech.name}
                    aria-label={tech.name}
                    className="text-slate-400 transition hover:-translate-y-1 hover:text-cyan-300"
                  >
                    <Icon size={21} />
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
