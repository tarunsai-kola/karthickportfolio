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

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center justify-center text-center">
        {/* Exact Hero Artwork matching the picture */}
        <div className="w-full max-w-4xl relative">
          <img
            src="/images/brand/aiiens-hero.png"
            alt="AIIENS — Advanced Intelligence Integration for Enhanced Network Systems — Build Something Useful"
            className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-[0_0_40px_rgba(0,180,255,0.25)]"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
