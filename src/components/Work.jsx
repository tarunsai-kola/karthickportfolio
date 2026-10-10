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
    <section id="projects" className="scroll-mt-28 px-5 py-16 sm:px-8 sm:py-24 pt-0">
      <div className="mx-auto w-full max-w-6xl">
        {/* Header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0 max-w-xl">
            <p className="label-mono mb-2">Portfolio</p>
            <h2 className="text-3xl font-extrabold sm:text-5xl text-foreground tracking-tight">
              Selected Work
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
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
                className={`rounded-lg px-3.5 py-1.5 text-xs font-mono font-medium transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-foreground text-white shadow-soft'
                    : 'bg-white border border-border text-muted-foreground hover:bg-surface hover:text-foreground'
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
                className="lift-hover group flex h-full flex-col justify-between cursor-pointer overflow-hidden rounded-2xl border border-border bg-white shadow-card transition-all duration-300 hover:border-primary/50"
              >
                <div>
                  {/* Top Browser Bar */}
                  <div className="flex items-center justify-between border-b border-border bg-surface px-4 py-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-slate-300" />
                      <span className="size-2 rounded-full bg-slate-300" />
                      <span className="size-2 rounded-full bg-slate-300" />
                      <span className="ml-2 font-mono text-[10px] tracking-wide text-muted-foreground group-hover:text-primary transition-colors">
                        {project.domain}
                      </span>
                    </div>
                    <span className="rounded bg-accent-soft px-1.5 py-0.5 text-[10px] font-mono font-bold text-primary">
                      {project.number}
                    </span>
                  </div>

                  {/* Visual Card Box */}
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-900 p-5 flex items-center justify-center">
                    <img
                      src={project.screenshot || project.image}
                      alt={project.name}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="rounded-md bg-white/90 backdrop-blur-sm px-2.5 py-0.5 font-mono text-[10px] font-bold text-foreground">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      <ExternalLink className="size-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>

                    <p className="mt-2 text-xs font-medium text-foreground line-clamp-1">
                      {project.tagline}
                    </p>

                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                      {project.problem}
                    </p>
                  </div>
                </div>

                {/* Footer with Tech Stack */}
                <div className="p-5 pt-0">
                  <div className="mt-3 flex flex-wrap gap-1.5 pt-3 border-t border-border">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border bg-surface px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="rounded-md border border-border bg-surface px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
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
