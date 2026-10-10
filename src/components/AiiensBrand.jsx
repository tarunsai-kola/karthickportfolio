import React from 'react';
import { ArrowRight, ExternalLink, CheckCircle2, Shield, Heart, GraduationCap, Activity, Globe } from 'lucide-react';
import { aiiensBrand } from '../data/portfolioData';

export default function AiiensBrand() {
  return (
    <section id="aiiens" className="scroll-mt-28 px-5 py-16 sm:px-8 sm:py-24 pt-0 text-white">
      <div className="mx-auto w-full max-w-6xl">
        {/* Section Header */}
        <div className="surface-panel p-8 sm:p-12 mb-10 overflow-hidden relative">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] items-center">
            <div>
              <p className="label-mono mb-2">// OVERARCHING BRAND</p>
              <h2 className="text-3xl font-extrabold sm:text-5xl text-white tracking-tight">
                {aiiensBrand.name}
              </h2>
              <p className="mt-2 text-xs sm:text-sm font-mono text-cyan-400 font-medium tracking-wide">
                {aiiensBrand.expansion}
              </p>
              
              <div className="mt-4 inline-block px-3.5 py-1.5 bg-slate-900/90 border border-white/15 rounded-lg text-xs font-mono text-slate-300">
                MOTTO: <span className="text-cyan-400 font-bold">"{aiiensBrand.tagline}"</span>
              </div>

              <p className="mt-5 text-base leading-relaxed text-slate-300">
                {aiiensBrand.description}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={aiiensBrand.website}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-mono font-bold uppercase tracking-widest text-black shadow-lg hover:bg-cyan-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                >
                  <Globe className="size-3.5" />
                  <span>Visit {aiiensBrand.domain}</span>
                  <ExternalLink className="size-3" />
                </a>
              </div>
            </div>

            {/* Official AIIENS Master Brand Card */}
            <div className="overflow-hidden rounded-2xl border border-white/20 shadow-2xl charcoal-hero-card p-2 group">
              <div className="relative aspect-16/9 w-full overflow-hidden rounded-xl bg-slate-950">
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
              className="reveal surface-card flex flex-col justify-between p-6 sm:p-8 hover:border-cyan-400/50 transition-all duration-300 group"
              data-visible="true"
              style={{ '--reveal-delay': `${index * 100}ms` }}
            >
              <div>
                {/* Header with Logo and Category */}
                <div className="flex items-start justify-between gap-4">
                  <div className="size-20 shrink-0 overflow-hidden rounded-2xl border border-white/15 bg-slate-950 p-2 shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:border-cyan-400/40">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="rounded-md px-2.5 py-1 font-mono text-[10px] font-semibold border bg-cyan-500/10 text-cyan-400 border-cyan-500/30 uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="mt-5 text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {item.name}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>

                {/* Target Audience */}
                <div className="mt-4 pt-3 border-t border-white/10">
                  <p className="label-mono text-[10px] text-slate-400 mb-1">// TARGET AUDIENCE</p>
                  <p className="text-xs text-slate-200 font-medium">
                    {item.targetAudience}
                  </p>
                </div>

                {/* Key Focus Points */}
                <div className="mt-4 pt-3 border-t border-white/10">
                  <p className="label-mono text-[10px] text-slate-400 mb-2">// CORE FOCUS</p>
                  <ul className="space-y-1.5">
                    {item.focus.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="size-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 px-4 py-3 text-xs font-mono uppercase tracking-widest font-bold text-slate-200 border border-white/15 transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:border-cyan-400 group/btn"
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
