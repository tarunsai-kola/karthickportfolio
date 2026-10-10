import React from 'react';
import { ArrowRight, ExternalLink, CheckCircle2, Shield, Heart, GraduationCap, Activity, Globe } from 'lucide-react';
import { aiiensBrand } from '../data/portfolioData';

export default function AiiensBrand() {
  return (
    <section id="aiiens" className="scroll-mt-28 px-5 py-16 sm:px-8 sm:py-24 pt-0">
      <div className="mx-auto w-full max-w-6xl">
        {/* Section Header */}
        <div className="surface-panel p-8 sm:p-12 mb-10 overflow-hidden relative">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] items-center">
            <div>
              <p className="label-mono mb-2">Overarching Brand</p>
              <h2 className="text-3xl font-extrabold sm:text-5xl text-foreground tracking-tight">
                {aiiensBrand.name}
              </h2>
              <p className="mt-2 text-sm font-mono text-primary font-medium tracking-wide">
                {aiiensBrand.expansion}
              </p>
              
              <div className="mt-4 inline-block px-3 py-1 bg-surface border border-border rounded-lg text-xs font-mono font-semibold text-foreground">
                Motto: <span className="text-primary font-bold">"{aiiensBrand.tagline}"</span>
              </div>

              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                {aiiensBrand.description}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={aiiensBrand.website}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-2.5 text-xs font-semibold text-white shadow-soft hover:bg-primary transition-all duration-300"
                >
                  <Globe className="size-3.5" />
                  <span>Visit {aiiensBrand.domain}</span>
                  <ExternalLink className="size-3" />
                </a>
              </div>
            </div>

            {/* Official AIIENS Master Brand Card */}
            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl charcoal-hero-card p-2 group">
              <div className="relative aspect-16/9 w-full overflow-hidden rounded-xl bg-black">
                <img
                  src={aiiensBrand.masterCard}
                  alt="AIIENS Master Brand Card"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Initiatives Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {aiiensBrand.initiatives.map((item, index) => (
            <div
              key={item.id}
              className="reveal surface-card flex flex-col justify-between p-6 sm:p-8 hover:border-primary/60 transition-all duration-300 group"
              data-visible="true"
              style={{ '--reveal-delay': `${index * 100}ms` }}
            >
              <div>
                {/* Header with Logo and Category */}
                <div className="flex items-start justify-between gap-4">
                  <div className="size-20 shrink-0 overflow-hidden rounded-2xl border border-border bg-white p-2 shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:border-primary/40">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className={`rounded-md px-2.5 py-1 font-mono text-[11px] font-semibold border ${item.badgeColor}`}>
                    {item.category}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="mt-5 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {item.name}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>

                {/* Target Audience */}
                <div className="mt-4 pt-3 border-t border-border">
                  <p className="label-mono text-[10px] text-muted-foreground mb-1">Target Audience</p>
                  <p className="text-xs text-foreground font-medium">
                    {item.targetAudience}
                  </p>
                </div>

                {/* Key Focus Points */}
                <div className="mt-4 pt-3 border-t border-border">
                  <p className="label-mono text-[10px] text-muted-foreground mb-2">Core Focus</p>
                  <ul className="space-y-1.5">
                    {item.focus.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-border">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-surface px-4 py-2.5 text-xs font-semibold text-foreground border border-border transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary group/btn"
                >
                  <span>{item.ctaText}</span>
                  <ExternalLink className="size-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
