import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import portfolio from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 py-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(37,99,235,0.10),transparent_45%)]" />

      <div className="container-custom relative z-10">
        <div className="glass flex flex-col gap-6 rounded-[28px] px-6 py-8 md:flex-row md:items-center md:justify-between md:px-8">
          {/* left */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center text-2xl font-bold"
            >
              <span className="text-white">YO</span>
              <span className="text-blue-500">.</span>
            </Link>

            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
              Frontend Developer, UI/UX Designer, AI Automation specialist, and
              Arabic design/typesetting professional focused on building clean,
              modern, and impactful digital experiences.
            </p>
          </div>

          {/* right */}
          <div className="flex flex-col items-start gap-4 md:items-end">
            <div className="flex items-center gap-3">
              <a
                href={portfolio.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-900/70 text-slate-300 transition hover:border-blue-400/30 hover:text-white"
              >
                <FaGithub size={18} />
              </a>

              <a
                href={portfolio.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-900/70 text-slate-300 transition hover:border-blue-400/30 hover:text-white"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href={`mailto:${portfolio.contact.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-blue-400/30 hover:text-white"
              >
                Let’s Talk
                <ArrowUpRight size={16} />
              </a>
            </div>

            <p className="text-sm text-slate-500">
              © {year} {portfolio.personal.fullName}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
