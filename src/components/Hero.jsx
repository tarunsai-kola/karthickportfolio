import React from 'react';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] sm:min-h-screen bg-black text-white flex flex-col justify-center items-center px-4 pt-28 pb-16 overflow-hidden select-none"
    >
      {/* Background Starfield / Cosmic Nebula Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Subtle radial center ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-b from-cyan-900/10 via-blue-900/10 to-transparent blur-[140px] opacity-70" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center justify-center text-center">
        
        {/* Stylized AIIENS Logo */}
        <div className="w-full max-w-2xl px-4 flex items-center justify-center">
          <svg
            viewBox="0 0 640 140"
            className="w-full max-w-[560px] h-auto drop-shadow-[0_0_25px_rgba(0,180,255,0.2)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Letter 'A' (Inverted chevron without crossbar) */}
            <path
              d="M 20 125 L 75 15 L 130 125"
              stroke="#ffffff"
              strokeWidth="20"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Letter 'I' 1 */}
            <line
              x1="180"
              y1="15"
              x2="180"
              y2="125"
              stroke="#ffffff"
              strokeWidth="20"
              strokeLinecap="round"
            />

            {/* Letter 'I' 2 */}
            <line
              x1="235"
              y1="15"
              x2="235"
              y2="125"
              stroke="#ffffff"
              strokeWidth="20"
              strokeLinecap="round"
            />

            {/* Letter 'E' (3 Cyan Horizontal Bars) */}
            <line
              x1="290"
              y1="25"
              x2="375"
              y2="25"
              stroke="#0084ff"
              strokeWidth="18"
              strokeLinecap="round"
            />
            <line
              x1="290"
              y1="70"
              x2="375"
              y2="70"
              stroke="#00aaff"
              strokeWidth="18"
              strokeLinecap="round"
            />
            <line
              x1="290"
              y1="115"
              x2="375"
              y2="115"
              stroke="#00d2ff"
              strokeWidth="18"
              strokeLinecap="round"
            />

            {/* Letter 'N' */}
            <path
              d="M 430 125 L 430 15 L 500 125 L 500 15"
              stroke="#ffffff"
              strokeWidth="19"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Letter 'S' */}
            <path
              d="M 605 38 C 605 22, 580 15, 560 15 C 535 15, 532 30, 532 45 C 532 75, 605 65, 605 95 C 605 115, 585 125, 555 125 C 532 125, 528 110, 528 100"
              stroke="#ffffff"
              strokeWidth="19"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Subtitle / Expansion Tagline */}
        <div className="mt-6 px-4">
          <p className="text-xs sm:text-base font-sans tracking-[0.22em] sm:tracking-[0.28em] text-white/90 font-medium uppercase leading-relaxed">
            ADVANCED INTELLIGENCE INTEGRATION
          </p>
          <p className="text-xs sm:text-base font-sans tracking-[0.22em] sm:tracking-[0.28em] text-white/90 font-medium uppercase mt-1">
            FOR ENHANCED NETWORK SYSTEMS
          </p>
        </div>

        {/* Glowing Horizon Arc & Lens Flare */}
        <div className="relative w-full max-w-4xl mt-10 mb-6 flex items-center justify-center">
          {/* Intense Lens Flare Core Glow */}
          <div className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 w-[480px] h-24 bg-blue-500 blur-3xl opacity-40" />
          <div className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 w-36 h-8 bg-cyan-400 blur-lg opacity-85 animate-pulse" />
          <div className="pointer-events-none absolute -top-[1px] left-1/2 -translate-x-1/2 w-64 sm:w-80 h-[2px] bg-gradient-to-r from-transparent via-cyan-100 to-transparent blur-[0.5px] shadow-[0_0_15px_#ffffff]" />

          {/* Curved Horizon SVG Arc */}
          <svg
            viewBox="0 0 1000 80"
            className="w-full h-auto overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="horizonGlowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00d2ff" stopOpacity="0" />
                <stop offset="25%" stopColor="#0084ff" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#00f0ff" stopOpacity="1" />
                <stop offset="75%" stopColor="#0084ff" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#00d2ff" stopOpacity="0" />
              </linearGradient>
              <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Glowing atmosphere halo under curve */}
            <path
              d="M 50 75 Q 500 5 950 75"
              stroke="#0084ff"
              strokeWidth="6"
              strokeOpacity="0.3"
              filter="url(#glowFilter)"
            />

            {/* Sharp glowing top arc */}
            <path
              d="M 50 75 Q 500 5 950 75"
              stroke="url(#horizonGlowGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Tagline below horizon */}
        <div className="mt-2">
          <h2 className="text-sm sm:text-xl font-bold font-sans tracking-[0.32em] sm:tracking-[0.4em] text-cyan-400 uppercase">
            BUILD SOMETHING USEFUL
          </h2>
        </div>

      </div>
    </section>
  );
}
