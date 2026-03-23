import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

// ========== COMPLETE SEO METADATA ==========
export const metadata: Metadata = {
  title: "Contact Us | FitRoutine - Get Expert Fitness & Nutrition Advice",
  description: "Have questions about workouts, diet plans, or healthy living? Contact our fitness experts today. We're here to help you achieve your health goals.",
  keywords: [
    "contact fitness expert",
    "fitness advice Pakistan",
    "nutrition help",
    "workout questions",
    "healthy lifestyle support",
    "get fitness tips",
    "contact health blog",
    "fitness consultation",
    "diet plan help",
    "wellness support",
    "ask fitness expert",
    "health advice online",
    "fitness community Pakistan",
    "contact us",
    "customer support fitness"
  ],
  authors: [{ name: "FitRoutine Team", url: "https://fitroutine.com/about" }],
  creator: "FitRoutine",
  publisher: "FitRoutine",
  alternates: {
    canonical: "https://fitroutine.com/contact",
  },
  openGraph: {
    title: "Contact FitRoutine | Get Expert Fitness & Nutrition Advice",
    description: "Have questions about your fitness journey? Reach out to our team. We're here to help you live a healthier life.",
    url: "https://fitroutine.com/contact",
    siteName: "FitRoutine",
    type: "website",
    locale: "en_PK",
    images: [
      {
        url: "https://fitroutine.com/images/contact/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "FitRoutine Contact - Fitness Support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact FitRoutine | Fitness & Nutrition Support",
    description: "Get personalized help with your fitness journey.",
    images: ["https://fitroutine.com/images/contact/twitter-contact.jpg"],
    site: "@fitroutine",
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

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Have questions about your fitness journey? Need help with a workout or diet plan? Our team is here to support you. Reach out anytime – we'd love to hear from you."
      />
      <Contact />
    </>
  );
};

export default ContactPage;