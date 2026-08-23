import Reveal from "./Reveal";

const stories = [
  {
    quote:
      "I moved here knowing no one. Six weeks into the supper club and I have a standing Thursday plan again.",
    name: "John B.",
    where: "Chicago",
  },
  {
    quote: "I've made more actual friends from one Circle than from three years of apps.",
    name: "Allison W.",
    where: "Austin",
  },
  {
    quote: "No profile to maintain, no matches to manage. Just a table with my name on it.",
    name: "Carlos M.",
    where: "Oakland",
  },
];

export default function Stories() {
  return (
    <section id="stories" className="bg-paper py-24 text-ink">
      <div className="mx-auto max-w-[1180px] px-8">
        <Reveal className="mb-14 max-w-[640px]">
          <div className="mb-[10px] flex items-center gap-[10px] font-mono text-[12.5px] uppercase tracking-[0.11em] text-clay before:h-px before:w-[22px] before:bg-clay before:content-['']">
            From the guestbook
          </div>
          <h2 className="font-display text-[28px] font-semibold sm:text-[36px] lg:text-[42px]">
            Signed by people who showed up.
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <Reveal key={story.name}>
              <div className="h-full rounded-2xl border border-ink/[0.14] bg-white p-7">
                <p className="mb-5 text-[16.5px] text-ink">&ldquo;{story.quote}&rdquo;</p>
                <div className="flex items-center justify-between font-script text-2xl text-clay">
                  {story.name}
                  <span className="font-mono text-[11px] text-ink/50">{story.where}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
