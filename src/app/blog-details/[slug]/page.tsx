import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";
import { notFound } from "next/navigation";
import blogData from "@/components/Blog/blogData";
import { Metadata } from "next";
import Link from "next/link";

// ========== COMPLETE SEO METADATA FOR TOP RANKING ==========
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const blog = blogData.find((b) => b.slug === params.slug);
  
  if (!blog) {
    return {
      title: "Article Not Found | FitRoutine",
      description: "The fitness article you're looking for could not be found. Explore our other workout guides and nutrition tips.",
    };
  }
  
  // Use SEO data if available, otherwise generate from blog data
  const metaTitle = blog.seo?.metaTitle || `${blog.title} | FitRoutine Fitness Blog`;
  const metaDescription = blog.seo?.metaDescription || blog.paragraph.slice(0, 160);
  const metaKeywords = blog.seo?.metaKeywords || blog.tags;
  
  return {
    title: metaTitle,
    description: metaDescription,
    keywords: metaKeywords,
    authors: [{ name: blog.author.name, url: "/about" }],
    creator: "FitRoutine",
    publisher: "FitRoutine",
    alternates: {
      canonical: `https://fitroutine.com/blog/${blog.slug}`,
    },
    openGraph: {
      title: blog.seo?.ogTitle || metaTitle,
      description: blog.seo?.ogDescription || metaDescription,
      url: `https://fitroutine.com/blog/${blog.slug}`,
      siteName: "FitRoutine",
      type: "article",
      locale: "en_PK",
      publishedTime: blog.publishDate,
      modifiedTime: blog.lastModified || blog.publishDate,
      authors: [blog.author.name],
      tags: blog.tags,
      images: [
        {
          url: blog.seo?.ogImage || blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: blog.seo?.twitterCard || "summary_large_image",
      title: blog.seo?.twitterTitle || metaTitle,
      description: blog.seo?.twitterDescription || metaDescription,
      images: [blog.seo?.twitterImage || blog.image],
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
}

// Static paths generate karein
export async function generateStaticParams() {
  return blogData.map((blog) => ({
    slug: blog.slug,
  }));
}

export default function BlogDetailsPage({ params }: { params: { slug: string } }) {
  const blog = blogData.find((b) => b.slug === params.slug);
  
  if (!blog) {
    notFound();
  }
  
  const readingTime = blog.readingTime || Math.ceil(blog.content.split(' ').length / 200);
  
  return (
    <>
      <section className="pt-[150px] pb-[120px] bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
                
                {/* Category/Tag Badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                    {blog.tags[0]}
                  </span>
                </div>
                
                {/* Blog Title */}
                <h1 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
                  {blog.title}
                </h1>

                {/* Author and Meta Info */}
                <div className="border-body-color/10 mb-8 flex flex-wrap items-center justify-between border-b pb-6 dark:border-white/10">
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center">
                      <div className="mr-3">
                        <div className="relative h-12 w-12 overflow-hidden rounded-full">
                          <Image
                            src={blog.author.image}
                            alt={blog.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-body-color">
                          By <span className="text-black dark:text-white font-semibold">{blog.author.name}</span>
                        </p>
                        <p className="text-xs text-body-color">{blog.author.designation}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 text-sm text-body-color">
                      <span>📅 {blog.publishDate}</span>
                      <span>•</span>
                      <span>📖 {readingTime} min read</span>
                    </div>
                  </div>

                  <div className="mt-4 sm:mt-0">
                    <span className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">
                      Featured
                    </span>
                  </div>
                </div>

                {/* Featured Image */}
                <div className="mb-8 w-full overflow-hidden rounded-xl">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover object-center"
                      priority
                    />
                  </div>
                </div>

                {/* Blog Content - Full Article */}
                <div 
                  className="blog-content prose prose-lg max-w-none dark:prose-invert mb-8"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                {/* Author Bio Section - Good for E-E-A-T */}
                {blog.author.bio && (
                  <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-700/30 rounded-xl border border-gray-100 dark:border-gray-700">
                    <div className="flex items-start gap-4">
                      <div className="relative h-16 w-16 overflow-hidden rounded-full flex-shrink-0">
                        <Image
                          src={blog.author.image}
                          alt={blog.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-black dark:text-white">
                          About {blog.author.name}
                        </h3>
                        <p className="text-sm text-body-color mt-1">{blog.author.designation}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                          {blog.author.bio}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tags and Share Section */}
                <div className="items-center justify-between border-t border-body-color/10 pt-8 mt-8 dark:border-white/10 sm:flex">
                  <div className="mb-5">
                    <h4 className="text-body-color mb-3 text-sm font-medium">
                      Popular Tags :
                    </h4>
                    <div className="flex flex-wrap items-center gap-2">
                      {blog.tags.map((tag, index) => (
                        <TagButton key={index} text={tag} />
                      ))}
                    </div>
                  </div>

                  <div className="mb-5">
                    <h5 className="text-body-color mb-3 text-sm font-medium sm:text-right">
                      Share this post :
                    </h5>
                    <div className="flex items-center sm:justify-end">
                      <SharePost />
                    </div>
                  </div>
                </div>

                {/* Related Posts Section - Good for SEO & User Engagement */}
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-6">
                    You Might Also Like
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {blogData
                      .filter(b => b.id !== blog.id && b.tags.some(tag => blog.tags.includes(tag)))
                      .slice(0, 2)
                      .map((relatedBlog) => (
                        <Link 
                          key={relatedBlog.id}
                          href={`/blog/${relatedBlog.slug}`}
                          className="group flex gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition"
                        >
                          <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                            <Image
                              src={relatedBlog.image}
                              alt={relatedBlog.title}
                              fill
                              className="object-cover group-hover:scale-105 transition"
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold text-black dark:text-white group-hover:text-primary transition line-clamp-2">
                              {relatedBlog.title}
                            </h4>
                            <p className="text-sm text-body-color mt-1">
                              {relatedBlog.publishDate}
                            </p>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - Optional but good for SEO */}
            <div className="w-full px-4 lg:w-4/12 mt-8 lg:mt-0">
              <div className="sticky top-40">
                {/* About Author Card */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6">
                  <h3 className="text-lg font-bold text-black dark:text-white mb-4">
                    About the Author
                  </h3>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="relative h-14 w-14 overflow-hidden rounded-full">
                      <Image
                        src={blog.author.image}
                        alt={blog.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-black dark:text-white">{blog.author.name}</p>
                      <p className="text-xs text-body-color">{blog.author.designation}</p>
                    </div>
                  </div>
                  <p className="text-sm text-body-color">
                    {blog.author.bio || "Passionate about helping people achieve their fitness goals through practical advice and proven methods."}
                  </p>
                </div>

                {/* Popular Tags Widget */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-black dark:text-white mb-4">
                    Popular Topics
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {Array.from(new Set(blogData.flatMap(b => b.tags))).slice(0, 10).map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full hover:bg-primary hover:text-white transition cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}