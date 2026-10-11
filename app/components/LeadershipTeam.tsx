import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";

const teamMembers = [
  {
    name: "Dr. Jitendra Singh Thakur",
    role: "Main Founder & Chief Innovation Officer (CIO - Strategy)",
  },
  {
    name: "Akshat Singh Thakur",
    role: "Co-Founder, CEO & Chief Product Officer (CPO)",
  },
  {
    name: "Aadarsh Soni",
    role: "Co-Founder, CTO & Chief Product Officer (CPO)",
  },
  {
    name: "Pawandas Bairagi",
    role: "Co-Founder, COO, CMO & Chief Finance Officer (CFO)",
  },
  {
    name: "Shivam Mishra",
    role: "Co-Founder, CTO & Chief Product Officer (CPO)",
  },
];

const initials = (name: string) =>
  name
    .replace(/^Dr\.\s*/, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

export default function LeadershipTeam() {
  return (
    <section id="leadership" className="relative w-full py-24 lg:py-32 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Leadership"
          title={
            <>
              Leadership &amp;{" "}
              <span className="text-gradient">research team.</span>
            </>
          }
          description="Academic experts and technical specialists focused on scaling our intellectual property."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {teamMembers.map((m, i) => (
            <Reveal key={m.name} delay={70 * i}>
              <SpotlightCard className="h-full p-7">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400/30 via-cyan-400/20 to-indigo-400/30 border border-white/10 flex items-center justify-center font-semibold text-white tracking-wide">
                  {initials(m.name)}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white tracking-tight">{m.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{m.role}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
