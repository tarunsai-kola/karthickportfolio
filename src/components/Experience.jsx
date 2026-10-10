import React from 'react';
import { Award, GraduationCap, Briefcase, Trophy, CheckCircle2 } from 'lucide-react';
import { experienceData, achievementsData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 px-5 py-16 sm:px-8 sm:py-24 pt-0">
      <div className="mx-auto w-full max-w-6xl">
        <div className="surface-panel p-8 sm:p-12">
          {/* Header */}
          <div className="max-w-xl mb-10">
            <p className="label-mono mb-2">Milestones & Track Record</p>
            <h2 className="text-3xl font-extrabold sm:text-4xl text-foreground tracking-tight">
              Experience & Achievements
            </h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Academic foundation in Electronics & Communication, global competitive programming results, and founder-led execution.
            </p>
          </div>

          {/* Key Achievements Highlight Grid */}
          <div className="grid gap-4 sm:grid-cols-2 mb-12">
            {achievementsData.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-accent-border bg-accent-soft p-5 flex items-start gap-4"
              >
                <div className="size-11 shrink-0 rounded-xl bg-white border border-accent-border text-primary grid place-items-center shadow-soft">
                  {index === 0 ? <Trophy className="size-5 text-amber-500" /> : <GraduationCap className="size-5 text-primary" />}
                </div>
                <div>
                  <span className="inline-block rounded-md bg-white px-2 py-0.5 text-[10px] font-mono font-bold text-primary border border-accent-border mb-1">
                    {item.badge}
                  </span>
                  <h3 className="text-base font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-muted-foreground mt-0.5">
                    {item.issuer} ({item.year})
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Career & Leadership Timeline */}
          <div className="border-t border-border pt-10">
            <h3 className="text-lg font-bold text-foreground mb-6">
              Leadership & Technical Experience
            </h3>

            <ol className="grid gap-8">
              {experienceData.map((exp, index) => (
                <li
                  key={index}
                  style={{ '--reveal-delay': `${index * 80}ms` }}
                  className="reveal relative grid gap-2 border-l-2 border-border pl-6 transition-all duration-300 hover:border-primary group"
                  data-visible="true"
                >
                  {/* Timeline Bullet */}
                  <div className="absolute -left-[7px] top-1.5 size-3 rounded-full border-2 border-white bg-slate-300 group-hover:bg-primary group-hover:scale-125 transition-all" />

                  <div className="flex flex-wrap items-center gap-2">
                    <p className="label-mono text-xs">{exp.period}</p>
                    <span className="rounded-full bg-surface px-2 py-0.5 font-mono text-[10px] text-muted-foreground border border-border">
                      {exp.type}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">· {exp.location}</span>
                  </div>

                  <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                    {exp.role} <span className="text-muted-foreground font-normal">·</span> {exp.organization}
                  </h4>

                  <p className="max-w-3xl text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
