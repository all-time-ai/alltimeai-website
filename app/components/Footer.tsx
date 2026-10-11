import Image from "next/image";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const quickLinks = [
  { name: "R&D Lab", href: "#" },
  { name: "SaaS Login", href: "#" },
  { name: "Tender Participation", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

const sitemap = [
  { name: "Products", href: "#kavach" },
  { name: "Company", href: "#about" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Team", href: "#leadership" },
  { name: "Services", href: "#services" },
];

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/all-time-ai-46a9b53aa/", icon: FaLinkedinIn },
  { name: "Instagram", href: "https://www.instagram.com/alltimeai_official/", icon: FaInstagram },
  { name: "YouTube", href: "https://www.youtube.com/@alltimeai_official", icon: FaYoutube },
  { name: "X", href: "https://x.com/All_Time_AI", icon: FaXTwitter },
];

const linkClass = "text-sm text-slate-400 hover:text-white transition-colors";
const headingClass = "font-mono text-xs uppercase tracking-[0.18em] text-slate-500 mb-5";

const Footer = () => (
  <footer className="relative w-full border-t border-white/10 bg-[#03060808] px-6 pt-16 pb-8">
    <div className="mx-auto max-w-6xl">
      <div className="grid grid-cols-2 md:grid-cols-12 gap-10">
        <div className="col-span-2 md:col-span-5">
          <div className="flex items-center gap-3">
            <Image alt="" src="/logo/logo-small.png" width={36} height={36} className="rounded-lg ring-1 ring-white/10" />
            <span className="text-lg font-semibold tracking-tight text-white">AllTimeAI</span>
          </div>
          <p className="mt-4 text-sm font-medium text-emerald-300/90">
            Products and Solutions Private Limited
          </p>
          <address className="mt-3 text-sm not-italic leading-relaxed text-slate-500">
            Dept. of Computer Science and Engineering,
            <br />
            Jabalpur Engineering College,
            <br />
            Gokalpur, Jabalpur (M.P.)
          </address>
          <div className="mt-6 flex gap-2">
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 text-slate-400 hover:text-white hover:border-emerald-400/50 hover:bg-emerald-400/10 transition-all"
              >
                <Icon className="text-base" />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-3 md:col-start-7">
          <h4 className={headingClass}>Explore</h4>
          <ul className="space-y-3">
            {sitemap.map((l) => (
              <li key={l.name}>
                <a href={l.href} className={linkClass}>{l.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className={headingClass}>Company</h4>
          <ul className="space-y-3">
            {quickLinks.map((l) => (
              <li key={l.name}>
                <a href={l.href} className={linkClass}>{l.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="hairline mt-14" />
      <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p>
          &copy; {new Date().getFullYear()} AllTimeAI Products and Solutions Private Limited. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-ring" />
          All systems operational
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
