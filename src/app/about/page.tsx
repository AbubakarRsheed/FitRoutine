import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

// ========== COMPLETE SEO METADATA FOR RANKING ==========
export const metadata: Metadata = {
  title: "About FitRoutine | Pakistan's Trusted Fitness & Health Platform",
  description: "Discover FitRoutine's mission to help you achieve fitness goals, lose weight, build muscle, and live healthier. Expert-backed workout plans, nutrition guides, and wellness tips.",
  keywords: [
    "fitness website Pakistan",
    "health blog about us",
    "workout platform",
    "nutrition advice",
    "weight loss journey",
    "fitness motivation",
    "healthy lifestyle blog",
    "home workout experts",
    "diet planning",
    "wellness community",
    "fitness trainers Pakistan",
    "online fitness guide",
    "health and wellness blog",
    "best fitness website",
    "Pakistani fitness platform"
  ],
  authors: [{ name: "FitRoutine Team", url: "https://fitroutine.com/about" }],
  creator: "FitRoutine",
  publisher: "FitRoutine",
  alternates: {
    canonical: "https://fitroutine.com/about",
  },
  openGraph: {
    title: "About FitRoutine - Your Fitness & Health Journey Starts Here",
    description: "Learn about our mission to help Pakistanis achieve their fitness goals with expert workout plans, nutrition guides, and wellness tips.",
    url: "https://fitroutine.com/about",
    siteName: "FitRoutine",
    type: "website",
    locale: "en_PK",
    images: [
      {
        url: "https://fitroutine.com/images/about/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "FitRoutine Fitness Community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About FitRoutine | Fitness & Health Community",
    description: "Join Pakistan's growing fitness community. Expert advice, workout plans, and nutrition tips for a healthier you.",
    images: ["https://fitroutine.com/images/about/twitter-about.jpg"],
    site: "@fitroutine",
    creator: "@fitroutine",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Welcome to FitRoutine – Pakistan's growing fitness community. We're here to help you achieve your health goals with practical workout plans, honest nutrition advice, and real motivation that fits your everyday life."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;