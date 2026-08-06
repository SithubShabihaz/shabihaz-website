// app/layout.tsx
import type { Metadata } from "next";
import { Poppins, Rajdhani } from "next/font/google"; 
import "./globals.css";
import Header from "@/components/Header";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";

// Poppins font setup (Headings ke liye)
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '400', '600', '700'], 
  display: 'swap',
});

// Rajdhani font setup (Poori body / text ke liye)
const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Shabihaz | Full Stack Developer & AI Automation Specialist",
  description: "Expert Full Stack Developer and AI Automation Specialist scaling web apps and custom agentic workflows.",
  openGraph: {
    title: "Shabihaz | Full Stack Developer & AI Automation Specialist",
    description: "Expert Full Stack Developer and AI Automation Specialist scaling web apps and custom agentic workflows.",
    url: "https://shabihaz.com",
    siteName: "Shabihaz Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 👇 Yahan humne layout.tsx ke andar direct rajdhani.className aur style inject kar diya hai */}
      <body 
        className={`bg-black text-white ${rajdhani.className}`}
        style={{ fontFamily: 'var(--font-rajdhani), sans-serif' }}
      >
        <Header />
        <ServiceWorkerRegister />
        <main className="flex-1"> 
          {children}
        </main>
      </body>
    </html>
  );
}
