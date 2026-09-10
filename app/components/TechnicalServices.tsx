const TechnicalServices = () => {
  const services = [
    {
      title: "Custom Software Development",
      description: "Web/mobile applications and custom AI/ML model training.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      gradient: "from-indigo-500 to-violet-500"
    },
    {
      title: "Technical Consultancy",
      description: "Expert advisory services on cybersecurity, data analytics, and AI integration.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      gradient: "from-cyan-500 to-emerald-500"
    },
    {
      title: "Comprehensive Maintenance",
      description: "Specialized technical support and licensing for all our digital platforms.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      gradient: "from-violet-500 to-rose-500"
    }
  ];

  return (
    <section id="services" className="relative w-full bg-[#f1f5f9] text-slate-900 py-24 px-6 lg:px-24 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 -right-20 w-[350px] h-[350px] bg-rose-400/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-[300px] h-[300px] bg-indigo-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Side: Collaboration Info */}
          <div className="lg:w-1/3">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass-card rounded-full">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-xs font-semibold tracking-[0.2em] text-emerald-600 uppercase">
                Partnerships
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
              Collaboration for{' '}
              <span className="gradient-text">Growth</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              We actively enter into joint ventures and agreements with universities, incubation centers, and government bodies to scale our innovations.
            </p>
            
            {/* CTA Card */}
            <div className="gradient-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-sm font-bold text-slate-900">Ready to Scale?</span>
              </div>
              <p className="text-slate-500 text-sm">
                Scale with AllTimeAI Expertise
              </p>
            </div>
          </div>

          {/* Right Side: Services Grid */}
          <div className="lg:w-2/3">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8">
              Services We Offer
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="p-8 rounded-2xl glass-card-strong hover-glow transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Top gradient accent */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient} opacity-40 group-hover:opacity-100 transition-opacity`} />
                  
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-slate-900">
                    {service.title}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechnicalServices;
