import React from 'react';
import { ArrowRight, ArrowUpRight, Mail, Globe } from 'lucide-react';
import { personalInfo, aiiensBrand } from '../data/portfolioData';

// Direct SVG for LinkedIn
function LinkedInIcon({ className = "size-4" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

// Direct SVG for Instagram
function InstagramIcon({ className = "size-4" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

// Direct SVG for X / Twitter
function TwitterXIcon({ className = "size-4" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      title: "LinkedIn",
      handle: personalInfo.socials.linkedinHandle,
      href: personalInfo.socials.linkedin,
      icon: LinkedInIcon
    },
    {
      title: "X (Twitter)",
      handle: personalInfo.socials.twitterHandle,
      href: personalInfo.socials.twitter,
      icon: TwitterXIcon
    },
    {
      title: "Instagram",
      handle: personalInfo.socials.instagramHandle,
      href: personalInfo.socials.instagram,
      icon: InstagramIcon
    },
    {
      title: "Official Email",
      handle: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: Mail
    }
  ];

  const footerNav = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "AIIENS", href: "#aiiens" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="px-5 pb-10 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        {/* Upper Call to Action Panel */}
        <div className="surface-panel p-6 sm:p-10 lg:p-12 rounded-3xl border border-border shadow-card mb-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] items-center">
            <div>
              <p className="label-mono">Initiative Leadership</p>
              <h2 className="mt-3 text-2xl font-extrabold sm:text-4xl text-foreground tracking-tight">
                {personalInfo.tagline}
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                Developing technology solutions across healthcare workflows, engineering student education, and community social impact.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center justify-center gap-2 rounded-xl text-xs font-bold transition-all duration-300 bg-primary text-white px-5 py-2.5 shadow-accent hover:bg-primary-hover arrow-nudge"
                  href="#contact"
                >
                  <span>Connect With Me</span>
                  <ArrowRight className="size-3.5" />
                </a>
                <a
                  className="inline-flex items-center justify-center gap-2 rounded-xl text-xs font-semibold transition-all duration-300 border border-border bg-white text-foreground px-4 py-2.5 hover:bg-surface arrow-nudge"
                  href="#aiiens"
                >
                  <span>Explore AIIENS</span>
                </a>
              </div>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group flex items-center gap-3 rounded-xl border border-border bg-white p-3 transition-all duration-300 hover:border-primary/50 hover:shadow-soft"
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-surface text-primary transition-transform duration-300 group-hover:scale-105 group-hover:bg-accent-soft">
                      <Icon className="size-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <span className="block truncate text-xs font-bold text-foreground">
                        {item.title}
                      </span>
                      <span className="block truncate font-mono text-[10px] text-muted-foreground">
                        {item.handle}
                      </span>
                    </div>
                    <ArrowUpRight className="size-3.5 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Legal / Nav */}
        <div className="flex flex-col gap-5 pt-4 border-t border-border/60 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-medium sm:justify-start">
            {footerNav.map((link) => (
              <a
                key={link.name}
                className="hover:text-primary transition-colors py-0.5"
                href={link.href}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-1 text-center sm:items-end sm:text-right">
            <p className="font-mono font-medium text-foreground">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="font-mono text-[11px] text-muted-foreground">
              {aiiensBrand.expansion}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
