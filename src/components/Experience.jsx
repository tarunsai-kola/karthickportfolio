import React from 'react';
import { GraduationCap, Briefcase, Trophy, CheckCircle2, Building2 } from 'lucide-react';
import { experienceData, achievementsData, educationData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 px-5 py-16 sm:px-8 sm:py-24 pt-0 text-white">
      <div className="mx-auto w-full max-w-6xl">
        <div className="surface-panel p-8 sm:p-12">
          {/* Header */}
          <div className="max-w-xl mb-10">
            <p className="label-mono mb-2">// TRACK RECORD & CREDENTIALS</p>
            <h2 className="text-3xl font-extrabold sm:text-4xl text-white tracking-tight">
              Education & Experience
            </h2>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Academic foundation in Electronics & Communication, practical machine learning internships, aviation-grade electronics, and founder-led execution.
            </p>
          </div>

          {/* Education Section Grid */}
          <div className="mb-12">
            <h3 className="text-base font-bold text-white mb-4 font-mono uppercase tracking-wider flex items-center gap-2">
              <GraduationCap className="size-4 text-cyan-400" />
              <span>// ACADEMIC EDUCATION</span>
            </h3>

            <div className="grid gap-4 sm:grid-cols-3">
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/15 bg-slate-900/80 p-5 flex flex-col justify-between hover:border-cyan-400/40 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-mono text-[10px] text-cyan-400 font-bold px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 uppercase tracking-wider">
                        {edu.badge}
                      </span>
                      <span className="font-mono text-[10px] text-slate-400">{edu.period}</span>
                    </div>

                    <h4 className="text-sm font-bold text-white leading-snug">
                      {edu.institution}
                    </h4>
                    <p className="text-[11px] font-mono text-slate-400 mt-0.5">{edu.location}</p>

                    <p className="mt-2 text-xs text-slate-300 font-medium">
                      {edu.qualification}
                    </p>
                  </div>

                  <div className="mt-4 pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono text-cyan-400 font-bold">
                    <span>SCORE</span>
                    <span>{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Career & Internship Timeline */}
          <div className="border-t border-white/10 pt-10">
            <h3 className="text-base font-bold text-white mb-6 font-mono uppercase tracking-wider flex items-center gap-2">
              <Briefcase className="size-4 text-cyan-400" />
              <span>// EXPERIENCE & INTERNSHIPS</span>
            </h3>

            <ol className="grid gap-8">
              {experienceData.map((exp, index) => (
                <li
                  key={index}
                  style={{ '--reveal-delay': `${index * 80}ms` }}
                  className="reveal relative grid gap-2 border-l-2 border-white/15 pl-6 transition-all duration-300 hover:border-cyan-400 group"
                  data-visible="true"
                >
                  {/* Timeline Bullet */}
                  <div className="absolute -left-[7px] top-1.5 size-3 rounded-full border-2 border-slate-950 bg-slate-600 group-hover:bg-cyan-400 group-hover:scale-125 transition-all" />

                  <div className="flex flex-wrap items-center gap-2">
                    <p className="label-mono text-xs">{exp.period}</p>
                    <span className="rounded-full bg-slate-900 px-2.5 py-0.5 font-mono text-[10px] text-slate-400 border border-white/10 uppercase tracking-wider">
                      {exp.type}
                    </span>
                    <span className="text-xs font-mono text-slate-400">// {exp.location}</span>
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {exp.role} <span className="text-slate-500 font-normal">//</span> <span className="text-slate-200">{exp.organization}</span>
                  </h4>

                  <p className="max-w-3xl text-xs sm:text-sm leading-relaxed text-slate-300">
                    {exp.description}
                  </p>

                  {/* Bullet points */}
                  {exp.bullets && exp.bullets.length > 0 && (
                    <ul className="mt-2 space-y-1.5 max-w-3xl">
                      {exp.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                          <CheckCircle2 className="size-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
