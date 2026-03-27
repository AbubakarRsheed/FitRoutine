import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

// ========== COMPLETE SEO METADATA FOR GLOBAL RANKING ==========
export const metadata: Metadata = {
  title: "About FitRoutine | World's Leading Global Fitness & Health Community",
  description: "Join 50,000+ people worldwide transforming their lives with FitRoutine. Expert-backed home workouts, nutrition plans, and wellness tips for everyone, everywhere.",
  keywords: [
    "fitness website",
    "global health platform",
    "workout community",
    "nutrition advice",
    "weight loss journey",
    "fitness motivation",
    "home workout experts",
    "diet planning",
    "wellness community",
    "online fitness guide",
    "health and wellness blog",
    "best fitness website",
    "fitness community worldwide",
    "healthy lifestyle tips",
    "workout plans for beginners",
    "weight loss support group",
    "international fitness",
    "home workouts global",
    "fitness for everyone",
    "worldwide fitness",
    "global wellness",
    "international health platform"
  ],
  authors: [{ name: "FitRoutine Team", url: "https://fitroutine.com/about" }],
  creator: "FitRoutine",
  publisher: "FitRoutine",
  alternates: {
    canonical: "https://fitroutine.com/about",
  },
  openGraph: {
    title: "About FitRoutine - Your Global Fitness Journey Starts Here",
    description: "Discover how FitRoutine is helping thousands worldwide achieve their health goals. Expert workout plans, nutrition guides, and real motivation for everyone, everywhere.",
    url: "https://fitroutine.com/about",
    siteName: "FitRoutine",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://images.pexels.com/photos/3757950/pexels-photo-3757950.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "FitRoutine Global Fitness Community - People Working Out Together Worldwide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About FitRoutine | Global Fitness & Health Community",
    description: "Join thousands worldwide transforming their lives with FitRoutine. Free workout plans, nutrition tips, and wellness advice for everyone.",
    images: ["https://images.pexels.com/photos/3757950/pexels-photo-3757950.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop"],
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
        description="Welcome to FitRoutine the world's most practical fitness community. We're here to help people everywhere achieve their health goals with expert-backed workout plans, honest nutrition advice, and real motivation that fits your everyday life wherever you are in the world."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;