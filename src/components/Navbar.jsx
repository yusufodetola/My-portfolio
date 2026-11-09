"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Download, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import portfolio from "@/data/portfolio";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Services", to: "services" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Experience", to: "experience" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-5">
      <nav className="mx-auto max-w-7xl">
        <div
          className={`relative rounded-2xl border transition-all duration-500 ${
            scrolled
              ? "border-blue-400/20 bg-[#07111f]/95 shadow-[0_15px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
              : "border-white/[0.08] bg-[#0b1525]/75 backdrop-blur-xl"
          }`}
        >
          <div className="flex h-[72px] items-center justify-between px-4 md:px-7">
            {/* BRAND */}
            <Link
              href="/"
              onClick={closeMenu}
              className="group flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/30 bg-blue-500/10">
                <span className="text-lg font-black text-cyan-300">YO</span>
              </div>

              <div className="flex flex-col">
                <span className="text-base font-bold tracking-tight text-white md:text-lg">
                  Yusuf Odetola
                </span>

                <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-slate-500">
                  Digital Portfolio
                </span>
              </div>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <div className="hidden items-center gap-6 lg:flex xl:gap-8">
              {navLinks.map((item) => (
                <ScrollLink
                  key={item.to}
                  to={item.to}
                  smooth
                  duration={650}
                  offset={-100}
                  spy
                  onSetActive={() => setActive(item.to)}
                  className={`relative cursor-pointer py-2 text-[13px] font-medium transition-colors duration-300 ${
                    active === item.to
                      ? "text-cyan-300"
                      : "text-slate-400 hover:text-white"
                  }`}
                  activeClass="text-cyan-300"
                >
                  {item.name}

                  {active === item.to && (
                    <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-300" />
                  )}
                </ScrollLink>
              ))}
            </div>

            {/* DESKTOP ACTIONS */}
            <div className="hidden items-center gap-4 lg:flex">
              <a
                href={portfolio.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-slate-400 transition hover:-translate-y-0.5 hover:text-cyan-300"
              >
                <FaGithub size={19} />
              </a>

              <a
                href={portfolio.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate-400 transition hover:-translate-y-0.5 hover:text-cyan-300"
              >
                <FaLinkedin size={19} />
              </a>

              {/* VIEW CV */}
              <Link
                href="/cv"
                className="group inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition duration-300 hover:border-cyan-300/50 hover:bg-blue-500"
              >
                <Download size={15} />
                View CV
                <ArrowUpRight
                  size={14}
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              aria-label={
                open ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={open}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition hover:border-blue-400/40 hover:bg-blue-500/10 lg:hidden"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* MOBILE NAVIGATION */}
          <div
            className={`grid overflow-hidden transition-all duration-300 lg:hidden ${
              open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="min-h-0">
              <div className="border-t border-white/[0.08] px-5 pb-5 pt-4">
                <div className="flex flex-col gap-1">
                  {navLinks.map((item, index) => (
                    <ScrollLink
                      key={item.to}
                      to={item.to}
                      smooth
                      duration={650}
                      offset={-90}
                      onClick={() => {
                        setActive(item.to);
                        closeMenu();
                      }}
                      className={`flex cursor-pointer items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition ${
                        active === item.to
                          ? "bg-blue-500/10 text-cyan-300"
                          : "text-slate-300 hover:bg-white/[0.04] hover:text-white"
                      }`}
                    >
                      <span>{item.name}</span>

                      <span className="text-xs text-slate-600">
                        0{index + 1}
                      </span>
                    </ScrollLink>
                  ))}
                </div>

                {/* MOBILE SOCIAL LINKS AND CV */}
                <div className="mt-5 flex items-center justify-between border-t border-white/[0.08] pt-5">
                  <div className="flex items-center gap-4">
                    <a
                      href={portfolio.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="text-slate-400 transition hover:text-cyan-300"
                    >
                      <FaGithub size={21} />
                    </a>

                    <a
                      href={portfolio.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="text-slate-400 transition hover:text-cyan-300"
                    >
                      <FaLinkedin size={21} />
                    </a>
                  </div>

                  <Link
                    href="/cv"
                    onClick={closeMenu}
                    className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
                  >
                    <Download size={15} />
                    View CV
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
