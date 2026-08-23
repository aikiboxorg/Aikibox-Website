const nodes = {
  hub: { x: 100, y: 130, label: "AIKIBOX" },
  fieldServices: { x: 250, y: 60, label: "Martech" },
  vita: { x: 250, y: 200, label: "Vita" },
};

export default function AikiboxHomeHero() {
  return (
    <section className="relative overflow-hidden bg-aiki-paper py-24 pb-20 text-aiki-ink">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-14 px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-[22px] flex items-center gap-[10px] font-mono text-[12.5px] uppercase tracking-[0.11em] text-aiki-accent before:h-px before:w-[22px] before:bg-aiki-accent before:content-['']">
            A technology company
          </div>
          <h1 className="font-aiki-display text-[38px] font-semibold leading-[1.05] tracking-tight sm:text-[50px] lg:text-[58px]">
            We build the
            <br />
            products businesses
            <br />
            and people run on.
          </h1>
          <p className="mt-[22px] max-w-[48ch] text-lg leading-[1.65] text-aiki-ink/70">
            AIKIBOX builds and operates technology products across two lines:
            Martech, the on-site network and IT infrastructure work
            businesses depend on, and Vita, our platform for genuine social
            connection.
          </p>
          <div className="mt-[34px] flex flex-wrap gap-[14px]">
            <a
              href="/martech"
              className="inline-flex items-center gap-2 rounded-sm bg-aiki-ink px-[26px] py-[14px] text-[15.5px] font-semibold text-aiki-paper transition hover:bg-aiki-steel"
            >
              Martech →
            </a>
            <a
              href="/vita"
              className="inline-flex items-center gap-2 rounded-sm border border-aiki-ink/20 px-[26px] py-[14px] text-[15.5px] font-semibold text-aiki-ink transition hover:border-aiki-ink/40"
            >
              Vita →
            </a>
          </div>

          <div className="mt-[52px] flex flex-wrap gap-x-10 gap-y-7 border-t border-aiki-ink/10 pt-7 font-mono">
            <div className="text-[13px] text-aiki-ink/55">
              <b className="mb-0.5 block font-aiki-display text-[22px] font-semibold text-aiki-ink">2</b>
              products, one company
            </div>
            <div className="text-[13px] text-aiki-ink/55">
              <b className="mb-0.5 block font-aiki-display text-[22px] font-semibold text-aiki-ink">
                Sacramento, CA
              </b>
              home base
            </div>
          </div>
        </div>

        <div className="relative flex h-[300px] items-center justify-center sm:h-[360px]" aria-hidden="true">
          <svg viewBox="0 0 320 260" className="w-full max-w-[360px]">
            <line
              x1={nodes.hub.x}
              y1={nodes.hub.y}
              x2={nodes.fieldServices.x}
              y2={nodes.fieldServices.y}
              stroke="#3E5364"
              strokeOpacity="0.35"
              strokeWidth="1.5"
            />
            <line
              x1={nodes.hub.x}
              y1={nodes.hub.y}
              x2={nodes.vita.x}
              y2={nodes.vita.y}
              stroke="#3E5364"
              strokeOpacity="0.35"
              strokeWidth="1.5"
            />
            <line
              x1={nodes.hub.x}
              y1={nodes.hub.y}
              x2={nodes.fieldServices.x}
              y2={nodes.fieldServices.y}
              stroke="#FF6B35"
              strokeWidth="2"
              strokeDasharray="8 16"
              className="animate-signal"
            />
            <line
              x1={nodes.hub.x}
              y1={nodes.hub.y}
              x2={nodes.vita.x}
              y2={nodes.vita.y}
              stroke="#E8A33D"
              strokeWidth="2"
              strokeDasharray="8 16"
              className="animate-signal"
              style={{ animationDelay: "0.6s" }}
            />

            <circle cx={nodes.hub.x} cy={nodes.hub.y} r="14" fill="#161D24" className="animate-blink" />
            <text
              x={nodes.hub.x}
              y={nodes.hub.y + 34}
              textAnchor="middle"
              fontFamily="var(--font-plex-mono)"
              fontSize="11"
              fontWeight={600}
              fill="#161D24"
            >
              {nodes.hub.label}
            </text>

            <circle cx={nodes.fieldServices.x} cy={nodes.fieldServices.y} r="9" fill="#FF6B35" />
            <text
              x={nodes.fieldServices.x}
              y={nodes.fieldServices.y - 18}
              textAnchor="middle"
              fontFamily="var(--font-plex-mono)"
              fontSize="10.5"
              fill="#3E5364"
            >
              {nodes.fieldServices.label}
            </text>

            <circle cx={nodes.vita.x} cy={nodes.vita.y} r="9" fill="#E8A33D" />
            <text
              x={nodes.vita.x}
              y={nodes.vita.y + 24}
              textAnchor="middle"
              fontFamily="var(--font-plex-mono)"
              fontSize="10.5"
              fill="#3E5364"
            >
              {nodes.vita.label}
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
