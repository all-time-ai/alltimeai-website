"use client"

import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Technology", href: "#kavach" },
    { name: "About", href: "#about" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Services", href: "#services" },
    { name: "Team", href: "#leadership" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-lg border-b border-white/10 shadow-md">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-24 h-20 flex items-center justify-between">

        {/* Brand Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white">
            <Image alt='A' src="/logo/logo-small.png" className='rounded-lg' width={30} height={30} />
          </div>
          <span className="text-xl font-bold tracking-tighter text-black uppercase">
            AllTimeAI
          </span>
          <span className='h-8 flex items-start justify-start text-[12px] font-semibold text-neutral-800' >TM</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-800 hover:text-blue-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-full transition-all"
            onClick={() => {
              window.open("https://kavach.alltimeai.com", "_blank");
            }}
          >
            Kavach Cam
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
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
        <div className="md:hidden bg-white border-b border-black px-6 py-8 space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-xl font-medium text-black hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              window.open("https://kavach.alltimeai.com", "_blank");
            }}
            className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl"
          >
            Explore Kavach Cam
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;