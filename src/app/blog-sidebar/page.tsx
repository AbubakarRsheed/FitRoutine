import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import NewsLatterBox from "@/components/Contact/NewsLatterBox";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

// ========== COMPLETE SEO METADATA ==========
export const metadata: Metadata = {
  title: "Mindful Eating Guide 2026 | How to Transform Your Relationship with Food",
  description: "Learn the science of mindful eating, gut health, and sustainable nutrition. Expert tips to help you eat better, feel better, and live healthier in 2026.",
  keywords: [
    "mindful eating",
    "healthy eating habits",
    "gut health",
    "nutrition guide",
    "whole foods diet",
    "healthy lifestyle 2026",
    "clean eating tips",
    "food relationship",
    "wellness journey",
    "balanced diet",
    "healthy eating tips",
    "nutrition advice",
    "mindful nutrition",
    "health and wellness",
    "eating psychology"
  ],
  authors: [{ name: "Dr. Sarah Ahmed", url: "/about" }],
  creator: "FitRoutine",
  publisher: "FitRoutine",
  alternates: {
    canonical: "https://fitroutine.com/blog/health-food",
  },
  openGraph: {
    title: "Mindful Eating Guide: Transform Your Food Relationship",
    description: "Discover how mindful eating can improve your digestion, reduce stress, and help you build a healthier relationship with food.",
    url: "https://fitroutine.com/blog/health-food",
    siteName: "FitRoutine",
    type: "article",
    locale: "en_PK",
    publishedTime: "2026-03-08",
    modifiedTime: "2026-03-20",
    authors: ["Dr. Sarah Ahmed"],
    tags: ["mindful eating", "nutrition", "wellness"],
    images: [
      {
        url: "https://fitroutine.com/images/blog/health-food-og.jpg",
        width: 1200,
        height: 630,
        alt: "Mindful Eating - Healthy Food and Nutrition",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mindful Eating Guide 2026",
    description: "Expert tips to help you eat better and feel better.",
    images: ["https://fitroutine.com/images/blog/health-food-twitter.jpg"],
    site: "@fitroutine",
    creator: "@drsarahahmed",
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

export default function HealthFoodBlogPage() {
  const currentYear = new Date().getFullYear();
  
  return (
    <>
      <section className="overflow-hidden pt-[180px] pb-[120px] bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            {/* Main Content */}
            <div className="w-full px-4 lg:w-8/12">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
                
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 px-4 py-2 text-sm font-medium text-green-700 dark:text-green-400">
                    🥗 Nutrition & Wellness
                  </span>
                </div>
                
                {/* Blog Title */}
                <h1 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
                  Mindful Eating: How to Transform Your Relationship with Food in {currentYear}
                </h1>
                
                {/* Author & Meta Info */}
                <div className="border-body-color/10 mb-8 flex flex-wrap items-center justify-between border-b pb-6 dark:border-white/10">
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center">
                      <div className="mr-3">
                        <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-primary">
                          <Image
                            src="/images/blog/author-health.png"
                            alt="Dr. Sarah Ahmed - Nutrition Expert"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-body-color">
                          By <span className="text-primary font-semibold">Dr. Sarah Ahmed</span>
                        </p>
                        <p className="text-xs text-body-color">Clinical Nutritionist & Wellness Coach</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-body-color">
                      <span>📅 March 08, 2026</span>
                      <span>•</span>
                      <span>⏱️ 6 min read</span>
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-0">
                    <span className="inline-flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 px-4 py-2 text-sm font-semibold text-green-700 dark:text-green-400">
                      Featured Article
                    </span>
                  </div>
                </div>

                {/* Introduction */}
                <p className="text-body-color mb-6 text-base leading-relaxed font-medium sm:text-lg">
                  In today's fast-paced world, "health" extends far beyond just going to the gym. 
                  It's about understanding how the food you eat affects your body, your mind, and your 
                  overall quality of life. Modern nutritional science is now heavily focused on something 
                  called the <strong className="text-primary">"Gut-Brain Connection"</strong> – and it's changing how we think about eating.
                </p>

                {/* Featured Image */}
                <div className="mb-8 w-full overflow-hidden rounded-xl">
                  <div className="relative aspect-video w-full">
                    <Image
                      src="/images/blog/11.jpg"
                      alt="Balanced diet plate with fresh vegetables, fruits, and healthy food options"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <p className="text-xs text-center text-body-color mt-2">
                    A balanced plate: fresh vegetables, lean protein, healthy fats, and complex carbs
                  </p>
                </div>

                {/* Section 1: What is Mindful Eating */}
                <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  What Is Mindful Eating?
                </h2>
                <p className="text-body-color mb-6 leading-relaxed">
                  Mindful eating is the practice of paying full attention to the experience of eating – 
                  noticing the colors, smells, textures, and flavors of your food. It's about listening 
                  to your body's hunger and fullness signals, and eating with intention rather than out of habit or emotion.
                </p>
                <p className="text-body-color mb-8 leading-relaxed">
                  Unlike dieting, which often feels like restriction, mindful eating is about building 
                  awareness and making choices that truly nourish you. It's not about what you can't eat – 
                  it's about enjoying what you do eat, fully and without guilt.
                </p>

                {/* Section 2: The Power of Whole Foods */}
                <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  The Power of Whole Foods
                </h2>
                <p className="text-body-color mb-6 leading-relaxed">
                  Instead of relying on processed options, integrate more <strong>whole foods</strong> into your daily diet. 
                  Fresh fruits, vegetables, lean proteins, nuts, seeds, and whole grains should form the 
                  foundation of your eating habits.
                </p>
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl mb-8">
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-3">
                    🌱 What Are Whole Foods?
                  </h3>
                  <ul className="space-y-2 text-body-color">
                    <li>✓ Fresh vegetables and fruits (aim for a variety of colors)</li>
                    <li>✓ Lean proteins like chicken, fish, eggs, and legumes</li>
                    <li>✓ Whole grains like brown rice, quinoa, and oats</li>
                    <li>✓ Healthy fats from avocados, olive oil, and nuts</li>
                    <li>✓ Fermented foods like yogurt, kimchi, and sauerkraut for gut health</li>
                  </ul>
                </div>
                <p className="text-body-color mb-8 leading-relaxed">
                  Scientific research shows that a natural, nutrient-dense diet not only helps maintain 
                  a healthy weight but also significantly reduces mental fatigue, improves mood, and 
                  supports long-term brain health.
                </p>

                {/* Section 3: The Gut-Brain Connection */}
                <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  The Gut-Brain Connection: Your Second Brain
                </h2>
                <p className="text-body-color mb-6 leading-relaxed">
                  Your digestive system is often called your "second brain" – and for good reason. 
                  The gut contains millions of nerve cells and produces many of the same 
                  neurotransmitters (like serotonin) that your brain does.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mb-8">
                  <p className="text-body-color text-lg font-medium italic">
                    "About 90% of your body's serotonin – the "feel-good" neurotransmitter – is produced 
                    in your gut, not your brain."
                  </p>
                </div>
                <p className="text-body-color mb-8 leading-relaxed">
                  Cultivating a diverse and healthy microbiome through fiber-rich foods and fermented items 
                  is essential for both mood regulation and long-term physical health. When your gut is healthy, 
                  your mind follows.
                </p>

                {/* Section 4: Key Habits for Healthy Eating */}
                <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  Key Habits for a Healthier Relationship with Food
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg">
                    <h3 className="font-semibold text-black dark:text-white mb-2">🥤 Hydration</h3>
                    <p className="text-sm text-body-color">Aim for 2-3 liters of water daily. Start your morning with a glass of water with lemon.</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg">
                    <h3 className="font-semibold text-black dark:text-white mb-2">🍳 Protein-Rich Breakfast</h3>
                    <p className="text-sm text-body-color">Eggs, Greek yogurt, or a protein smoothie to stabilize blood sugar and energy.</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg">
                    <h3 className="font-semibold text-black dark:text-white mb-2">😴 Quality Sleep</h3>
                    <p className="text-sm text-body-color">7-8 hours of sleep helps regulate hunger hormones and reduces cravings.</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg">
                    <h3 className="font-semibold text-black dark:text-white mb-2">🍬 Minimize Refined Sugar</h3>
                    <p className="text-sm text-body-color">Reduce processed sugar to avoid energy crashes and inflammation.</p>
                  </div>
                </div>

                {/* Section 5: How to Start Mindful Eating */}
                <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  How to Start Mindful Eating Today
                </h2>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-xl">1.</span>
                    <span className="text-body-color">Eat without distractions – put away your phone and turn off the TV.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-xl">2.</span>
                    <span className="text-body-color">Take three deep breaths before you start eating.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-xl">3.</span>
                    <span className="text-body-color">Chew slowly and notice the flavors and textures of your food.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-xl">4.</span>
                    <span className="text-body-color">Pause halfway through your meal to check if you're still hungry.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-xl">5.</span>
                    <span className="text-body-color">Stop eating when you feel satisfied, not stuffed.</span>
                  </li>
                </ul>

                {/* Quote Section */}
                <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 mb-8 rounded-r-md">
                  <p className="text-body-color text-lg font-medium italic">
                    "Let food be thy medicine and medicine be thy food." — Hippocrates
                  </p>
                  <p className="text-body-color text-sm mt-2">
                    This ancient wisdom is more relevant today than ever before.
                  </p>
                </div>

                {/* Section 6: Quick Tips Summary */}
                <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  Quick Summary: Mindful Eating at a Glance
                </h2>
                <ul className="grid grid-cols-1 gap-2 mb-8">
                  <li className="flex items-center gap-2 text-body-color">
                    <span className="text-green-500">✅</span> Eat slowly and without distractions
                  </li>
                  <li className="flex items-center gap-2 text-body-color">
                    <span className="text-green-500">✅</span> Listen to your hunger and fullness cues
                  </li>
                  <li className="flex items-center gap-2 text-body-color">
                    <span className="text-green-500">✅</span> Choose whole, unprocessed foods
                  </li>
                  <li className="flex items-center gap-2 text-body-color">
                    <span className="text-green-500">✅</span> Stay hydrated and get enough sleep
                  </li>
                  <li className="flex items-center gap-2 text-body-color">
                    <span className="text-green-500">✅</span> Enjoy your food – eating should be pleasurable
                  </li>
                </ul>

                {/* Tags & Share Section */}
                <div className="flex flex-wrap items-center justify-between border-t pt-8 mt-6">
                  <div className="mb-5">
                    <h4 className="text-body-color mb-3 text-sm font-bold uppercase">Tags:</h4>
                    <div className="flex flex-wrap gap-2">
                      <TagButton text="Wellness" />
                      <TagButton text="Mindful Eating" />
                      <TagButton text="Nutrition" />
                      <TagButton text="Healthy Recipes" />
                      <TagButton text="Gut Health" />
                    </div>
                  </div>
                  <div className="mb-5">
                    <h5 className="text-body-color mb-3 text-sm font-medium sm:text-right">
                      Share this post:
                    </h5>
                    <SharePost />
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full px-4 lg:w-4/12 mt-8 lg:mt-0">
              
              {/* Search Box */}
              <div className="shadow-three dark:bg-gray-dark mb-8 rounded-2xl bg-white p-6 dark:shadow-none">
                <h3 className="mb-6 text-xl font-bold text-black dark:text-white">🔍 Search Articles</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search recipes, tips, or topics..."
                    className="w-full rounded-lg border border-gray-200 bg-[#f8f8f8] px-5 py-3 text-base outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-white"
                  />
                </div>
              </div>

              {/* Trending Health Tips */}
              <div className="shadow-three dark:bg-gray-dark mb-8 rounded-2xl bg-white p-6 dark:shadow-none">
                <h3 className="mb-6 border-b pb-4 text-xl font-bold text-black dark:text-white">
                  📈 Trending Health Tips
                </h3>
                <ul className="space-y-6">
                  <li className="border-b pb-6 dark:border-white/10">
                    <RelatedPost
                      title="Intermittent Fasting: Is It Right for Your Lifestyle?"
                      image="/images/blog/13.jpg"
                      slug="/blog/intermittent-fasting-guide"
                      date="March 05, 2026"
                    />
                  </li>
                  <li>
                    <RelatedPost
                      title="Top 10 Superfoods for Glowing Skin and Better Health"
                      image="/images/blog/12.jpg"
                      slug="/blog/superfoods-for-skin"
                      date="Feb 28, 2026"
                    />
                  </li>
                </ul>
              </div>

              {/* About Author Card */}
              <div className="shadow-three dark:bg-gray-dark mb-8 rounded-2xl bg-white p-6 dark:shadow-none">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                  👩‍⚕️ About the Author
                </h3>
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full">
                    <Image
                      src="/images/blog/author-health.png"
                      alt="Dr. Sarah Ahmed"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-black dark:text-white">Dr. Sarah Ahmed</p>
                    <p className="text-xs text-body-color">Clinical Nutritionist | 10+ Years Experience</p>
                  </div>
                </div>
                <p className="text-sm text-body-color">
                  Dr. Sarah helps people build healthier relationships with food through evidence-based 
                  nutrition advice and mindful eating practices.
                </p>
              </div>

              {/* Newsletter Signup */}
              <NewsLatterBox />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}