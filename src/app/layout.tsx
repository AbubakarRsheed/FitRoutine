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
      </head>
      
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        {/* --- Google Analytics --- */}
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