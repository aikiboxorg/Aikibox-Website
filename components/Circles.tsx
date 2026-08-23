import Reveal from "./Reveal";

const circles = [
  { name: "Sunday Trail Runners", meta: "Oakland · 8 going", body: "Easy 5k, slow pace, faster coffee after.", rotate: "-1.2deg" },
  { name: "New-in-Town Supper Club", meta: "Chicago · 6 going", body: "Potluck rotation for people still learning the neighborhood.", rotate: "0.8deg" },
  { name: "Late Night Board Games", meta: "Austin · 7 going", body: "Long games, bad strategy, snacks mandatory.", rotate: "-0.6deg" },
  { name: "Career Pivot Circle", meta: "Remote · 9 going", body: "People rebuilding mid-career, comparing notes weekly.", rotate: "1.1deg" },
  { name: "Dawn Rowers", meta: "Boston · 5 going", body: "On the water before the city wakes up.", rotate: "-0.9deg" },
  { name: "Cookbook Club", meta: "Portland · 6 going", body: "One cookbook a month, one dish each, one big table.", rotate: "0.5deg" },
];

export default function Circles() {
  return (
    <section id="circles" className="bg-ink py-24">
      <div className="mx-auto max-w-[1180px] px-8">
        <Reveal className="mb-14 max-w-[640px]">
          <div className="mb-[10px] flex items-center gap-[10px] font-mono text-[12.5px] uppercase tracking-[0.11em] text-marigold-bright before:h-px before:w-[22px] before:bg-marigold-bright before:content-['']">
            Circles meeting this week
          </div>
          <h2 className="font-display text-[28px] font-semibold text-paper sm:text-[36px] lg:text-[42px]">
            Real tables, real times.
          </h2>
          <p className="mt-4 text-[17px] text-paper/[0.66]">
            Every Circle has a place, a time, and a first name you&apos;ll actually
            remember.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {circles.map((circle) => (
            <Reveal key={circle.name}>
              <div
                className="group relative h-full rounded-xl border border-paper/[0.16] bg-ink-soft p-6 rotate-[var(--r)] transition-transform duration-200 ease-out hover:-translate-y-1 hover:rotate-0 hover:border-marigold-bright"
                style={{ "--r": circle.rotate } as React.CSSProperties}
              >
                <span className="absolute -top-1.5 left-[22px] h-3 w-3 rounded-full bg-clay shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
                <h3 className="mb-1.5 text-lg text-paper">{circle.name}</h3>
                <div className="mb-3 font-mono text-xs text-marigold-bright">{circle.meta}</div>
                <p className="text-sm text-paper/[0.62]">{circle.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
