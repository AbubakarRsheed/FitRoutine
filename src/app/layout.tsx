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
        {/* --- Monetag Verification Meta Tag --- */}
        <meta name="monetag" content="99885763dbb8acd1382c34d3f99ea0d4" />

        {/* --- Google Analytics (Head) --- */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5E0X1B9N27"
          strategy="beforeInteractive"
        />
        <Script id="google-analytics" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5E0X1B9N27');
          `}
        </Script>

        {/* --- New Script (Head) --- */}
        <Script 
          src="https://quge5.com/88/tag.min.js" 
          data-zone="222588" 
          strategy="beforeInteractive"
          data-cfasync="false"
        />
      </head>
      
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
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