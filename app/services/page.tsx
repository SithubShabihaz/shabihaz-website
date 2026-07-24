import Image from "next/image";
import ServiceHeroSection from '@/components/services/ServiceHeroSection';
import SpecializeServices from '@/components/services/SpecializeServices';
import ServicePageCards from '@/components/services/ServicePageCards';
import HowWeWork from '@/components/services/HowWeWork';
import FaqSection from '@/components/services/FaqSection';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <main>
      <ServiceHeroSection />
      <SpecializeServices />
      <ServicePageCards />
      <HowWeWork />
      <FaqSection />
      <Footer />
      {/* Aapke baaki components yahan aayenge */}
    </main>
  );
}
