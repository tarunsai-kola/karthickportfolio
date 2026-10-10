import React from 'react';
import { ArrowRight, Sparkles, Activity, GraduationCap, HeartHandshake, ShieldCheck } from 'lucide-react';
import { personalInfo, aiiensBrand } from '../data/portfolioData';

export default function Hero({ onSelectInitiative }) {
  return (
    <section id="hero" className="hero-wash px-5 pb-16 pt-32 sm:px-8 sm:pb-24 sm:pt-40 text-white">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col items-center gap-10 text-center lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:text-left">
          {/* Main Hero Copy */}
          <div className="order-2 max-w-3xl rise lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-mono text-cyan-400 font-semibold uppercase tracking-widest shadow-[0_0_15px_rgba(0,240,255,0.15)]">
              <span className="size-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>// SYSTEM: {personalInfo.identity}</span>
            </div>

            <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-6xl text-white leading-[1.08]">
              {personalInfo.heroHeading}
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg lg:mx-0">
              {personalInfo.heroSubtitle}
            </p>

            {/* Brand Motto Bar */}
            <div className="mt-5 inline-flex items-center gap-2 text-xs font-mono text-slate-300 bg-slate-900/80 px-3.5 py-1.5 rounded-lg border border-white/10 backdrop-blur-md">
              <span className="font-semibold text-white">BRAND: {personalInfo.brandName}</span>
              <span className="text-cyan-500">//</span>
              <span className="text-cyan-400 font-medium">"{personalInfo.tagline}"</span>
            </div>

            {/* 3 Call-To-Action Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-xl text-xs font-mono uppercase tracking-widest font-bold transition-all duration-300 bg-cyan-400 text-black px-6 py-3.5 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:scale-[1.02] arrow-nudge"
                href="#aiiens"
              >
                <span>Explore AIIENS</span>
                <ArrowRight className="size-4" />
              </a>

              <a
                className="inline-flex items-center justify-center gap-2 rounded-xl text-xs font-mono uppercase tracking-widest font-bold transition-all duration-300 border border-white/30 bg-white/5 text-white px-6 py-3.5 hover:bg-white hover:text-black arrow-nudge"
                href="#about"
              >
                <span>About Me</span>
              </a>

              <a
                className="inline-flex items-center justify-center gap-2 rounded-xl text-xs font-mono uppercase tracking-widest font-semibold transition-all duration-300 border border-white/15 bg-slate-900/50 text-slate-400 px-6 py-3.5 hover:text-cyan-400 hover:border-cyan-400/50 arrow-nudge"
                href="#contact"
              >
                <span>Connect With Me</span>
              </a>
            </div>
          </div>

          {/* Hero Portrait with SpaceX Technical Frame */}
          <div className="order-1 shrink-0 lg:order-2">
            <div className="relative">
              {/* Subtle Cyan Glow Backdrop */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-cyan-500/30 blur-2xl opacity-60" />

              <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-slate-950 p-2 shadow-2xl ring-1 ring-white/10">
                <div className="relative mx-auto aspect-3/4 w-44 overflow-hidden rounded-2xl sm:w-56 md:w-64 lg:w-80">
                  <img
                    alt="Karthikeya Pantam, Founder & Technology Entrepreneur"
                    className="object-cover object-top w-full h-full transition-transform duration-700 hover:scale-105"
                    src={personalInfo.profileImage}
                  />
                  {/* SpaceX Telemetry Badge Overlay */}
                  <div className="absolute bottom-3 inset-x-3 rounded-xl bg-slate-950/90 backdrop-blur-md px-3 py-2 text-white border border-white/15 flex items-center justify-between shadow-2xl">
                    <div>
                      <p className="text-xs font-bold leading-tight tracking-wide">{personalInfo.name}</p>
                      <p className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">FOUNDER // {personalInfo.brandName}</p>
                    </div>
                    <span className="size-2 rounded-full bg-cyan-400 animate-ping" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SpaceX Telemetry Initiative Cards */}
        <div className="mt-14 grid gap-4 sm:mt-20 sm:grid-cols-3">
          {aiiensBrand.initiatives.map((item, index) => (
            <a
              key={item.id}
              href="#aiiens"
              className="reveal surface-card p-5 group flex flex-col justify-between hover:border-cyan-400/50 cursor-pointer"
              data-visible="true"
              style={{ '--reveal-delay': `${index * 80}ms` }}
            >
              <div className="flex items-center gap-3">
                <div className="size-12 shrink-0 rounded-xl overflow-hidden bg-slate-950 p-1 border border-white/15 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <img src={item.logo} alt={item.name} className="w-full h-full object-contain" />
                </div>
                <div>
                  <span className="inline-block rounded-md px-2 py-0.5 text-[10px] font-mono font-medium border bg-cyan-500/10 text-cyan-400 border-cyan-500/30 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors mt-0.5">
                    {item.name}
                  </h3>
                </div>
              </div>
              <p className="mt-3 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                {item.description}
              </p>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-cyan-400 group-hover:underline uppercase tracking-wider">
                <span>Explore Initiative</span>
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
