import React from 'react';
import { ArrowRight, MapPin, GraduationCap, Briefcase, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="scroll-mt-28 px-5 py-16 sm:px-8 sm:py-24 pt-0 text-white">
      <div className="mx-auto w-full max-w-6xl">
        <div className="surface-panel grid gap-8 p-8 sm:p-12 lg:grid-cols-[0.8fr_1.2fr] items-center">
          {/* Portrait Photo */}
          <div className="relative aspect-3/4 w-full overflow-hidden rounded-3xl border border-white/15 shadow-2xl bg-slate-950">
            <img
              alt="Karthikeya Pantam portrait"
              loading="lazy"
              className="object-cover object-top w-full h-full"
              src={personalInfo.profileImage}
            />
            {/* Location & Status Pill */}
            <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-slate-950/90 backdrop-blur-md p-3 border border-white/15 shadow-2xl flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-white">
                <MapPin className="size-3.5 text-cyan-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                <span className="size-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>ACTIVE // AIIENS</span>
              </div>
            </div>
          </div>

          {/* Narrative & Details */}
          <div className="min-w-0">
            <p className="label-mono">// BIOGRAPHY</p>
            <h2 className="mt-3 text-2xl font-extrabold sm:text-4xl text-white tracking-tight">
              About Me
            </h2>
            
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300 font-medium">
              {personalInfo.aboutDescription}
            </p>

            {/* Quick credentials */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-xl bg-slate-900/60 p-3.5 border border-white/10">
                <Briefcase className="size-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Role</p>
                  <p className="text-sm font-semibold text-white">{personalInfo.designation} // {personalInfo.brandName}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-slate-900/60 p-3.5 border border-white/10">
                <GraduationCap className="size-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Education</p>
                  <p className="text-sm font-semibold text-white">{personalInfo.education}</p>
                </div>
              </div>
            </div>

            {/* Interests Section */}
            <div className="mt-6">
              <p className="label-mono text-xs mb-2.5">// FOCUS AREAS & INTERESTS</p>
              <div className="flex flex-wrap gap-2">
                {personalInfo.interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-lg border border-white/15 bg-slate-900/80 px-3 py-1 font-mono text-xs font-medium text-slate-300 hover:border-cyan-400 hover:text-cyan-400 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-xl text-xs font-mono uppercase tracking-widest font-bold transition-all duration-300 bg-cyan-400 text-black px-5 py-3 hover:bg-white hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] arrow-nudge"
                href="#projects"
              >
                <span>View Selected Work</span>
                <ArrowRight className="size-3.5" />
              </a>

              <a
                className="inline-flex items-center justify-center gap-2 rounded-xl text-xs font-mono uppercase tracking-widest font-semibold transition-all duration-300 border border-white/20 bg-slate-900/50 text-slate-300 px-4 py-3 hover:text-white hover:border-white/50 arrow-nudge"
                href="#contact"
              >
                <span>Get in touch</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
