import HelloCounter from "./HelloCounter";

const nametags = [
  { name: "Maya", about: "Pottery, pub quizzes, terrible karaoke", rotate: "-rotate-[9deg] -translate-x-[108px] translate-y-[10px] z-10" },
  { name: "Derek", about: "Trail running, worse dad jokes", rotate: "-rotate-3 -translate-x-10 -translate-y-[38px] z-20" },
  { name: "Priya", about: "New in town, hunting for a supper club", rotate: "rotate-[4deg] translate-x-[46px] translate-y-1 z-30" },
  { name: "Sam", about: "Board games, chess, losing gracefully", rotate: "-rotate-[6deg] translate-x-1 translate-y-[72px] z-20" },
  { name: "Ofelia", about: "Cookbook club, always brings extra", rotate: "rotate-[10deg] translate-x-[112px] -translate-y-[22px] z-10" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 pb-20">
      <div className="pointer-events-none absolute left-1/2 top-[-220px] h-[600px] w-[900px] -translate-x-1/2 animate-breathe rounded-full bg-[radial-gradient(circle,rgba(232,163,61,0.20)_0%,rgba(232,163,61,0.06)_45%,transparent_70%)]" />

      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-14 px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-[22px] flex items-center gap-[10px] font-mono text-[12.5px] uppercase tracking-[0.11em] text-marigold-bright before:h-px before:w-[22px] before:bg-marigold-bright before:content-['']">
            A place to actually show up
          </div>
          <h1 className="font-display text-[38px] font-semibold leading-[1.04] sm:text-[52px] lg:text-[64px]">
            Small talk was
            <br />
            never <em className="font-medium not-italic italic text-marigold-bright">the point.</em>
          </h1>
          <p className="mt-[22px] max-w-[46ch] text-lg leading-[1.65] text-paper/[0.78]">
            Vita gets you into real rooms — a Tuesday trail run, a supper club, a
            table of strangers playing board games badly — with people who showed
            up on purpose, not by algorithm.
          </p>
          <div className="mt-[34px] flex flex-wrap gap-[14px]">
            <a
              href="#join"
              className="inline-flex items-center gap-2 rounded-full bg-marigold px-[26px] py-[14px] text-[15.5px] font-semibold text-ink transition hover:-translate-y-px hover:bg-marigold-bright hover:shadow-[0_8px_20px_rgba(232,163,61,0.28)]"
            >
              Find your Circle
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-full border border-paper/[0.16] px-[26px] py-[14px] text-[15.5px] font-semibold transition hover:border-paper/40"
            >
              See how it works
            </a>
          </div>

          <div className="mt-[52px] flex flex-wrap gap-x-10 gap-y-7 border-t border-paper/[0.16] pt-7 font-mono">
            <div className="text-[13px] text-paper/60">
              <b className="mb-0.5 block font-display text-[22px] font-semibold text-paper">
                <HelloCounter /> <span className="text-marigold-bright">↑</span>
              </b>
              hellos said this week
            </div>
            <div className="text-[13px] text-paper/60">
              <b className="mb-0.5 block font-display text-[22px] font-semibold text-paper">63</b>
              circles meeting tonight
            </div>
            <div className="text-[13px] text-paper/60">
              <b className="mb-0.5 block font-display text-[22px] font-semibold text-paper">12</b>
              cities, growing
            </div>
          </div>
        </div>

        <div className="relative flex h-[340px] scale-[0.82] items-center justify-center sm:h-[420px] sm:scale-100" aria-hidden="true">
          {nametags.map((tag) => (
            <div
              key={tag.name}
              className={`group absolute w-[250px] rounded-[10px] bg-paper px-[22px] pb-5 pt-[22px] text-ink shadow-[0_18px_36px_rgba(0,0,0,0.32)] transition-transform duration-300 ease-out hover:z-40 hover:-translate-y-1.5 hover:translate-x-0 hover:rotate-0 hover:scale-105 hover:shadow-[0_24px_48px_rgba(0,0,0,0.4)] ${tag.rotate}`}
            >
              <div className="absolute left-1/2 top-[10px] h-1.5 w-[34px] -translate-x-1/2 rounded-full bg-ink/[0.14]" />
              <div className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.1em] text-clay">
                Hello, my name is
              </div>
              <div className="mt-1.5 font-display text-[23px] font-semibold text-ink">{tag.name}</div>
              <div className="mt-2 text-[13.5px] text-ink/[0.68]">{tag.about}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
