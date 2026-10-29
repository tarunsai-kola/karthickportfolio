import React from 'react';

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
        
        {/* Section Header */}
        <div className="mb-10 text-left">
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
            JOURNEY
          </span>
        </div>

        {/* Journey Timeline List with Dividers */}
        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {journeyItems.map((item, index) => (
            <div
              key={index}
              className="py-6 sm:py-8 flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-6 group transition-colors hover:bg-white/[0.02] px-2 -mx-2 rounded-lg"
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
    </section>
  );
}
