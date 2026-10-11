const items = [
  "Computer Vision",
  "Edge AI",
  "Embedded Systems",
  "IoT Hardware",
  "Machine Learning",
  "Cloud SaaS",
  "Cybersecurity",
  "Blockchain & Web3",
  "Smart Infrastructure",
];

/** Infinite marquee of core technology areas. Duplicated list gives a seamless loop. */
export default function Capabilities() {
  const loop = [...items, ...items];

  return (
    <section aria-label="Core technology areas" className="relative w-full border-y border-white/5 bg-white/[0.015] py-6">
      <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <ul className="flex w-max animate-marquee gap-12 whitespace-nowrap">
          {loop.map((item, i) => (
            <li
              key={`${item}-${i}`}
              aria-hidden={i >= items.length}
              className="flex items-center gap-12 text-sm font-medium tracking-wide text-slate-500"
            >
              {item}
              <span className="w-1 h-1 rounded-full bg-emerald-400/60" aria-hidden />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
