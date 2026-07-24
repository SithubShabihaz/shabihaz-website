'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Activity } from 'lucide-react';

export default function ServiceHeroSplitLayout() {
  return (
    /* Outermost frame - Pitch black setup matching your global signature system */
    <section className="relative w-full bg-black py-15 md:py-28 px-0 flex items-center overflow-hidden font-poppins">
      
      {/* ================= BACKGROUND CYBER LIGHT INFRASTRUCTURE ================= */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-[#ffff39]/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-purple-600/5 blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Strict Width Sync Grid Framework - Handles perfect margins across all screen states */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 z-10 grid grid-cols-1 lg:grid-cols-12 gap-19 lg:gap-30 items-center">
        
        {/* ================= LEFT HAND SIDE: CONTENT COLUMN ================= */}
        <div className="lg:col-span-5 space-y-6 text-left flex flex-col justify-center order-1">
          
          {/* Top Mini Badge Pill */}
          <div className="inline-flex mt-12 items-center gap-2 bg-neutral-900 border border-white/[0.06] rounded-full px-4 py-1.5 w-fit shadow-md">
            <Activity className="w-3.5 h-3.5 text-[#ffff39]" />
            <span className="text-[10px] font-mono tracking-widest text-white uppercase font-bold">
              Our Services
            </span>
          </div>

          {/* Centered Headline Core */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl mt-5 md:text-5xl font-black text-white tracking-tight font-rajdhani leading-[0.95]">
              Scale Your Potential Through <span className="text-[#ffff39]">Innovative</span> Digital Solutions
            </h1>
            <p className="text-sm md:text-base mt-10 text-white font-light leading-relaxed opacity-95">
              Beyond just code, we develop custom web applications and integrate smart AI automation solutions that actively streamline operations. Partner with us to build powerful digital experiences engineered to drive growth and set you apart.
            </p>
          </div>

          {/* Interactive Trigger CTA Button */}
          <div className="pt-2">
            <Link 
              href="/services#service-cards" 
              className="group/btn inline-flex mt-5 items-center gap-2 bg-white text-black font-black text-sm px-8 py-4 rounded-full shadow-[0_4px_25px_rgba(255,255,255,0.15)] hover:bg-[#ffff39] hover:shadow-[0_4px_25px_rgba(255,255,57,0.3)] transition-all duration-300 transform active:scale-95 cursor-pointer"
            >
              <span>View Core Capabilities</span>
            </Link>
          </div>

        </div>

        {/* ================= RIGHT HAND SIDE: DASHBOARD SCREEN WINDOW FRAMES ================= */}
        <div className="lg:col-span-7 relative flex items-center justify-center order-2 lg:pl-6 w-full">
          
          {/* FIX: Increased max-w to max-w-xl (576px) so the image renders significantly larger 
            and spreads dynamically within the right column.
          */}
          <div className="w-full max-w-md mt-10 mx-auto lg:mx-0 relative group overflow-hidden rounded-xl">
            <Image 
              src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/Services-Page-Imges/ServicesPageHeroSectionMobileWithCardsMockup.png`}
              alt="Service Page Mobile Mockup"
              width={700} // High resolution baseline ratio
              height={700}
              unoptimized={true}
              className="w-full h-auto object-contain rounded-xl opacity-95 transition-transform duration-700 group-hover:scale-[1.01] brightness-[1.02]"
              priority
            />

            {/* Subtle gloss layout effect covering the screen bottom glass area */}
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black to-transparent pointer-events-none z-20 opacity-40" />
          </div>

        </div>

      </div>
    </section>
  );
}