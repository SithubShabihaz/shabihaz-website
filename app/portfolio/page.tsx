import Image from "next/image";
import PortfolioHeroSection from '@/components/portfolio/PortfolioHeroSection';
import PortfolioPageProjectSection from '@/components/portfolio/PortfolioPageProjectSection';
import PortfolioFeaturedSection from '@/components/portfolio/PortfolioFeaturedSection';
import PortfolioTestimonialSection from '@/components/portfolio/PortfolioTestimonialSection';
import PortfolioPageBottomSection from '@/components/portfolio/PortfolioPageBottomSection.js';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <main>
      <PortfolioHeroSection />
      <PortfolioPageProjectSection />
      <PortfolioFeaturedSection />
      <PortfolioTestimonialSection />
      <PortfolioPageBottomSection />
      <Footer />
      {/* Aapke baaki components yahan aayenge */}
    </main>
  );
}
