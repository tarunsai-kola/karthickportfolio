import React from 'react';
import { ArrowRight, MapPin, GraduationCap, Briefcase, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="scroll-mt-28 px-5 py-16 sm:px-8 sm:py-24 pt-0">
      <div className="mx-auto w-full max-w-6xl">
        <div className="surface-panel grid gap-8 p-8 sm:p-12 lg:grid-cols-[0.8fr_1.2fr] items-center">
          {/* Portrait Photo */}
          <div className="relative aspect-3/4 w-full overflow-hidden rounded-3xl border border-border shadow-card bg-surface">
            <img
              alt="Karthikeya Pantam portrait"
              loading="lazy"
              className="object-cover object-top w-full h-full"
              src={personalInfo.profileImage}
            />
            {/* Location & Status Pill */}
            <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/90 backdrop-blur-md p-3 border border-border shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                <MapPin className="size-3.5 text-primary" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Building @ AIIENS</span>
              </div>
            </div>
          </div>

          {/* Narrative & Details */}
          <div className="min-w-0">
            <p className="label-mono">Biography</p>
            <h2 className="mt-3 text-2xl font-bold sm:text-4xl text-foreground tracking-tight">
              About Me
            </h2>
            
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-foreground font-medium">
              {personalInfo.aboutDescription}
            </p>

            {/* Quick credentials */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-xl bg-surface p-3.5 border border-border">
                <Briefcase className="size-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-mono text-muted-foreground uppercase">Role</p>
                  <p className="text-sm font-semibold text-foreground">{personalInfo.designation} · {personalInfo.brandName}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-surface p-3.5 border border-border">
                <GraduationCap className="size-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-mono text-muted-foreground uppercase">Education</p>
                  <p className="text-sm font-semibold text-foreground">{personalInfo.education}</p>
                </div>
              </div>
            </div>

            {/* Interests Section */}
            <div className="mt-6">
              <p className="label-mono text-xs mb-2.5">Focus Areas & Interests</p>
              <div className="flex flex-wrap gap-2">
                {personalInfo.interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-lg border border-border bg-white px-3 py-1 font-mono text-xs font-medium text-foreground hover:border-primary transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-xl text-xs font-semibold transition-all duration-300 bg-foreground text-white px-5 py-2.5 hover:bg-primary shadow-soft arrow-nudge"
                href="#projects"
              >
                <span>View Selected Work</span>
                <ArrowRight className="size-3.5" />
              </a>

              <a
                className="inline-flex items-center justify-center gap-2 rounded-xl text-xs font-semibold transition-all duration-300 border border-border bg-white text-muted-foreground px-4 py-2.5 hover:text-foreground hover:bg-surface arrow-nudge"
                href="#contact"
              >
                <span>Get in touch</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
