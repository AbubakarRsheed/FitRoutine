import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="41" viewBox="0 0 40 41" className="fill-current">
        <path opacity="0.5" d="M20 5C11.72 5 5 11.72 5 20C5 28.28 11.72 35 20 35C28.28 35 35 28.28 35 20C35 11.72 28.28 5 20 5ZM20 32C13.38 32 8 26.62 8 20C8 13.38 13.38 8 20 8C26.62 8 32 13.38 32 20C32 26.62 26.62 32 20 32Z" />
        <path d="M20 12C16.69 12 14 14.69 14 18C14 21.31 16.69 24 20 24C23.31 24 26 21.31 26 18C26 14.69 23.31 12 20 12Z" />
      </svg>
    ),
    title: "Science-Backed Nutrition Advice",
    paragraph:
      "Get practical nutrition tips from certified experts. Learn how to eat for energy, better health, and sustainable results – no complicated diets, just simple advice that works.",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path opacity="0.5" d="M35 10H5C3.9 10 3 10.9 3 12V32C3 33.1 3.9 34 5 34H35C36.1 34 37 33.1 37 32V12C37 10.9 36.1 10 35 10Z" />
        <path d="M20 5C13.37 5 8 10.37 8 17H32C32 10.37 26.63 5 20 5Z" />
      </svg>
    ),
    title: "Quick & Healthy Recipes",
    paragraph:
      "Discover easy-to-make, nutritious recipes that fit your busy schedule. From 15-minute meals to meal-prep favorites, eating healthy has never been this simple or tasty.",
  },
  {
    id: 3,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path opacity="0.5" d="M20 2C10.06 2 2 10.06 2 20C2 29.94 10.06 38 20 38C29.94 38 38 29.94 38 20C38 10.06 29.94 2 20 2ZM20 35C11.72 35 5 28.28 5 20C5 11.72 11.72 5 20 5C28.28 5 35 11.72 35 20C35 28.28 28.28 35 20 35Z" />
        <path d="M20 11C15.03 11 11 15.03 11 20C11 24.97 15.03 29 20 29C24.97 29 29 24.97 29 20C29 15.03 24.97 11 20 11Z" />
      </svg>
    ),
    title: "Personalized Meal Plans",
    paragraph:
      "Get meal plans designed around your goals – whether you want to lose weight, build strength, or simply eat better. Simple, flexible, and made for real life.",
  },
  {
    id: 4,
    icon: (
      <svg width="40" height="42" viewBox="0 0 40 42" className="fill-current">
        <path opacity="0.5" d="M12 2H28V40H12V2Z" />
        <path d="M36 30H4V36H36V30Z" />
      </svg>
    ),
    title: "Sustainable Weight Management",
    paragraph:
      "Learn practical strategies for healthy weight management that actually last. No crash diets, no extreme restrictions – just steady progress and habits you can stick with.",
  },
  {
    id: 5,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path opacity="0.5" d="M20 2L38 14V34L20 38L2 34V14L20 2Z" />
        <path d="M20 12L28 18V28L20 34L12 28V18L20 12Z" />
      </svg>
    ),
    title: "Smart Food Choices",
    paragraph:
      "Learn how to choose better ingredients, read food labels, and make smarter choices at the grocery store. Small changes in what you buy make a big difference in how you feel.",
  },
  {
    id: 6,
    icon: (
      <svg width="40" height="45" viewBox="0 0 40 45" className="fill-current">
        <path opacity="0.5" d="M20 5C11.16 5 4 12.16 4 21C4 29.84 11.16 37 20 37C28.84 37 36 29.84 36 21C36 12.16 28.84 5 20 5Z" />
        <path d="M20 0C8.95 0 0 8.95 0 20C0 31.05 8.95 40 20 40C31.05 40 40 31.05 40 20C40 8.95 31.05 0 20 0ZM20 36C11.16 36 4 28.84 4 20C4 11.16 11.16 4 20 4C28.84 4 36 11.16 36 20C36 28.84 28.84 36 20 36Z" />
      </svg>
    ),
    title: "Mindful Eating Habits",
    paragraph:
      "Slow down, enjoy your food, and listen to your body. Mindful eating helps you build a healthier relationship with food – less stress, more satisfaction.",
  },
];

export default featuresData;