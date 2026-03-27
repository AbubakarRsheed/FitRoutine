
import Header from "@/components/Header";
import { Metadata } from "next";
import Link from "next/link";

// ========== SEO METADATA ==========
export const metadata: Metadata = {
  title: "Terms & Conditions | FitRoutine - Global Fitness & Health Platform",
  description: "Read FitRoutine's terms of use. Learn about our fitness content, user guidelines, and platform policies for users worldwide.",
  keywords: [
    "terms and conditions",
    "fitness website terms",
    "health blog rules",
    "user agreement",
    "website policies",
    "fitness platform guidelines",
    "terms of service",
    "content usage rights",
    "fitness disclaimer",
    "global fitness terms",
    "website terms",
    "user guidelines"
  ],
  alternates: {
    canonical: "https://fitroutine.online/terms",
  },
  openGraph: {
    title: "Terms & Conditions | FitRoutine",
    description: "Understand the rules and guidelines for using FitRoutine fitness platform.",
    url: "https://fitroutine.online/terms",
    siteName: "FitRoutine",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  const currentYear = new Date().getFullYear();
  
  return (
    <>
      <Header />
      
      <main className="pt-40 pb-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-black dark:text-white sm:text-5xl mb-3">
                Terms & Conditions
              </h1>
              <p className="text-lg text-body-color">
                Please read these terms carefully before using FitRoutine
              </p>
              <div className="flex justify-center gap-4 mt-4 text-sm text-body-color">
                <span>📅 Effective: {currentYear}</span>
                <span>🌍 Worldwide</span>
              </div>
            </div>

            {/* Main Content Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
              
              {/* Welcome Note */}
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 mb-8">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Welcome to <strong className="text-primary">FitRoutine</strong>. By using our website, you agree to these terms. 
                  If you do not agree with any part of these terms, please do not use our services.
                </p>
              </div>

              {/* Section 1 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-black dark:text-white mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
                  1. About Our Service
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                  FitRoutine provides fitness articles, workout ideas, nutrition tips, and general wellness information. 
                  Our content is created for educational and informational purposes. We aim to help people around the world lead healthier lives 
                  through reliable fitness guidance.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  We are not a medical organization. The information we share comes from general fitness knowledge and experience, 
                  not from medical professionals. Always consult your doctor before making changes to your exercise or diet routine.
                </p>
              </div>

              {/* Section 2 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-black dark:text-white mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
                  2. Using Our Content
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                  All articles, images, workout plans, and other materials on FitRoutine are owned by us or used with proper permission. 
                  You are welcome to read and learn from our content for personal use.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  You may not copy, sell, or redistribute our content without asking us first. If you want to share our articles, 
                  please share the link to our website rather than copying the text.
                </p>
              </div>

              {/* Section 3 - Medical Disclaimer */}
              <div className="mb-8 bg-amber-50 dark:bg-amber-900/20 rounded-xl p-5 border-l-4 border-amber-500">
                <h2 className="text-2xl font-bold text-black dark:text-white mb-3">
                  3. Important Health Disclaimer
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                  The fitness and nutrition information on FitRoutine is based on general knowledge and common practices in the fitness world. 
                  It is not medical advice.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Before starting any exercise program, especially if you have health concerns, please speak with a doctor. 
                  Listen to your body when exercising. If something hurts or feels wrong, stop and rest.
                </p>
              </div>

              {/* Section 4 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-black dark:text-white mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
                  4. What We Expect From You
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                  When using FitRoutine, we ask that you:
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Be respectful when leaving comments or interacting with our content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Use the information responsibly and at your own risk</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Not misuse the website or try to harm it in any way</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Not post harmful, offensive, or misleading comments</span>
                  </li>
                </ul>
              </div>

              {/* Section 5 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-black dark:text-white mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
                  5. Comments and Feedback
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                  We welcome your thoughts and feedback on our content. When you leave a comment:
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 mb-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">📝</span>
                    <span>Your name and comment will be visible to other visitors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">📝</span>
                    <span>We may keep your comment and its metadata for future reference</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">📝</span>
                    <span>We reserve the right to remove comments that are inappropriate or harmful</span>
                  </li>
                </ul>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Please do not share personal or sensitive information in the comments section.
                </p>
              </div>

              {/* Section 6 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-black dark:text-white mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
                  6. Links to Other Websites
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Sometimes we link to other websites that we think might be helpful to our readers. We do not control these external sites. 
                  If you visit them, you do so at your own choice. We are not responsible for what you find there or how they handle your information.
                </p>
              </div>

              {/* Section 7 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-black dark:text-white mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
                  7. Our Responsibility
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                  We do our best to provide accurate and helpful information, but we cannot guarantee that everything on our site is complete or error-free. 
                  Your use of our content is at your own risk.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  FitRoutine will not be held responsible for any injuries, health issues, or other problems that may come from using our content.
                </p>
              </div>

              {/* Section 8 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-black dark:text-white mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
                  8. Changes to These Terms
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  From time to time, we may update these terms. When we do, we will change the date at the top of this page. 
                  It is a good idea to check back occasionally. If you keep using our website after changes are made, it means you accept the new terms.
                </p>
              </div>

              {/* Section 9 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-black dark:text-white mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
                  9. Contact Us
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                  If you have questions about these terms or anything else related to FitRoutine, feel free to reach out:
                </p>
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    📧 Email: <a href="mailto:info@fitroutine.online" className="text-primary hover:underline">info@fitroutine.online</a>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    🌐 Website: <Link href="/contact" className="text-primary hover:underline">Contact Form</Link>
                  </p>
                </div>
              </div>

              {/* Footer Note */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Thank you for being part of FitRoutine. We're glad to have you here.
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                  © {currentYear} FitRoutine. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

     
    </>
  );
}