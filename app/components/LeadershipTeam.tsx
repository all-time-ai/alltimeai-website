const LeadershipTeam = () => {
  const teamMembers = [
    {
      name: "Dr. Jitendra Singh Thakur",
      role: "Main Founder & Chief Innovation Officer (CIO - Strategy)",
      isFounding: true,
      gradient: "from-indigo-500 to-violet-500"
    },
    {
      name: "Akshat Singh Thakur",
      role: "Co-Founder, CEO & Chief Product Officer (CPO)",
      isFounding: false,
      gradient: "from-cyan-500 to-indigo-500"
    },
    {
      name: "Aadarsh Soni",
      role: "Co-Founder, CTO & Chief Product Officer (CPO)",
      isFounding: false,
      gradient: "from-violet-500 to-rose-500"
    },
    {
      name: "Pawandas Bairagi",
      role: "Co-Founder, COO, CMO & Chief Finance Officer (CFO)",
      isFounding: false,
      gradient: "from-rose-500 to-orange-500"
    },
    {
      name: "Shivam Mishra",
      role: "Co-Founder, CTO & Chief Product Officer (CPO)",
      isFounding: false,
      gradient: "from-emerald-500 to-cyan-500"
    }
  ];

  return (
    <section id="leadership" className="relative w-full bg-[#f8fafc] text-slate-900 py-24 px-6 lg:px-24 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 -right-20 w-[350px] h-[350px] bg-cyan-400/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 -left-20 w-[300px] h-[300px] bg-violet-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass-card rounded-full">
            <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse" />
            <span className="text-xs font-semibold tracking-[0.2em] text-rose-600 uppercase">
              Our Experts
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Leadership & <br className="hidden md:block" />
            <span className="gradient-text">Research Team</span>
          </h2>
          <p className="max-w-3xl text-slate-500 text-lg">
            Our leadership team comprises academic experts and technical specialists focused on scaling our intellectual property.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl glass-card-strong hover-glow transition-all duration-300 group relative overflow-hidden"
            >
              {/* Subtle gradient accent on top */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${member.gradient} opacity-60 group-hover:opacity-100 transition-opacity`} />
              
              {/* Avatar with gradient ring */}
              <div className="relative w-20 h-20 mb-6">
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} rounded-full opacity-20 group-hover:opacity-30 transition-opacity`} />
                <div className={`absolute inset-0.5 bg-white rounded-full flex items-center justify-center`}>
                  <svg className={`w-9 h-9 bg-gradient-to-br ${member.gradient} bg-clip-text`} fill="none" stroke="url(#grad)" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={index === 0 ? '#6366f1' : index === 1 ? '#06b6d4' : index === 2 ? '#8b5cf6' : index === 3 ? '#f43f5e' : '#10b981'} />
                        <stop offset="100%" stopColor={index === 0 ? '#8b5cf6' : index === 1 ? '#6366f1' : index === 2 ? '#f43f5e' : index === 3 ? '#f97316' : '#06b6d4'} />
                      </linearGradient>
                    </defs>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" stroke={`url(#grad-${index})`} />
                  </svg>
                </div>
              </div>

              <h4 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-indigo-700 transition-colors">
                {member.name}
              </h4>
              <p className="text-xs font-mono text-slate-400 mb-4 tracking-tight uppercase leading-relaxed">
                {member.role}
              </p>
              
              {/* Gradient divider */}
              <div className={`w-full h-px bg-gradient-to-r ${member.gradient} opacity-30 group-hover:opacity-60 transition-opacity`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam
