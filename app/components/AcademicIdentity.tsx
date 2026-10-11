import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";

const pillars = [
  {
    n: "01",
    title: "Full-stack innovation",
    body: "We manage the entire lifecycle from hardware assembly to software deployment and system integration.",
  },
  {
    n: "02",
    title: "Research-first approach",
    body: "Operating out of dedicated R&D laboratories, we investigate emerging technologies like Blockchain and Web3 to enhance digital security.",
  },
  {
    n: "03",
    title: "Ethical & compliant",
    body: "Every product we build is designed for global standards, ensuring strict compliance with GDPR and the DPDP Act.",
  },
];

export default function AcademicIdentity() {
  return (
    <section id="about" className="relative w-full py-24 lg:py-32 border-t border-white/5">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="About us"
              title={
                <>
                  Academic excellence meets{" "}
                  <span className="text-gradient">industry innovation.</span>
                </>
              }
            />
            <Reveal delay={120}>
              <figure className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <blockquote className="text-[15px] leading-relaxed text-slate-300">
                  &ldquo;Registered at the Department of Computer Science and Engineering, Jabalpur
                  Engineering College, AllTimeAI is a technology-driven enterprise committed to the
                  research, development, and commercialization of AI-powered IoT and embedded systems.&rdquo;
                </blockquote>
              </figure>
            </Reveal>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-4">
            {pillars.map((p, i) => (
              <Reveal key={p.n} delay={100 * i}>
                <SpotlightCard className="p-7 flex gap-6">
                  <span className="font-mono text-sm text-emerald-300/80 pt-1">{p.n}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-white tracking-tight">{p.title}</h3>
                    <p className="mt-2 text-slate-400 leading-relaxed">{p.body}</p>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
