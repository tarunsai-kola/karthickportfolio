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
        className={`mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl border border-border bg-white/85 px-4 py-3 backdrop-blur-xl transition-all duration-300 lg:flex lg:justify-between lg:px-5 ${
          scrolled ? 'shadow-nav border-border-strong/80' : 'shadow-soft'
        }`}
      >
        {/* Brand Mark */}
        <a className="flex min-w-0 items-center gap-2.5 group" href="#hero">
          <div className="grid size-8 shrink-0 place-items-center rounded-lg bg-foreground font-mono text-xs font-bold text-white transition-all group-hover:scale-105 group-hover:bg-primary">
            KP
          </div>
          <div className="flex flex-col">
            <span className="truncate text-sm font-bold tracking-tight text-foreground">
              {personalInfo.name}
            </span>
            <span className="truncate text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
              {personalInfo.designation} · {personalInfo.brandName}
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
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  isActive
                    ? 'bg-surface font-semibold text-primary'
                    : 'text-muted-foreground hover:bg-surface hover:text-foreground'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <a
            className="inline-flex items-center justify-center gap-1.5 rounded-lg text-xs font-semibold transition-all duration-300 bg-foreground text-white px-4 py-2 hover:bg-primary hover:shadow-accent ml-2"
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
          className="grid size-10 shrink-0 place-items-center rounded-lg border border-border bg-card text-foreground transition-colors hover:bg-surface lg:hidden"
        >
          {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mx-auto mt-2 w-full max-w-6xl rounded-2xl border border-border bg-white/95 p-4 shadow-lift backdrop-blur-2xl transition-all duration-200 lg:hidden mobile-nav-backdrop">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-surface font-semibold text-primary'
                    : 'text-muted-foreground hover:bg-surface hover:text-foreground'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-border mt-1">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-foreground py-2.5 text-sm font-semibold text-white hover:bg-primary transition-colors"
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
