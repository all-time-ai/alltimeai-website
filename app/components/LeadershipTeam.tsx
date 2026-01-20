const LeadershipTeam = () => {
  // Array of objects for the leadership team 
  const teamMembers = [
    {
      name: "Dr. Jitendra Singh Thakur",
      role: "Main Founder & Chief Innovation Officer (CIO - Strategy)",
      isFounding: true
    },
    {
      name: "Akshat Singh Thakur",
      role: "Co-Founder, CTO & Chief Product Officer (CPO)",
      isFounding: false
    },
    {
      name: "Aadarsh Soni",
      role: "Co-Founder, CTO & Chief Product Officer (CPO)",
      isFounding: false
    },
    {
      name: "Pawandas Bairagi",
      role: "Co-Founder, COO, CMO & Chief Finance Officer (CFO)",
      isFounding: false
    },
    {
      name: "Shivam Mishra",
      role: "Co-Founder, CTO & Chief Product Officer (CPO)",
      isFounding: false
    }
  ];

  return (
    <section id="leadership" className="w-full bg-black text-white py-24 px-6 lg:px-24">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Heading [cite: 23, 24, 25] */}
        <div className="mb-16">
          <h2 className="text-blue-500 font-mono tracking-widest uppercase mb-4 text-sm">
            Our Experts
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Leadership & Research Team
          </h3>
          <p className="max-w-3xl text-gray-400 text-lg">
            Our leadership team comprises academic experts and technical specialists focused on scaling our intellectual property. [cite: 24, 25]
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-2xl border transition-all duration-300 group ${
                member.isFounding 
                ? 'border-blue-500/40 bg-blue-500/5 hover:bg-blue-500/10' 
                : 'border-white/10 bg-neutral-900/40 hover:border-blue-500/30'
              }`}
            >
              {/* Profile Placeholder Icon */}
              <div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>

              <h4 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                {member.name}
              </h4>
              <p className="text-sm font-mono text-blue-500/80 mb-4 tracking-tighter uppercase">
                {member.role}
              </p>
              
              <div className="w-full h-[1px] bg-gradient-to-r from-blue-500/50 to-transparent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam