"use client";

import Link from "next/link";

const PricingBox = (props: {
  price: string;
  duration: string;
  packageName: string;
  subtitle: string;
  buttonText: string;
  popular?: boolean;
  children: React.ReactNode;
}) => {
  const { price, duration, packageName, subtitle, buttonText, popular, children } = props;

  return (
    <div className={`relative w-full rounded-2xl bg-white dark:bg-gray-dark shadow-lg hover:shadow-xl transition-all duration-300 ${popular ? 'ring-2 ring-primary scale-105' : ''}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
          Most Popular
        </div>
      )}
      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-black dark:text-white">
            {packageName}
          </h3>
          {popular && (
            <span className="text-xs font-semibold text-primary">🔥 Best Value</span>
          )}
        </div>
        <div className="mb-4">
          <span className="text-4xl font-bold text-black dark:text-white">${price}</span>
          <span className="text-body-color"> /{duration}</span>
        </div>
        <p className="text-body-color mb-6 text-base">{subtitle}</p>
        <Link
          href="/signup"
          className={`block w-full text-center rounded-lg py-3 px-4 font-semibold transition ${
            popular
              ? "bg-primary text-white hover:bg-primary/90 shadow-md"
              : "bg-gray-100 text-black dark:bg-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
          }`}
        >
          {buttonText}
        </Link>
        <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
          <p className="text-sm font-medium text-black dark:text-white mb-3">
            What's included:
          </p>
          <div className="space-y-2">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default PricingBox;