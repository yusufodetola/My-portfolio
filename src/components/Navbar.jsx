"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import portfolio from "@/data/portfolio";

const navLinks = [
  { name: "About", to: "about" },
  { name: "Services", to: "services" },
  { name: "Projects", to: "projects" },
  { name: "Experience", to: "experience" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="container-custom pt-4">
        <div
          className={`rounded-2xl border transition-all duration-300 ${
            scrolled
              ? "border-white/15 bg-[#07101f]/80 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
              : "border-white/10 bg-white/5 backdrop-blur-lg"
          }`}
        >
          <div className="flex items-center justify-between px-5 py-4 md:px-6">
            {/* Logo */}
            <Link
              href="/"
              className="text-xl md:text-2xl font-extrabold tracking-tight"
            >
              <span className="text-white">Yusuf</span>
              <span className="text-blue-500">.</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((item) => (
                <ScrollLink
                  key={item.to}
                  to={item.to}
                  smooth
                  duration={500}
                  offset={-90}
                  spy
                  className="cursor-pointer text-sm font-medium text-slate-300 transition hover:text-white"
                  activeClass="text-white"
                >
                  {item.name}
                </ScrollLink>
              ))}
            </div>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href={portfolio.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-slate-300 transition hover:text-blue-400"
              >
                <FaGithub size={20} />
              </a>

              <a
                href={portfolio.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate-300 transition hover:text-blue-400"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href={portfolio.personal.resume}
                download
                className="inline-flex items-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                <Download size={16} className="mr-2" />
                Resume
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="border-t border-white/10 px-5 pb-5 pt-4 md:hidden">
              <div className="flex flex-col gap-4">
                {navLinks.map((item) => (
                  <ScrollLink
                    key={item.to}
                    to={item.to}
                    smooth
                    duration={500}
                    offset={-90}
                    onClick={() => setOpen(false)}
                    className="cursor-pointer text-slate-300 transition hover:text-white"
                  >
                    {item.name}
                  </ScrollLink>
                ))}

                <div className="mt-2 flex items-center gap-4">
                  <a
                    href={portfolio.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-slate-300 transition hover:text-blue-400"
                  >
                    <FaGithub size={20} />
                  </a>

                  <a
                    href={portfolio.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-slate-300 transition hover:text-blue-400"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </div>

                <a
                  href={portfolio.personal.resume}
                  download
                  className="mt-2 inline-flex w-fit items-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                  <Download size={16} className="mr-2" />
                  Download CV
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
