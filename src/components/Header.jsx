import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'aiiens', 'projects', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home', id: 'home' },
    { name: 'ABOUT', href: '#about', id: 'about' },
    { name: 'AIIENS', href: '#aiiens', id: 'aiiens' },
    { name: 'PROJECTS', href: '#projects', id: 'projects' },
    { name: 'EXPERIENCE', href: '#experience', id: 'experience' },
    { name: 'CONTACT', href: '#contact', id: 'contact' }
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4 transition-all duration-300">
      <nav
        aria-label="Main Navigation"
        className={`mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl border px-4 py-2.5 sm:px-6 sm:py-3 transition-all duration-300 ${
          scrolled
            ? 'bg-black/90 border-cyan-500/40 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.9),0_0_20px_rgba(0,210,255,0.15)]'
            : 'bg-black/65 border-white/10 backdrop-blur-lg shadow-2xl'
        }`}
      >
        {/* Left: Brand Identity */}
        <a className="flex items-center gap-3 group shrink-0" href="#home">
          <div className="grid size-9 sm:size-10 place-items-center rounded-xl bg-white font-mono text-sm font-black text-black shadow-md transition-transform group-hover:scale-105 group-hover:bg-cyan-400">
            KP
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm sm:text-base font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
              FOUNDER // AIIENS
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden items-center gap-1.5 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`rounded-full px-4 py-1.5 text-xs font-mono tracking-wider uppercase transition-all duration-200 ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-400/50 shadow-[0_0_15px_rgba(0,210,255,0.3)]'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Right: Connect Button (Pill Button) */}
        <div className="hidden items-center md:flex">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-mono font-bold uppercase tracking-wider text-black transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(0,210,255,0.6)] cursor-pointer"
          >
            <span>CONNECT</span>
            <ArrowRight className="size-3.5" />
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="grid size-9 place-items-center rounded-xl border border-white/20 bg-slate-950 text-white md:hidden hover:border-cyan-400"
        >
          {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mx-auto mt-2 w-full max-w-6xl rounded-2xl border border-cyan-500/30 bg-black/95 p-4 shadow-2xl backdrop-blur-2xl md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`rounded-xl px-4 py-2 text-xs font-mono uppercase tracking-wider transition-colors ${
                  activeSection === link.id
                    ? 'bg-cyan-500/20 text-cyan-400 font-bold border border-cyan-500/40'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10 mt-1">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-cyan-400 py-2.5 text-xs font-mono uppercase tracking-widest font-bold text-black"
              >
                <span>CONNECT</span>
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
