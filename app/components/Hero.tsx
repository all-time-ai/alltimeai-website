export default function Hero() {
    return (
        <>
            <section className="relative bg-black text-white w-full h-auto flex items-center overflow-hidden py-20">

                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 pt-20">
                    <div className="max-w-4xl">
                        <div className="inline-block px-4 py-1.5 mb-6 border border-blue-500/30 bg-blue-500/10 rounded-full">
                            <span className="text-sm font-semibold tracking-wider text-blue-400 uppercase">
                                The Intelligence Revolution
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                            Beyond Observation. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                                Active Intelligence.
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
                            AllTimeAl engineers high-performance Al-powered hardware and software ecosystems.
                            We bridge the gap between passive recording and proactive automation to secure residential,
                            commercial, and industrial sectors.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#kavach" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all duration-300 text-center shadow-lg shadow-blue-600/25">
                                Explore Kavach Cam
                            </a>
                            <a href="#tech-stack" className="px-8 py-4 border border-gray-700 hover:border-blue-400 text-gray-300 hover:text-white font-bold rounded-lg transition-all duration-300 text-center">
                                Our Technology Stack
                            </a>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:block absolute right-[-5%] top-1/2 -translate-y-1/2 opacity-20">
                    <div className="w-96 h-96 border-[1px] border-blue-500/50 rounded-full animate-pulse"></div>
                    <div className="absolute inset-10 border-[1px] border-cyan-500/30 rounded-full"></div>
                </div>
            </section>
        </>
    )
}