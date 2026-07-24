'use client';

import React from 'react';
import Image from 'next/image';
import { Cpu, Layers } from 'lucide-react';

const AboutUsSection = () => {
  return (
    // Section wrapper exact baqi sections ke paddings ke mutabiq map kiya hai
    <section className="bg-black py-15 px-6 lg:px-8 overflow-hidden w-full">
      {/* Header aur Services ke sath pixel-perfect match karne ke liye max-w-7xl mx-auto lagaya hai.
        Grid items tab tak stretch nahi honge jab tak screen 1280px se badi na ho jaye.
      */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Text Content and Feature Cards */}
        <div className="space-y-12">
          
          {/* Header Text */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold tracking-[0.25em] text-[#ffff39] uppercase font-rajdhani block">
              ABOUT US
            </h3>
            <h2 className="text-5xl md:text-5xl font-black text-white leading-[1.1] tracking-tight">
              Your Partners in <span className='text-[#ffff39] font-medium lg:text-[rem]'>Digital</span> Excellence
            </h2>
            <p className="text-white text-lg leading-relaxed max-w-[95%]">
              At Shabihaz, we believe technology should simplify complexity. We bridge the gap between creative design and robust engineering, building custom digital experiences that help modern brands operate flawlessly and stand out in a competitive market.
            </p>
          </div>

          {/* Feature Cards Grid (Perfect Alignment with Services cards style) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 pt-4">

          </div>
        </div>

        {/* Right Column: Mobile Mockup */}
        <div className="w-full flex items-center justify-center lg:justify-end relative py-10">
          <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center transition-transform duration-300 hover:scale-105">
            <Image 
              src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/Home%20Page%20Images/HomePageAboutSectionMobileMockup.png`}
              alt="AboutUs 3D Smartphone Mockup"
              width={500}
              height={500}
              unoptimized={true}
              className="w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.8)]"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUsSection;