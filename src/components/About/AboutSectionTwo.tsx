"use client";

import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Image Section */}
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="FitRoutine healthy lifestyle - balanced diet and exercise"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/1.png"
                alt="FitRoutine wellness journey - fitness and nutrition"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>

          {/* Text Content Section */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              {/* Feature 1 */}
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Built on Real Experience
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Our workout plans and diet guides come from real experience – not just theory. We've worked with people who want simple, honest advice that fits into their busy lives. No complicated gym jargon. Just practical fitness that works.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  More Than Just Exercise
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  True wellness comes from balance. Along with workouts, we share simple ways to eat better, manage stress, get good sleep, and build habits that last. Small changes, done consistently, make all the difference.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  A Growing Community
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  FitRoutine is more than a website. It's a space where people like you come to learn, stay motivated, and grow. We're glad you're here. Let's take this health journey together – one step at a time.
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