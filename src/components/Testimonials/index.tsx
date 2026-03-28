import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    designation: "Fitness Enthusiast from USA",
    content:
      "This platform completely transformed my approach to fitness. The home workouts are effective, and the nutrition advice is practical. I've lost 15 pounds in just 2 months!",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    star: 5,
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    designation: "Registered Dietitian from Canada",
    content:
      "As a nutrition professional, I appreciate the evidence-based approach here. The meal plans are scientifically sound and actually sustainable. Highly recommend to my clients!",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    star: 5,
  },
  {
    id: 3,
    name: "Emma Williams",
    designation: "Busy Working Mom from UK",
    content:
      "Finding time for healthy eating seemed impossible until I discovered this website. The quick recipes and meal prep tips have been a game-changer for my family!",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    star: 5,
  },
  {
    id: 4,
    name: "James Anderson",
    designation: "Fitness Coach from Australia",
    content:
      "I recommend FitRoutine to all my clients. The workout guides are practical, and the nutrition advice is spot-on. A fantastic resource for anyone serious about their health.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    star: 5,
  },
  {
    id: 5,
    name: "Priya Sharma",
    designation: "Yoga Instructor from India",
    content:
      "The yoga and mindfulness content on this site is exceptional. I've incorporated many of their techniques into my own practice and classes. Truly inspiring!",
    image: "https://randomuser.me/api/portraits/women/89.jpg",
    star: 5,
  },
  {
    id: 6,
    name: "David Wilson",
    designation: "Weight Loss Success Story",
    content:
      "Thanks to FitRoutine, I've lost 30 pounds and kept it off for over a year. The sustainable approach to health and wellness really works. Forever grateful!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 overflow-hidden py-12 px-4 sm:py-16 md:py-20 lg:py-28">
      <div className="container mx-auto max-w-7xl">
        <SectionTitle
          title="What Our Global Community Says"
          paragraph="Join 50,000+ people worldwide who have transformed their lives with FitRoutine. Read their inspiring stories and see how we've helped people from every corner of the world achieve their health goals."
          center
        />

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 px-2 sm:px-4 md:px-6">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
      
      {/* Responsive Background SVGs - optimized for all devices */}
      <div className="absolute left-0 top-0 z-[-1] w-full h-full overflow-hidden pointer-events-none">
        <svg
          className="w-full h-auto min-w-[320px]"
          viewBox="0 0 1440 969"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <mask
            id="mask0_95:1005"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="1440"
            height="969"
          >
            <rect width="1440" height="969" fill="#090E34" />
          </mask>
          <g mask="url(#mask0_95:1005)">
            <path
              opacity="0.1"
              d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
              fill="url(#paint0_linear_95:1005)"
            />
            <path
              opacity="0.1"
              d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
              fill="url(#paint1_linear_95:1005)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_95:1005"
              x1="1178.4"
              y1="151.853"
              x2="780.959"
              y2="453.581"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_95:1005"
              x1="160.5"
              y1="220"
              x2="1099.45"
              y2="1192.04"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Testimonials;