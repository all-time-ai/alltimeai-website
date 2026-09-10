export default function AcademicIdentity() {
    return (
        <section id="about" className="relative w-full bg-[#f8fafc] text-slate-900 py-24 px-6 lg:px-24 overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-1/4 -right-20 w-[300px] h-[300px] bg-violet-400/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 -left-20 w-[250px] h-[250px] bg-indigo-400/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="max-w-[1440px] mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left Column */}
                    <div className="lg:w-1/3">
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass-card rounded-full">
                            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                            <span className="text-xs font-semibold tracking-[0.2em] text-cyan-600 uppercase">
                                About Us
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">
                            Academic Excellence Meets{' '}
                            <span className="gradient-text">Industry Innovation</span>
                        </h2>
                        
                        {/* Quote Card */}
                        <div className="gradient-border rounded-2xl p-6 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 via-cyan-500 to-violet-500" />
                            <p className="text-slate-600 leading-relaxed italic pl-4 text-sm">
                                &ldquo;Registered at the Department of Computer Science and Engineering, Jabalpur Engineering College, AllTimeAI is a technology-driven enterprise committed to the research, development, and commercialization of AI-powered IoT and embedded systems.&rdquo;
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Value Cards */}
                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Full-Stack Innovation */}
                        <div className="p-8 rounded-2xl glass-card-strong hover-glow transition-all duration-300 group">
                            <div className="mb-6 w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold mb-3 text-slate-900">Full-Stack Innovation</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                We manage the entire lifecycle from hardware assembly to software deployment and system integration.
                            </p>
                        </div>

                        {/* Research-First */}
                        <div className="p-8 rounded-2xl glass-card-strong hover-glow transition-all duration-300 group">
                            <div className="mb-6 w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold mb-3 text-slate-900">Research-First Approach</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                Operating out of dedicated R&D laboratories, we investigate emerging technologies like Blockchain and Web3 to enhance digital security.
                            </p>
                        </div>

                        {/* Ethical & Compliant */}
                        <div className="p-8 rounded-2xl glass-card-strong hover-glow transition-all duration-300 group">
                            <div className="mb-6 w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-shadow">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold mb-3 text-slate-900">Ethical & Compliant</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                Every product we build is designed for global standards, ensuring strict compliance with GDPR and the DPDP Act.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
