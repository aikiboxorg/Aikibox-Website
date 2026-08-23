const sites = [
  { x: 60, y: 70, label: "HQ" },
  { x: 260, y: 30, label: "Site A" },
  { x: 300, y: 160, label: "Site B" },
  { x: 140, y: 220, label: "Site C" },
  { x: 40, y: 180, label: "Site D" },
];

const links = [
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [1, 2],
];

export default function AikiboxHero() {
  return (
    <section className="relative overflow-hidden bg-aiki-paper py-24 pb-20 text-aiki-ink">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-14 px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-[22px] flex items-center gap-[10px] font-mono text-[12.5px] uppercase tracking-[0.11em] text-aiki-accent before:h-px before:w-[22px] before:bg-aiki-accent before:content-['']">
            Field IT &amp; Network Infrastructure
          </div>
          <h1 className="font-aiki-display text-[38px] font-semibold leading-[1.05] tracking-tight sm:text-[50px] lg:text-[58px]">
            We wire the places
            <br />
            that can&apos;t go down.
          </h1>
          <p className="mt-[22px] max-w-[48ch] text-lg leading-[1.65] text-aiki-ink/70">
            AIKIBOX plans, installs, and supports the network and IT
            infrastructure behind clinics, offices, and job sites — on-site,
            on schedule, and built to hold up after we leave.
          </p>
          <div className="mt-[34px] flex flex-wrap gap-[14px]">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-sm bg-aiki-ink px-[26px] py-[14px] text-[15.5px] font-semibold text-aiki-paper transition hover:bg-aiki-steel"
            >
              Request service
            </a>
            <a
              href="/vita"
              className="inline-flex items-center gap-2 rounded-sm border border-aiki-ink/20 px-[26px] py-[14px] text-[15.5px] font-semibold text-aiki-ink transition hover:border-aiki-ink/40"
            >
              See Vita, our product →
            </a>
          </div>

          <div className="mt-[52px] flex flex-wrap gap-x-10 gap-y-7 border-t border-aiki-ink/10 pt-7 font-mono">
            <div className="text-[13px] text-aiki-ink/55">
              <b className="mb-0.5 block font-aiki-display text-[22px] font-semibold text-aiki-ink">
                Sacramento, CA
              </b>
              home base, on-site nationwide
            </div>
            <div className="text-[13px] text-aiki-ink/55">
              <b className="mb-0.5 block font-aiki-display text-[22px] font-semibold text-aiki-ink">M.S. IT</b>
              engineering-led deployments
            </div>
          </div>
        </div>

        <div className="relative flex h-[320px] items-center justify-center sm:h-[380px]" aria-hidden="true">
          <svg viewBox="0 0 340 260" className="w-full max-w-[380px]">
            {links.map(([a, b], i) => (
              <line
                key={i}
                x1={sites[a].x}
                y1={sites[a].y}
                x2={sites[b].x}
                y2={sites[b].y}
                stroke="#3E5364"
                strokeOpacity="0.35"
                strokeWidth="1.5"
              />
            ))}
            {links.map(([a, b], i) => (
              <line
                key={`signal-${i}`}
                x1={sites[a].x}
                y1={sites[a].y}
                x2={sites[b].x}
                y2={sites[b].y}
                stroke="#FF6B35"
                strokeWidth="2"
                strokeDasharray="8 16"
                className="animate-signal"
                style={{ animationDelay: `${i * 0.4}s` }}
              />
            ))}
            {sites.map((site, i) => (
              <g key={site.label}>
                <circle
                  cx={site.x}
                  cy={site.y}
                  r={i === 0 ? 9 : 6.5}
                  fill={i === 0 ? "#161D24" : "#F4F6F5"}
                  stroke="#161D24"
                  strokeWidth={i === 0 ? 0 : 1.5}
                  className={i === 0 ? "animate-blink" : ""}
                />
                <text
                  x={site.x}
                  y={site.y - 14}
                  textAnchor="middle"
                  fontFamily="var(--font-plex-mono)"
                  fontSize="10"
                  fill="#3E5364"
                >
                  {site.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
