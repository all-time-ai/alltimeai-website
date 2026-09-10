import Image from "next/image";

export default function Kavach() {
    return (
        <section id="kavach" className="relative w-full bg-[#f1f5f9] text-slate-900 py-24 px-6 lg:px-24 overflow-hidden">
            {/* Subtle background orbs */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-400/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-400/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-[1440px] mx-auto relative z-10">
                {/* Section Header */}
                <div className="mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass-card rounded-full">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
                        <span className="text-xs font-semibold tracking-[0.2em] text-indigo-600 uppercase">
                            Premier Example
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                        AllTimeAI Rakshak: <br className="hidden md:block" />
                        <span className="gradient-text">Your Property&apos;s Digital Guardian</span>
                    </h2>
                    <p className="max-w-3xl text-slate-500 text-lg leading-relaxed">
                        As a premier example of our integrated technology solutions, Rakshak Cam blends custom hardware manufacturing with proprietary AI/ML models to provide real-time active deterrence.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Feature Cards */}
                    <div className="space-y-5">
                        {/* Human-Centric Detection */}
                        <div className="p-6 rounded-2xl glass-card-strong hover-glow transition-all duration-300 group">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-slate-900">Human-Centric Detection</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        Advanced ML models distinguish between authorized personnel, pets, and intruders, virtually eliminating false alarms.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Active Deterrence */}
                        <div className="p-6 rounded-2xl glass-card-strong hover-glow transition-all duration-300 group">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-rose-500/20 group-hover:shadow-rose-500/40 transition-shadow">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-slate-900">Active Deterrence System</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        Integrated hardware triggers sirens and custom voice warnings to stop theft before it occurs.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Real-Time Cloud */}
                        <div className="p-6 rounded-2xl glass-card-strong hover-glow transition-all duration-300 group">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-slate-900">Real-Time Cloud Ecosystem</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        Full integration with our SaaS platform provides instant mobile alerts, live feed access, and secure data warehousing.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Visionary Night Optics */}
                        <div className="p-6 rounded-2xl glass-card-strong hover-glow transition-all duration-300 group">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-violet-500/20 group-hover:shadow-violet-500/40 transition-shadow">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-slate-900">Visionary Night Optics</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        HD night vision ensures 24/7 autonomous perimeter guarding in any lighting condition.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product Image */}
                    <div className="relative flex justify-center items-center">
                        {/* Glow behind image */}
                        <div className="absolute w-[70%] h-[70%] bg-indigo-400/10 rounded-full blur-[80px] animate-glow-pulse" />
                        
                        {/* Animated ring */}
                        <div className="absolute w-[85%] aspect-square border-2 border-indigo-300/20 rounded-full animate-ring-pulse" />
                        
                        {/* Image container */}
                        <div className="relative gradient-border rounded-3xl p-3 w-full max-w-[500px]">
                            <div className="rounded-2xl overflow-hidden">
                                <Image 
                                    alt="Rakshak Cam Hardware" 
                                    src="/kavach-hero-section.jpg" 
                                    width={500} 
                                    height={300} 
                                    className="w-full h-auto object-cover" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
