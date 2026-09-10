"use client"

import Image from 'next/image';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Technology", href: "#kavach" },
    { name: "About", href: "#about" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Services", href: "#services" },
    { name: "Team", href: "#leadership" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/60 backdrop-blur-2xl shadow-lg shadow-indigo-500/5' 
        : 'bg-white/40 backdrop-blur-xl'
    }`}>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-24 h-20 flex items-center justify-between">

        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-md shadow-indigo-500/20">
            <Image alt='AllTimeAI' src="/logo/logo-small.png" className='rounded-xl' width={40} height={40} />
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent pointer-events-none" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 uppercase">
            AllTimeAI
          </span>
          <span className='text-[10px] font-semibold text-slate-400 mt-[-8px]'>TM</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="relative px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 overflow-hidden group"
            onClick={() => {
              window.open("https://rakshak.alltimeai.com", "_blank");
            }}
          >
            <span className="relative z-10">Rakshak Cam</span>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-700 hover:text-indigo-600 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-2xl border-b border-indigo-500/10 px-6 py-8 space-y-6 animate-slide-up">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-xl font-medium text-slate-800 hover:text-indigo-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              window.open("https://rakshak.alltimeai.com", "_blank");
            }}
            className="w-full py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/20"
          >
            Explore Rakshak Cam
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
