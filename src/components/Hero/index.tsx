import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[900px] text-center">
              
              {/* Main Heading - Global Keywords */}
              <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Transform Your Body with <span className="text-primary">Home Workouts</span> & <span className="text-primary">Healthy Eating</span>
              </h1>
              
              {/* Subheading - High-Volume Keywords */}
              <p className="mb-6 text-lg font-medium text-primary dark:text-primary/80">
                🌍 No Gym Required • 🔥 Burn Fat Fast • 💪 Build Strength • 🥗 Eat Well
              </p>
              
              {/* Description - Global Audience */}
              <p className="mb-8 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                Welcome to <strong className="text-primary">FitRoutine</strong> – the world's most practical fitness platform. 
                We help people everywhere achieve their health goals with <strong>expert-backed home workouts</strong>, 
                <strong> sustainable nutrition plans</strong>, and <strong>real motivation</strong> that fits any lifestyle.
              </p>
              
              {/* Second Paragraph - Trust & Authority */}
              <p className="mb-10 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg">
                Whether you're in <strong>USA, UK, Canada, Australia, India, Pakistan</strong>, or anywhere in the world — 
                we're here to help you <strong>lose weight, build muscle, boost energy</strong>, and feel amazing. 
                <strong>No expensive gyms</strong>. <strong>No extreme diets</strong>. Just science-backed advice that works.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link
                  href="/blog"
                  className="rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 shadow-md hover:shadow-lg transition transform hover:scale-105"
                >
                  🏋️‍♂️ Start Your Fitness Journey
                </Link>
                <Link
                  href="/about"
                  className="inline-block rounded-lg bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5 transition transform hover:scale-105"
                >
                  🌟 Learn Our Story
                </Link>
              </div>
              
              {/* Trust Badges - Global Reach */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-body-color">
                <span className="flex items-center gap-1 group hover:text-primary transition">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  10,000+ Happy Readers
                </span>
                <span className="flex items-center gap-1 group hover:text-primary transition">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Science-Backed
                </span>
                <span className="flex items-center gap-1 group hover:text-primary transition">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  50+ Countries
                </span>
                <span className="flex items-center gap-1 group hover:text-primary transition">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  24/7 Free Access
                </span>
              </div>
              
              {/* Global Stats */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500 dark:text-gray-400">
                <span>⭐ 4.9/5 Rating (2,345+ Reviews)</span>
                <span>🌍 Trusted in 50+ Countries</span>
                <span>📝 50+ Expert Articles</span>
                <span>🎯 10,000+ Weight Loss Stories</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Decorations - Keep as is */}
      <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
        <svg width="450" height="556" viewBox="0 0 450 556" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="277" cy="63" r="225" fill="url(#paint0_linear_25:217)" />
          <circle cx="17.9997" cy="182" r="18" fill="url(#paint1_radial_25:217)" />
          <circle cx="76.9997" cy="288" r="34" fill="url(#paint2_radial_25:217)" />
          <circle cx="325.486" cy="302.87" r="180" transform="rotate(-37.6852 325.486 302.87)" fill="url(#paint3_linear_25:217)" />
          <defs>
            <linearGradient id="paint0_linear_25:217" x1="-54.5003" y1="-178" x2="222" y2="288" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="paint1_radial_25:217" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.9997 182) rotate(90) scale(18)">
              <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
            </radialGradient>
            <radialGradient id="paint2_radial_25:217" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(76.9997 288) rotate(90) scale(34)">
              <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
            </radialGradient>
            <linearGradient id="paint3_linear_25:217" x1="226.775" y1="-66.1548" x2="292.157" y2="351.421" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Hero;