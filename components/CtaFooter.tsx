import Reveal from "./Reveal";

export function Cta() {
  return (
    <section id="join" className="relative overflow-hidden bg-ink py-28 pb-24 text-center">
      <div className="pointer-events-none absolute bottom-[-260px] left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(201,97,79,0.22)_0%,transparent_65%)]" />

      <div className="relative mx-auto max-w-[1180px] px-8">
        <Reveal>
          <h2 className="mx-auto max-w-[16ch] font-display text-[30px] font-semibold text-paper sm:text-[40px] lg:text-[52px]">
            Pull up a chair.
          </h2>
        </Reveal>
        <Reveal>
          <p className="mx-auto mt-5 max-w-[44ch] text-[17px] text-paper/70">
            Tell us what you&apos;re into. We&apos;ll tell you where to be, and who&apos;ll
            already be there.
          </p>
        </Reveal>
        <Reveal>
          <div className="mt-9 flex flex-wrap justify-center gap-[14px]">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-marigold px-[26px] py-[14px] text-[15.5px] font-semibold text-ink transition hover:-translate-y-px hover:bg-marigold-bright hover:shadow-[0_8px_20px_rgba(232,163,61,0.28)]"
            >
              Join Vita
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-full border border-paper/[0.16] px-[26px] py-[14px] text-[15.5px] font-semibold text-paper transition hover:border-paper/40"
            >
              How it works
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-paper/[0.16] bg-ink py-9">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-4 px-8">
        <div className="flex flex-col gap-1">
          <span className="text-[13px] text-paper/50">© 2026 Vita Inc. All rights reserved</span>
          <a href="/" className="text-[12px] text-paper/40 transition hover:text-paper/70">
            A product of AIKIBOX
          </a>
        </div>
        <ul className="flex gap-[22px]">
          <li>
            <a href="#how" className="text-[13px] text-paper/50 transition hover:text-paper">
              How it works
            </a>
          </li>
          <li>
            <a href="#circles" className="text-[13px] text-paper/50 transition hover:text-paper">
              Circles
            </a>
          </li>
          <li>
            <a href="#stories" className="text-[13px] text-paper/50 transition hover:text-paper">
              Stories
            </a>
          </li>
          <li><a href="/privacy" className="text-[13px] text-paper/50 transition hover:text-paper">Privacy Policy</a></li>
<li><a href="/terms" className="text-[13px] text-paper/50 transition hover:text-paper">Terms of Service</a></li>
        </ul>
      </div>
    </footer>
  );
}
