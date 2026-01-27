const TechnicalServices = () => {
  // Array of services for mapping
  const services = [
    {
      title: "Custom Software Development",
      description: "Web/mobile applications and custom Al/ML model training.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Technical Consultancy",
      description: "Expert advisory services on cybersecurity, data analytics, and Al integration.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Comprehensive Maintenance",
      description: "Specialized technical support and licensing for all our digital platforms.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="w-full bg-white text-black py-24 px-6 lg:px-24 border-t border-white/5">
      <div className="max-w-[1440px] mx-auto">
        
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Side: Collaboration Info */}
          <div className="lg:w-1/3">
            <h2 className="text-blue-500 font-mono tracking-widest uppercase mb-4 text-sm">
              Partnerships [cite: 32]
            </h2>
            <h3 className="text-4xl font-bold mb-6">
              Collaboration for Growth 
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We actively enter into joint ventures and agreements with universities, incubation centers, and government bodies to scale our innovations. 
            </p>
            <div className="inline-block px-6 py-4 border border-blue-500/30 rounded-xl bg-blue-500/5">
              <span className="text-blue-400 font-semibold italic text-sm">
                Scale with AllTimeAI Expertise
              </span>
            </div>
          </div>

          {/* Right Side: Services Grid */}
          <div className="lg:w-2/3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-8">
              Services We Offer:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="p-8 rounded-2xl bg-white border border-white hover:border-blue-500/50 shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-500 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {service.icon}
                  </div>
                  <h5 className="text-xl font-bold mb-3">
                    {service.title}
                  </h5>
                  <p className="text-gray-400 text-sm leading-relaxed">
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