'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// --- SUB-COMPONENT: Minimal Auto-Playing Image Carousel Card with Smooth Fade ---
const CarouselCard = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play logic (Khudh ba khudh images change hongi har 4 seconds baad)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full rounded-2xl bg-black border border-white/20 p-4 shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden group">
      
      {/* Full Width & Height Image Container matched with Portfolio section height */}
      <div className="w-full h-[250px] sm:h-[280px] bg-[#0a0a0c] border border-black/40 rounded-xl relative flex items-center justify-center overflow-hidden">
        
        {/* Mapping all slides to achieve smooth cross-fade transition */}
        {slides.map((slide, idx) => (
          <div 
            key={idx} 
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Image 
              src={slide.image} 
              alt={`Slide ${idx + 1}`}
              fill
              unoptimized={true}
              className="object-cover rounded-xl"
            />
          </div>
        ))}

      </div>

      {/* Minimal Dots Indicator (Bottom Center) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
        {slides.map((_, idx) => (
          <span 
            key={idx} 
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 shadow-md ${
              idx === currentIndex ? 'bg-[#ffff39] scale-125' : 'bg-white/40'
            }`}
          />
        ))}
      </div>

    </div>
  );
};


// --- MAIN COMPONENT: The Section Layout ---
export default function EngineeredSection() {
  
  const gridData = [
    {
      id: 1,
      slides: [
        { image: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Social-Media-Images/ArchitectureCarousel1.webp` },
        { image: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Social-Media-Images/ArchitectureCarousel2.webp` },
        { image: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Social-Media-Images/ArchitectureCarousel3.webp` },
        { image: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Social-Media-Images/ArchitectureCarousel4.webp` },
        { image: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Social-Media-Images/ArchitectureCarousel5.webp` }
      ]
    },
    {
      id: 2,
      slides: [
        { image: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Social-Media-Images/Wealth1.webp` },
        { image: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Social-Media-Images/Wealth2.webp` },
        { image: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Social-Media-Images/Wealth3.webp` },
        { image: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Social-Media-Images/Wealth4.webp` },
        { image: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Social-Media-Images/Wealth5.webp` },
        { image: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Social-Media-Images/Wealth6.webp` },
        { image: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Social-Media-Images/Wealth7.webp` }
      ]
    },
    {
      id: 3,
      slides: [
        { image: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Social-Media-Images/Microbiology1.webp` },
        { image: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Social-Media-Images/Microbiology2.webp` },
        { image: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Social-Media-Images/Microbiology3.webp` },
        { image: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Social-Media-Images/Microbiology4.webp` },
        { image: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Social-Media-Images/Microbiology5.webp` }
      ]
    }
  ];

  return (
    <section className="relative w-full bg-black py-16 md:pt-31 font-poppins flex flex-col items-center overflow-hidden">
      
      {/* STRICT GLOBAL ALIGNMENT BOUNDS: Unified structure tracking parallel margins across website grids */}
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Top Glowing Kicker Badge */}
        <div className="inline-flex items-center justify-center px-5 py-1.5 rounded-full border border-[#c2cf4f] bg-transparent mb-6 shadow-[0_0_20px_rgba(194,207,79,0.15)] relative">
          <div className="absolute inset-0 rounded-full bg-[#c2cf4f]/5 blur-sm" />
          <span className="relative text-[11px] font-bold tracking-widest text-white uppercase">
            STRATEGIC DESIGN
          </span>
        </div>

        {/* Main Section Heading */}
        <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight text-center mb-12 lg:mb-16">
          Professional Social Media Management <br></br> <span className="text-[#ffff39]">That Commands Attention</span>.
        </h2>

        {/* Grid Wrapper - Takes full width of the strict container */}
        <div className="w-full">

          {/* 3-Column Responsive Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {gridData.map((cardData) => (
              <CarouselCard key={cardData.id} slides={cardData.slides} />
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}