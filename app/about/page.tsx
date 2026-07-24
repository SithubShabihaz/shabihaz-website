import Image from "next/image";
import AboutHeroSection from '@/components/about/AboutHeroSection';
import AboutTech from '@/components/about/AboutTech';
import AboutTeamSection from '@/components/about/AboutTeamSection';
import AboutCard from '@/components/about/AboutCard';
import Footer from '@/components/Footer';

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
