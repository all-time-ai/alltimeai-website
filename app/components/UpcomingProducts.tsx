const UpcomingProducts = () => {
  // Array of roadmap data for mapping 
  const roadmapData = [
    {
      sector: "Smart Cities",
      vision: "E-governance platforms and intelligent infrastructure for urban safety.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      sector: "Industrial IoT",
      vision: "Virtual tripwires and automated perimeter guards for logistics and warehouses.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      sector: "Enterprise SaaS",
      vision: "Scalable cloud-based analytics, web hosting, and data management solutions.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      sector: "Defense & Public Sector",
      vision: "Specialized Al hardware designed for government and defense tender requirements.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <section id="roadmap" className="w-full bg-white text-black py-24 px-6 lg:px-24 border-t border-white/5">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-mono tracking-[0.2em] uppercase mb-4 text-sm">
            Growth & Strategy
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Upcoming Products & Roadmap
          </h3>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Guided by our MoA, we are expanding our intellectual property into new technological frontiers.
          </p>
        </div>

        {/* Roadmap Mapping  */}
        <div className="overflow-hidden rounded-3xl border border-slate-300 bg-white backdrop-blur-md">
          {/* Header Row */}
          <div className="hidden md:grid grid-cols-12 bg-white border-b border-slate-300">
            <div className="col-span-4 p-6 text-sm font-bold uppercase tracking-wider text-blue-400 border-r border-slate-300">Sector</div>
            <div className="col-span-8 p-6 text-sm font-bold uppercase tracking-wider text-blue-400">Product Vision</div>
          </div>

          {/* Data Rows */}
          {roadmapData.map((item, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-1 md:grid-cols-12 border-b border-slate-300 transition-colors ${
                index === roadmapData.length - 1 ? 'border-b-0' : ''
              }`}
            >
              {/* Sector Column */}
              <div className="col-span-4 p-8 flex items-center gap-4 border-r border-slate-300">
                <div className="text-blue-500 bg-blue-500/10 p-2 rounded-lg">
                  {item.icon}
                </div>
                <span className="text-xl font-semibold tracking-tight">{item.sector} </span>
              </div>
              
              {/* Vision Column */}
              <div className="col-span-8 p-8 flex items-center">
                <p className="text-slate-800 leading-relaxed">
                  {item.vision} 
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Status Indicator */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-blue-400">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></span>
            <p className="text-blue-500 text-sm font-medium italic">
              Currently scaling intellectual property into new frontiers.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default UpcomingProducts