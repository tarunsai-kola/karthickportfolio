import React from 'react';
import { personalInfo, aiiensBrand } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 px-4 py-16 sm:px-8 sm:py-24 bg-black text-white">
      <div className="mx-auto w-full max-w-5xl">
        
        {/* Top Split: Bio & Portrait */}
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] items-center">
          
          {/* Left: Text & Bio */}
          <div className="flex flex-col text-left">
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase mb-3">
              ABOUT
            </span>

            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-white leading-tight uppercase">
              KARTHIKEYA<br />PANTAM
            </h2>

            <div className="mt-4 space-y-1 text-xs sm:text-sm font-mono tracking-wider text-slate-400 uppercase">
              <p className="text-slate-300">FOUNDER, AIIENS TECHNOLOGIES</p>
              <p className="text-slate-400">TECHNOLOGY ENTREPRENEUR | PRODUCT BUILDER</p>
            </div>

            <p className="mt-8 text-base sm:text-xl leading-relaxed text-slate-200 font-sans">
              "I build and explore useful technology products across healthcare, education, and social impact."
            </p>
          </div>

          {/* Right: Portrait with Cyan Glow Border */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-[310px] sm:max-w-[340px] aspect-[4/5] rounded-[28px] overflow-hidden border-[2.5px] border-cyan-400 shadow-[0_0_35px_rgba(0,210,255,0.45)] group transition-transform duration-500 hover:scale-[1.02]">
              {/* Corner cyan flare */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
              
              <img
                src={personalInfo.profileImage}
                alt="Karthikeya Pantam"
                className="w-full h-full object-cover object-top filter brightness-95 contrast-105"
                loading="lazy"
              />
            </div>
          </div>

        </div>

        {/* Bottom Row: 3 Brand Logo Squircles */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
          {aiiensBrand.initiatives.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center group cursor-pointer"
              onClick={() => {
                const el = document.getElementById('aiiens');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {/* White Squircle Icon Card */}
              <div className="size-36 sm:size-44 rounded-[36px] bg-white p-4 shadow-2xl flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(0,210,255,0.5)]">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain rounded-[24px]"
                />
              </div>

              {/* Title */}
              <h3 className="mt-5 text-sm sm:text-base font-orbitron font-bold tracking-wider text-white uppercase group-hover:text-cyan-400 transition-colors">
                {item.name}
              </h3>

              {/* Category */}
              <p className="mt-1 text-[11px] sm:text-xs font-mono tracking-widest text-slate-400 uppercase">
                {item.category}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
