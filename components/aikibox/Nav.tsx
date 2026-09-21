export default function AikiboxNav({ product }: { product?: string }) {
  return (
    <header className="sticky top-0 z-50 border-b border-aiki-ink/10 bg-aiki-paper/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1180px] items-center justify-between px-8 py-[18px]">
        <div className="flex items-center gap-3">
          <a href="/" className="flex items-center gap-2 font-aiki-display text-[20px] font-semibold tracking-tight text-aiki-ink">
            <span className="h-2.5 w-2.5 bg-aiki-accent" />
            AIKIBOX
          </a>
          {product && (
            <>
              <span className="h-3 w-px bg-aiki-ink/20" />
              <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-aiki-ink/50">
                {product}
              </span>
            </>
          )}
        </div>
        <ul className="hidden gap-8 md:flex">
          <li>
            <a href="/#products" className="text-[14.5px] text-aiki-ink/70 transition hover:text-aiki-ink">
              Products
            </a>
          </li>
          <li>
            <a href="/martech" className="text-[14.5px] text-aiki-ink/70 transition hover:text-aiki-ink">
              AikiCore
            </a>
          </li>
          <li>
            <a href="/vita" className="text-[14.5px] text-aiki-ink/70 transition hover:text-aiki-ink">
              Vita
            </a>
          </li>
          <li>
            <a href="/#contact" className="text-[14.5px] text-aiki-ink/70 transition hover:text-aiki-ink">
              Contact
            </a>
          </li>
        </ul>
        <a
          href="/#contact"
          className="inline-flex items-center gap-2 rounded-sm bg-aiki-ink px-[20px] py-[10px] text-[14px] font-semibold text-aiki-paper transition hover:bg-aiki-steel"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}
