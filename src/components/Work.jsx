import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Work({ onSelectProject }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Healthcare', 'Education', 'Social Impact', 'Computer Vision', 'Engineering'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="relative scroll-mt-24 px-4 py-16 sm:px-8 sm:py-24 bg-black text-white">
      <div className="mx-auto w-full max-w-5xl">
        
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-10">
          <div className="min-w-0 max-w-xl text-left">
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
              PROJECTS
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-display font-bold tracking-tight text-white uppercase">
              SELECTED WORK
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400">
              Technology platforms, software prototypes, and applied engineering initiatives.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 self-start sm:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-lg px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-cyan-400 text-black shadow-[0_0_15px_rgba(0,210,255,0.4)]'
                    : 'bg-slate-950 border border-white/10 text-slate-400 hover:border-cyan-400/40 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject && onSelectProject(project.id)}
              className="group flex flex-col justify-between cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60 transition-all duration-300 hover:border-cyan-400/60 hover:bg-slate-950 hover:shadow-[0_0_30px_rgba(0,210,255,0.2)]"
            >
              <div>
                {/* Top Code Bar */}
                <div className="flex items-center justify-between border-b border-white/10 bg-black/60 px-4 py-2 text-[10px] font-mono text-slate-500">
                  <span className="truncate group-hover:text-cyan-400 transition-colors">
                    {project.domain}
                  </span>
                  <span className="text-cyan-400 font-bold bg-cyan-500/10 px-1.5 py-0.5 rounded border border-cyan-500/20">
                    SYS-{project.number}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base font-bold font-orbitron text-white group-hover:text-cyan-400 transition-colors">
                      {project.name}
                    </h3>
                    <ExternalLink className="size-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors shrink-0" />
                  </div>

                  <p className="mt-2 text-xs font-mono text-cyan-400">
                    {project.category}
                  </p>

                  <p className="mt-2 text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {project.problem}
                  </p>
                </div>
              </div>

              {/* Technologies */}
              <div className="p-5 pt-0">
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-black px-2 py-0.5 font-mono text-[10px] text-slate-400 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="rounded bg-black px-2 py-0.5 font-mono text-[10px] text-slate-500 border border-white/10">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
