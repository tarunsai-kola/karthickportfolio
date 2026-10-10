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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 mobile-nav-backdrop bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/20 bg-slate-950 p-6 shadow-2xl sm:p-8 project-modal-enter text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-4 top-4 grid size-9 place-items-center rounded-full border border-white/15 bg-slate-900 text-slate-400 transition-colors hover:bg-white hover:text-black cursor-pointer"
        >
          <X className="size-4" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
            SYS-{project.number}
          </span>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white">{project.name}</h2>
            <p className="text-xs font-mono text-cyan-400 font-medium uppercase tracking-wider">{project.category} // {project.status}</p>
          </div>
        </div>

        {/* Media Preview Box */}
        <div className="mt-5 overflow-hidden rounded-2xl border border-white/15 bg-slate-900 shadow-xl">
          <div className="flex items-center justify-between border-b border-white/10 bg-slate-950 px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-slate-600" />
              <span className="size-2 rounded-full bg-slate-600" />
              <span className="size-2 rounded-full bg-slate-600" />
              <span className="ml-2 font-mono text-xs text-slate-400">
                {project.domain}
              </span>
            </div>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1 font-mono text-xs text-cyan-400 hover:underline uppercase tracking-wider"
              >
                <span>Live Site</span>
                <ExternalLink className="size-3" />
              </a>
            )}
          </div>
          <div className="relative aspect-16/9 w-full overflow-hidden bg-slate-950 flex items-center justify-center p-6">
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
          <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
            <p className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest mb-1">// CONCEPT PROFILE</p>
            <p className="text-sm font-medium text-white">{project.tagline}</p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10">
              <h4 className="flex items-center gap-2 text-xs font-mono text-red-400 uppercase tracking-wider mb-2 font-bold">
                <AlertCircle className="size-3.5" />
                Problem Statement
              </h4>
              <p className="text-xs leading-relaxed text-slate-300">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10">
              <h4 className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2 font-bold">
                <CheckCircle2 className="size-3.5" />
                Architected Solution
              </h4>
              <p className="text-xs leading-relaxed text-slate-300">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Contribution */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10">
            <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1.5 font-bold">
              // ENGINEERING CONTRIBUTION
            </h4>
            <p className="text-xs leading-relaxed text-slate-300">
              {project.contribution}
            </p>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 font-bold">
              // TECHNOLOGIES & FRAMEWORKS
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-white/15 bg-slate-900 px-3 py-1 font-mono text-xs font-medium text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">{project.status}</span>
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-white/20 bg-slate-900 px-4 py-2.5 text-xs font-mono uppercase tracking-wider font-bold text-white hover:bg-white hover:text-black transition-colors"
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
                  className="inline-flex items-center gap-1.5 rounded-xl bg-cyan-400 px-4 py-2.5 text-xs font-mono uppercase tracking-wider font-bold text-black shadow-lg hover:bg-white hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-colors"
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
