"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MessageCircle,
  Send,
  Github,
  Linkedin,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import portfolio from "@/data/portfolio";

export default function Contact() {
  const { contact, social } = portfolio;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const whatsappNumber = "2348169587914";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello Yusuf, I came across your portfolio and would like to discuss a project or opportunity with you.",
  )}`;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio enquiry from ${formData.name}`,
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );

    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      {/* Background lighting */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[15%] h-96 w-96 rounded-full bg-blue-600/[0.09] blur-[130px]" />
        <div className="absolute bottom-0 right-[-10%] h-96 w-96 rounded-full bg-cyan-500/[0.07] blur-[130px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <div className="section-eyebrow">
            <Sparkles size={14} className="mr-2" />
            GET IN TOUCH
          </div>

          <h2 className="section-title mt-5">
            Let's Start a
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Conversation.
            </span>
          </h2>

          <p className="section-subtitle mt-5">
            Have a project, an opportunity or an idea? Let's connect and create
            something meaningful.
          </p>
        </motion.div>

        {/* Main contact card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[30px] border border-white/[0.10] bg-[#111827]/90 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
        >
          <div className="grid lg:grid-cols-2">
            {/* LEFT SIDE */}
            <div className="relative p-7 md:p-10 lg:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-400">
                Let's connect
              </p>

              <h3 className="mt-5 max-w-lg text-3xl font-black leading-tight tracking-tight text-white md:text-4xl">
                Let's talk about your
                <span className="text-slate-500"> next great project.</span>
              </h3>

              <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
                I'm available for frontend development, UI/UX design, AI
                automation and Arabic digital design projects. Reach out through
                any of the channels below.
              </p>

              {/* Email card */}
              <a
                href={`mailto:${contact.email}`}
                className="group mt-9 flex items-center gap-4 rounded-2xl border border-white/[0.09] bg-white/[0.045] p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500/[0.07]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                  <Mail size={25} />
                </div>

                <div className="min-w-0 flex-1">
                  <h4 className="font-bold text-white">Email</h4>
                  <p className="mt-1 break-all text-xs text-slate-400">
                    {contact.email}
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-2 rounded-full bg-slate-950/70 py-2 pl-4 pr-2 text-xs font-semibold text-slate-300">
                  <span className="hidden sm:inline">Message</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white">
                    <Mail size={17} />
                  </span>
                </div>
              </a>

              {/* WhatsApp card */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 flex items-center gap-4 rounded-2xl border border-white/[0.09] bg-white/[0.045] p-4 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-emerald-500/[0.06]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                  <MessageCircle size={26} />
                </div>

                <div className="min-w-0 flex-1">
                  <h4 className="font-bold text-white">WhatsApp</h4>
                  <p className="mt-1 text-xs text-slate-400">+44 7575 115575</p>
                </div>

                <div className="flex shrink-0 items-center gap-2 rounded-full bg-slate-950/70 py-2 pl-4 pr-2 text-xs font-semibold text-slate-300">
                  <span className="hidden sm:inline">Message</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-white">
                    <MessageCircle size={19} />
                  </span>
                </div>
              </a>

              {/* Social links */}
              <div className="mt-10 border-t border-white/[0.08] pt-7">
                <p className="text-sm font-semibold text-slate-400">
                  Find me online
                </p>

                <div className="mt-5 flex gap-3">
                  <a
                    href={social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-300"
                  >
                    <Github size={21} />
                  </a>

                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition hover:-translate-y-1 hover:border-blue-400/40 hover:text-blue-300"
                  >
                    <Linkedin size={21} />
                  </a>
                </div>
              </div>

              {/* Availability */}
              <div className="mt-9 flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>

                <span className="text-xs font-medium text-slate-400">
                  Open to professional opportunities and collaborations
                </span>
              </div>
            </div>

            {/* RIGHT SIDE - CONTACT FORM */}
            <div className="relative border-t border-white/[0.08] bg-[#0b1422]/70 p-7 md:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                  Send an enquiry
                </p>

                <h3 className="mt-3 text-2xl font-bold text-white md:text-3xl">
                  Tell me about your project.
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Fill in the details below and I'll look forward to hearing
                  from you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-xs font-semibold text-slate-400"
                  >
                    Your Full Name
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-white/[0.09] bg-[#070e19] px-5 py-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-500/10"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-xs font-semibold text-slate-400"
                  >
                    Email Address
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/[0.09] bg-[#070e19] px-5 py-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-500/10"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-xs font-semibold text-slate-400"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full resize-y rounded-xl border border-white/[0.09] bg-[#070e19] px-5 py-4 text-sm leading-7 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-500/10"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-4 font-bold text-white shadow-lg shadow-blue-950/30 transition duration-300 hover:-translate-y-1 hover:from-blue-500 hover:to-cyan-500 hover:shadow-blue-500/20"
                >
                  <Send size={19} />
                  Send Message
                  <ArrowUpRight
                    size={18}
                    className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </button>

                <p className="text-center text-xs leading-6 text-slate-500">
                  Your message will be prepared in your default email
                  application.
                </p>
              </form>
            </div>
          </div>

          {/* Bottom accent */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
