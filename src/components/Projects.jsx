"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Globe2,
  Layers3,
  Sparkles,
  Github,
  GraduationCap,
  Languages,
  Activity,
  ExternalLink,
} from "lucide-react";
import portfolio from "@/data/portfolio";

const projectIcons = {
  MECHLAB: GraduationCap,
  "MARJA FLOW": Languages,
  "NEPA TRACKER": Activity,
};

const projectAccents = {
  MECHLAB: "from-blue-500/25 via-cyan-400/10 to-transparent",
  "MARJA FLOW": "from-violet-500/25 via-blue-400/10 to-transparent",
  "NEPA TRACKER": "from-emerald-500/20 via-cyan-400/10 to-transparent",
};

function ProjectLinks({ project }) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-950/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/20"
        >
          <Globe2 size={16} />
          Live Preview
          <ArrowUpRight
            size={15}
            className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
          />
        </a>
      )}

      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-300"
        >
          <Github size={17} />
          GitHub
        </a>
      )}
    </div>
  );
}

function ProjectImage({ project, priority = false }) {
  return (
    <div className="group/image relative h-full min-h-[280px] overflow-hidden bg-[#0C192B]">
      {project.image ? (
        <Image
          src={project.image}
          alt={`${project.title} project screenshot`}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover object-top transition-transform duration-1000 ease-out group-hover/image:scale-110"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <Layers3 size={65} className="text-cyan-400/40" />
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-[#07101E] via-[#07101E]/10 to-transparent" />

      <div
        className={`absolute inset-0 bg-gradient-to-br ${
          projectAccents[project.title] || "from-blue-500/20 to-transparent"
        } opacity-60 transition-opacity duration-500 group-hover:opacity-100`}
      />

      <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-[#07101E]/85 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-300 shadow-xl backdrop-blur-xl">
        {project.category}
      </div>

      <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-slate-950/70 text-white opacity-0 backdrop-blur-xl transition-all duration-500 group-hover:opacity-100">
        <ExternalLink size={19} />
      </div>
    </div>
  );
}

function TechStack({ items, compact = false }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className={`rounded-full border border-white/10 bg-white/[0.035] font-medium text-slate-300 transition-colors hover:border-cyan-400/30 hover:text-cyan-300 ${
            compact ? "px-3 py-1.5 text-[11px]" : "px-3.5 py-2 text-xs"
          }`}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function ProjectHighlights({ items, compact = false }) {
  return (
    <div
      className={compact ? "mt-6 space-y-3" : "mt-7 grid gap-3 sm:grid-cols-2"}
    >
      {items.map((item) => (
        <div
          key={item}
          className="flex items-start gap-3 text-sm leading-6 text-slate-300"
        >
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.7)]" />
          {item}
        </div>
      ))}
    </div>
  );
}

export default function Projects() {
  const projects = [...portfolio.projects].sort(
    (a, b) => (a.priority || 99) - (b.priority || 99),
  );

  const featuredProject = projects.find(
    (project) => project.title === "MECHLAB",
  );

  const otherProjects = projects.filter(
    (project) => project.title !== "MECHLAB",
  );

  const FeaturedIcon = featuredProject
    ? projectIcons[featuredProject.title] || Sparkles
    : Sparkles;

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#060D19] px-5 py-24 text-white md:px-8 md:py-32 lg:px-12"
    >
      {/* BACKGROUND LIGHTING */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[750px] -translate-x-1/2 rounded-full bg-blue-600/[0.08] blur-[140px]" />

        <div className="absolute -left-40 top-[45%] h-[400px] w-[400px] rounded-full bg-cyan-500/[0.045] blur-[130px]" />

        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-600/[0.06] blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* SECTION INTRODUCTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/[0.07] px-5 py-2.5">
            <Sparkles size={15} className="text-cyan-300" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
              Selected Work
            </span>
          </div>

          <h2 className="text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
            Turning Ideas Into
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
              Digital Experiences.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
            Explore a selection of digital products and applications
            demonstrating my work across frontend engineering, product
            development, bilingual UX and intelligent automation.
          </p>
        </motion.div>

        {/* FLAGSHIP PROJECT: MECHLAB */}
        {featuredProject && (
          <motion.article
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8 }}
            className="group relative overflow-hidden rounded-[32px] border border-blue-400/15 bg-[#0B1728] shadow-2xl shadow-black/30 transition-all duration-500 hover:border-cyan-400/30"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px] transition duration-700 group-hover:bg-cyan-400/15" />

            <div className="relative grid lg:grid-cols-[1.12fr_0.88fr]">
              {/* PROJECT SCREENSHOT */}
              <div className="relative min-h-[330px] overflow-hidden lg:min-h-[570px]">
                <ProjectImage project={featuredProject} priority />

                <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-full border border-white/10 bg-[#07101E]/85 px-5 py-3 shadow-xl backdrop-blur-xl">
                  <FeaturedIcon size={18} className="text-cyan-300" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    Featured Project
                  </span>
                </div>
              </div>

              {/* PROJECT INFORMATION */}
              <div className="relative flex flex-col justify-center p-7 md:p-10 xl:p-12">
                <div className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                  <span className="h-px w-9 bg-cyan-400" />
                  01 / {featuredProject.category}
                </div>

                <h3 className="text-4xl font-black tracking-tight text-white md:text-5xl">
                  {featuredProject.title}
                  <span className="text-cyan-400">.</span>
                </h3>

                <p className="mt-6 text-base leading-8 text-slate-300 md:text-lg">
                  {featuredProject.description}
                </p>

                {featuredProject.overview && (
                  <p className="mt-5 text-sm leading-8 text-slate-400">
                    {featuredProject.overview}
                  </p>
                )}

                {featuredProject.highlights && (
                  <ProjectHighlights items={featuredProject.highlights} />
                )}

                <div className="mt-8">
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                    Technologies & Tools
                  </p>
                  <TechStack items={featuredProject.tech} />
                </div>

                <ProjectLinks project={featuredProject} />
              </div>
            </div>
          </motion.article>
        )}

        {/* SUPPORTING PROJECTS */}
        <div className="mt-9 grid gap-8 lg:grid-cols-2">
          {otherProjects.map((project, index) => {
            const Icon = projectIcons[project.title] || Layers3;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                className="group relative overflow-hidden rounded-[30px] border border-white/[0.09] bg-[#0B1728] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-blue-950/30"
              >
                {/* HOVER GLOW */}
                <div className="pointer-events-none absolute -right-16 -top-16 z-10 h-48 w-48 rounded-full bg-blue-500/10 blur-[75px] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                {/* PROJECT IMAGE */}
                <div className="relative h-[280px] overflow-hidden md:h-[340px]">
                  <ProjectImage project={project} />
                </div>

                {/* PROJECT DETAILS */}
                <div className="relative p-7 md:p-9">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-cyan-300 transition-all duration-500 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.12)]">
                      <Icon size={23} />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                        Project 0{index + 2}
                      </p>

                      <p className="mt-1 text-xs font-semibold text-cyan-300">
                        {project.category}
                      </p>
                    </div>
                  </div>

                  <h3 className="text-3xl font-black tracking-tight text-white transition-colors group-hover:text-cyan-100">
                    {project.title}
                    <span className="text-cyan-400">.</span>
                  </h3>

                  <p className="mt-5 text-sm leading-8 text-slate-400">
                    {project.description}
                  </p>

                  {project.overview && (
                    <p className="mt-4 text-sm leading-7 text-slate-500">
                      {project.overview}
                    </p>
                  )}

                  {project.highlights && (
                    <ProjectHighlights
                      items={project.highlights.slice(0, 4)}
                      compact
                    />
                  )}

                  <div className="mt-7">
                    <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                      Built With
                    </p>

                    <TechStack items={project.tech} compact />
                  </div>

                  <ProjectLinks project={project} />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* BOTTOM MESSAGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 text-center"
        >
          <div className="mx-auto mb-6 h-px max-w-xs bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

          <p className="text-sm leading-7 text-slate-500">
            Every project represents a practical approach to solving problems
            through thoughtful design and technology.
          </p>

          <p className="mt-2 text-sm font-medium text-cyan-400">
            More projects and product experiments are coming.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
