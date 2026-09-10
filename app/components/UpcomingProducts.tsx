const UpcomingProducts = () => {
  const roadmapData = [
    {
      sector: "Smart Cities",
      vision: "E-governance platforms and intelligent infrastructure for urban safety.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: "from-indigo-500 to-indigo-600"
    },
    {
      sector: "Industrial IoT",
      vision: "Virtual tripwires and automated perimeter guards for logistics and warehouses.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      color: "from-cyan-500 to-cyan-600"
    },
    {
      sector: "Enterprise SaaS",
      vision: "Scalable cloud-based analytics, web hosting, and data management solutions.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      color: "from-violet-500 to-violet-600"
    },
    {
      sector: "Defense & Public Sector",
      vision: "Specialized AI hardware designed for government and defense tender requirements.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "from-rose-500 to-rose-600"
    }
  ];

  return (
    <section id="roadmap" className="relative w-full bg-[#f1f5f9] text-slate-900 py-24 px-6 lg:px-24 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-[350px] h-[350px] bg-indigo-400/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-violet-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass-card rounded-full">
            <span className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
            <span className="text-xs font-semibold tracking-[0.2em] text-violet-600 uppercase">
              Growth & Strategy
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Upcoming Products <br className="hidden md:block" />
            <span className="gradient-text">& Roadmap</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-500 text-lg">
            Guided by our MoA, we are expanding our intellectual property into new technological frontiers.
          </p>
        </div>

        {/* Roadmap Table */}
        <div className="gradient-border rounded-3xl overflow-hidden">
          {/* Header Row */}
          <div className="hidden md:grid grid-cols-12 bg-gradient-to-r from-indigo-500/10 via-cyan-500/5 to-violet-500/10 border-b border-indigo-200/30">
            <div className="col-span-4 p-6 text-sm font-bold uppercase tracking-wider text-indigo-600">Sector</div>
            <div className="col-span-8 p-6 text-sm font-bold uppercase tracking-wider text-indigo-600">Product Vision</div>
          </div>

          {/* Data Rows */}
          {roadmapData.map((item, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-1 md:grid-cols-12 border-b border-indigo-100/30 transition-all duration-300 hover:bg-indigo-50/30 ${
                index === roadmapData.length - 1 ? 'border-b-0' : ''
              }`}
            >
              {/* Sector Column */}
              <div className="col-span-4 p-8 flex items-center gap-4 border-b md:border-b-0 md:border-r border-indigo-100/30">
                <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                  {item.icon}
                </div>
                <span className="text-lg font-bold text-slate-900">{item.sector}</span>
              </div>
              
              {/* Vision Column */}
              <div className="col-span-8 p-8 flex items-center">
                <p className="text-slate-500 leading-relaxed">
                  {item.vision}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Status Indicator */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass-card shadow-sm">
            <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
            <p className="text-slate-600 text-sm font-medium">
              Currently scaling intellectual property into new frontiers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingProducts
