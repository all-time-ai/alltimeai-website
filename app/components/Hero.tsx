"use client"

import React from "react";

export default function Hero() {
    return (
        <section className="relative bg-[#f8fafc] text-slate-900 w-full min-h-screen flex items-center overflow-hidden pt-26">

            {/* Animated Gradient Mesh Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-indigo-400/20 rounded-full blur-[120px] animate-drift-1" />
                <div className="absolute top-1/3 -left-20 w-[400px] h-[400px] bg-cyan-400/15 rounded-full blur-[100px] animate-drift-2" />
                <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-violet-400/15 rounded-full blur-[110px] animate-drift-3" />
                <div className="absolute top-1/4 right-1/3 w-[250px] h-[250px] bg-rose-400/10 rounded-full blur-[80px] animate-drift-2" />
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 grid-pattern pointer-events-none opacity-60" />

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block">
                <div className="absolute top-[20%] left-[15%] w-1.5 h-1.5 bg-indigo-400/40 rounded-full" style={{animation: 'particle-float 6s ease-in-out infinite'}} />
                <div className="absolute top-[30%] right-[25%] w-1 h-1 bg-cyan-400/40 rounded-full" style={{animation: 'particle-float 8s ease-in-out infinite 1s'}} />
                <div className="absolute bottom-[30%] left-[35%] w-2 h-2 bg-violet-400/30 rounded-full" style={{animation: 'particle-float 7s ease-in-out infinite 2s'}} />
                <div className="absolute top-[60%] right-[20%] w-1 h-1 bg-rose-400/30 rounded-full" style={{animation: 'particle-float 9s ease-in-out infinite 0.5s'}} />
                <div className="absolute top-[45%] left-[10%] w-1.5 h-1.5 bg-indigo-300/30 rounded-full" style={{animation: 'particle-float 5s ease-in-out infinite 3s'}} />
            </div>

            {/* Background Brain Image - repositioned */}
            <div className="absolute right-0 top-[5%] w-full lg:w-[55%] h-[90%] pointer-events-none opacity-40 lg:opacity-60">
                <div className="relative w-full h-full">
                    <img
                        src="/brain-light.png"
                        alt="AI Brain Connectivity"
                        className="w-full h-full object-contain object-right-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#f8fafc] via-[#f8fafc]/60 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#f8fafc] via-transparent to-[#f8fafc]/40" />
                </div>
            </div>

            {/* Main Content Container */}
            <div className="container mx-auto px-6 relative z-10 py-16 lg:py-0">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0">

                    {/* Left Content */}
                    <div className="w-full lg:w-[55%] pt-8 lg:pt-0">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass-card rounded-full shadow-sm">
                            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
                            <span className="text-sm font-semibold tracking-wider text-indigo-700 uppercase">
                                The Intelligence Revolution
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight mb-8 leading-[0.92]">
                            Beyond <br />
                            Observation. <br />
                            <span className="gradient-text">
                                Active Intelligence.
                            </span>
                        </h1>

                        {/* Subtext */}
                        <p className="text-lg md:text-xl text-slate-500 max-w-xl mb-12 leading-relaxed font-medium">
                            AllTimeAI engineers high-performance AI-powered hardware and software ecosystems.
                            We bridge the gap between passive recording and proactive automation to secure residential,
                            commercial, and industrial sectors.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => window.open("https://rakshak.alltimeai.com", "_blank")}
                                className="relative px-10 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold rounded-2xl transition-all duration-300 shadow-xl shadow-indigo-500/25 hover:shadow-2xl hover:shadow-indigo-500/30 hover:-translate-y-1 overflow-hidden group cursor-pointer"
                            >
                                <span className="relative z-10">Explore Rakshak Cam</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </button>

                            <a
                                href="#about"
                                className="px-10 py-4 border-2 border-indigo-200 hover:border-indigo-400 text-indigo-700 font-bold rounded-2xl transition-all duration-300 bg-white/60 backdrop-blur-sm hover:bg-white/80 text-center"
                            >
                                Our Technology
                            </a>
                        </div>

                        {/* Stats Row */}
                        <div className="flex gap-12 mt-16 pt-8 border-t border-slate-200/60">
                            <div>
                                <div className="text-3xl font-bold gradient-text-static">5+</div>
                                <div className="text-sm text-slate-400 mt-1">AI Products</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold gradient-text-static">24/7</div>
                                <div className="text-sm text-slate-400 mt-1">Autonomous Monitoring</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold gradient-text-static">100%</div>
                                <div className="text-sm text-slate-400 mt-1">Made in India</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Logo Card */}
                    <div className="w-full lg:w-[45%] flex justify-center lg:justify-end items-center relative">
                        
                        {/* Glow behind logo */}
                        <div className="absolute w-[300px] h-[300px] bg-indigo-400/15 rounded-full blur-[80px] animate-glow-pulse" />
                        
                        {/* Logo Card */}
                        <div className="relative group">
                            <div className="gradient-border rounded-3xl shadow-2xl shadow-indigo-500/10 p-8 lg:p-10 bg-white/70 backdrop-blur-xl transition-all duration-700 hover:shadow-indigo-500/20 hover:scale-[1.02]">
                                <img
                                    src="/logo/logo-full.jpeg"
                                    alt="AllTimeAI Logo"
                                    className="h-40 lg:h-52 w-auto object-contain"
                                />
                            </div>
                            
                            {/* Decorative elements */}
                            <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br from-cyan-400 to-indigo-500 rounded-full opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#f8fafc] to-transparent z-20" />
        </section>
    )
}
