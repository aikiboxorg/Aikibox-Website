type FooterProps = {
  headline?: string;
  sub?: string;
};

export default function AikiboxFooter({
  headline = "Have a product question, or a project to talk through?",
  sub = "Reach out and we'll point you to the right team, AikiCore or Vita.",
}: FooterProps) {
  return (
    <>
      <section id="contact" className="bg-aiki-ink py-24 text-center text-aiki-paper">
        <div className="mx-auto max-w-[1180px] px-8">
          <h2 className="mx-auto max-w-[22ch] font-aiki-display text-[30px] font-semibold tracking-tight sm:text-[42px]">
            {headline}
          </h2>
          <p className="mx-auto mt-5 max-w-[44ch] text-[17px] text-aiki-paper/65">{sub}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-[14px]">
            <a
              href="mailto:hello@aikibox.com"
              className="inline-flex items-center gap-2 rounded-sm bg-aiki-accent px-[26px] py-[14px] text-[15.5px] font-semibold text-aiki-ink transition hover:bg-aiki-accent-bright"
            >
              hello@aikibox.com
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-aiki-paper/10 bg-aiki-ink py-9">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-4 px-8">
          <span className="text-[13px] text-aiki-paper/50">
            © 2026 AIKIBOX LLC. Sacramento, CA.
          </span>
          <ul className="flex gap-[22px]">
            <li>
              <a href="/martech" className="text-[13px] text-aiki-paper/50 transition hover:text-aiki-paper">
                AikiCore
              </a>
            </li>
            <li>
              <a href="/vita" className="text-[13px] text-aiki-paper/50 transition hover:text-aiki-paper">
                Vita
              </a>
            </li>
            <li>
              <a href="/#contact" className="text-[13px] text-aiki-paper/50 transition hover:text-aiki-paper">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
