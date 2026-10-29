import React from 'react';
import { GraduationCap, Briefcase, Award, MapPin } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Experience() {
  const journeyItems = [
    {
      role: 'Founder',
      company: 'AIIENS Technologies',
      period: 'Oct 2024 — Present',
      description: 'Product vision, strategy and development across healthcare, education, and social impact.'
    },
    {
      role: 'Founder',
      company: 'AIIENS Campus',
      period: 'Oct 2024 — Present',
      description: 'Practical learning and engineering career readiness.'
    },
    {
      role: 'Product Manager',
      company: 'AIIENS Health',
      period: 'Oct 2024 — Present',
      description: 'Clinic management and digital healthcare experiences.'
    },
    {
      role: 'Forward Learner',
      company: 'McKinsey & Company',
      period: 'Oct 2024 — Present',
      description: 'Problem-solving, structured communication, and digital/AI essentials.'
    },
    {
      role: 'Machine Learning Intern',
      company: 'BIST Technologies',
      period: 'Dec 2024 — May 2025',
      description: 'Model development, data preprocessing, and predictive analysis with Pandas, NumPy, and Scikit-learn.'
    },
    {
      role: 'AI & Data Skills Intern',
      company: 'YBI Foundation',
      period: 'Jun 2024 — Jul 2024',
      description: 'AI model development workshops and real-world dataset analysis.'
    },
    {
      role: 'CNS Student Intern',
      company: 'Airports Authority of India',
      period: 'May 2023 — Jun 2023',
      description: 'Communication, Navigation, and Surveillance systems at the airport.'
    }
  ];

  return (
    <section id="experience" className="relative scroll-mt-24 px-4 py-16 sm:px-8 sm:py-24 bg-black text-white">
      <div className="mx-auto w-full max-w-5xl">
        
        {/* 1. ACADEMIC EDUCATION & STUDY (ABOVE EXPERIENCES) */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
                // ACADEMIC STUDY
              </span>
              <h2 className="mt-2 text-2xl sm:text-4xl font-display font-bold tracking-tight text-white uppercase">
                Education &amp; Qualifications
              </h2>
            </div>
            
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/20 px-3.5 py-1 text-xs font-mono text-cyan-400 self-start sm:self-auto">
              <GraduationCap className="size-3.5" />
              <span>ELECTRONICS &amp; COMMUNICATION</span>
            </div>
          </div>

          {/* Education Cards Grid */}
          <div className="grid gap-4 sm:grid-cols-3">
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#040711] p-5 sm:p-6 transition-all duration-300 hover:border-cyan-400/50 hover:bg-[#070b19] hover:shadow-[0_0_25px_rgba(0,210,255,0.15)]"
              >
                <div>
                  {/* Top Bar: Period & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono text-slate-400">
                      {edu.period}
                    </span>
                    <span className="rounded-md bg-white/5 border border-white/10 px-2 py-0.5 text-[10px] font-mono text-slate-300 uppercase">
                      {edu.badge}
                    </span>
                  </div>

                  {/* College / School Institution */}
                  <h3 className="text-sm sm:text-base font-orbitron font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {edu.institution}
                  </h3>

                  {/* Degree / Qualification */}
                  <p className="mt-2 text-xs text-slate-300 font-sans leading-relaxed">
                    {edu.qualification}
                  </p>

                  {/* Location */}
                  <div className="mt-3 flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                    <MapPin className="size-3 text-cyan-400" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Score / CGPA Highlight Pill */}
                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                    ACADEMIC SCORE
                  </span>
                  <span className="rounded-lg bg-cyan-500/10 border border-cyan-500/30 px-2.5 py-1 text-xs font-mono font-bold text-cyan-400 shadow-[0_0_10px_rgba(0,210,255,0.15)]">
                    {edu.score}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. CAREER & EXPERIENCE JOURNEY */}
        <div>
          <div className="mb-8 text-left">
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
              // CAREER &amp; INTERNSHIPS
            </span>
            <h2 className="mt-2 text-2xl sm:text-4xl font-display font-bold tracking-tight text-white uppercase">
              Experience Journey
            </h2>
          </div>

          {/* Journey Timeline List with Dividers */}
          <div className="divide-y divide-white/10 border-t border-b border-white/10">
            {journeyItems.map((item, index) => (
              <div
                key={index}
                className="py-6 sm:py-8 flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-6 group transition-colors hover:bg-white/[0.02] px-3 -mx-3 rounded-xl"
              >
                <div className="flex-1">
                  {/* Role and Organization */}
                  <h3 className="text-base sm:text-lg font-sans font-bold text-white tracking-tight flex items-center flex-wrap gap-2">
                    <span>{item.role}</span>
                    <span className="text-slate-500 font-normal">·</span>
                    <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      {item.company}
                    </span>
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed max-w-3xl font-sans">
                    {item.description}
                  </p>
                </div>

                {/* Period / Dates */}
                <div className="sm:text-right shrink-0 mt-1 sm:mt-0">
                  <span className="text-xs font-mono tracking-wider text-slate-500 group-hover:text-cyan-400/80 transition-colors">
                    {item.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
