import React from 'react';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-8 pt-20 pb-8 select-none overflow-hidden"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-4xl lg:max-w-5xl items-center justify-center text-center">
        {/* Minimalist Centered AIIENS Artwork on Complete Black */}
        <div className="w-full relative flex items-center justify-center">
          <img
            src="/images/brand/aiiens-hero.png"
            alt="AIIENS — Advanced Intelligence Integration for Enhanced Network Systems — Build Something Useful"
            className="w-full h-auto max-h-[75vh] object-contain select-none pointer-events-none"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
