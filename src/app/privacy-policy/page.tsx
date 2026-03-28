import Header from "@/components/Header";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | FitRoutine - Your Data is Safe With Us",
  description: "Learn how FitRoutine collects, uses, and protects your personal information. We are committed to your privacy and data security.",
  keywords: [
    "privacy policy",
    "data protection",
    "GDPR compliant",
    "CCPA",
    "user privacy",
    "data security",
    "FitRoutine privacy",
    "personal information protection"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy | FitRoutine",
    description: "Read our privacy policy to understand how we protect your data.",
    url: "https://fitroutine.online/privacy-policy",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Header />
      <main className="pt-40 pb-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12">
            
            {/* Header */}
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
                Privacy Policy
              </h1>
              <p className="text-body-color text-sm">
                Last Updated: March 27, 2025
              </p>
              <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-black dark:prose-headings:text-white prose-a:text-primary">
              
              <p className="text-body-color leading-relaxed">
                At <strong>FitRoutine</strong>, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this policy carefully.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Data:</strong> Name, email address, and any information you voluntarily provide when subscribing to our newsletter, leaving comments, or contacting us.</li>
                <li><strong>Usage Data:</strong> IP address, browser type, pages visited, time spent on pages, and other analytical data.</li>
                <li><strong>Cookies:</strong> We use cookies to enhance your browsing experience and analyze website traffic.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, operate, and maintain our website</li>
                <li>Improve, personalize, and expand our services</li>
                <li>Send you newsletters, marketing communications, and updates</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Monitor and analyze usage patterns and trends</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">3. Cookies and Tracking Technologies</h2>
              <p>We use cookies and similar tracking technologies to track activity on our website. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
              <p className="mt-2">Types of cookies we use:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">4. Third-Party Services</h2>
              <p>We may use third-party service providers to assist us in operating our website and delivering services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Google Analytics:</strong> To analyze website traffic</li>
                <li><strong>Email Service Providers:</strong> To send newsletters and communications</li>
                <li><strong>Payment Processors:</strong> For secure transactions (if applicable)</li>
              </ul>
              <p className="mt-2">These third parties have access to your personal information only to perform specific tasks and are obligated not to disclose or use it for other purposes.</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">5. Data Security</h2>
              <p>We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">6. Your Data Protection Rights</h2>
              <p>Depending on your location, you may have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access:</strong> Request copies of your personal data</li>
                <li><strong>Rectification:</strong> Request correction of inaccurate information</li>
                <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                <li><strong>Restrict Processing:</strong> Request restriction of data processing</li>
                <li><strong>Data Portability:</strong> Request transfer of your data to another service</li>
              </ul>
              <p className="mt-2">To exercise these rights, please contact us using the information below.</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">7. Children&apos;s Privacy</h2>
              <p>Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">8. International Data Transfers</h2>
              <p>Your information may be transferred to and maintained on servers located outside your country of residence. By using our website, you consent to such transfers.</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">9. Changes to This Privacy Policy</h2>
              <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last Updated&quot; date. You are advised to review this page periodically for any changes.</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">10. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Email:</strong> <a href="mailto:privacy@fitroutine.online" className="text-primary hover:underline">privacy@fitroutine.online</a></li>
                <li><strong>Contact Form:</strong> <Link href="/contact" className="text-primary hover:underline">Visit our contact page</Link></li>
              </ul>

              <hr className="my-8 border-gray-200 dark:border-gray-700" />

              <p className="text-sm text-center text-body-color">
                © {currentYear} FitRoutine. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </main>
      
    </>
  );
}