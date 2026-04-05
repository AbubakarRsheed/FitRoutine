"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Hero = () => {
  const lastUpdated = new Date().toISOString().split('T')[0];
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50/30 to-purple-50 pb-16 pt-[120px] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px]"
    >
      {/* Animated Gradient Orbs */}
      <div 
        className="absolute top-20 left-10 h-72 w-72 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-20 blur-3xl animate-pulse"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      />
      <div 
        className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-3xl animate-pulse delay-1000"
        style={{
          transform: `translate(${-mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02}px)`
        }}
      />
      <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-10 blur-3xl animate-pulse delay-700" />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[1000px] text-center">
              
              {/* Animated Badge */}
              <div className="mb-8 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 px-5 py-2.5 shadow-lg dark:from-green-900/30 dark:to-emerald-900/30 backdrop-blur-sm">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-green-700 text-sm font-bold dark:text-green-300">✨ Trusted by 15,000+ Happy Members</span>
                  <span className="text-green-600 text-xs font-semibold bg-green-200 dark:bg-green-800 px-2 py-0.5 rounded-full">+50% Growth</span>
                </div>
              </div>
              
              {/* Main Heading with Better Typography */}
              <h1 className="mb-8 animate-fade-in-up animation-delay-200">
                <span className="block text-5xl font-black leading-tight text-black dark:text-white sm:text-6xl md:text-7xl">
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Transform Your Body
                  </span>
                  <br />
                  <span className="text-4xl sm:text-5xl md:text-6xl mt-4 block">
                    Without Leaving Home
                  </span>
                </span>
                <span className="inline-flex items-center gap-3 mt-6 text-2xl font-bold text-gray-700 dark:text-gray-200 sm:text-3xl md:text-4xl">
                  <span>🏠</span>
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    Personalized Workouts
                  </span>
                  <span>💪</span>
                </span>
              </h1>
              
              {/* Enhanced Description with Icons */}
              <p className="mb-10 text-lg text-gray-700 dark:text-gray-300 md:text-xl leading-relaxed max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
                <span className="font-bold text-primary">FitRoutine</span> is your 
                <span className="font-semibold text-blue-600 dark:text-blue-400"> all-in-one fitness ecosystem</span> for 
                <span className="inline-flex items-center gap-1 mx-1"><span>🔥</span><strong>weight loss</strong></span>, 
                <span className="inline-flex items-center gap-1 mx-1"><span>💪</span><strong>muscle gain</strong></span>, and 
                <span className="inline-flex items-center gap-1 mx-1"><span>🧘</span><strong>mental wellness</strong></span>.
                <br className="hidden sm:block" />
                Get 
                <span className="font-semibold text-purple-600 dark:text-purple-400"> AI-powered workout plans</span>, 
                <span className="font-semibold text-green-600 dark:text-green-400"> keto & vegan recipes</span>, 
                <span className="font-semibold text-orange-600 dark:text-orange-400"> intermittent fasting scheduler</span>, and 
                <span className="font-semibold text-pink-600 dark:text-pink-400"> live community challenges</span>.
              </p>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col items-center justify-center gap-5 sm:flex-row animate-fade-in-up animation-delay-600">
                <Link
                  href="https://fitroutine.online/blog"
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-10 py-5 text-lg font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></span>
                  <span className="text-2xl">🚀</span>
                  <span>Start Your Journey Free</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="https://fitroutine.online/about"
                  className="group inline-flex items-center gap-2 rounded-2xl border-2 border-gray-300 bg-white/80 backdrop-blur-sm px-9 py-5 text-lg font-bold text-gray-700 transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary hover:text-white dark:border-gray-600 dark:bg-gray-800/80 dark:text-white dark:hover:border-white"
                >
                  <span>📖</span>
                  <span>Watch Success Stories</span>
                  <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>

              {/* Interactive Trust Badges */}
              <div className="mt-10 flex flex-wrap items-center justify-center gap-5 animate-fade-in-up animation-delay-800">
                {[
                  { icon: "💰", text: "100% Free Forever", color: "bg-green-100 dark:bg-green-900/30" },
                  { icon: "🏋️", text: "No Equipment Needed", color: "bg-blue-100 dark:bg-blue-900/30" },
                  { icon: "👨‍⚕️", text: "Expert-Reviewed", color: "bg-purple-100 dark:bg-purple-900/30" },
                  { icon: "📱", text: "Mobile Friendly", color: "bg-orange-100 dark:bg-orange-900/30" }
                ].map((badge, idx) => (
                  <div key={idx} className={`flex items-center gap-2 rounded-full ${badge.color} px-5 py-2.5 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group`}>
                    <span className="text-xl group-hover:scale-110 transition-transform">{badge.icon}</span>
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">{badge.text}</span>
                  </div>
                ))}
              </div>

              {/* Animated Stats Cards */}
              <div className="mt-14 grid grid-cols-2 gap-5 border-t border-gray-200 pt-10 dark:border-gray-700 md:grid-cols-4 animate-fade-in-up animation-delay-1000">
                {[
                  { value: "15,000+", label: "Active Members", trend: "+47%", icon: "👥", color: "from-blue-500 to-cyan-500" },
                  { value: "50+", label: "Countries", trend: "🌍", icon: "🌎", color: "from-green-500 to-emerald-500" },
                  { value: "4.96", label: "Success Rate", trend: "⭐ 3,200+", icon: "🏆", color: "from-yellow-500 to-orange-500" },
                  { value: "₹0", label: "Investment", trend: "Forever Free", icon: "🎯", color: "from-purple-500 to-pink-500" }
                ].map((stat, idx) => (
                  <div key={idx} className="group relative rounded-2xl bg-gradient-to-br from-white to-gray-50 p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 dark:from-gray-800 dark:to-gray-800/50 cursor-pointer">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    <div className="relative">
                      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform inline-block">{stat.icon}</div>
                      <h3 className={`text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                        {stat.value}
                      </h3>
                      <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">{stat.label}</p>
                      <p className="text-xs text-gray-400 group-hover:text-gray-600 transition-colors">{stat.trend}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Proof & Testimonials Teaser */}
              <div className="mt-12 flex flex-wrap items-center justify-center gap-8 p-5 rounded-2xl bg-white/50 backdrop-blur-sm dark:bg-gray-800/30 animate-fade-in-up animation-delay-1200">
                <div className="flex -space-x-2">
                  {['👩', '👨', '🧑', '👩‍🦱', '👨‍🦰'].map((avatar, idx) => (
                    <div key={idx} className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm border-2 border-white dark:border-gray-800 transform hover:scale-110 transition-transform cursor-pointer">
                      <span>{avatar}</span>
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1 text-yellow-400 text-lg">
                    {"★★★★★".split('').map((star, i) => (
                      <span key={i} className="hover:scale-110 transition-transform inline-block">{star}</span>
                    ))}
                  </div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    <span className="font-bold text-primary">2,500+</span> members lost <span className="font-bold text-green-600">10-30 lbs</span> in 90 days
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="text-2xl animate-bounce">🏆</span>
                  <span className="text-2xl animate-pulse">💪</span>
                  <span className="text-2xl animate-spin">✨</span>
                </div>
              </div>

              {/* SEO Keywords with Interactive Tags */}
              <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
                {["#WeightLossJourney", "#HomeWorkout", "#IntermittentFasting", "#KetoDiet", "#MuscleBuilding", "#VeganRecipes", "#FitnessMotivation", "#NoGymWorkout"].map((tag, idx) => (
                  <span key={idx} className="rounded-full bg-gradient-to-r from-gray-100 to-gray-200 px-4 py-2 text-xs font-medium text-gray-700 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer dark:from-gray-800 dark:to-gray-700 dark:text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hidden SEO Meta Tags */}
              <div className="hidden">
                <meta itemProp="dateModified" content={lastUpdated} />
                <link rel="canonical" href="https://fitroutine.online" />
                <meta name="keywords" content="weight loss, home workouts, intermittent fasting, keto diet, muscle building, fitness tips, nutrition guide, lose belly fat, exercise at home, healthy lifestyle, fitness community, workout plans, diet plans, calorie deficit, HIIT workouts, yoga for beginners, protein recipes, gut health, metabolism boost, sugar detox, body transformation, fitness app, workout at home, no equipment workout" />
                <meta name="description" content="FitRoutine - Transform your body with personalized home workouts, AI-powered fitness plans, and supportive community. Join 15,000+ members on their weight loss & muscle gain journey. 100% free forever!" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
        .animation-delay-800 {
          animation-delay: 0.8s;
          opacity: 0;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
          opacity: 0;
        }
        .animation-delay-1200 {
          animation-delay: 1.2s;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Hero;