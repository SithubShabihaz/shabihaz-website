'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// 1. URL track karne ke liye usePathname import karein
import { usePathname } from 'next/navigation'; 
import GradientButtonJustForHeader from './GradientButtonJustForHeader.js';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    
    // 2. Pathname hook ko initialize karein
    const pathname = usePathname();

    // Monitor scrolling to dynamically switch background opacity for premium blur treatment
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigationData = [
        { label: 'HOME', href: '/' },
        { label: 'ABOUT', href: '/about' },
        { label: 'SERVICES', href: '/services' },
        { label: 'PORTFOLIO', href: '/portfolio' },
        { label: 'CONTACT', href: '/contact' },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full mobile-first-container ${scrolled
            ? 'bg-[#090A0F]/80 backdrop-blur-md border-b border-white/[0.06] py-3'
            : 'bg-transparent border-b border-transparent py-5'
            }`}>
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-12">

                    {/* Logo Brand Segment */}
                    <div className="flex-shrink-0 flex items-center">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/Home%20Page%20Images/shabihaz%20logo.webp`}
                            alt="Shabihaz Logo"
                            width={40}
                            height={40}
                            unoptimized={true}
                            className="transition-transform duration-700 ease-in-out hover:rotate-[360deg] cursor-pointer"
                        />
                        <Link href="/" className="flex items-center gap-1 group focus:outline-none">
                            <span className="font-poppins text-3xl ml-5 font-bold tracking-tight text-[#ffff39] transition-colors duration-200">
                                SHABIHAZ
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Central Links Menu - WITH MAGNETIC BRACKET ANIMATION AND NO-WRAP FIX */}
                    <nav className="hidden md:flex items-center gap-0.5 lg:gap-1">
                        {navigationData.map((item) => {
                            // 3. Check karein ke current URL is link ke barabar hai ya nahi
                            const isActive = pathname === item.href;
                            
                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    // Added whitespace-nowrap and inline-flex items-center to fix 150% zoom wrapping issue
                                    className={`magnetic-bracket-link px-2 lg:px-4 py-2 text-[14px] font-medium rounded-md transition-all duration-200 focus:outline-none whitespace-nowrap inline-flex items-center ${
                                        isActive ? 'text-[#ffff39]' : 'text-gray-300 hover:text-[#ffff39]'
                                    }`}
                                >
                                    <span className={`bracket-left transition-colors duration-300 ${isActive ? 'text-[#ffff39]' : 'text-gray-400'}`}>[</span>
                                    <span className="mx-0.5 font-rajdhani font-light">{item.label}</span>
                                    <span className={`bracket-right transition-colors duration-300 ${isActive ? 'text-[#ffff39]' : 'text-gray-400'}`}>]</span>
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Desktop Right CTA Segment */}
                    <div className="hidden md:flex items-center gap-4">
                        <GradientButtonJustForHeader />
                    </div>

                    {/* Mobile Action Hamburger Toggle Switch */}
                    <div className="flex md:hidden items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.05] focus:outline-none transition-all duration-200"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg className="h-6 w-6 transform rotate-0 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6 transform rotate-0 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>

                </div>
            </div>

            {/* Mobile Drawer Menu Layer overlay */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#090A0F] border-b border-white/[0.08] ${isOpen ? 'max-h-[100vh] opacity-100 visibility-visible' : 'max-h-0 opacity-0 visibility-hidden pointer-events-none'
                    }`}
                id="mobile-menu"
            >
                <div className="px-4 pt-2 pb-6 space-y-2 bg-[#090A0F] flex flex-col">
                    {navigationData.map((item) => {
                        // Mobile ke liye bhi active state check karein
                        const isActive = pathname === item.href;

                        return (
                            <div key={item.label} className="w-full">
                                <Link
                                    href={item.href}
                                    className={`block magnetic-bracket-link px-3 py-2.5 rounded-lg text-[14px] font-medium text-base hover:bg-white/[0.02] transition-all ${
                                        isActive ? 'text-[#ffff39]' : 'text-gray-400 hover:text-[#ffff39]'
                                    }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <span className={`bracket-left transition-colors duration-300 ${isActive ? 'text-[#ffff39]' : 'text-gray-400'}`}>[</span>
                                    <span className="mx-0.5 font-rajdhani font-light">{item.label}</span>
                                    <span className={`bracket-right transition-colors duration-300 ${isActive ? 'text-[#ffff39]' : 'text-gray-400'}`}>]</span>
                                </Link>
                            </div>
                        );
                    })}

                    {/* Mobile Bottom Control Actions Spacer line split */}
                    <div className="h-[1px] bg-white/[0.08] my-4" />

                    <div className="grid grid-cols-1 gap-3 pt-2">
                        <Link
                            href="https://calendly.com/shabihazofficial/discovery-call"
                            className="w-full font-rajdhani flex items-center justify-center px-4 py-2.5 rounded-lg bg-[#ffff39] text-sm font-light text-black transition-all"
                        >
                            [  Book A Discovery Call  ]
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}