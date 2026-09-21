import Reveal from "@/components/Reveal";

export default function AikiboxProducts() {
  return (
    <section id="products" className="bg-aiki-ink py-24 text-aiki-paper">
      <div className="mx-auto max-w-[1180px] px-8">
        <Reveal className="mb-14 max-w-[640px]">
          <div className="mb-[10px] flex items-center gap-[10px] font-mono text-[12.5px] uppercase tracking-[0.11em] text-aiki-accent-bright before:h-px before:w-[22px] before:bg-aiki-accent-bright before:content-['']">
            Two products, one company
          </div>
          <h2 className="font-aiki-display text-[28px] font-semibold tracking-tight sm:text-[36px] lg:text-[42px]">
            What AIKIBOX builds.
          </h2>
        </Reveal>

       <div className="grid gap-6 lg:grid-cols-2">
  <Reveal>
    
      <a href="/martech"
      className="group flex h-full flex-col justify-between gap-8 rounded-2xl border border-aiki-paper/10 bg-white/[0.03] p-10 transition hover:border-aiki-accent/50"
    >
      <div>
        <div className="mb-3 flex items-center gap-2">
          <span className="h-2.5 w-2.5 bg-aiki-accent" />
          <span className="font-mono text-[12px] uppercase tracking-[0.1em] text-aiki-accent-bright">
            Product 01
          </span>
        </div>
        <h3 className="font-aiki-display text-[26px] font-semibold sm:text-[30px]">
          AikiCore
        </h3>
        <p className="mt-3 max-w-[52ch] text-[15px] text-aiki-paper/65">
          On-site network cabling, IT deployment, and systems
          integration for businesses that can&apos;t afford downtime.
        </p>
      </div>
      <span className="inline-flex w-fit items-center gap-2 rounded-full bg-aiki-accent px-6 py-3 text-[14.5px] font-semibold text-aiki-ink transition group-hover:bg-aiki-accent-bright">
        Explore AikiCore →
      </span>
    </a>
  </Reveal>

  <Reveal>
    
      <a href="/vita"
      className="group flex h-full flex-col justify-between gap-8 rounded-2xl border border-aiki-paper/10 bg-white/[0.03] p-10 transition hover:border-aiki-accent/50"
    >
      <div>
        <div className="mb-3 flex items-center gap-2">
          <span className="h-2.5 w-2.5 bg-aiki-accent" />
          <span className="font-mono text-[12px] uppercase tracking-[0.1em] text-aiki-accent-bright">
            Product 02
          </span>
        </div>
        <h3 className="font-aiki-display text-[26px] font-semibold sm:text-[30px]">
          Vita
        </h3>
        <p className="mt-3 max-w-[52ch] text-[15px] text-aiki-paper/65">
          A social platform that gets people into real Circles, a
          trail run, a supper club, a board game night instead of
          another profile grid.
        </p>
      </div>
      <span className="inline-flex w-fit items-center gap-2 rounded-full bg-aiki-accent px-6 py-3 text-[14.5px] font-semibold text-aiki-ink transition group-hover:bg-aiki-accent-bright">
        Explore Vita →
      </span>
    </a>
  </Reveal>
</div>
      </div>
    </section>
  );
}
