import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Ahmed",
    designation: "Fitness Enthusiast",
    content:
      "This platform completely changed how I approach my daily meals. The healthy recipes are not only delicious but also very easy to follow!",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Dr. Kamran Khan",
    designation: "Nutritionist",
    content:
      "I highly recommend this site for anyone looking for evidence-based health advice and balanced diet plans. Truly a reliable resource.",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Ayesha Malik",
    designation: "Busy Working Mom",
    content:
      "Finding quick and healthy meal ideas used to be a struggle until I found this website. It has made meal prepping so much simpler.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="What Our Healthy Community Says"
          paragraph="Hear from our community members about how our nutrition plans and healthy lifestyle guides have helped them reach their wellness goals."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
      
      {/* ... keep your existing SVG background code as it is ... */}
      
    </section>
  );
};

export default Testimonials;