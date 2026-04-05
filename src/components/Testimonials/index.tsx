"use client";

import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    designation: "Weight Loss Success Story • USA",
    content:
      "FitRoutine changed my life! I've lost 25 pounds in 3 months without stepping foot in a gym. The home workouts are so effective, and the meal plans are delicious. I finally found something that works for my busy schedule!",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    star: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    designation: "Fitness Coach & Nutritionist • Canada",
    content:
      "As a fitness professional, I'm impressed by the quality of content here. The science-backed approach to weight loss and muscle gain is exactly what my clients need. I recommend FitRoutine to everyone I work with!",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    star: 5,
  },
  {
    id: 3,
    name: "Priya Sharma",
    designation: "Busy Mom & Yoga Enthusiast • India",
    content:
      "Finding time for fitness seemed impossible with two kids and a full-time job. FitRoutine's 15-minute workouts and quick healthy recipes have transformed our family's lifestyle. My energy levels have never been better!",
    image: "https://randomuser.me/api/portraits/women/89.jpg",
    star: 5,
  },
  {
    id: 4,
    name: "James Anderson",
    designation: "Muscle Gain Journey • Australia",
    content:
      "Gained 12 pounds of muscle in 4 months! The progressive workout plans and nutrition guides are game-changers. Finally, a fitness platform that understands real people with real goals. 10/10 recommend!",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 px-4 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 sm:py-20 md:py-24 lg:py-28">
      <div className="container mx-auto max-w-7xl">
        <SectionTitle
          title="Real Results from Real People 🏆"
          paragraph="Join 50,000+ happy members worldwide who have transformed their bodies and lives with FitRoutine. Here's what they have to say about their journey with us."
          center
        />

        {/* Responsive Grid Layout - 4 items */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 px-2 sm:px-4 md:px-6">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-green-100 px-6 py-3 dark:bg-green-900/30">
            <span className="text-2xl">⭐</span>
            <span className="font-semibold text-green-700 dark:text-green-300">
              Rated 4.96/5 by 3,200+ verified members
            </span>
            <span className="text-2xl">🏆</span>
          </div>
        </div>
      </div>
      
      {/* Decorative Background Elements */}
      <div className="absolute left-0 top-0 -z-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 -z-10 h-80 w-80 rounded-full bg-purple-500/5 blur-3xl" />
    </section>
  );
};

export default Testimonials;