import Image from "next/image";

import dynamic from 'next/dynamic';
const AboutHeroSection = dynamic(() => import('@/components/about/AboutHeroSection'));
const AboutTech = dynamic(() => import('@/components/about/AboutTech'));
const AboutHeroSection = dynamic(() => import('@/components/about/AboutHeroSection'));
const AboutTeamSection = dynamic(() => import('@/components/about/AboutTeamSection'));
const AboutCard = dynamic(() => import('@/components/about/AboutCard'));
const Footer = dynamic(() => import('@/components/Footer'));

export default function About() {
  return (
    <main>
      <AboutHeroSection />
      <AboutTech />
      <AboutTeamSection />
      <AboutCard />
      <Footer />
      {/* Aapke baaki components yahan aayenge */}
    </main>
  );
}
