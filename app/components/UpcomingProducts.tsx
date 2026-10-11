import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";

const roadmap = [
  {
    sector: "Smart Cities",
    vision: "E-governance platforms and intelligent infrastructure for urban safety.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    sector: "Industrial IoT",
    vision: "Virtual tripwires and automated perimeter guards for logistics and warehouses.",
    icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
  },
  {
    sector: "Enterprise SaaS",
    vision: "Scalable cloud-based analytics, web hosting, and data management solutions.",
    icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
  },
  {
    sector: "Defense & Public Sector",
    vision: "Specialized AI hardware designed for government and defense tender requirements.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
];

export default function UpcomingProducts() {
  return (
    <section id="roadmap" className="relative w-full py-24 lg:py-32 border-t border-white/5 overflow-hidden">
      <div
        className="aurora absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-indigo-500/15 pointer-events-none"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          align="center"
          eyebrow="Roadmap"
          title={
            <>
              Upcoming products,
              <br />
              <span className="text-gradient">new frontiers.</span>
            </>
          }
          description="Guided by our MoA, we are expanding our intellectual property into new technological frontiers."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {roadmap.map((item, i) => (
            <Reveal key={item.sector} delay={90 * i}>
              <SpotlightCard className="h-full p-8">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 text-cyan-300 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={item.icon} />
                    </svg>
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-slate-400">
                    In development
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-semibold tracking-tight text-white">{item.sector}</h3>
                <p className="mt-3 text-slate-400 leading-relaxed">{item.vision}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-ring" />
            Currently scaling intellectual property into new frontiers.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
