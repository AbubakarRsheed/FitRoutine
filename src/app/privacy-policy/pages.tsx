import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | FitLife Blog",
  description: "Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="pt-40 pb-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-black dark:text-white mb-8 text-center">
              Privacy Policy
            </h1>
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-body-color">Last Updated: March 20, 2024</p>
              <p>Welcome to FitLife Blog. We respect your privacy and are committed to protecting your personal information.</p>
              <h2>1. Information We Collect</h2>
              <p>We collect information you provide directly to us, such as when you subscribe to our newsletter or leave comments.</p>
              <h2>2. How We Use Your Information</h2>
              <p>We use the information we collect to provide, maintain, and improve our services.</p>
              <h2>3. Contact Us</h2>
              <p>If you have questions, contact us at <a href="mailto:info@fitlifeblog.com">info@fitlifeblog.com</a></p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}