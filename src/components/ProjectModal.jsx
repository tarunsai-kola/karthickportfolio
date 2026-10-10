import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, AlertCircle, Globe } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 mobile-nav-backdrop bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-border bg-white p-6 shadow-2xl sm:p-8 project-modal-enter text-foreground"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-4 top-4 grid size-9 place-items-center rounded-full border border-border bg-surface text-muted-foreground transition-colors hover:bg-white hover:text-foreground cursor-pointer"
        >
          <X className="size-4" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-accent-soft text-primary border border-accent-border">
            {project.number}
          </span>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">{project.name}</h2>
            <p className="text-xs font-mono text-primary font-medium">{project.category} · {project.status}</p>
          </div>
        </div>

        {/* Media Preview Box */}
        <div className="mt-5 overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
          <div className="flex items-center justify-between border-b border-border bg-white px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-slate-300" />
              <span className="size-2 rounded-full bg-slate-300" />
              <span className="size-2 rounded-full bg-slate-300" />
              <span className="ml-2 font-mono text-xs text-muted-foreground">
                {project.domain}
              </span>
            </div>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1 font-mono text-xs text-primary hover:underline"
              >
                <span>Live Site</span>
                <ExternalLink className="size-3" />
              </a>
            )}
          </div>
          <div className="relative aspect-16/9 w-full overflow-hidden bg-slate-900 flex items-center justify-center p-6">
            <img
              src={project.screenshot || project.image}
              alt={project.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>

        {/* Deep Dive Breakdown */}
        <div className="mt-6 space-y-5">
          {/* Tagline */}
          <div className="p-3.5 rounded-xl bg-accent-soft border border-accent-border">
            <p className="text-xs font-mono text-primary font-bold uppercase tracking-wider mb-1">Concept</p>
            <p className="text-sm font-medium text-foreground">{project.tagline}</p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="p-4 rounded-xl bg-surface border border-border">
              <h4 className="flex items-center gap-2 text-xs font-mono text-destructive uppercase tracking-wider mb-2 font-bold">
                <AlertCircle className="size-3.5" />
                Problem Statement
              </h4>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface border border-border">
              <h4 className="flex items-center gap-2 text-xs font-mono text-emerald-600 uppercase tracking-wider mb-2 font-bold">
                <CheckCircle2 className="size-3.5" />
                Architected Solution
              </h4>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Contribution */}
          <div className="p-4 rounded-xl bg-surface border border-border">
            <h4 className="text-xs font-mono text-foreground uppercase tracking-wider mb-1.5 font-bold">
              Engineering Contribution
            </h4>
            <p className="text-xs leading-relaxed text-muted-foreground">
              {project.contribution}
            </p>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2 font-bold">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-border bg-white px-3 py-1 font-mono text-xs font-medium text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-xs text-muted-foreground">{project.status}</span>
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-white px-4 py-2 text-xs font-semibold text-foreground hover:bg-surface transition-colors"
                >
                  <Globe className="size-3.5" />
                  <span>Repository</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-white shadow-accent hover:bg-primary-hover transition-colors"
                >
                  <span>Launch Project</span>
                  <ExternalLink className="size-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
