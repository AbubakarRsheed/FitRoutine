"use client";

import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Image Section - High Quality Global Image */}
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
                alt="Diverse group practicing yoga outdoors - global wellness community"
                fill
                className="rounded-2xl object-cover drop-shadow-three dark:drop-shadow-none"
                sizes="(max-width: 768px) 100vw, 500px"
                priority
              />
            </div>
          </div>

          {/* Text Content Section - Global Focus */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              {/* Feature 1 - Real Experience */}
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Built on Real Experience
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Our workout plans and diet guides come from real experience – not just theory. We've worked with people around the world who want simple, honest advice that fits into their busy lives. No complicated gym jargon. Just practical fitness that works for everyone.
                </p>
              </div>

              {/* Feature 2 - More Than Just Exercise */}
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  More Than Just Exercise
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  True wellness comes from balance. Along with workouts, we share simple ways to eat better, manage stress, get quality sleep, and build habits that last. Small changes, done consistently, make all the difference in your life.
                </p>
              </div>

              {/* Feature 3 - Growing Global Community */}
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  A Growing Global Community
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  FitRoutine is more than a website. It's a worldwide community where people from every corner of the world come to learn, stay motivated, and grow together. We're glad you're here. Let's take this health journey together – one step at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;