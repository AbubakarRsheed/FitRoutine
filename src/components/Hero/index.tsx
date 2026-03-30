import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const lastUpdated = new Date().toISOString().split('T')[0];

  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px]"
    >
      {/* Background Image - Fixed for Full Display */}
      <div className="absolute inset-0 z-[-1] h-full w-full">
        <Image
          src="https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Diverse group of people exercising together outdoors - Global fitness community"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
          quality={100}
        />
        {/* Modern Gradient Overlay - Lighter for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/90 dark:from-black/80 dark:via-black/40 dark:to-black/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[950px] text-center">
              
              {/* Humanized & Global SEO Heading */}
              <h1 className="mb-6 text-4xl font-extrabold leading-tight text-black dark:text-white sm:text-5xl md:text-6xl">
                Empowering <span className="text-primary">Real People</span> with 
                <br /> 
                <span className="text-primary">Global Fitness</span> Solutions
              </h1>
              
              <p className="mb-8 text-lg font-medium text-body-color dark:text-gray-300 md:text-xl leading-relaxed">
                Join <strong>FitRoutine</strong>, the world’s most <strong>human-centric</strong> fitness platform. 
                Whether you want to lose weight, build muscle, or stay active, we provide 
                <strong> personalized home workouts</strong> and <strong>sustainable nutrition</strong> 
                tailored for every body, in every corner of the world. 🌍
              </p>

              {/* Action Buttons with Full Online Links */}
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link
                  href="https://fitroutine.online/blog"
                  className="rounded-full bg-primary px-9 py-4 text-base font-bold text-white shadow-xl transition duration-300 hover:bg-primary/90 hover:scale-105"
                >
                  Start Your Transformation
                </Link>
                <Link
                  href="https://fitroutine.online/about"
                  className="rounded-full bg-black px-9 py-4 text-base font-bold text-white shadow-xl transition duration-300 hover:bg-black/80 dark:bg-white/10 hover:scale-105"
                >
                  Our Global Mission
                </Link>
              </div>

              {/* Global Ranking Stats */}
              <div className="mt-12 grid grid-cols-2 gap-4 border-t border-gray-200 pt-8 dark:border-gray-700 md:grid-cols-4">
                <div>
                  <h3 className="text-2xl font-bold text-black dark:text-white">10k+</h3>
                  <p className="text-sm text-body-color">Active Members</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black dark:text-white">50+</h3>
                  <p className="text-sm text-body-color">Countries Reached</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black dark:text-white">4.9/5</h3>
                  <p className="text-sm text-body-color">Success Rate</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black dark:text-white">FREE</h3>
                  <p className="text-sm text-body-color">Online Access</p>
                </div>
              </div>

              {/* SEO Tags */}
              <meta itemProp="dateModified" content={lastUpdated} />
              <link rel="canonical" href="https://fitroutine.online" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;