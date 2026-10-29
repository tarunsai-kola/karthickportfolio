import React from 'react';
import { Sparkles, HeartPulse, GraduationCap, HeartHandshake } from 'lucide-react';
import { personalInfo, aiiensBrand } from '../data/portfolioData';

export default function About() {
  const originMilestones = [
    {
      icon: HeartPulse,
      title: "The Healthcare Spark",
      initiative: "AIIENS Health",
      story: "Visiting outpatient clinics in regional towns revealed doctors buried under fragmented paper files, delayed patient histories, and high appointment no-show rates. We started building lightweight, digital-first clinic workflow tools to give doctors back their time."
    },
    {
      icon: GraduationCap,
      title: "The Education Gap",
      initiative: "AIIENS Campus",
      story: "While studying electronics and engineering, the gulf between theoretical classroom curricula and shipping real-world software was stark. We started AIIENS Campus to give aspiring engineers hands-on project sprints, mentorship, and practical AI skills."
    },
    {
      icon: HeartHandshake,
      title: "The Trust Deficit",
      initiative: "AIIENS Foundation",
      story: "Witnessing families struggle through sudden medical emergencies while public donors remained skeptical of unverified online campaigns. We started AIIENS Foundation to create direct, authenticated medical verification and transparent disbursement."
    }
  ];

  return (
    <section id="about" className="relative scroll-mt-24 px-4 py-16 sm:px-8 sm:py-24 bg-black text-white">
      <div className="mx-auto w-full max-w-5xl">
        
        {/* Top Split: Bio & Portrait */}
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] items-center">
          
          {/* Left: Text & Bio */}
          <div className="flex flex-col text-left">
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase mb-3">
              ABOUT
            </span>

            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-white leading-tight uppercase">
              KARTHIKEYA<br />PANTAM
            </h2>

            <div className="mt-4 space-y-1 text-xs sm:text-sm font-mono tracking-wider text-slate-400 uppercase">
              <p className="text-slate-300">FOUNDER, AIIENS TECHNOLOGIES</p>
              <p className="text-slate-400">TECHNOLOGY ENTREPRENEUR | PRODUCT BUILDER</p>
            </div>

            <p className="mt-6 text-base sm:text-xl leading-relaxed text-slate-200 font-sans">
              "I build and explore useful technology products across healthcare, education, and social impact."
            </p>

            {/* Quick Summary Narrative */}
            <p className="mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
              {personalInfo.aboutDescription}
            </p>

            {/* Focus Tag Pills */}
            <div className="mt-6 flex flex-wrap gap-1.5">
              {personalInfo.interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-lg border border-white/10 bg-slate-950 px-2.5 py-1 text-[11px] font-mono text-slate-300"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Portrait with Cyan Glow Border */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-[310px] sm:max-w-[340px] aspect-[4/5] rounded-[28px] overflow-hidden border-[2.5px] border-cyan-400 shadow-[0_0_35px_rgba(0,210,255,0.45)] group transition-transform duration-500 hover:scale-[1.02]">
              {/* Corner cyan flare */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
              
              <img
                src={personalInfo.profileImage}
                alt="Karthikeya Pantam"
                className="w-full h-full object-cover object-top filter brightness-95 contrast-105"
                loading="lazy"
              />
            </div>
          </div>

        </div>

        {/* The Origin Story: How We Started */}
        <div className="mt-16 sm:mt-24 rounded-3xl border border-white/10 bg-[#040711] p-6 sm:p-10 shadow-[0_0_30px_rgba(0,210,255,0.08)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
                // ORIGIN STORY
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-display font-bold tracking-tight text-white uppercase">
                How We Started
              </h3>
            </div>
            
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3.5 py-1 text-xs font-mono text-cyan-400 shrink-0">
              <Sparkles className="size-3.5" />
              <span className="font-semibold tracking-wider">FOUNDED ON UTILITY</span>
            </div>
          </div>

          {/* Story Narrative */}
          <div className="mt-6 space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            <p>
              AIIENS didn't begin in a corporate boardroom or as a theoretical venture capital pitch. It started from hands-on observation of real-world friction right around us in India. In every sector we looked at—small clinics, college classrooms, and medical relief fundraisers—people were facing real hurdles that current software overlooked.
            </p>
            <p>
              Rather than building speculative technology for hype, we founded <strong className="text-white">AIIENS (Advanced Intelligence Integration for Enhanced Network Systems)</strong> with one foundational mantra: <span className="text-cyan-400 font-bold tracking-wide">"Build Something Useful."</span>
            </p>
          </div>

          {/* 3 Starting Genesis Chapters */}
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {originMilestones.map((milestone, idx) => {
              const Icon = milestone.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-black/60 p-5 flex flex-col justify-between transition-all hover:border-cyan-400/40 hover:bg-black/90 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="grid size-10 place-items-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-105 transition-transform">
                        <Icon className="size-5" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                        PHASE 0{idx + 1}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white font-orbitron group-hover:text-cyan-400 transition-colors uppercase">
                      {milestone.title}
                    </h4>

                    <p className="mt-1 text-[11px] font-mono text-cyan-400 uppercase font-semibold">
                      {milestone.initiative}
                    </p>

                    <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                      {milestone.story}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Row: 3 Brand Logo Squircles */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
          {aiiensBrand.initiatives.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center group cursor-pointer"
              onClick={() => {
                const el = document.getElementById('aiiens');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {/* White Squircle Icon Card */}
              <div className="size-36 sm:size-44 rounded-[36px] bg-white p-4 shadow-2xl flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(0,210,255,0.5)]">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain rounded-[24px]"
                />
              </div>

              {/* Title */}
              <h3 className="mt-5 text-sm sm:text-base font-orbitron font-bold tracking-wider text-white uppercase group-hover:text-cyan-400 transition-colors">
                {item.name}
              </h3>

              {/* Category */}
              <p className="mt-1 text-[11px] sm:text-xs font-mono tracking-widest text-slate-400 uppercase">
                {item.category}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
