'use client';

import React from 'react';
import Link from 'next/link';
import { Globe } from 'lucide-react';

export default function ServiceHeroPortfolioParallelTilt() {
  return (
    // 'pt-24' se top space barha di gayi hai
    <section className="relative w-full pt-24 pb-20 md:pt-36 md:pb-32 px-0 overflow-hidden font-poppins flex flex-col justify-center items-center">

      {/* BACKGROUND TECH RADIANCE */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#ffff39]/5 blur-[140px] pointer-events-none z-0" />

      {/* HEADER TEXT BLOCK */}
      <div className="w-full max-w-3xl mx-auto px-4 z-20 flex flex-col items-center text-center relative">

        {/* Top Pill Header */}
        <div className="inline-flex mb-8 items-center gap-3 bg-neutral-900 border border-white/[0.06] rounded-full px-4 py-1.5 shadow-md">
          <Globe className="w-3.5 h-3.5 text-[#ffff39] fill-[#ffff39]/10" />
          <span className="text-[10px] font-mono tracking-widest text-white uppercase font-bold">
            Our Projects
          </span>
        </div>

        {/* Headline Controls */}
        <div className="space-y-4 mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-rajdhani leading-[1.15]">
            Crafting <span className="text-[#ffff39] drop-shadow-[0_0_20px_rgba(255,255,57,0.15)]">High-Performance</span> <br /> Web Experiences.
          </h2>
          <p className="text-xs sm:text-sm text-white font-light max-w-md mx-auto leading-relaxed">
            Dive into our gallery of elite custom-coded applications, premium WordPress websites, and high-converting Shopify stores built to dominate the digital landscape.
          </p>
        </div>

        {/* Interactive Trigger CTA Button */}
        <div className="pt-4">
          <Link
            href="/portfolio#portfolio-projects"
            className="group/btn inline-flex items-center gap-2 bg-white text-black font-black text-sm px-8 py-4 rounded-full shadow-[0_4px_25px_rgba(255,255,255,0.15)] hover:bg-[#ffff39] hover:shadow-[0_4px_25px_rgba(255,255,57,0.3)] transition-all duration-300 transform active:scale-95 cursor-pointer"
          >
            <span>Explore Case Studies</span>
          </Link>
        </div>
        
      </div>
    </section>
  );
}