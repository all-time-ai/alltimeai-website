"use client"

import React from "react";

export default function Hero() {
    return (
        <section className="relative bg-white text-black w-full min-h-[90vh] flex items-center overflow-hidden pt-6 md:pt-20">

            {/* Background Brain Image */}
            <div className="absolute right-0 top-0 w-full lg:w-3/4 h-full pointer-events-none opacity-60 lg:opacity-100">
                <div className="relative w-full h-full">
                    <img
                        src="/brain-light.png"
                        alt="AI Brain Connectivity"
                        className="w-full h-full object-contain object-right"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
                </div>
            </div>

            {/* 🔥 RIGHT-CENTER HERO LOGO */}
            <div className="absolute right-[8%] top-1/2 z-20 hidden lg:block animate-float">
                <div className="bg-white/90 backdrop-blur-md border border-blue-100 rounded-3xl shadow-2xl px-8 py-6">
                    <img
                        src="/logo/logo-full.jpeg"
                        alt="AllTimeAI Logo"
                        className="h-50 w-auto object-contain rounded-xl"
                    />
                </div>
            </div>


            {/* Watermark Logo */}
            <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-[520px] h-[520px] opacity-[0.03] pointer-events-none hidden lg:block">
                <img
                    src="/logo/logo-full.jpeg"
                    alt="Watermark"
                    className="w-full h-full grayscale object-contain"
                />
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 relative z-10 py-20">
                <div className="flex flex-col lg:flex-row items-center">

                    {/* Left Content */}
                    <div className="w-full lg:w-3/5">

                        <div className="inline-block px-4 py-1.5 mb-6 border border-blue-500/30 bg-blue-500/5 rounded-full">
                            <span className="text-sm font-semibold tracking-wider text-blue-800 uppercase">
                                The Intelligence Revolution
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl text-blue-900 font-bold tracking-tight mb-6 leading-tight">
                            Beyond Observation. <br />
                            <span className="bg-clip-text text-sky-700">
                                Active Intelligence.
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed font-medium">
                            AllTimeAI engineers high-performance AI-powered hardware and software ecosystems.
                            We bridge the gap between passive recording and proactive automation to secure residential,
                            commercial, and industrial sectors.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => window.open("https://rakshak.alltimeai.com", "_blank")}
                                className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all duration-300 shadow-xl shadow-blue-600/20 transform hover:-translate-y-1 cursor-pointer"
                            >
                                Explore Rakshak Cam
                            </button>

                            {/* <button className="px-10 py-4 border-2 border-blue-100 hover:border-blue-600 text-blue-700 font-bold rounded-xl transition-all duration-300 bg-white/60 backdrop-blur-sm">
                                Our Technology
                            </button> */}
                        </div>
                    </div>

                    {/* Spacer */}
                    <div className="hidden lg:block lg:w-2/5 h-[500px]" />
                </div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-20"></div>
        </section>
    )
}



// "use client"

// import React from "react";

// export default function Hero() {
//     return (
//         <section className="relative bg-white text-black w-full min-h-[90vh] flex items-center overflow-hidden">

//             {/* Background Brain Image */}
//             <div className="absolute right-0 top-0 w-full lg:w-3/4 h-full pointer-events-none opacity-60 lg:opacity-100">
//                 <div className="relative w-full h-full">
//                     <img
//                         src="/brain-light.png"
//                         alt="AI Brain Connectivity"
//                         className="w-full h-full object-contain object-right"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
//                 </div>
//             </div>

//             {/* Watermark Logo */}
//             <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-[520px] h-[520px] opacity-[0.03] pointer-events-none hidden lg:block">
//                 <img
//                     src="/logo/logo-full.jpeg"
//                     alt="AllTimeAI Watermark"
//                     className="w-full h-full grayscale object-contain"
//                 />
//             </div>

//             {/* Main Content */}
//             <div className="container mx-auto px-6 relative z-10 py-20">
//                 <div className="flex flex-col lg:flex-row items-center">

//                     {/* Left Content */}
//                     <div className="w-full lg:w-3/5">

//                         {/* 🔥 PRIMARY HERO LOGO */}
//                         <div className="mb-10 flex justify-center lg:justify-start">
//                             <div className="bg-white rounded-2xl border border-blue-100 shadow-xl px-6 py-4">
//                                 <img
//                                     src="/logo/logo-full.jpeg"
//                                     alt="AllTimeAI Logo"
//                                     className="h-20 md:h-24 w-auto object-contain"
//                                 />
//                             </div>
//                         </div>

