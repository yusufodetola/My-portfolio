"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import portfolio from "@/data/portfolio";

export default function Projects() {
  const featuredProject = portfolio.projects.find(
    (project) => project.featured,
  );
  const otherProjects = portfolio.projects.filter(
    (project) => !project.featured,
  );

  return (
    <section id="projects" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.14),transparent_40%)]" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="section-eyebrow">Projects</p>

          <h2 className="section-title mt-4">
            Featured Work and Selected Projects
          </h2>

          <p className="section-subtitle mt-6">
            A selection of projects that reflect my work across frontend
            development, responsive design, user experience, and modern product
            interfaces.
          </p>
        </motion.div>

        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="mt-16"
          >
            <div className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                <div className="relative min-h-[320px] overflow-hidden border-b border-white/10 lg:min-h-[100%] lg:border-b-0 lg:border-r">
                  <Image
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B1A] via-[#070B1A]/10 to-transparent" />

                  <div className="absolute left-6 top-6 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-300 backdrop-blur-xl">
                    Featured Project
                  </div>
                </div>

                <div className="flex flex-col justify-between p-7 md:p-10 xl:p-12">
                  <div>
                    <h3 className="text-3xl font-bold text-white md:text-4xl">
                      {featuredProject.title}
                    </h3>

                    <p className="mt-6 text-base leading-8 text-slate-400 md:text-lg">
                      {featuredProject.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                      {featuredProject.tech.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm font-medium text-slate-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 flex flex-wrap gap-4">
                    {featuredProject.live && featuredProject.live !== "#" && (
                      <Link
                        href={featuredProject.live}
                        target="_blank"
                        className="btn-primary"
                      >
                        <Globe2 size={18} />
                        Live Demo
                      </Link>
                    )}

                    {featuredProject.github &&
                      featuredProject.github !== "#" && (
                        <Link
                          href={featuredProject.github}
                          target="_blank"
                          className="btn-secondary"
                        >
                          <FaGithub size={18} />
                          View Code
                        </Link>
                      )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-2">
          {otherProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-400/25"
            >
              <div className="relative h-[240px] overflow-hidden border-b border-white/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B1A] via-[#070B1A]/20 to-transparent" />
              </div>

              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-3">
                    {project.github && project.github !== "#" && (
                      <Link
                        href={project.github}
                        target="_blank"
                        className="text-slate-400 transition hover:text-white"
                      >
                        <FaGithub size={20} />
                      </Link>
                    )}

                    {project.live && project.live !== "#" && (
                      <Link
                        href={project.live}
                        target="_blank"
                        className="text-slate-400 transition hover:text-white"
                      >
                        <ArrowUpRight size={20} />
                      </Link>
                    )}
                  </div>
                </div>

                <p className="mt-5 text-[15px] leading-8 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-slate-900/70 px-3.5 py-1.5 text-sm text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
