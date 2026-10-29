import React from 'react';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] sm:min-h-screen bg-black text-white flex flex-col justify-center items-center px-4 pt-24 pb-12 overflow-hidden select-none"
    >
      {/* Background Starfield / Cosmic Nebula Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-b from-cyan-900/15 via-blue-900/10 to-transparent blur-[140px] opacity-70" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center text-center">
        {/* Exact Hero Artwork matching the picture */}
        <div className="w-full relative px-2">
          <img
            src="/images/brand/aiiens-hero.png"
            alt="AIIENS — Advanced Intelligence Integration for Enhanced Network Systems — Build Something Useful"
            className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-[0_0_50px_rgba(0,180,255,0.2)]"
            loading="eager"
          />
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <a 
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-white/30 hover:text-cyan-400 transition-colors group cursor-pointer"
        aria-label="Scroll to About section"
      >
        <span className="text-[9px] font-mono tracking-[0.25em] uppercase">EXPLORE</span>
        <div className="w-4 h-7 rounded-full border border-white/15 flex items-start justify-center p-1 group-hover:border-cyan-400/50 transition-colors">
          <div className="w-0.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" />
        </div>
      </a>
    </section>
  );
}
