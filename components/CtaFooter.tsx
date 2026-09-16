import Reveal from "./Reveal";

export function Cta() {
  return (
    <section
      id="join"
      className="relative overflow-hidden bg-ink py-28 pb-24 text-center"
    >
      <div className="pointer-events-none absolute bottom-[-260px] left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(201,97,79,0.22)_0%,transparent_65%)]" />

      <div className="relative mx-auto max-w-[1180px] px-8">
        <Reveal>
          <h2 className="mx-auto max-w-[16ch] font-display text-[30px] font-semibold text-paper sm:text-[40px] lg:text-[52px]">
            Pull up a chair.
          </h2>
        </Reveal>
         <Reveal>
          <p className="mx-auto mt-5 max-w-[44ch] text-[17px] text-paper/70">
            Tell us what you&apos;re into. We&apos;ll tell you where to be, and
            who&apos;ll already be there.
          </p>
          <div className="mt-4 flex items-center justify-center gap-5">
            <div className="flex items-center gap-2 text-paper/60">
              <svg
                viewBox="0 0 384 512"
                className="h-5 w-5 fill-current"
                aria-hidden="true"
              >
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141 4 184.8 4 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 37.6 59 129.3 107.2 127.8 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-84.1 102.6-121.8-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg>
              <span className="text-[13px] font-medium">iOS coming soon</span>
            </div>
            <div className="flex items-center gap-2 text-paper/60">
              <svg
                viewBox="0 0 576 512"
                className="h-5 w-5 fill-current"
                aria-hidden="true"
              >
                <path d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55" />
              </svg>
              <span className="text-[13px] font-medium">
                Android coming soon
              </span>
            </div>
          </div>
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
          <span className="text-[13px] text-paper/50">
            © 2026 Vita Inc. All rights reserved
          </span>
          <a
            href="/"
            className="text-[12px] text-paper/40 transition hover:text-paper/70"
          >
            A product of AIKIBOX
          </a>
        </div>
        <ul className="flex gap-[22px]">
          <li>
            <a
              href="#how"
              className="text-[13px] text-paper/50 transition hover:text-paper"
            >
              How it works
            </a>
          </li>
          <li>
            <a
              href="#circles"
              className="text-[13px] text-paper/50 transition hover:text-paper"
            >
              Circles
            </a>
          </li>
          <li>
            <a
              href="#stories"
              className="text-[13px] text-paper/50 transition hover:text-paper"
            >
              Stories
            </a>
          </li>
          <li>
            <a
              href="/privacy"
              className="text-[13px] text-paper/50 transition hover:text-paper"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/terms"
              className="text-[13px] text-paper/50 transition hover:text-paper"
            >
              Terms of Service
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
