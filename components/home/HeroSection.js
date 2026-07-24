'use client';

import React, { useState } from 'react';
import {
    ArrowUpDown,
    Database,
    TrendingUp,
} from 'lucide-react';
import FadeinAnimation from '@/components/FadeinAnimation';
import Image from 'next/image';

export default function App() {
    // States aur values ko unchanged rakha gaya hai
    const [fromAmount, setFromAmount] = useState('10,589.78');
    const [toAmount, setToAmount] = useState('9,842.15');
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [isConverting, setIsConverting] = useState(false);
    const [exchangeRate, setExchangeRate] = useState(0.93);

    const [creditBalance, setCreditBalance] = useState(8945.89);
    const handleRefreshBalance = () => {
        const randChange = (Math.random() * 400 - 200).toFixed(2);
        const newBalance = (parseFloat(creditBalance) + parseFloat(randChange)).toFixed(2);
        setCreditBalance(parseFloat(newBalance));
    };

    return (
        /* FIX 1: 'min-h-screen' aur height bindings ko remove kiya.
          Har section ke darmayan spacing ko control karne ke liye standard 'py-16 md:py-24' implement kiya.
        */
        <div className="relative w-full bg-black font-sans overflow-x-hidden flex flex-col justify-center">

            {/* FIX 2: Main container wrapper ko exact responsive limits par target kiya 
              taake monitor zoom-out hone par margin header grid line ke parallel center-align rahe.
            */}
            <main className="relative z-10 max-w-7xl mx-auto w-full px-6 py-16 md:py-24 flex flex-col items-center">

                {/* Hero Title */}
                <div className="relative mt-12 max-w-4xl text-center mb-6">
                    <h1 className="text-4xl sm:text-5xl md:text-[120px] italic font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                        Shabihaz <br className="hidden sm:inline" />
                    </h1>
                    <FadeinAnimation />
                </div>

                {/* Subtitle Description */}
                <span className="max-w-xl text-center text-sm md:text-base text-white leading-relaxed mb-12">
                    Shabihaz Tech Solutions delivers expert Full Stack Development, secure Cloud Architecture, smart AI automation, and results-driven Digital Marketing services to scale your business growth.
                </span>

                {/* DYNAMIC INTERACTIVE VISUAL HERO WRAPPER */}
                <div className="relative w-full max-w-5xl mt-4 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-0">

                    <div className="absolute inset-0 max-w-3xl mx-auto rounded-full blur-3xl pointer-events-none -z-10" />

                    {/* LEFT FLOATING CARD */}
                    {/* <div className="w-full max-w-sm lg:absolute lg:left-8 xl:left-14 lg:top-[23%] z-20 bg-white/95 backdrop-blur-md rounded-3xl p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] border border-slate-100/90 group/card">
                        <div className="flex items-center justify-between mb-5">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center border border-black transition-colors">
                                    <TrendingUp className="w-5 h-5 text-[#ffff39]" />
                                </div>
                                <div>
                                    <h3 className="text-xs font-bold text-slate-800 tracking-tight">System Uptime</h3>
                                    <p className="text-[10px] font-medium text-gray-400">Powered by Database Architecture</p>
                                </div>
                            </div>
                            <button
                                onClick={handleRefreshBalance}
                                title="Simulate balance change"
                                className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-[#ffff39] transition"
                            >
                                <ArrowUpDown className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="flex items-baseline gap-2.5 mb-6">
                            <span className="text-2xl md:text-3xl font-extrabold text-slate-950 tracking-tight">
                                99.99%
                            </span>
                            <span className="inline-flex items-center gap-1 bg-black text-[#ffff39] text-[10px] font-bold px-2 py-0.5 rounded-full">
                                +10x Speed
                            </span>
                        </div>

                        <div className="border-t border-slate-100 pt-5">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">DEVELOPMENT TEAM</span>
                                <span className="text-[10px] font-medium text-[#ffff39] bg-black px-2 py-0.5 rounded-md cursor-pointer">View Projects</span>
                            </div>
                        </div>
                    </div> */}

                    {/* CENTER PHONE MOCKUP */}
                    <div className="w-full flex items-center justify-center relative py-10">
                              <div className="relative w-full max-w-[800px] aspect-square flex items-center justify-center transition-transform duration-300">
                                <Image 
                                  src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/Home%20Page%20Images/HomePageHeroSectionSmartFaceMockup.png`}
                                  alt="Home 3D Smartphone Mockup"
                                  width={800}
                                  height={800}
                                  unoptimized={true}
                                  className="w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.8)]"
                                  priority
                                />
                              </div>
                            </div>

                    {/* RIGHT FLOATING CARD */}
                    {/* <div className="w-full max-w-sm lg:absolute lg:right-8 xl:right-14 lg:top-[33%] z-20 bg-white/95 backdrop-blur-md rounded-3xl p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] border border-slate-100/90 group/convert">
                        <div className="flex items-center justify-between mb-5">
                            <h3 className="text-sm font-bold text-slate-800 tracking-tight">Automate Workflow</h3>
                            <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 px-2 py-1 rounded-md">
                                <span>Status: Ready to Deploy</span>
                            </div>
                        </div>

                        <div className="bg-black rounded-3xl px-6 pb-2 p-3 mb-2.5 relative">
                            <label className="block text-[9px] font-bold text-[#ffff39] uppercase tracking-wider mb-1">From Manual Workflow</label>
                        </div>

                        <div className="bg-black rounded-3xl px-6 p-3 pb-2 border mb-5">
                            <label className="block text-[9px] font-bold text-[#ffff39] uppercase tracking-wider mb-1">TO AI Automation (n8n/Make)</label>
                        </div>

                        <button className="w-full py-3.5 rounded-2xl font-bold text-xs uppercase bg-black tracking-wider text-[#ffff39] shadow-lg transition-all">
                            Convert
                        </button>
                    </div> */}

                </div>
            </main>
        </div>
    );
}