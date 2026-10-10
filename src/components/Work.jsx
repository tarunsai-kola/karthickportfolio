import React, { useState } from 'react';
import { ExternalLink, ArrowRight, Layers, Sparkles } from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Work({ onSelectProject }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Healthcare', 'Education', 'Social Impact', 'Computer Vision', 'Engineering'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="scroll-mt-28 px-5 py-16 sm:px-8 sm:py-24 pt-0 text-white">
      <div className="mx-auto w-full max-w-6xl">
        {/* Header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0 max-w-xl">
            <p className="label-mono mb-2">// PORTFOLIO ARCHITECTURE</p>
            <h2 className="text-3xl font-extrabold sm:text-5xl text-white tracking-tight">
              Selected Work
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
              A collection of products, technical projects, and experiments exploring practical applications of technology.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-lg px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.4)]'
                    : 'bg-slate-900 border border-white/15 text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="reveal h-full"
              data-visible="true"
              style={{ '--reveal-delay': `${index * 80}ms` }}
            >
              <div
                onClick={() => onSelectProject && onSelectProject(project.id)}
                className="lift-hover group flex h-full flex-col justify-between cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-slate-900/60 shadow-xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-slate-900/90"
              >
                <div>
                  {/* Top Browser Bar */}
                  <div className="flex items-center justify-between border-b border-white/10 bg-slate-950 px-4 py-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-slate-600" />
                      <span className="size-2 rounded-full bg-slate-600" />
                      <span className="size-2 rounded-full bg-slate-600" />
                      <span className="ml-2 font-mono text-[10px] tracking-wide text-slate-400 group-hover:text-cyan-400 transition-colors">
                        {project.domain}
                      </span>
                    </div>
                    <span className="rounded bg-cyan-500/20 px-2 py-0.5 text-[10px] font-mono font-bold text-cyan-400 border border-cyan-500/30">
                      SYS-{project.number}
                    </span>
                  </div>

                  {/* Visual Card Box */}
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-950 p-5 flex items-center justify-center border-b border-white/10">
                    <img
                      src={project.screenshot || project.image}
                      alt={project.name}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="rounded-md bg-slate-950/90 border border-white/20 backdrop-blur-md px-2.5 py-0.5 font-mono text-[10px] font-bold text-cyan-400 uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {project.name}
                      </h3>
                      <ExternalLink className="size-3.5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                    </div>

                    <p className="mt-2 text-xs font-medium text-slate-300 line-clamp-1">
                      {project.tagline}
                    </p>

                    <p className="mt-2 text-xs leading-relaxed text-slate-400 line-clamp-3">
                      {project.problem}
                    </p>
                  </div>
                </div>

                {/* Footer with Tech Stack */}
                <div className="p-5 pt-0">
                  <div className="mt-3 flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/10 bg-slate-950 px-2 py-0.5 font-mono text-[10px] text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="rounded-md border border-white/10 bg-slate-950 px-2 py-0.5 font-mono text-[10px] text-slate-400">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
