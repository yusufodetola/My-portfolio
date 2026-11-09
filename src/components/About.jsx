"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  Sparkles,
  Code2,
  Palette,
  Workflow,
  Languages,
  GraduationCap,
  Award,
  ArrowUpRight,
} from "lucide-react";

import portfolio from "@/data/portfolio";

const disciplines = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    description:
      "Building responsive applications and scalable digital products.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: Palette,
    title: "UI/UX & Product Design",
    description:
      "Creating intuitive interfaces and meaningful user experiences.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    icon: Workflow,
    title: "AI & Workflow Automation",
    description:
      "Developing intelligent workflows and AI-powered solutions with n8n.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: Languages,
    title: "Arabic Digital Design",
    description:
      "Arabic typography, professional typing, content formatting and RTL experiences.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
];

export default function About() {
  const { personal, stats, education, certifications } = portfolio;

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#07101E] px-5 py-24 text-white md:px-8 md:py-32 lg:px-12"
    >
      {/* BACKGROUND EFFECTS */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-blue-600/[0.09] blur-[130px]" />
        <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/[0.07] blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.018)_1px,transparent_1px)] bg-[size:65px_65px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1380px]">
        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-5 py-2.5">
            <Sparkles size={15} className="text-cyan-300" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
              Get to Know Me
            </span>
          </div>

          <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
            Beyond the Code.
            <span className="mt-2 block bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300 bg-clip-text text-transparent">
              Driven by Innovation.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-400 md:text-lg">
            My work brings together product thinking, frontend engineering, user
            experience, intelligent automation and digital creativity.
          </p>
        </motion.div>

        {/* MAIN PROFILE GRID */}
        <div className="grid items-stretch gap-7 lg:grid-cols-[1.08fr_0.92fr]">
          {/* PROFESSIONAL BIOGRAPHY */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75 }}
            className="group relative overflow-hidden rounded-[30px] border border-white/[0.09] bg-gradient-to-br from-[#101F34] via-[#0C192B] to-[#091525] p-7 shadow-2xl md:p-10"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/[0.09] blur-[80px]" />

            <div className="relative z-10">
              {/* PROFILE HEADER */}
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.08)]">
                  <Code2 size={26} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                    Professional Profile
                  </p>

                  <h3 className="mt-1 text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                    {personal.fullName}
                  </h3>
                </div>
              </div>

              {/* DIVIDER */}
              <div className="my-8 h-px w-full bg-gradient-to-r from-cyan-400/30 via-white/10 to-transparent" />

              {/* BIOGRAPHY */}
              <div className="space-y-5 text-[15px] leading-8 text-slate-300 md:text-base">
                <p>{personal.about}</p>

                <p>
                  My approach goes beyond creating individual screens. I enjoy
                  understanding how products work as a whole, from user
                  experience and interface architecture to development,
                  integration and deployment.
                </p>

                <p>
                  My interest in Arabic digital design also gives me a
                  perspective on multilingual experiences, particularly
                  typography, content presentation and right-to-left interfaces.
                </p>
              </div>

              {/* CONTACT DETAILS */}
              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                {/* LOCATION */}
                <div className="flex min-w-0 items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 transition hover:border-cyan-400/25">
                  <div className="rounded-xl bg-cyan-400/10 p-2.5 text-cyan-300">
                    <MapPin size={19} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">Location</p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      {personal.location}
                    </p>
                  </div>
                </div>

                {/* EMAIL */}
                <a
                  href={`mailto:${personal.email}`}
                  className="flex min-w-0 items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 transition hover:border-cyan-400/25"
                >
                  <div className="rounded-xl bg-blue-400/10 p-2.5 text-blue-300">
                    <Mail size={19} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">Email</p>
                    <p className="mt-1 break-all text-sm font-semibold text-white">
                      {personal.email}
                    </p>
                  </div>
                </a>

                {/* PHONE */}
                <a
                  href={`tel:${personal.phone}`}
                  className="flex min-w-0 items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 transition hover:border-cyan-400/25"
                >
                  <div className="rounded-xl bg-purple-400/10 p-2.5 text-purple-300">
                    <Phone size={19} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">Phone</p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      {personal.phone}
                    </p>
                  </div>
                </a>

                {/* WHATSAPP */}
                <a
                  href="https://wa.me/2348169587914"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Yusuf Odetola on WhatsApp"
                  className="flex min-w-0 items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 transition hover:border-emerald-400/40 hover:bg-emerald-400/[0.04]"
                >
                  <div className="rounded-xl bg-emerald-400/10 p-2.5 text-emerald-400">
                    <MessageCircle size={19} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">WhatsApp</p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      +44 7575 115575
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* PROFESSIONAL HIGHLIGHTS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75 }}
            className="flex flex-col gap-7"
          >
            {/* STATISTICS */}
            <div className="rounded-[30px] border border-white/[0.09] bg-gradient-to-br from-[#101F34] to-[#0A1728] p-7 shadow-xl md:p-8">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                  Professional Highlights
                </p>
                <Sparkles size={19} className="text-cyan-400" />
              </div>

              <div className="mt-7 grid grid-cols-3 gap-3">
                {stats.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12, duration: 0.5 }}
                    className="rounded-2xl border border-white/[0.07] bg-white/[0.025] px-3 py-6 text-center transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-cyan-400/[0.04]"
                  >
                    <h4 className="text-3xl font-black tracking-tight text-cyan-300 md:text-4xl">
                      {item.number}
                    </h4>

                    <p className="mt-3 text-xs leading-5 text-slate-400">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* AREAS OF EXPERTISE */}
            <div className="flex-1 rounded-[30px] border border-white/[0.09] bg-gradient-to-br from-[#101F34] to-[#0A1728] p-7 shadow-xl md:p-8">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                  Areas of Expertise
                </p>
                <Code2 size={20} className="text-cyan-400" />
              </div>

              <div className="mt-7 space-y-3">
                {disciplines.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                      }}
                      className="group flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 transition duration-300 hover:translate-x-1 hover:border-cyan-400/20 hover:bg-white/[0.045]"
                    >
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.bg} ${item.color}`}
                      >
                        <Icon size={23} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h4 className="text-sm font-bold text-white">
                          {item.title}
                        </h4>

                        <p className="mt-1 text-xs leading-5 text-slate-400">
                          {item.description}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={17}
                        className="shrink-0 text-slate-600 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300"
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* EDUCATION */}
        {education?.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="mt-9 rounded-[30px] border border-white/[0.09] bg-gradient-to-br from-[#101F34] to-[#0A1728] p-7 shadow-xl md:p-10"
          >
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                <GraduationCap size={24} />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
                <p className="mt-1 text-sm text-slate-500">
                  Academic background and qualifications.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {education.map((item) => (
                <div
                  key={item.qualification}
                  className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 transition duration-300 hover:border-cyan-400/25 hover:bg-white/[0.045]"
                >
                  <p className="text-lg font-bold text-white">
                    {item.qualification}
                  </p>

                  <p className="mt-2 font-semibold text-cyan-300">
                    {item.field}
                  </p>

                  <p className="mt-3 text-sm text-slate-400">
                    {item.institution}
                  </p>

                  <p className="mt-2 text-xs text-slate-500">{item.duration}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* CERTIFICATIONS */}
        {certifications?.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="mt-9 rounded-[30px] border border-white/[0.09] bg-gradient-to-br from-[#101F34] to-[#0A1728] p-7 shadow-xl md:p-10"
          >
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-400/10 text-blue-300">
                <Award size={24} />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">
                  Certifications & Professional Development
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Completed professional training and specialisations.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {certifications.map((item) => (
                <div
                  key={item.title}
                  className="group flex items-start justify-between gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition duration-300 hover:border-cyan-400/25 hover:bg-white/[0.045]"
                >
                  <div>
                    <h4 className="font-bold leading-6 text-white">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-sm text-slate-400">{item.issuer}</p>

                    <p className="mt-1 text-xs text-slate-500">{item.date}</p>
                  </div>

                  <span className="shrink-0 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] font-bold text-emerald-300">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
