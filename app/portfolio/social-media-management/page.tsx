import Image from "next/image";
import HeroSection from '@/components/social-media-management/HeroSection';
import SocialProjects from '@/components/social-media-management/SocialProjects';
import AutoCarousel from '@/components/social-media-management/AutoCarousel';
import GraphSection from '@/components/social-media-management/GraphSection';
import SocialBottom from '@/components/social-media-management/SocialBottom';
import SocialReel from '@/components/social-media-management/SocialReel';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <main>
      <HeroSection />
      <SocialProjects />
      <AutoCarousel />
      <SocialReel />
      <GraphSection />
      <SocialBottom />
      <Footer />
      {/* Aapke baaki components yahan aayenge */}
    </main>
  );
}
