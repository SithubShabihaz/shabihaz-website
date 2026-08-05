// app/layout.tsx
import type { Metadata } from "next";
// Yahan humne naya Next.js ka font module import kiya hai
import { Poppins, Rajdhani } from "next/font/google"; 
import "./globals.css";
import Header from "@/components/Header.js";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";

// Poppins font ko yahin setup kar diya gaya hai
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '400', '600', '700'], 
  variable: '--font-poppins-custom',
  display: 'swap',
});

// Rajdhani font ko bhi yahin setup kar diya gaya hai
const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-rajdhani-custom',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Shabihaz | Full Stack Developer & AI Automation Specialist",
  description: "Expert Full Stack Developer and AI Automation Specialist scaling web apps and custom agentic workflows.",

  // CORE OPENGRAPH CONFIGURATION
  openGraph: {
    title: "Shabihaz | Full Stack Developer & AI Automation Specialist",
    description: "Expert Full Stack Developer and AI Automation Specialist scaling web apps and custom agentic workflows.",
    url: "https://shabihaz.com",
    siteName: "Shabihaz Portfolio",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Twitter%20%26%20OpenGraph%20Image/Shabihaz%20twitter%20card%20banner.png`, 
        width: 1200, 
        height: 630,
        alt: "Shabihaz Professional Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Optional: Twitter Specific Cards
  twitter: {
    card: "summary_large_image",
    title: "Shabihaz | Full Stack Developer & AI Automation Specialist",
    description: "Expert Full Stack Developer and AI Automation Specialist.",
    images: [`${process.env.NEXT_PUBLIC_MEDIA_URL}/Twitter%20%26%20OpenGraph%20Image/Shabihaz%20twitter%20card%20banner.png`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Variables automatically yahan HTML tag main apply ho jayenge
    <html lang="en" className={`${poppins.variable} ${rajdhani.variable}`}>
      <body>
        <Header />
        <ServiceWorkerRegister />
        <main className="flex-1"> 
          {children}
        </main>
      </body>
    </html>
  );
}
