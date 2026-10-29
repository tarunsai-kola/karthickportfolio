import React from 'react';
import { personalInfo, aiiensBrand } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerNav = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'AIIENS', href: '#aiiens' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'CONTACT', href: '#contact' }
  ];

  return (
    <footer className="relative bg-black text-white border-t border-white/10 px-4 py-12 sm:px-8 overflow-hidden">
      <div className="mx-auto w-full max-w-5xl">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-8 border-b border-white/10">
          
          {/* Brand Identity */}
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-xl bg-white font-mono text-sm font-black text-black">
              KP
            </div>
            <div>
              <h3 className="text-base font-bold font-sans tracking-tight text-white">
                {personalInfo.name}
              </h3>
              <p className="text-[11px] font-mono tracking-widest text-slate-400 uppercase">
                {personalInfo.designation} // {aiiensBrand.name}
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono tracking-wider text-slate-400 uppercase">
            {footerNav.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-cyan-400 transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

        </div>

        {/* Bottom Legal / Copyright Row */}
        <div className="pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs font-mono text-slate-500">
          <p>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>

          <p className="text-[11px] text-slate-500 uppercase tracking-wider">
            {aiiensBrand.expansion}
          </p>
        </div>

      </div>
    </footer>
  );
}
