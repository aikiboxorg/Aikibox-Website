import Reveal from "./Reveal";

const steps = [
  {
    num: "01",
    title: "Say what lights you up",
    body: "A few honest answers, not a personality quiz. What you'd actually want to spend a Tuesday night doing.",
    chips: ["pottery", "trail running", "chess"],
  },
  {
    num: "02",
    title: "Get placed in a Circle",
    body: "Six to ten people, matched on interest and availability; not a stack of individual matches to sort through.",
    chips: ["6–10 people", "near you"],
  },
  {
    num: "03",
    title: "Show up",
    body: "Your first meet is on Vita, always. If it's not your people, you're moved to a different Circle; no awkward exit required.",
    chips: ["first meet's on us"],
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-paper py-24 text-ink">
      <div className="mx-auto max-w-[1180px] px-8">
        <Reveal className="mb-14 max-w-[640px]">
          <div className="mb-[10px] flex items-center gap-[10px] font-mono text-[12.5px] uppercase tracking-[0.11em] text-clay before:h-px before:w-[22px] before:bg-clay before:content-['']">
            How it works
          </div>
          <h2 className="font-display text-[28px] font-semibold sm:text-[36px] lg:text-[42px]">
            Three steps, no profile grid.
          </h2>
          <p className="mt-4 text-[17px] text-ink/[0.68]">
            No swiping, no scoring. Just a way into a room that already fits you.
          </p>
        </Reveal>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <Reveal key={step.num}>
              <div className="h-full rounded-2xl border border-ink/[0.14] bg-white p-7 pr-[26px]">
                <span className="mb-[18px] inline-block rounded-full bg-marigold/[0.14] px-[10px] py-1 font-mono text-[13px] text-marigold">
                  {step.num}
                </span>
                <h3 className="mb-2.5 text-xl">{step.title}</h3>
                <p className="text-[15px] text-ink/[0.66]">{step.body}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {step.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-md border border-ink/[0.14] bg-paper-dim px-[10px] py-[5px] font-mono text-[11.5px] text-ink"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
