import { 
  FaLinkedinIn, 
  FaInstagram, 
  FaYoutube 
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const quickLinks = [
    { name: "R&D Lab", href: "#" },
    { name: "SaaS Login", href: "#" },
    { name: "Tender Participation", href: "#" },
    { name: "Privacy Policy", href: "#" }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/all-time-ai-46a9b53aa/",
      icon: FaLinkedinIn
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/alltimeai_official/",
      icon: FaInstagram
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@alltimeai_official",
      icon: FaYoutube
    },
    {
      name: "X",
      href: "https://x.com/All_Time_AI",
      icon: FaXTwitter
    }
  ];

  return (
    <footer className="relative w-full bg-slate-900 text-white pt-20 pb-10 px-6 lg:px-24 overflow-hidden">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-violet-500" />
      
      {/* Background mesh */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-violet-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">

          {/* Company Branding */}
          <div className="max-w-md">
            <h2 className="text-2xl font-bold mb-2 tracking-tight">
              AllTimeAI
            </h2>
            <p className="text-indigo-400 text-sm font-medium mb-6">
              Products and Solutions Private Limited
            </p>
            <p className="text-slate-400 leading-relaxed text-sm">
              Dept. of Computer Science and Engineering,<br />
              Jabalpur Engineering College,<br />
              Gokalpur, Jabalpur (M.P.)
            </p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-10">

            {/* Quick Links */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-4">
              <div className="col-span-2">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-400 mb-4">
                  Quick Links
                </h4>
              </div>

              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-slate-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-400 mb-4">
                Follow Us
              </h4>

              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="w-10 h-10 flex items-center justify-center rounded-xl 
                                 border border-slate-700 text-slate-400 
                                 hover:text-white hover:border-indigo-500 
                                 hover:bg-indigo-500/10 hover:shadow-lg hover:shadow-indigo-500/20
                                 transition-all duration-300"
                    >
                      <Icon className="text-lg" />
                    </a>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} AllTimeAI Products and Solutions Private Limited.
            All Rights Reserved.
          </p>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-status-pulse" />
            System Status: Operational
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
