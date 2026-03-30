import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  // ================ BLOG 1 - MOTIVATION ================
  {
    id: 1,
    title: "How to Stay Motivated to Lose Weight and Feel Better",
    paragraph: "Discover practical strategies to maintain motivation throughout your weight loss journey. Learn how to overcome obstacles, celebrate small wins, and build habits that last a lifetime.",
    image: "https://images.pexels.com/photos/8454342/pexels-photo-8454342.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    author: {
      name: "Jessica Martinez",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      designation: "Motivational Speaker & Weight Loss Coach",
      bio: "Jessica Martinez is a certified health coach and motivational speaker.",
    },
    tags: ["Motivation", "Weight Loss", "Mental Health", "Healthy Habits"],
    categories: ["Health", "Weight Loss", "Motivation"],
    publishDate: "April 1, 2026",
    lastModified: "April 1, 2026",
    slug: "motivation-guide",
    readingTime: 10,
    featured: true,
    content: `<h1>How to Stay Motivated to Lose Weight and Feel Better</h1>
<p>Let me tell you something that took me years to learn: motivation isn't something you find — it's something you build. After helping over 5,000 clients navigate their weight loss journeys, I've discovered that the people who succeed aren't the ones who are always motivated. They're the ones who know how to keep going when motivation fades.</p>
<p>Because here's the truth: motivation will always fade. It's a wave — sometimes high, sometimes low. But your goals? They deserve more than waiting for the next wave.</p>
<h2>Why Motivation Fades (And Why That's Normal)</h2>
<p>The first thing you need to understand is that losing motivation isn't a personal failure — it's biology. Your brain is wired for immediate rewards, not long-term goals.</p>
<h2>Strategy 1: Redefine Success (It's Not Just About the Scale)</h2>
<p>One of the biggest motivation killers is the scale. Here are other wins to celebrate: more energy, better fitting pants, choosing water over soda, cooking healthy meals, better sleep.</p>
<h2>Strategy 2: The 5-Minute Rule</h2>
<p>On days when you absolutely don't want to exercise, tell yourself: "I'll just do 5 minutes." 90% of the time, after 5 minutes, you'll keep going.</p>
<h2>Strategy 3: Create Your "Why" and Keep It Visible</h2>
<p>Write your why down. Put it on your mirror. Save it as your phone wallpaper.</p>
<h2>Final Advice</h2>
<p>Start today. Not tomorrow. Make one choice that aligns with your goal. Then make another.</p>
<p><em>— Jessica Martinez, Motivational Speaker</em></p>`
  },

  // ================ BLOG 2 - HOME WORKOUTS ================
  {
    id: 2,
    title: "5 Simple Home Workouts to Burn Fat Fast | No Equipment Needed",
    paragraph: "Discover the best and easiest ways to lose weight and stay fit at home without any expensive gym equipment. Perfect for beginners.",
    image: "https://images.pexels.com/photos/4162451/pexels-photo-4162451.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    author: {
      name: "Michael Anderson",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      designation: "Certified Personal Trainer",
      bio: "Michael Anderson is a certified personal trainer with over 12 years of experience.",
    },
    tags: ["Home Workout", "Fat Loss", "No Equipment", "HIIT"],
    categories: ["Fitness", "Weight Loss", "Home Workouts"],
    publishDate: "March 28, 2026",
    lastModified: "March 28, 2026",
    slug: "home-workouts",
    readingTime: 8,
    featured: true,
    content: `<h1>5 Simple Home Workouts to Burn Fat Fast (No Equipment Needed)</h1>
<p>You don't need expensive equipment — just consistency and the right workouts.</p>
<h2>1. High-Intensity Interval Training (HIIT)</h2>
<p>30 seconds jumping jacks, 30 seconds rest, 30 seconds mountain climbers, 30 seconds rest, 30 seconds high knees, 30 seconds rest. Repeat 4 times.</p>
<h2>2. Bodyweight Strength Training</h2>
<p>Push-ups: 3 sets of 10-15 reps, Squats: 3 sets of 20 reps, Lunges: 3 sets of 10 reps per leg, Plank: 3 sets of 30-60 seconds.</p>
<h2>3. Jump Rope</h2>
<p>10 minutes of jumping rope burns as many calories as 30 minutes of jogging.</p>
<h2>4. Yoga Flow</h2>
<p>Mountain Pose → Forward Fold → Plank → Upward Dog → Downward Dog.</p>
<h2>5. Dance Cardio</h2>
<p>Put on your favorite music and dance! You'll burn 200-400 calories in 30 minutes.</p>
<p><em>— Michael Anderson, Certified Personal Trainer</em></p>`
  },

  // ================ BLOG 3 - WEIGHT LOSS DIET ================
  {
    id: 3,
    title: "The Perfect Low-Calorie Diet Plan for Weight Loss",
    paragraph: "Enjoy your favorite meals while shedding those extra pounds. Complete with a full 7-day meal plan and shopping list.",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    author: {
      name: "Dr. Jennifer Matthews",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      designation: "Registered Dietitian",
      bio: "Dr. Jennifer Matthews holds a PhD in Clinical Nutrition from Harvard University.",
    },
    tags: ["Weight Loss Diet", "Low Calorie", "Meal Plan", "Fat Loss"],
    categories: ["Health", "Weight Loss", "Diet Plans"],
    publishDate: "March 25, 2026",
    lastModified: "March 25, 2026",
    slug: "diet-plan",
    readingTime: 10,
    featured: true,
    content: `<h1>The Perfect Low-Calorie Diet Plan for Weight Loss</h1>
<p>Sustainable weight loss isn't about deprivation — it's about eating the right foods in the right balance.</p>
<h2>Foods to Include</h2>
<p><strong>Lean Proteins:</strong> Chicken breast, fish, eggs, Greek yogurt, tofu</p>
<p><strong>Fiber-Rich Vegetables:</strong> Leafy greens, broccoli, cauliflower, bell peppers</p>
<p><strong>Whole Grains:</strong> Brown rice, quinoa, oats, sweet potatoes</p>
<h2>Sample 7-Day Meal Plan (1500 Calories)</h2>
<p><strong>Day 1:</strong> Breakfast: 2 scrambled eggs with spinach. Lunch: Grilled chicken salad. Dinner: Baked salmon with broccoli.</p>
<p><strong>Day 2:</strong> Breakfast: Oatmeal with banana. Lunch: Turkey wrap. Dinner: Lentil soup.</p>
<p><em>— Dr. Jennifer Matthews, Registered Dietitian</em></p>`
  },

  // ================ BLOG 4 - GREEN TEA ================
  {
    id: 4,
    title: "Benefits of Green Tea for Weight Loss",
    paragraph: "Discover the right time and method to drink green tea for metabolism boost and fat oxidation.",
    image: "https://images.pexels.com/photos/4114715/pexels-photo-4114715.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    author: {
      name: "Dr. Robert Chen",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      designation: "Nutritional Scientist",
      bio: "Dr. Robert Chen is a nutritional scientist with over 18 years of research experience.",
    },
    tags: ["Green Tea", "Weight Loss Tea", "Metabolism Boost"],
    categories: ["Health", "Weight Loss", "Healthy Drinks"],
    publishDate: "March 22, 2026",
    lastModified: "March 22, 2026",
    slug: "green-tea",
    readingTime: 8,
    featured: true,
    content: `<h1>Benefits of Green Tea for Weight Loss</h1>
<p>Green tea is rich in catechins, particularly EGCG, a powerful antioxidant.</p>
<h2>4 Ways Green Tea Helps You Lose Weight</h2>
<p>1. Boosts Metabolism by 4-5%</p>
<p>2. Increases Fat Oxidation by 17%</p>
<p>3. Reduces Appetite</p>
<p>4. Mobilizes Fat from Fat Cells</p>
<h2>Best Times to Drink Green Tea</h2>
<p>Morning: 30 minutes before breakfast. Before Exercise: 30-60 minutes prior.</p>
<p><em>— Dr. Robert Chen, Nutritional Scientist</em></p>`
  },

  // ================ BLOG 5 - SLEEP ================
  {
    id: 5,
    title: "The Importance of 8 Hours of Sleep",
    paragraph: "How important is a good night's sleep for your health, muscle recovery, and longevity?",
    image: "https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    author: {
      name: "Dr. Elizabeth Parker",
      image: "https://randomuser.me/api/portraits/women/89.jpg",
      designation: "Sleep Medicine Specialist",
      bio: "Dr. Elizabeth Parker is a board-certified sleep specialist.",
    },
    tags: ["Sleep Health", "Better Sleep", "Sleep Hygiene"],
    categories: ["Health", "Sleep", "Wellness"],
    publishDate: "March 20, 2026",
    lastModified: "March 20, 2026",
    slug: "sleep-guide",
    readingTime: 9,
    featured: true,
    content: `<h1>The Importance of 8 Hours of Sleep</h1>
<h2>Health Benefits of Adequate Sleep</h2>
<ul><li>Weight Management</li><li>Muscle Recovery</li><li>Immune Function</li><li>Brain Function</li><li>Heart Health</li></ul>
<h2>8 Tips for Better Sleep</h2>
<ol><li>Consistent schedule</li><li>Cool room (65-68°F)</li><li>Complete darkness</li><li>White noise</li><li>Wind-down routine</li><li>No screens 1 hour before bed</li><li>No caffeine after 2 PM</li><li>No heavy meals before bed</li></ol>
<p><em>— Dr. Elizabeth Parker, Sleep Specialist</em></p>`
  },

  // ================ BLOG 6 - YOGA ================
  {
    id: 6,
    title: "Yoga for Mental Health | Reduce Stress & Anxiety",
    paragraph: "Explore the powerful benefits of daily yoga and meditation to reduce everyday tension.",
    image: "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    author: {
      name: "Olivia Bennett",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      designation: "Yoga Instructor",
      bio: "Olivia Bennett is a 500-hour certified yoga instructor.",
    },
    tags: ["Yoga", "Stress Relief", "Anxiety Relief", "Meditation"],
    categories: ["Health", "Yoga", "Wellness"],
    publishDate: "March 18, 2026",
    lastModified: "March 18, 2026",
    slug: "yoga-health",
    readingTime: 12,
    featured: true,
    content: `<h1>Yoga for Mental Health | Reduce Stress & Anxiety</h1>
<h2>5 Yoga Poses for Stress Relief</h2>
<p>1. Child's Pose (Balasana) - Calms nervous system</p>
<p>2. Downward-Facing Dog - Increases blood flow to brain</p>
<p>3. Legs-Up-The-Wall - Reduces anxiety</p>
<p>4. Cat-Cow Pose - Releases spine tension</p>
<p>5. Corpse Pose (Savasana) - Ultimate relaxation</p>
<p><em>— Olivia Bennett, Yoga Instructor</em></p>`
  },

  // ================ BLOG 7 - HIGH PROTEIN BREAKFAST ================
  {
    id: 7,
    title: "High Protein Breakfast Ideas for Weight Loss",
    paragraph: "Start your day with delicious high-protein breakfast ideas that keep you full and boost metabolism.",
    image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    author: {
      name: "Jessica Taylor",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      designation: "Registered Dietitian",
      bio: "Jessica Taylor is a registered dietitian with a master's degree in Nutrition Science.",
    },
    tags: ["High Protein Breakfast", "Weight Loss Breakfast"],
    categories: ["Health", "Weight Loss", "Breakfast"],
    publishDate: "March 15, 2026",
    lastModified: "March 15, 2026",
    slug: "protein-breakfast",
    readingTime: 9,
    featured: true,
    content: `<h1>High Protein Breakfast Ideas for Weight Loss</h1>
<h2>Top 5 High-Protein Breakfast Ideas</h2>
<p>1. Greek Yogurt Bowl (25g protein) - 1 cup Greek yogurt + berries + almonds</p>
<p>2. Scrambled Eggs with Spinach (24g protein) - 3 eggs + spinach + feta</p>
<p>3. Protein Smoothie (35g protein) - Protein powder + almond milk + spinach + banana</p>
<p>4. Oatmeal with Protein Powder (30g protein) - Oats + protein powder + peanut butter</p>
<p>5. Cottage Cheese with Peaches (28g protein) - Cottage cheese + peaches</p>
<p><em>— Jessica Taylor, Registered Dietitian</em></p>`
  },

  // ================ BLOG 8 - MORNING STRETCHING ================
  {
    id: 8,
    title: "10-Minute Morning Stretching Routine",
    paragraph: "Start your day active and energetic with just 10 minutes of morning stretching.",
    image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    author: {
      name: "Christopher Davis",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      designation: "Mobility Specialist",
      bio: "Christopher Davis is a certified mobility specialist.",
    },
    tags: ["Morning Stretch", "Flexibility", "Mobility"],
    categories: ["Fitness", "Flexibility", "Morning Routine"],
    publishDate: "March 12, 2026",
    lastModified: "March 12, 2026",
    slug: "morning-stretch",
    readingTime: 6,
    featured: true,
    content: `<h1>10-Minute Morning Stretching Routine</h1>
<p>Minute 1: Neck Rolls</p>
<p>Minute 2: Shoulder Rolls</p>
<p>Minute 3: Arm Circles</p>
<p>Minute 4: Torso Twists</p>
<p>Minute 5: Side Bends</p>
<p>Minute 6: Forward Fold</p>
<p>Minute 7: Low Lunge</p>
<p>Minute 8: Cat-Cow Stretch</p>
<p>Minute 9: Child's Pose</p>
<p>Minute 10: Standing Forward Fold to Mountain Pose</p>
<p><em>— Christopher Davis, Mobility Specialist</em></p>`
  },

  // ================ BLOG 9 - HABIT FORMATION ================
  {
    id: 9,
    title: "The Science of Habit Formation",
    paragraph: "Why do some healthy habits stick while others fade? Learn the psychology of habit formation.",
    image: "https://images.pexels.com/photos/4114724/pexels-photo-4114724.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    author: {
      name: "Dr. William Brooks",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      designation: "Behavioral Psychologist",
      bio: "Dr. William Brooks holds a PhD in Behavioral Psychology.",
    },
    tags: ["Habit Formation", "Behavior Change", "Psychology"],
    categories: ["Health", "Self Improvement", "Wellness"],
    publishDate: "March 10, 2026",
    lastModified: "March 10, 2026",
    slug: "habits",
    readingTime: 9,
    featured: true,
    content: `<h1>The Science of Habit Formation</h1>
<h2>The Habit Loop</h2>
<p>1. Cue - Trigger that tells your brain to go into automatic mode</p>
<p>2. Routine - The behavior itself</p>
<p>3. Reward - Benefit that helps your brain remember</p>
<h2>How to Build New Habits</h2>
<p>Make It Obvious, Make It Attractive, Make It Easy, Make It Satisfying</p>
<p><em>— Dr. William Brooks, Behavioral Psychologist</em></p>`
  },

  // ================ BLOG 10 - POSTURE ================
  {
    id: 10,
    title: "Posture Correction Exercises for Better Alignment",
    paragraph: "Poor posture causes back pain, headaches, and fatigue. These simple exercises will help.",
    image: "https://images.pexels.com/photos/4056536/pexels-photo-4056536.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    author: {
      name: "Matthew Sullivan",
      image: "https://randomuser.me/api/portraits/men/35.jpg",
      designation: "Posture Specialist",
      bio: "Matthew Sullivan is a certified posture correction specialist.",
    },
    tags: ["Posture Correction", "Back Pain Relief", "Good Posture"],
    categories: ["Fitness", "Posture", "Pain Relief"],
    publishDate: "March 8, 2026",
    lastModified: "March 8, 2026",
    slug: "posture-fix",
    readingTime: 8,
    featured: true,
    content: `<h1>Posture Correction Exercises for Better Alignment</h1>
<h2>8 Exercises to Fix Your Posture</h2>
<p>1. Doorway Chest Stretch</p>
<p>2. Face Pulls</p>
<p>3. Chin Tucks</p>
<p>4. Glute Bridges</p>
<p>5. Cat-Cow Stretch</p>
<p>6. Wall Angels</p>
<p>7. Plank</p>
<p>8. Thoracic Extension</p>
<p><em>— Matthew Sullivan, Posture Specialist</em></p>`
  },

  // ================ BLOG 11 - MINDFUL EATING ================
  {
    id: 11,
    title: "Mindful Eating Guide for Better Digestion",
    paragraph: "Stop rushing your meals. Learn how mindful eating can improve digestion and prevent overeating.",
    image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    author: {
      name: "Sophia Reynolds",
      image: "https://randomuser.me/api/portraits/women/55.jpg",
      designation: "Mindful Eating Specialist",
      bio: "Sophia Reynolds is a certified mindful eating specialist.",
    },
    tags: ["Mindful Eating", "Intuitive Eating", "Better Digestion"],
    categories: ["Health", "Mindfulness", "Wellness"],
    publishDate: "March 5, 2026",
    lastModified: "March 5, 2026",
    slug: "mindful-eating",
    readingTime: 8,
    featured: true,
    content: `<h1>Mindful Eating Guide for Better Digestion</h1>
<h2>What is Mindful Eating?</h2>
<p>Mindful eating is paying full attention to the experience of eating and drinking.</p>
<h2>Benefits of Mindful Eating</h2>
<p>Better Digestion, Weight Management, Greater Enjoyment, Reduced Emotional Eating</p>
<h2>How to Practice Mindful Eating</h2>
<p>Before Eating: Ask if you're truly hungry. Eliminate distractions.</p>
<p>During Eating: Take small bites, chew thoroughly, put utensils down between bites.</p>
<p><em>— Sophia Reynolds, Mindful Eating Specialist</em></p>`
  },

  // ================ BLOG 12 - WORST FOOD INGREDIENTS (March 30, 2026) ================
  {
    id: 12,
    title: "Top 5 Worst Food Ingredients for Your Immune System",
    paragraph: "Hidden ingredients in your everyday foods are silently destroying your body's natural defenses. Learn what to avoid.",
    image: "https://images.pexels.com/photos/4050949/pexels-photo-4050949.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    author: {
      name: "Dr. Priya Sharma",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      designation: "Immunologist",
      bio: "Dr. Priya Sharma is a board-certified immunologist.",
    },
    tags: ["Immune System", "Inflammatory Foods", "Gut Health"],
    categories: ["Health", "Immunity", "Nutrition"],
    publishDate: "March 30, 2026",
    lastModified: "March 30, 2026",
    slug: "bad-ingredients",
    readingTime: 12,
    featured: true,
    content: `<h1>Top 5 Worst Food Ingredients for Your Immune System</h1>
<h2>Ingredient #1: Added Sugar</h2>
<p>Suppresses immune system by 40-50% for 4-5 hours. Found in dressings, sauces, breads, yogurt.</p>
<h2>Ingredient #2: Industrial Seed Oils</h2>
<p>Soybean, canola, corn oil trigger chronic inflammation. Found in fried foods, chips, dressings.</p>
<h2>Ingredient #3: Artificial Sweeteners</h2>
<p>Destroy gut microbiome. Found in diet soda, sugar-free gum, protein powders.</p>
<h2>Ingredient #4: Artificial Food Colors</h2>
<p>Cause inflammation and allergic reactions. Found in candy, cereal, sports drinks.</p>
<h2>Ingredient #5: Emulsifiers</h2>
<p>Break down gut lining, cause leaky gut. Found in ice cream, non-dairy milk, protein bars.</p>
<p><em>— Dr. Priya Sharma, Immunologist</em></p>`
  },

  // ================ BLOG 13 - FITNESS VS WELLNESS (March 30, 2026) ================
  {
    id: 13,
    title: "Fitness vs. Wellness: Why Both Matter",
    paragraph: "Fitness and wellness aren't the same thing — but you need both to truly thrive.",
    image: "https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    author: {
      name: "Dr. Marcus Freeman",
      image: "https://randomuser.me/api/portraits/men/42.jpg",
      designation: "Wellness Physician",
      bio: "Dr. Marcus Freeman is a board-certified sports medicine physician.",
    },
    tags: ["Fitness Vs Wellness", "Holistic Health", "Balanced Lifestyle"],
    categories: ["Health", "Fitness", "Wellness"],
    publishDate: "March 30, 2026",
    lastModified: "March 30, 2026",
    slug: "fit-wellness",
    readingTime: 14,
    featured: true,
    content: `<h1>Fitness vs. Wellness: Why Both Matter</h1>
<h2>What's the Difference?</h2>
<p>Fitness is about what your body can DO. Wellness is about how you FEEL and FUNCTION holistically.</p>
<h2>Signs You're Fit But Not Well</h2>
<p>Exercise feels like punishment, anxious when missing workouts, poor sleep, no friendships, pushing through injuries.</p>
<h2>Signs You're Well But Not Fit</h2>
<p>Meditate daily but winded climbing stairs, good relationships but low energy, emotionally balanced but prediabetic.</p>
<h2>The 8 Dimensions of Complete Health</h2>
<p>Physical, Emotional, Social, Occupational, Intellectual, Spiritual, Environmental, Financial.</p>
<p><em>— Dr. Marcus Freeman, Wellness Physician</em></p>`
  }
];

export default blogData;