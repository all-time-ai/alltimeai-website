import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";

const features = [
  {
    title: "Human-centric detection",
    body: "Advanced ML models distinguish between authorized personnel, pets, and intruders, virtually eliminating false alarms.",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    title: "Active deterrence",
    body: "Integrated hardware triggers sirens and custom voice warnings to stop theft before it occurs.",
    icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
  },
  {
    title: "Real-time cloud ecosystem",
    body: "Full integration with our SaaS platform provides instant mobile alerts, live feed access, and secure data warehousing.",
    icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
  },
  {
    title: "Visionary night optics",
    body: "HD night vision ensures 24/7 autonomous perimeter guarding in any lighting condition.",
    icon: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7zM15 12a3 3 0 11-6 0 3 3 0 016 0z",
  },
];

export default function Kavach() {
  return (
    <section id="kavach" className="relative w-full py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Flagship product"
          title={
            <>
              AllTimeAI Rakshak.
              <br />
              <span className="text-gradient">Your property&apos;s digital guardian.</span>
            </>
          }
          description="A premier example of our integrated technology: custom hardware manufacturing blended with proprietary AI/ML models to provide real-time active deterrence."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-4">
          <Reveal className="lg:col-span-3 lg:row-span-2">
            <SpotlightCard className="h-full overflow-hidden p-2">
              <div className="relative h-full min-h-[320px] overflow-hidden rounded-[0.9rem]">
                <Image
                  alt="Rakshak Cam hardware detecting an intruder"
                  src="/kavach-hero-section.jpg"
                  fill
                  sizes="(min-width: 1024px) 640px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04070a] via-[#04070a]/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                  <p className="font-mono text-xs uppercase tracking-widest text-emerald-300">
                    Hardware + AI + Cloud
                  </p>
                  <p className="mt-2 max-w-sm text-xl font-medium text-white">
                    One integrated system, designed and built end to end.
                  </p>
                  <a
                    href="https://rakshak.alltimeai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost mt-5 !py-2.5 !text-sm"
                  >
                    Visit Rakshak Cam ↗
                  </a>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {features.map((f, i) => (
            <Reveal key={f.title} delay={80 * (i + 1)} className="lg:col-span-2">
              <SpotlightCard className="h-full p-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d={f.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">{f.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{f.body}</p>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
