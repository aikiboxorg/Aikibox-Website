import Reveal from "@/components/Reveal";

const services = [
  {
    title: "Network Cabling & Installation",
    body: "Structured cabling, rack builds, and wireless deployment sized to the site, not a template.",
  },
  {
    title: "On-Site IT Deployment",
    body: "Hardware rollouts, workstation setup, and go-live support with a technician physically in the room.",
  },
  {
    title: "Systems Integration & Support",
    body: "Ongoing support and integration work across the systems a business already depends on.",
  },
  {
    title: "Clinical & Enterprise Systems",
    body: "Deployment and support experience with clinical platforms like Epic, alongside standard enterprise tooling.",
  },
];

export default function AikiboxServices() {
  return (
    <section id="services" className="bg-aiki-ink py-24 text-aiki-paper">
      <div className="mx-auto max-w-[1180px] px-8">
        <Reveal className="mb-14 max-w-[640px]">
          <div className="mb-[10px] flex items-center gap-[10px] font-mono text-[12.5px] uppercase tracking-[0.11em] text-aiki-accent-bright before:h-px before:w-[22px] before:bg-aiki-accent-bright before:content-['']">
            What we do
          </div>
          <h2 className="font-aiki-display text-[28px] font-semibold tracking-tight sm:text-[36px] lg:text-[42px]">
            Infrastructure work, handled on-site.
          </h2>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {services.map((service) => (
            <Reveal key={service.title}>
              <div className="h-full border-l-2 border-aiki-accent bg-white/[0.03] p-7">
                <h3 className="mb-2 font-aiki-display text-[19px] font-semibold">{service.title}</h3>
                <p className="text-[15px] text-aiki-paper/65">{service.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
