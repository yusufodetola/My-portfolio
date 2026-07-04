"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Bot, Languages, ArrowUpRight } from "lucide-react";
import portfolio from "@/data/portfolio";

const iconMap = {
  "Frontend Web Development": Code2,
  "UI/UX Design": Palette,
  "AI Automation & Integration": Bot,
  "Arabic Design & Typesetting": Languages,
};

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-24 md:py-32">
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.14),transparent_40%)]" />

      <div className="container-custom relative z-10">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="section-eyebrow">Services</p>

          <h2 className="section-title mt-4">
            Services I Offer to Build, Design, and Improve Digital Products
          </h2>

          <p className="section-subtitle mt-6">
            I combine frontend engineering, design thinking, intelligent
            automation, and Arabic design expertise to help businesses and
            individuals create modern digital experiences that are functional,
            visually polished, and scalable.
          </p>
        </motion.div>

        {/* cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {portfolio.services.map((service, index) => {
            const Icon = iconMap[service.title] || Code2;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.07]"
              >
                {/* top glow */}
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/15 blur-3xl transition duration-300 group-hover:bg-cyan-400/20" />

                {/* icon */}
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/70 text-blue-400 shadow-[0_0_30px_rgba(37,99,235,0.18)]">
                  <Icon size={26} />
                </div>

                {/* title */}
                <h3 className="relative z-10 mt-6 text-2xl font-bold text-white">
                  {service.title}
                </h3>

                {/* description */}
                <p className="relative z-10 mt-4 text-[15px] leading-8 text-slate-400">
                  {service.description}
                </p>

                {/* bottom line */}
                <div className="relative z-10 mt-8 flex items-center gap-2 text-sm font-medium text-blue-400">
                  <span>Available for projects</span>
                  <ArrowUpRight size={16} />
                </div>

                {/* border highlight */}
                <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent opacity-60" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
