'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Calendar, ShieldCheck, Clock } from 'lucide-react';

export default function StandaloneCalendlySection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full bg-black py-20 min-h-[600px] flex items-center justify-center">
        <div className="text-slate-500 font-mono text-xs uppercase tracking-widest animate-pulse">
          Initializing secure automation tunnel...
        </div>
      </div>
    );
  }

  return (
    <section id="calendly-section" className="relative w-full bg-black py-20 px-0 overflow-hidden font-poppins border-t border-white/[0.03]">

      {/* Next.js Raw Async Loader for Calendly Framework Engine Assets */}
      <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
      
      {/* ================= BACKGROUND TECH RADIANCE ================= */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-[#ffff39]/5 blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-purple-600/5 blur-[160px] pointer-events-none z-0" />

      {/* Main Container Core Box Framework */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 z-10 relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        {/* ================= LEFT SIDEBOARD PANEL: CONTENT METRICS & RAW IMAGES ================= */}
        <div className="lg:col-span-4 text-left space-y-8 lg:sticky lg:top-28">

          {/* 1. RAW IMAGE ABOVE TEXT BLOCK */}
          {/* FIX: Changed aspect ratio and injected object-contain to ensure image bounds never crop the logo */}
          <div className="w-full h-70 mt-[-50px] relative overflow-visible">
            <Image
              src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/Contact-Page-Images/CalendlyConsoleShabihazTopImage.png`}
              alt="Top Structural Accent Mapping"
              fill
              unoptimized={true}
              className="object-contain object-left"
              priority
            />
          </div>

          {/* Core Text Copy Container Layer */}
          <div className="space-y-6 mt-20 mb-14">
            <div className="inline-flex items-center gap-2 bg-neutral-900 border border-white/[0.06] rounded-full px-4 py-1.5 w-fit shadow-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffff39] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ffff39]"></span>
              </span>
              <span className="text-[10px] font-mono tracking-widest text-white uppercase font-bold">
                LIVE BOOKING
              </span>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-rajdhani leading-none">
                Let's Map Out <br />
                <span className="text-[#ffff39] drop-shadow-[0_0_30px_rgba(255,255,57,0.1)]">Your Execution Plan.</span>
              </h2>
              <p className="text-xs sm:text-sm text-white font-light leading-relaxed max-w-md">
                Select an available date to connect directly with our team. We'll use this session to evaluate your current digital infrastructure and outline a clear, scalable path forward for your brand.
              </p>
            </div>

            {/* Quick Technical Highlights Trust Pins */}
            <div className="space-y-3 pt-1 border-t border-white/[0.05]">
              <div className="flex items-center gap-3 text-white">
                <Clock className="w-4 h-4 text-[#ffff39]" />
                <span className="text-xs font-mono uppercase tracking-wider">15-MIN DISCOVERY CALL</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <ShieldCheck className="w-4 h-4 text-[#ffff39]" />
                <span className="text-xs font-mono uppercase tracking-wider">TAILORED TECHNICAL INSIGHTS</span>
              </div>
            </div>
          </div>

          {/* 2. RAW IMAGE BELOW TEXT BLOCK */}
          {/* FIX: Enforced h-48 height map with object-contain override to prevent bottom duplication cutouts */}
          <div className="w-full h-70 relative overflow-visible">
            <Image
              src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/Contact-Page-Images/RobotForCalendly.png`}
              alt="Bottom Operational Workflow Mockup"
              fill
              unoptimized={true}
              className="object-contain object-center"
            />
          </div>

        </div>

        {/* ================= RIGHT SIDEBOARD PANEL: STANDALONE CALENDLY INTERFACE ================= */}
        <div className="lg:col-span-8 w-full bg-neutral-950/40 border border-white/[0.06] rounded-[2.5rem] p-2 md:p-1 shadow-[0_30px_70px_rgba(0,0,0,0.8)] backdrop-blur-sm group hover:border-white/10 transition-all duration-300 overflow-hidden">

          <div className="w-full rounded-2xl overflow-hidden relative border-0 [&_iframe]:!overflow-hidden [&_iframe]:!border-0 [&_iframe]:!h-full">

            {/* Inline Webkit Overrides inside client environment exclusively */}
            <style dangerouslySetInnerHTML={{
              __html: `
              .calendly-inline-widget, .calendly-inline-widget iframe {
                overflow: hidden !important;
                scrollbar-width: none !important;
                -ms-overflow-style: none !important;
              }
              .calendly-inline-widget::-webkit-scrollbar, .calendly-inline-widget iframe::-webkit-scrollbar {
                display: none !important;
                width: 0 !important;
                height: 0 !important;
              }
            `}} />

            <div
              className="calendly-inline-widget w-full rounded-2xl border-0 overflow-hidden"
              data-url="https://calendly.com/shabihazsite/discovery-call"
              style={{ minWidth: '320px', height: '1090px', overflow: 'hidden' }}
            />
          </div>

        </div>

      </div>
    </section>
  );
}