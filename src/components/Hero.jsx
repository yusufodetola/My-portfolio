"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import portfolio from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#070B1A] pt-28">
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_30%,rgba(0,140,255,0.20),transparent_28%),radial-gradient(circle_at_58%_48%,rgba(0,195,255,0.16),transparent_22%)]" />

      {/* grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="container-custom relative z-10">
        <div className="grid min-h-[100vh] items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[620px] pb-8"
          >
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.28em] text-blue-400">
              Hello, I&apos;m
            </p>

            <h1 className="leading-[0.9]">
              <span className="block text-[68px] font-black tracking-tight text-white md:text-[88px]">
                {portfolio.personal.firstName}
              </span>
              <span className="block bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300 bg-clip-text text-[68px] font-black tracking-tight text-transparent md:text-[88px]">
                {portfolio.personal.lastName}
              </span>
            </h1>

            <div className="mt-10 space-y-2 text-[30px] font-semibold leading-tight md:text-[38px]">
              <p className="text-slate-100">Designing Experiences.</p>
              <p className="text-blue-500">Building Products.</p>
              <p className="text-cyan-400">Automating Workflows.</p>
            </div>

            <p className="mt-8 text-xl text-slate-300">
              Frontend Developer • AI Automation Expert • UI/UX Designer
            </p>

            <p className="mt-8 max-w-[600px] text-lg leading-9 text-slate-400">
              {portfolio.personal.about}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">
                View Projects
                <ArrowRight size={18} />
              </a>

              <a
                href={portfolio.personal.resume}
                download
                className="btn-secondary"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 rounded-[28px] border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-xl">
              {["Next.js", "Tailwind", "TypeScript", "React", "n8n"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative flex min-h-[920px] items-end justify-center"
          >
            {/* glow behind image */}
            <div className="absolute left-1/2 top-[22%] h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-cyan-400/30 blur-[100px]" />
            <div className="absolute left-1/2 top-[30%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[160px]" />

            {/* left floating skill cards */}
            <div className="absolute left-0 top-20 hidden xl:flex xl:flex-col xl:gap-8">
              <GlassCard
                title="React"
                subtitle="Frontend Development"
                className="w-[240px]"
              />
              <GlassCard
                title="Figma"
                subtitle="UI / UX Design"
                className="w-[240px]"
              />
              <GlassCard
                title="AI Automation"
                subtitle="Intelligent Workflows"
                className="w-[240px]"
              />
            </div>

            {/* workflow card */}
            <div className="absolute right-0 top-16 hidden xl:block">
              <div className="w-[310px] rounded-[30px] border border-cyan-400/20 bg-slate-900/55 p-5 backdrop-blur-xl">
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  AI Workflow
                </p>

                <div className="space-y-4">
                  <WorkflowItem title="Lead Captured" text="Web Form" />
                  <WorkflowItem title="AI Agent" text="Process Data" />
                  <WorkflowItem title="Update CRM" text="Save Lead" />
                  <WorkflowItem title="Send Email" text="Welcome Lead" />
                </div>
              </div>
            </div>

            {/* dashboard */}
            <div className="absolute bottom-12 right-4 hidden xl:block">
              <div className="w-[290px] rounded-[30px] border border-white/10 bg-slate-900/55 p-6 backdrop-blur-xl">
                <p className="text-sm text-slate-400">Tasks Automated</p>
                <h3 className="mt-2 text-5xl font-bold text-white">2,430</h3>
                <p className="mt-2 text-green-400">↑ 34% this month</p>

                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-cyan-300">84%</p>
                    <p className="text-sm text-slate-400">Success Rate</p>
                  </div>

                  <div className="flex h-24 w-24 items-center justify-center rounded-full border-[10px] border-cyan-400/30 border-t-blue-500">
                    <span className="text-lg font-semibold text-white">
                      84%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* HERO IMAGE */}
            <div className="relative z-10 flex h-full w-full items-end justify-center">
              <Image
                src={portfolio.personal.avatar}
                alt={portfolio.personal.fullName}
                width={1100}
                height={1400}
                priority
                className="h-auto max-h-[920px] w-auto object-contain drop-shadow-[0_40px_120px_rgba(0,0,0,0.55)]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function GlassCard({ title, subtitle, className = "" }) {
  return (
    <div
      className={`rounded-[28px] border border-white/10 bg-slate-900/55 px-6 py-5 backdrop-blur-xl ${className}`}
    >
      <p className="text-[20px] font-bold text-white">{title}</p>
      <p className="mt-2 text-lg text-slate-300">{subtitle}</p>
    </div>
  );
}

function WorkflowItem({ title, text }) {
  return (
    <div className="rounded-2xl border border-cyan-400/20 bg-slate-950/45 px-4 py-4">
      <p className="text-base font-semibold text-white">{title}</p>
      <p className="mt-1 text-sm text-slate-400">{text}</p>
    </div>
  );
}
