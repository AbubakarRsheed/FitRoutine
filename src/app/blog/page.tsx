import Breadcrumb from "@/components/Common/Breadcrumb";
import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import { Metadata } from "next";
import Link from "next/link";

// ========== COMPLETE SEO METADATA FOR TOP RANKING ==========
export const metadata: Metadata = {
  title: "Fitness Blog | Workout Tips, Nutrition Guides & Wellness Advice",
  description: "Read the latest fitness articles, home workout guides, healthy recipes, and expert nutrition tips. Your daily source for practical health advice that works.",
  keywords: [
    "fitness blog",
    "workout tips",
    "nutrition guides",
    "health articles",
    "home workouts",
    "weight loss tips",
    "healthy recipes",
    "wellness advice",
    "exercise routines",
    "diet plans",
    "fitness motivation",
    "healthy lifestyle",
    "Pakistan fitness blog",
    "health and wellness",
    "best fitness tips"
  ],
  authors: [{ name: "FitRoutine Team", url: "https://fitroutine.com/about" }],
  creator: "FitRoutine",
  publisher: "FitRoutine",
  alternates: {
    canonical: "https://fitroutine.com/blog",
  },
  openGraph: {
    title: "FitRoutine Blog | Expert Fitness & Nutrition Advice",
    description: "Discover practical workout plans, healthy recipes, and wellness tips to help you live your healthiest life. New articles added weekly.",
    url: "https://fitroutine.com/blog",
    siteName: "FitRoutine",
    type: "website",
    locale: "en_PK",
    images: [
      {
        url: "https://fitroutine.com/images/blog/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "FitRoutine Fitness & Health Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FitRoutine Blog | Workouts, Nutrition & Wellness",
    description: "Your daily source for practical fitness advice, healthy recipes, and wellness tips that actually work.",
    images: ["https://fitroutine.com/images/blog/twitter-blog.jpg"],
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

export default function BlogPage() {
  // Get featured blogs (first 3) for better user engagement
  const featuredBlogs = blogData.slice(0, 3);
  const otherBlogs = blogData.slice(3);

  return (
    <>
      <Breadcrumb
        pageName="Fitness Blog"
        description="Simple, practical advice on workouts, nutrition, and healthy living. Written by people who understand real life – no gym required."
      />

      <section className="pt-[120px] pb-[120px] bg-gray-50 dark:bg-gray-900">
        <div className="container">
          
          {/* Featured Section - Better for SEO & User Engagement */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-black dark:text-white">
                Featured Articles
              </h2>
              <Link 
                href="#all-articles" 
                className="text-primary hover:underline text-sm"
              >
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredBlogs.map((blog) => (
                <div key={blog.id} className="w-full">
                  <SingleBlog blog={blog} />
                </div>
              ))}
            </div>
          </div>

          {/* All Articles Section */}
          <div id="all-articles">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-black dark:text-white">
                Latest Fitness & Health Articles
              </h2>
              <p className="text-body-color mt-2">
                Fresh content to help you stay on track with your health goals
              </p>
            </div>
            <div className="flex flex-wrap justify-center -mx-4">
              {otherBlogs.map((blog) => (
                <div
                  key={blog.id}
                  className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
                >
                  <SingleBlog blog={blog} />
                </div>
              ))}
            </div>
          </div>

          {/* Pagination - Better for SEO & User Experience */}
          <div className="flex justify-center mt-12">
            <nav className="flex items-center gap-2">
              <button 
                disabled 
                className="px-3 py-2 rounded-md bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-700"
              >
                Previous
              </button>
              <button className="px-3 py-2 rounded-md bg-primary text-white">1</button>
              <button className="px-3 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-white">
                2
              </button>
              <button className="px-3 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-white">
                3
              </button>
              <button className="px-3 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-white">
                Next
              </button>
            </nav>
          </div>

          {/* Newsletter Signup - For User Engagement & SEO */}
          <div className="mt-16 bg-primary/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-3">
              Get Weekly Fitness Tips
            </h3>
            <p className="text-body-color mb-6 max-w-2xl mx-auto">
              Join our community and get the latest workout guides, healthy recipes, 
              and wellness advice delivered to your inbox every week.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 w-full max-w-sm"
              />
              <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-body-color mt-3">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}