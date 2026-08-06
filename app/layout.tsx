// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local"; 
import "./globals.css";
import Header from "@/components/Header";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";

// Local Poppins font setup (Headings ke liye)
const poppins = localFont({
  src: [
    { path: '../public/fonts/Poppins-Regular.ttf', weight: '400'},
    { path: '../public/fonts/Poppins-SemiBold.ttf', weight: '600'},
    { path: '../public/fonts/Poppins-Bold.ttf', weight: '700'},
  ],
  variable: '--font-poppins',
});

// Local Rajdhani font setup (Poori body / text ke liye)
const rajdhani = localFont({
  src: [
    { path: '../public/fonts/Rajdhani-Regular.ttf', weight: '400'},
    { path: '../public/fonts/Rajdhani-Medium.ttf', weight: '500'},
    { path: '../public/fonts/Rajdhani-SemiBold.ttf', weight: '600'},
    { path: '../public/fonts/Rajdhani-Bold.ttf', weight: '700'},
  ],
  variable: '--font-rajdhani',
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
    <html lang="en" className={`${poppins.variable} ${rajdhani.variable}`}>
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
