import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";

const services = [
  {
    title: "Custom software development",
    description: "Web/mobile applications and custom AI/ML model training.",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    title: "Technical consultancy",
    description: "Expert advisory services on cybersecurity, data analytics, and AI integration.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    title: "Comprehensive maintenance",
    description: "Specialized technical support and licensing for all our digital platforms.",
    icon: "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085",
  },
];

export default function TechnicalServices() {
  return (
    <section id="services" className="relative w-full py-24 lg:py-32 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Services & partnerships"
          title={
            <>
              Collaboration for <span className="text-gradient">growth.</span>
            </>
          }
          description="We actively enter into joint ventures and agreements with universities, incubation centers, and government bodies to scale our innovations."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={90 * i}>
              <SpotlightCard className="h-full p-7">
                <div className="w-12 h-12 rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={s.icon} />
                  </svg>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.description}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        {/* Closing CTA */}
        <Reveal className="mt-20">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-white/[0.02] to-indigo-500/10 px-8 py-14 sm:px-14 text-center">
            <div
              className="aurora absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[220px] rounded-full bg-emerald-400/30 pointer-events-none"
              aria-hidden
            />
            <div className="relative">
              <h3 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-fade">
                Ready to scale with AllTimeAI?
              </h3>
              <p className="mt-4 mx-auto max-w-xl text-slate-400">
                See what active intelligence looks like in the real world, or connect with us through
                our channels below.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://rakshak.alltimeai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Explore Rakshak Cam ↗
                </a>
                <a
                  href="https://www.linkedin.com/in/all-time-ai-46a9b53aa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
