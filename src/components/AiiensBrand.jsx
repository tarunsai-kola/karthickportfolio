import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { aiiensBrand } from '../data/portfolioData';

export default function AiiensBrand() {
  const initiatives = [
    {
      num: '01',
      name: 'AIIENS HEALTH',
      category: 'HEALTHCARE TECHNOLOGY',
      description: 'Digital healthcare and clinic management technology.',
      logo: '/images/brand/aiiens-health.png',
      url: 'https://www.aiiens.com'
    },
    {
      num: '02',
      name: 'AIIENS CAMPUS',
      category: 'EDUCATION TECHNOLOGY',
      description: 'Practical learning and technology education.',
      logo: '/images/brand/aiiens-campus.png',
      url: 'https://www.aiienscampus.in'
    },
    {
      num: '03',
      name: 'AIIENS FOUNDATION',
      category: 'SOCIAL IMPACT',
      description: 'Technology-enabled social impact and fundraising initiatives.',
      logo: '/images/brand/aiiens-foundation.png',
      url: 'https://www.aiiensfoundation.online'
    }
  ];

  return (
    <section id="aiiens" className="relative scroll-mt-32 px-4 py-16 sm:px-8 sm:py-24 bg-black text-white">
      <div className="mx-auto w-full max-w-5xl">
        
        {/* Section Header */}
        <div className="mb-12 text-left">
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
            THE ECOSYSTEM
          </span>

          <h2 className="mt-3 text-3xl sm:text-5xl font-display font-bold tracking-tight text-white uppercase">
            AIIENS
          </h2>

          <p className="mt-4 max-w-3xl text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            Advanced Intelligence Integration for Enhanced Network Systems. A master brand building useful technology across healthcare, education, and social impact.
          </p>
        </div>

        {/* 3 Horizontal Initiative Cards */}
        <div className="space-y-4">
          {initiatives.map((item) => (
            <a
              key={item.num}
              href={item.url}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl border border-white/10 bg-slate-950/40 transition-all duration-300 hover:border-cyan-400/50 hover:bg-slate-950/80 hover:shadow-[0_0_30px_rgba(0,210,255,0.15)]"
            >
              {/* Left: Number + Logo + Text */}
              <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                {/* Index Number */}
                <span className="text-xs sm:text-sm font-mono text-slate-500 shrink-0 w-6">
                  {item.num}
                </span>

                {/* Squircle Logo */}
                <div className="size-16 sm:size-20 rounded-2xl bg-white p-2.5 shrink-0 shadow-md flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain rounded-xl"
                  />
                </div>

                {/* Info */}
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-orbitron font-bold tracking-wider text-white group-hover:text-cyan-400 transition-colors uppercase">
                    {item.name}
                  </h3>
                  <p className="mt-0.5 text-[11px] sm:text-xs font-mono tracking-wider text-cyan-400 uppercase">
                    {item.category}
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-slate-400 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Right: Visit Link */}
              <div className="flex items-center gap-1.5 self-end sm:self-center shrink-0 pl-10 sm:pl-4 text-xs font-mono font-bold tracking-widest text-slate-400 group-hover:text-cyan-400 transition-colors uppercase">
                <span>VISIT</span>
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>
          ))}
        </div>

        {/* Small Footnote */}
        <div className="mt-8 text-center sm:text-left">
          <p className="text-[10px] sm:text-xs font-mono tracking-widest text-slate-500 uppercase">
            LINKS OPEN THE OFFICIAL INITIATIVE WEBSITES IN A NEW TAB
          </p>
        </div>

      </div>
    </section>
  );
}
