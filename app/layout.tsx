// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";

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
      <head>
        {/* Google Fonts Preconnect for Lightning Fast Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600;700&family=Rajdhani:wght@400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* Forcefully applying both fonts so they never fail on hard refresh */}
        <style>{`
          body {
            font-family: 'Rajdhani', sans-serif !important;
          }
          h1, h2, h3, h4, h5, h6 {
            font-family: 'Poppins', sans-serif !important;
          }
        `}</style>
      </head>
      <body className="bg-black text-white">
        <Header />
        <ServiceWorkerRegister />
        <main className="flex-1"> 
          {children}
        </main>
      </body>
    </html>
  );
}
