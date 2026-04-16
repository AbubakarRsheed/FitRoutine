import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";



import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fitroutine - Health & Fitness Blog | Weight Loss Tips & Workouts",
  description: "Discover expert health and fitness tips, weight loss strategies, home workouts, and wellness guides. Join Fitroutine for a healthier lifestyle.",
  keywords: "fitness blog, weight loss tips, home workouts, health guides, wellness tips",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Blog />
      <Features />
      <AboutSectionOne />
      <AboutSectionTwo />
     
     
      <Contact />
    </>
  );
}