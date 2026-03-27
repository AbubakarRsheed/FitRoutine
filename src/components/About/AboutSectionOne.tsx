"use client";

import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const List = ({ text }: { text: string }) => (
  <p className="mb-5 flex items-center text-lg font-medium text-body-color">
    <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary/10 text-primary">
      {checkIcon}
    </span>
    {text}
  </p>
);

const AboutSectionOne = () => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Your Journey to a Healthier Life Starts Here"
                paragraph="At FitRoutine, we believe fitness should be simple, practical, and achievable for everyone around the world. Whether you want to lose weight, build muscle, eat better, or just feel stronger every day – we're here to guide you with honest advice and real plans that work."
                mb="44px"
              />

              <div className="mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
                <div className="mx-[-12px] flex flex-wrap">
                  {/* Left Column */}
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Home Workouts That Actually Work" />
                    <List text="Simple Meal Plans for Weight Loss" />
                    <List text="Mindfulness & Stress Relief" />
                  </div>

                  {/* Right Column */}
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Fast Weight Loss Tips That Last" />
                    <List text="Expert Nutrition Guidance" />
                    <List text="Healthy Habits for Everyday Life" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-25/24 max-w-[500px] lg:mr-0">
                {/* High-Quality Global Fitness Image */}
                <Image
                  src="https://images.pexels.com/photos/3757950/pexels-photo-3757950.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
                  alt="Diverse group of people doing fitness workout together - global fitness community"
                  fill
                  className="mx-auto max-w-full rounded-2xl object-cover drop-shadow-three dark:drop-shadow-none lg:mr-0"
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;