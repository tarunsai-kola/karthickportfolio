import React from 'react';
import { ArrowRight, Sparkles, Activity, GraduationCap, HeartHandshake, ShieldCheck } from 'lucide-react';
import { personalInfo, aiiensBrand } from '../data/portfolioData';

export default function Hero({ onSelectInitiative }) {
  return (
    <section id="hero" className="hero-wash px-5 pb-16 pt-32 sm:px-8 sm:pb-24 sm:pt-40">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col items-center gap-10 text-center lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:text-left">
          {/* Main Hero Copy */}
          <div className="order-2 max-w-3xl rise lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-accent-soft px-3.5 py-1 text-xs font-mono text-primary font-semibold">
              <span className="size-2 rounded-full bg-primary animate-pulse" />
              <span>{personalInfo.identity}</span>
            </div>

            <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-6xl text-foreground leading-[1.1]">
              {personalInfo.heroHeading}
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
              {personalInfo.heroSubtitle}
            </p>

            {/* Brand Motto Bar */}
            <div className="mt-5 inline-flex items-center gap-2 text-xs font-mono text-muted-foreground bg-surface px-3 py-1.5 rounded-lg border border-border">
              <span className="font-semibold text-foreground">Brand: {personalInfo.brandName}</span>
              <span>·</span>
              <span className="text-primary font-medium">"{personalInfo.tagline}"</span>
            </div>

            {/* 3 Call-To-Action Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-all duration-300 bg-primary text-white px-5 py-3 shadow-accent hover:bg-primary-hover hover:scale-[1.02] arrow-nudge"
                href="#aiiens"
              >
                <span>Explore AIIENS</span>
                <ArrowRight className="size-4" />
              </a>

              <a
                className="inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-all duration-300 border border-border-strong bg-white text-foreground px-5 py-3 hover:bg-surface hover:border-foreground/30 arrow-nudge"
                href="#about"
              >
                <span>About Me</span>
              </a>

              <a
                className="inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-all duration-300 border border-border bg-surface text-muted-foreground px-5 py-3 hover:text-foreground hover:bg-surface-hover arrow-nudge"
                href="#contact"
              >
                <span>Connect With Me</span>
              </a>
            </div>
          </div>

          {/* Hero Portrait with Executive Frame */}
          <div className="order-1 shrink-0 lg:order-2">
            <div className="relative">
              {/* Subtle Cyan Glow Backdrop */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-primary/20 via-cyan-glow/20 to-primary/20 blur-xl opacity-70" />

              <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-white p-2 shadow-2xl ring-1 ring-black/5">
                <div className="relative mx-auto aspect-3/4 w-44 overflow-hidden rounded-2xl sm:w-56 md:w-64 lg:w-80">
                  <img
                    alt="Karthikeya Pantam, Founder & Technology Entrepreneur"
                    className="object-cover object-top w-full h-full transition-transform duration-700 hover:scale-105"
                    src={personalInfo.profileImage}
                  />
                  {/* Subtle Badge Overlay */}
                  <div className="absolute bottom-3 inset-x-3 rounded-xl bg-charcoal/85 backdrop-blur-md px-3 py-2 text-white border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold leading-tight">{personalInfo.name}</p>
                      <p className="text-[10px] font-mono text-cyan-400">Founder · {personalInfo.brandName}</p>
                    </div>
                    <span className="size-2 rounded-full bg-cyan-400 animate-ping" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Launch Cards for 3 AIIENS Initiatives */}
        <div className="mt-14 grid gap-4 sm:mt-20 sm:grid-cols-3">
          {aiiensBrand.initiatives.map((item, index) => (
            <a
              key={item.id}
              href="#aiiens"
              className="reveal surface-card p-5 group flex flex-col justify-between hover:border-primary/50 cursor-pointer"
              data-visible="true"
              style={{ '--reveal-delay': `${index * 80}ms` }}
            >
              <div className="flex items-center gap-3">
                <div className="size-12 shrink-0 rounded-xl overflow-hidden bg-surface p-1 border border-border flex items-center justify-center group-hover:scale-105 transition-transform">
                  <img src={item.logo} alt={item.name} className="w-full h-full object-contain" />
                </div>
                <div>
                  <span className={`inline-block rounded-md px-2 py-0.5 text-[10px] font-mono font-medium border ${item.badgeColor}`}>
                    {item.category}
                  </span>
                  <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors mt-0.5">
                    {item.name}
                  </h3>
                </div>
              </div>
              <p className="mt-3 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                {item.description}
              </p>
              <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs font-mono text-primary group-hover:underline">
                <span>View initiative</span>
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
