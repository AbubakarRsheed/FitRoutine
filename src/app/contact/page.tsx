import Breadcrumb from "@/components/Common/Breadcrumb";
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
      
      <section className="overflow-hidden pb-12 pt-20 lg:pb-16 lg:pt-28">
        <div className="container">
          <div className="flex flex-wrap justify-center">
            <div className="w-full max-w-4xl">
              {/* WhatsApp Card */}
              <div className="mb-8 rounded-lg bg-white p-8 shadow-md dark:bg-gray-800 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                    <svg className="h-8 w-8 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.01-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.89.47 3.66 1.33 5.22L2 22l4.78-1.33A9.94 9.94 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.59 0-3.08-.45-4.34-1.23l-.31-.19-2.84.79.79-2.84-.19-.31A7.95 7.95 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
                    </svg>
                  </div>
                </div>
                <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Chat with us on WhatsApp</h2>
                <p className="mb-6 text-gray-600 dark:text-gray-400">
                  Quick responses, direct chat with our team. Get instant help with your fitness questions.
                </p>
                <a
                  href="https://wa.me/923019681102"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-green-600 px-8 py-3 text-center text-lg font-medium text-white hover:bg-green-700 transition-all duration-300"
                >
                  <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.01-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  </svg>
                  +92 301 9681102
                </a>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-500">
                  Tap to chat • Usually replies within minutes
                </p>
              </div>

              {/* Email Card */}
              <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                    <svg className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                </div>
                <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Send us an Email</h2>
                <p className="mb-6 text-gray-600 dark:text-gray-400">
                  For detailed inquiries, feedback, or business collaborations. We'll get back to you within 24 hours.
                </p>
                <a
                  href="mailto:support@fitroutine.com"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3 text-center text-lg font-medium text-white hover:bg-blue-700 transition-all duration-300"
                >
                  <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  support@fitroutine.com
                </a>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-500">
                  We reply within 24 hours • No spam, guaranteed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;