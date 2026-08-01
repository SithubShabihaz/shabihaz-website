import Image from "next/image";
import ContactHeroSection from '@/components/contact/ContactHeroSection';
import ContactForm from '@/components/contact/ContactForm';
import CalendlyContactSection from '@/components/contact/CalendlyContactSection';
import ContactBottomSection from '@/components/contact/ContactBottomSection';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <main>
      <ContactHeroSection />
      <ContactForm />
      <CalendlyContactSection />
      <ContactBottomSection />
      <Footer />
      {/* Aapke baaki components yahan aayenge */}
    </main>
  );
}
