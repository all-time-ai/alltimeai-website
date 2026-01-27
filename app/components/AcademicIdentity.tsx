export default function AcademicIdentity() {
    return (
        <>
            <section id="about" className="w-full bg-white text-black py-24 px-6 lg:px-24">
                <div className="max-w-[1440px] mx-auto">

                    <div className="flex flex-col lg:flex-row gap-16 items-start">

                        <div className="lg:w-1/3">
                            <h2 className="text-blue-500 font-mono tracking-widest uppercase mb-4 text-sm">
                                About Us
                            </h2>
                            <h3 className="text-4xl font-bold mb-8 leading-tight">
                                Academic Excellence Meets Industry Innovation
                            </h3>
                            <div className="p-6 border-l-2 border-blue-600 bg-blue-600/5">
                                <p className="text-slate-800 leading-relaxed italic">
                                    "Registered at the Department of Computer Science and Engineering, Jabalpur Engineering College, AllTimeAl is a technology-driven enterprise committed to the research, development, and commercialization of Al-powered loT and embedded systems."
                                </p>
                            </div>
                        </div>

                        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">

                            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-lg transition-all duration-300">
                                <div className="mb-6 text-blue-500">
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-bold mb-4">Full-Stack Innovation</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    We manage the entire lifecycle from hardware assembly to software deployment and system integration. [cite: 17]
                                </p>
                            </div>

                            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-lg transition-all duration-300">
                                <div className="mb-6 text-cyan-500">
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-bold mb-4">Research-First Approach</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Operating out of dedicated R&D laboratories, we investigate emerging technologies like Blockchain and Web3 to enhance digital security. [cite: 18]
                                </p>
                            </div>

                            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-lg transition-all duration-300">
                                <div className="mb-6 text-green-500">
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-bold mb-4">Ethical & Compliant</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Every product we build is designed for global standards, ensuring strict compliance with GDPR and the DPDP Act.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}