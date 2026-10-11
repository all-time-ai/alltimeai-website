"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const RAKSHAK_URL = "https://rakshak.alltimeai.com";

const navLinks = [
  { name: "Products", href: "#kavach" },
  { name: "Company", href: "#about" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Team", href: "#leadership" },
  { name: "Services", href: "#services" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 pt-4">
      <div
        className={`mx-auto max-w-6xl rounded-2xl border transition-all duration-300 ${
          scrolled || isOpen
            ? "border-white/10 bg-[#070b0f]/80 backdrop-blur-xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.8)]"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="h-16 px-4 md:px-5 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3" aria-label="AllTimeAI home">
            <Image
              alt=""
              src="/logo/logo-small.png"
              width={36}
              height={36}
              className="rounded-lg ring-1 ring-white/10"
            />
            <span className="text-[17px] font-semibold tracking-tight text-white">
              AllTimeAI
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href={RAKSHAK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !py-2.5 !px-5 !text-sm"
            >
              Rakshak Cam
              <span aria-hidden>↗</span>
            </a>
          </div>

          <button
            className="md:hidden p-2 -mr-2 text-slate-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden px-4 pb-5 pt-1 border-t border-white/5">
            <div className="flex flex-col py-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="py-3 text-lg font-medium text-slate-200 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a
              href={RAKSHAK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full mt-2"
            >
              Explore Rakshak Cam ↗
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
