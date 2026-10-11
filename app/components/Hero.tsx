import Image from "next/image";

const RAKSHAK_URL = "https://rakshak.alltimeai.com";

const stats = [
  { value: "5+", label: "AI products" },
  { value: "24/7", label: "Autonomous monitoring" },
  { value: "100%", label: "Made in India" },
];

export default function Hero() {
  return (
    <section id="top" className="relative w-full overflow-hidden pt-36 pb-24 lg:pt-44 lg:pb-32 noise">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-grid" />
        <div className="aurora animate-drift absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-emerald-500/40" />
        <div className="aurora absolute top-40 -right-40 w-[500px] h-[500px] rounded-full bg-cyan-500/25" />
        <div className="aurora absolute top-60 -left-40 w-[400px] h-[400px] rounded-full bg-indigo-500/20" />
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[var(--bg)] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          <a
            href={RAKSHAK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] pl-2 pr-4 py-1.5 text-sm text-slate-300 hover:border-emerald-400/40 transition-colors"
          >
            <span className="rounded-full bg-emerald-400/15 text-emerald-300 px-2.5 py-0.5 text-xs font-semibold">
              Now live
            </span>
            Rakshak Cam — AI that deters, not just records
            <span className="text-slate-500 group-hover:text-emerald-300 transition-colors" aria-hidden>→</span>
          </a>

          <h1 className="mt-8 text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[5rem] font-semibold tracking-[-0.03em] max-w-4xl">
            <span className="text-fade">Beyond observation.</span>
            <br />
            <span className="text-gradient">Intelligence that acts.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg md:text-xl leading-relaxed text-slate-400">
            AllTimeAI builds AI-powered hardware and software ecosystems that move from passive
            recording to proactive automation — securing residential, commercial and industrial spaces.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-3">
            <a href={RAKSHAK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Explore Rakshak Cam
              <span aria-hidden>↗</span>
            </a>
            <a href="#about" className="btn-ghost">
              Our technology
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-6 sm:gap-16">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">{s.value}</dd>
                <p className="mt-1 text-xs sm:text-sm text-slate-500">{s.label}</p>
              </div>
            ))}
          </dl>
        </div>

        {/* Product viewport */}
        <div className="relative mt-20 mx-auto max-w-5xl">
          <div className="absolute -inset-x-10 -top-10 -bottom-10 bg-emerald-500/10 blur-3xl rounded-[3rem]" aria-hidden />
          <div className="relative rounded-2xl border border-white/10 bg-[#070b0f] p-2 shadow-[0_40px_120px_-30px_rgba(16,185,129,0.35)]">
            {/* window chrome */}
            <div className="flex items-center justify-between px-3 py-2.5">
              <div className="flex items-center gap-1.5" aria-hidden>
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
              </div>
              <span className="font-mono text-[11px] tracking-wider text-slate-500 uppercase">
                Rakshak · Live perimeter feed
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-blink" />
                ARMED
              </span>
            </div>

            <div className="relative overflow-hidden rounded-xl aspect-[16/10] sm:aspect-[16/9]">
              <Image
                src="/kavach-hero-section.jpg"
                alt="Rakshak Cam detecting an intruder and triggering an alert"
                fill
                priority
                sizes="(min-width: 1024px) 1000px, 100vw"
                className="object-cover object-[50%_35%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04070a]/70 via-transparent to-transparent" />
              <div className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-emerald-400/20 to-transparent animate-scan" aria-hidden />

              <div className="absolute left-4 bottom-4 flex flex-wrap gap-2">
                {["Human detected", "Active deterrence engaged", "Owner notified"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/15 bg-black/50 backdrop-blur px-3 py-1 font-mono text-[11px] text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