//                         <div className="inline-block px-4 py-1.5 mb-6 border border-blue-500/30 bg-blue-500/5 rounded-full">
//                             <span className="text-sm font-semibold tracking-wider text-blue-800 uppercase">
//                                 The Intelligence Revolution
//                             </span>
//                         </div>

//                         <h1 className="text-5xl md:text-7xl text-blue-900 font-bold tracking-tight mb-6 leading-tight">
//                             Beyond Observation. <br />
//                             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
//                                 Active Intelligence.
//                             </span>
//                         </h1>

//                         <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed font-medium">
//                             AllTimeAI engineers high-performance AI-powered hardware and software ecosystems.
//                             We bridge the gap between passive recording and proactive automation to secure residential,
//                             commercial, and industrial sectors.
//                         </p>

//                         <div className="flex flex-col sm:flex-row gap-4">
//                             <button
//                                 onClick={() => window.open("https://kavach.alltimeai.com", "_blank")}
//                                 className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all duration-300 shadow-xl shadow-blue-600/20 transform hover:-translate-y-1"
//                             >
//                                 Explore Kavach Cam
//                             </button>

//                             <button className="px-10 py-4 border-2 border-blue-100 hover:border-blue-600 text-blue-700 font-bold rounded-xl transition-all duration-300 bg-white/60 backdrop-blur-sm">
//                                 Our Technology
//                             </button>
//                         </div>
//                     </div>

//                     {/* Spacer */}
//                     <div className="hidden lg:block lg:w-2/5 h-[500px]" />
//                 </div>
//             </div>

//             {/* Bottom Fade */}
//             <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-20"></div>
//         </section>
//     )
// }









// "use client"
// import Image from "next/image";

// export default function Hero() {
//     return (
//         <>
//             {/* mobile logo  */}
//             <div className="md:hidden" >
//                 <div className="w-full h-auto mt-14 border-[1px] border-blue-500/50 rounded-full animate-pulse">
//                     <Image alt='A' src="/logo/logo-full.jpeg" width={1000} height={1000} />
//                 </div>
//             </div>

//             <section className="relative bg-white text-black w-full h-auto flex items-center overflow-hidden md:py-20">
// ``
//                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
//                     <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]"></div>
//                 </div>


//                 <div className="container mx-auto px-6 relative z-10 pt-20">
//                     <div className="md:max-w-4xl w-full">
//                         <div className="md:w-auto w-full inline-block px-4 py-1.5 mb-6 border border-blue-500/30 bg-blue-500/10 rounded-full">
//                             <span className="md:pl-0 pl-12 text-sm md:text-left text-center font-semibold tracking-wider text-blue-800 uppercase">
//                                 The Intelligence Revolution
//                             </span>
//                         </div>

//                         <h1 className="text-5xl md:text-left text-center md:text-7xl text-blue-900 font-bold tracking-tight mb-6 leading-tight">
//                             Beyond Observation. <br />
//                             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
//                                 Active Intelligence.
//                             </span>
//                         </h1>

//                         <p className="text-lg md:text-xl text-sky-900 max-w-2xl mb-10 leading-relaxed">
//                             AllTimeAl engineers high-performance Al-powered hardware and software ecosystems.
//                             We bridge the gap between passive recording and proactive automation to secure residential,
//                             commercial, and industrial sectors.
//                         </p>

//                         <div className="flex flex-col sm:flex-row gap-4">
//                             <a
//                                 onClick={() => {
//                                     window.open("https://kavach.alltimeai.com", "_blank");
//                                 }}
//                                 href="#kavach"
//                                 className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all duration-300 text-center shadow-lg shadow-blue-600/25">
//                                 Explore Kavach Cam
//                             </a>
//                             {/* <a href="#tech-stack" className="px-8 py-4 border border-gray-700 hover:border-blue-400 text-gray-300 hover:text-white font-bold rounded-lg transition-all duration-300 text-center">
//                                 Our Technology Stack
//                             </a> */}
//                         </div>
//                     </div>
//                 </div>

//                 <div className="w-1/2 hidden lg:block absolute right-[-1%] top-1/2 -translate-y-1/2 ">
//                     <div className="w-full h-[70%] mt-14 border-[1px] border-blue-500/50 rounded-full">
//                         <Image alt='A' src="/logo/logo-full.jpeg" className='rounded-l-full rounded-4xl' width={1000} height={1000} />
//                     </div>
//                     <div className="w-full absolute inset-10 mt-14 border-[1px] border-cyan-500/30 rounded-l-full"></div>
//                 </div>
//             </section>
//         </>
//     )
// }