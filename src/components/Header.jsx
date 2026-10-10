import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'aiiens', 'projects', 'experience', 'contact'];
      const scrollPos = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'AIIENS', href: '#aiiens', id: 'aiiens' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        aria-label="Main Navigation"
        className={`mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl border border-white/15 bg-slate-950/80 px-4 py-3 backdrop-blur-2xl transition-all duration-300 lg:flex lg:justify-between lg:px-5 ${
          scrolled ? 'shadow-[0_10px_30px_rgba(0,0,0,0.8)] border-cyan-500/30' : 'shadow-soft'
        }`}
      >
        {/* Brand Mark */}
        <a className="flex min-w-0 items-center gap-2.5 group" href="#hero">
          <div className="grid size-8 shrink-0 place-items-center rounded-lg bg-white font-mono text-xs font-black text-black transition-all group-hover:scale-105 group-hover:bg-cyan-400">
            KP
          </div>
          <div className="flex flex-col">
            <span className="truncate text-sm font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              {personalInfo.name}
            </span>
            <span className="truncate text-[10px] font-mono text-slate-400 uppercase tracking-widest">
              {personalInfo.designation} // {personalInfo.brandName}
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`rounded-lg px-3 py-1.5 text-xs font-mono tracking-wider uppercase transition-all ${
                  isActive
                    ? 'bg-cyan-500/10 text-cyan-400 font-semibold border border-cyan-500/30 shadow-[0_0_10px_rgba(0,240,255,0.2)]'
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <a
            className="inline-flex items-center justify-center gap-1.5 rounded-lg text-xs font-mono uppercase tracking-wider font-bold transition-all duration-300 bg-white text-black px-4 py-2 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] ml-2"
            href="#contact"
          >
            <span>Connect</span>
            <ArrowRight className="size-3.5" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="grid size-10 shrink-0 place-items-center rounded-lg border border-white/15 bg-slate-900 text-white transition-colors hover:bg-slate-800 lg:hidden"
        >
          {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mx-auto mt-2 w-full max-w-6xl rounded-2xl border border-white/15 bg-slate-950/95 p-4 shadow-2xl backdrop-blur-2xl transition-all duration-200 lg:hidden mobile-nav-backdrop">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`rounded-lg px-3 py-2 text-xs font-mono uppercase tracking-wider transition-colors ${
                  activeSection === link.id
                    ? 'bg-cyan-500/10 font-bold text-cyan-400 border border-cyan-500/30'
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10 mt-1">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-white py-2.5 text-xs font-mono uppercase tracking-widest font-bold text-black hover:bg-cyan-400 transition-colors"
              >
                <span>Connect With Me</span>
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
