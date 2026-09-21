import React from "react";

export default function AikiboxHomeHero() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-aiki-paper py-24 lg:py-36 text-aiki-ink flex flex-col justify-center">
      {/* Subtle Background Accent Lighting */}
      <div className="pointer-events-none absolute left-1/2 top-12 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-gradient-to-tr from-aiki-accent/10 via-transparent to-aiki-accent/5 blur-3xl opacity-60" />

      <div className="relative mx-auto max-w-[1240px] px-6 sm:px-8">
        {/* Hero Header Block */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-aiki-ink/10 bg-aiki-ink/5 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-aiki-ink/80 shadow-sm backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-aiki-accent animate-pulse" />
            A Technology Company
          </div>

          {/* Main Hero Headline */}
          <h1 className="font-aiki-display text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl leading-[1.08]">
            We build the products <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-aiki-ink via-aiki-ink/90 to-aiki-accent bg-clip-text text-transparent">
              businesses & people run on.
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg sm:text-xl text-aiki-ink/70 leading-relaxed max-w-2xl mx-auto">
            AIKIBOX builds and operates technology products engineered for high-stakes enterprise infrastructure and authentic human connection.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/martech"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-aiki-ink px-8 py-4 text-base font-medium text-aiki-paper shadow-lg shadow-aiki-ink/10 transition-all hover:bg-aiki-ink/90 hover:shadow-xl hover:-translate-y-0.5"
            >
              AikiCore
              <span className="text-aiki-paper/60">→</span>
            </a>
            <a
              href="/vita"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-aiki-ink/20 bg-transparent px-8 py-4 text-base font-medium text-aiki-ink transition-all hover:bg-aiki-ink/5 hover:border-aiki-ink/40"
            >
              Vita
              <span className="text-aiki-ink/50">→</span>
            </a>
          </div>

          {/* Indicators / Stats Row */}
          <div className="mt-16 flex items-center justify-center gap-8 border-t border-aiki-ink/10 pt-8 font-mono text-xs uppercase tracking-wider text-aiki-ink/60">
            <div>
              <span className="block font-aiki-display text-xl font-bold text-aiki-ink">
                2 Products
              </span>
              AikiCore & Vita
            </div>
            <div className="h-8 w-px bg-aiki-ink/10" />
            <div>
              <span className="block font-aiki-display text-xl font-bold text-aiki-ink">
                1 Mission
              </span>
              Built to Last
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}