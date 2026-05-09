import Image from "next/image";

export default function Kavach() {
    return (
        <>
            <section id="kavach" className="w-full bg-white text-black py-20 px-6 lg:px-24 border-t border-white/5">
                <div className="max-w-[1440px] mx-auto">

                    <div className="mb-16">
                        <h2 className="text-blue-500 font-mono tracking-widest uppercase mb-4 text-sm">
                            Premier Example
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold mb-6">
                           AllTimeAI Rakshak: Your Property's Digital Guardian
                        </h3>
                        <p className="max-w-3xl text-sky-800 text-lg leading-relaxed">
                            As a premier example of our integrated technology solutions, Rakshak Cam blends custom hardware manufacturing with proprietary Al/ML models to provide real-time active deterrence.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                        <div className="space-y-6">

                            <div className="p-6 rounded-2xl bg-gradient-to-br from-white to-slate-100 border border-slate-300 hover:border-blue-500/50 transition-colors group">
                                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600/40 transition-colors">
                                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                </div>
                                <h4 className="text-xl font-bold mb-2">Human-Centric Detection</h4>
                                <p className="text-slate-700 text-sm leading-relaxed">
                                    Advanced ML models distinguish between authorized personnel, pets, and intruders, virtually eliminating false alarms.
                                </p>
                            </div>

                            <div className="p-6 rounded-2xl bg-gradient-to-br from-white to-slate-100 border border-slate-300 hover:border-red-500/50 transition-colors group">
                                <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600/40 transition-colors">
                                    <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                </div>
                                <h4 className="text-xl font-bold mb-2">Active Deterrence System</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Integrated hardware triggers sirens and custom voice warnings to stop theft before it occurs.
                                </p>
                            </div>

                            <div className="p-6 rounded-2xl bg-gradient-to-br from-white to-slate-100 border border-slate-300 hover:border-cyan-500/50 transition-colors group">
                                <div className="w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-600/40 transition-colors">
                                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
                                </div>
                                <h4 className="text-xl font-bold mb-2">Real-Time Cloud Ecosystem</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Full integration with our SaaS platform provides instant mobile alerts, live feed access, and secure data warehousing.
                                </p>
                            </div>

                            <div className="p-6 rounded-2xl bg-gradient-to-br from-white to-slate-100 border border-slate-300 hover:border-purple-500/50 transition-colors group">
                                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-600/40 transition-colors">
                                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                </div>
                                <h4 className="text-xl font-bold mb-2">Visionary Night Optics</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    HD night vision ensures 24/7 autonomous perimeter guarding in any lighting condition.
                                </p>
                            </div>

                        </div>

                        <div className="relative flex justify-center items-center h-[500px] lg:h-full">
                            <div className="absolute w-[80%] h-[80%] bg-blue-500/10 rounded-full blur-[100px] animate-pulse">
                            </div>

                            <div className="relative border border-white/20 bg-slate-100 backdrop-blur-sm p-8 rounded-3xl w-full h-[400px] md:h-[600px] flex items-center justify-center">
                                <span className="text-gray-600 italic uppercase tracking-widest text-sm">
                                    <Image alt="hardware" src="/kavach-hero-section.jpg" width={500} height={300} className="rounded-3xl" />
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}