"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import Script from "next/script"; 
import "../styles/index.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* ========== FAVICON ========== */}
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        
        {/* ========== GLOBAL SEO TAGS ========== */}
        <meta name="geo.region" content="US-UK-CA-AU-IN-PK" />
        <meta name="geo.placename" content="Global" />
        <meta name="distribution" content="global" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta name="language" content="English" />
        <meta name="copyright" content="FitRoutine" />
        <meta name="author" content="FitRoutine Experts Team" />
        
        {/* ========== HREFLANG ========== */}
        <link rel="alternate" href="https://fitroutine.online" hrefLang="x-default" />
        <link rel="alternate" href="https://fitroutine.online" hrefLang="en" />
        
        {/* ========== GOOGLE ANALYTICS ========== */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5E0X1B9N27"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5E0X1B9N27');
          `}
        </Script>
      </head>
      
      <body 
        className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}
        suppressHydrationWarning
      >
        <Providers>
          <div className="isolate">
            <Header />
            {children}
            <Footer />
          </div>
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}