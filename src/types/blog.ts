export type Author = {
  name: string;
  image: string;
  designation?: string;
  bio?: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    facebook?: string;
  };
};

export type SeoData = {
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: object;
};

export type Blog = {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  author: Author;
  tags: string[];
  categories?: string[];
  publishDate: string;
  lastModified?: string;
  slug: string;
  content: string;
  readingTime?: number;
  featured?: boolean;
  seo?: SeoData;
  
};