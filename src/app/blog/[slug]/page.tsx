import Image from "next/image";
import { notFound } from "next/navigation";
import blogData from "@/components/Blog/blogData";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogData.find((blog) => blog.slug === slug);
  
  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }
  
  return {
    title: blog.title,
    description: blog.paragraph,
  };
}

export async function generateStaticParams() {
  return blogData.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogDetailsPage({ params }: Props) {
  const { slug } = await params;
  const blog = blogData.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <section className="pt-[150px] pb-[120px]">
      <div className="container">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full px-4 lg:w-8/12">
            <div>
              {/* Blog Title */}
              <h1 className="mb-8 text-4xl font-bold leading-tight text-black sm:text-5xl dark:text-white">
                {blog.title}
              </h1>

              {/* Author and Meta Info */}
              <div className="flex flex-wrap items-center justify-between pb-4 mb-10 border-b border-body-color/10 dark:border-white/10">
                <div className="flex flex-wrap items-center">
                  <div className="flex items-center mb-5 mr-10">
                    <div className="mr-4">
                      <div className="relative w-12 h-12 overflow-hidden rounded-full">
                        <Image
                          src={blog.author.image}
                          alt={blog.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-black dark:text-white">
                        {blog.author.name}
                      </h4>
                      <p className="text-sm text-body-color">{blog.author.designation}</p>
                    </div>
                  </div>

                  <div className="flex items-center mb-5">
                    <svg className="w-5 h-5 mr-2 text-body-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-base font-medium text-body-color">
                      {blog.publishDate}
                    </p>
                  </div>
                </div>

                <div className="mb-5">
                  <span className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white rounded-full bg-primary">
                    {blog.tags[0]}
                  </span>
                </div>
              </div>

              {/* Featured Image */}
              <div className="w-full mb-10 overflow-hidden rounded-lg">
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* ========== IMPORTANT PART ========== */}
              {/* Blog Full Content - HTML rendered safely */}
              <div 
                className="blog-content prose prose-lg max-w-none dark:prose-invert mb-10"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
              {/* ========== IMPORTANT PART END ========== */}

              {/* Tags Section */}
              <div className="pt-8 mt-8 border-t border-body-color/10 dark:border-white/10">
                <h4 className="mb-3 text-sm font-medium text-body-color">
                  Tags:
                </h4>
                <div className="flex flex-wrap items-center gap-2">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 text-sm bg-gray-100 rounded-full dark:bg-gray-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share Section */}
              <div className="pt-8 mt-8">
                <h5 className="mb-3 text-sm font-medium text-body-color">
                  Share this post:
                </h5>
                <SharePost />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}