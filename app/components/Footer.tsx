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
    <footer className="w-full bg-neutral-900 text-white pt-20 pb-10 px-6 lg:px-24 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">

          {/* Company Branding */}
          <div className="max-w-md">
            <h2 className="text-2xl font-bold mb-6 tracking-tight">
              AllTimeAl
              <span className="text-blue-500 text-sm font-normal block">
                Products and Solutions Private Limited
              </span>
            </h2>

            <p className="text-gray-400 leading-relaxed">
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
                <h4 className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-4">
                  Quick Links
                </h4>
              </div>

              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-4">
                Follow Us
              </h4>

              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="w-10 h-10 flex items-center justify-center rounded-full 
                                 border border-white/10 text-gray-400 
                                 hover:text-white hover:border-blue-500 
                                 hover:bg-blue-500/10 transition-all duration-300"
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
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} AllTimeAl Products and Solutions Private Limited.
            All Rights Reserved.
          </p>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            System Status: Operational
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



// import { FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";

// const Footer = () => {
//   const quickLinks = [
//     { name: "R&D Lab", href: "#" },
//     { name: "SaaS Login", href: "#" },
//     { name: "Tender Participation", href: "#" },
//     { name: "Privacy Policy", href: "#" }
//   ];

//   const socialLinks = [
//     { name: "LinkedIn", href: "https://www.linkedin.com/in/all-time-ai-46a9b53aa/", icon: <FaLinkedinIn /> },
//     { name: "Instagram", href: "https://www.instagram.com/alltimeai_official/", icon: <FaInstagram /> },
//     { name: "YouTube", href: "https://www.youtube.com/@alltimeai_official", icon: <FaYoutube /> },
//     { name: "Twitter", href: "https://x.com/All_Time_AI", icon: <FaXTwitter /> }
//   ];

//   return (
//     <footer className="w-full bg-neutral-900 text-white pt-20 pb-10 px-6 lg:px-24 border-t border-white/10">
//       <div className="max-w-[1440px] mx-auto">
//         <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">

//           {/* Company Branding & Address */}
//           <div className="max-w-md">
//             <h2 className="text-2xl font-bold mb-6 tracking-tight">
//               AllTimeAl
//               <span className="text-blue-500 text-sm font-normal block">
//                 Products and Solutions Private Limited
//               </span>
//             </h2>

//             <div className="flex items-start gap-3 text-gray-400">
//               <svg className="w-5 h-5 text-blue-500 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
//                   d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
//                   d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//               </svg>
//               <p className="leading-relaxed">
//                 <span className="text-white font-medium block">Registered Office:</span>
//                 Dept. of Computer Science and Engineering, <br />
//                 Jabalpur Engineering College, <br />
//                 Gokalpur, Jabalpur (M.P.).
//               </p>
//             </div>
//           </div>

//           {/* Right Section: Quick Links + Social */}
//           <div className="flex flex-col gap-10">
            
//             {/* Quick Links */}
//             <div className="grid grid-cols-2 gap-x-12 gap-y-4">
//               <div className="col-span-2">
//                 <h4 className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-4">
//                   Quick Links
//                 </h4>
//               </div>

//               {quickLinks.map((link, index) => (
//                 <a
//                   key={index}
//                   href={link.href}
//                   className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
//                 >
//                   <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
//                   {link.name}
//                 </a>
//               ))}
//             </div>

//             {/* Social Media */}
//             <div>
//               <h4 className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-4">
//                 Follow Us
//               </h4>
//               <div className="flex gap-4">
//                 {socialLinks.map((social, index) => (
//                   <a
//                     key={index}
//                     href={social.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label={social.name}
//                     className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 text-lg"
//                   >
//                     {social.icon}
//                   </a>
//                 ))}
//               </div>
//             </div>

//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
//           <p>
//             © {new Date().getFullYear()} AllTimeAl Products and Solutions Private Limited.
//             All Rights Reserved.
//           </p>

//           <div className="flex items-center gap-2">
//             <span className="w-2 h-2 bg-green-500 rounded-full"></span>
//             System Status: Operational
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
