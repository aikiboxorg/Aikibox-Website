export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-paper/[0.16] bg-ink/[0.86] backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1180px] items-center justify-between px-8 py-[18px]">
        <div className="flex items-center gap-3">
          <a
            href="/"
            className="font-mono text-[11px] uppercase tracking-[0.1em] text-paper/50 transition hover:text-paper/80"
          >
            AIKIBOX
          </a>
          <span className="h-3 w-px bg-paper/20" />
          <a href="/vita" className="flex items-center gap-2 font-display text-[22px] font-semibold">
            <span className="h-2.5 w-2.5 rounded-full bg-marigold shadow-[0_0_0_4px_rgba(232,163,61,0.18)]" />
            Vita
          </a>
        </div>
        <ul className="hidden gap-8 md:flex">
          <li>
            <a href="#how" className="text-[14.5px] text-paper/[0.78] transition hover:text-paper hover:opacity-100">
              How it works
            </a>
          </li>
          <li>
            <a href="#circles" className="text-[14.5px] text-paper/[0.78] transition hover:text-paper hover:opacity-100">
              Circles
            </a>
          </li>
          <li>
            <a href="#stories" className="text-[14.5px] text-paper/[0.78] transition hover:text-paper hover:opacity-100">
              Stories
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-5">
          <a
            href="#"
            className="hidden rounded-full border border-paper/[0.16] px-[22px] py-[11px] text-[14.5px] font-semibold transition hover:border-paper/40 md:inline-flex"
          >
            Log in
          </a>
          <a
            href="#join"
            className="inline-flex rounded-full bg-marigold px-[22px] py-[11px] text-[14.5px] font-semibold text-ink transition hover:-translate-y-px hover:bg-marigold-bright hover:shadow-[0_8px_20px_rgba(232,163,61,0.28)]"
          >
            Join Vita
          </a>
        </div>
      </nav>
    </header>
  );
}
