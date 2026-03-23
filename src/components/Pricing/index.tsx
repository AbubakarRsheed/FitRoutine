"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <SectionTitle
          title="Simple Plans That Fit Your Health Goals"
          paragraph="Whether you're just starting your fitness journey or looking for expert guidance, we have a plan that works for you. No hidden fees, cancel anytime."
          center
          width="700px"
        />

        {/* Toggle Switch */}
        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <div className="flex items-center gap-4 bg-white dark:bg-gray-dark rounded-full p-1 shadow-sm">
              <button
                onClick={() => setIsMonthly(true)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                  isMonthly
                    ? "bg-primary text-white"
                    : "text-body-color hover:text-primary"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsMonthly(false)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                  !isMonthly
                    ? "bg-primary text-white"
                    : "text-body-color hover:text-primary"
                }`}
              >
                Yearly <span className="text-xs text-green-500 ml-1">Save 20%</span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Starter Plan */}
          <PricingBox
            packageName="Starter"
            price={isMonthly ? "19" : "190"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Perfect for those beginning their health journey"
            buttonText="Start Free Trial"
            popular={false}
          >
            <OfferList text="Weekly Meal Ideas" status="active" />
            <OfferList text="Basic Nutritional Guides" status="active" />
            <OfferList text="Email Support" status="active" />
            <OfferList text="Community Forum Access" status="active" />
            <OfferList text="Personalized Diet Plan" status="inactive" />
            <OfferList text="1-on-1 Nutritionist Chat" status="inactive" />
          </PricingBox>
          
          {/* Pro Plan - Most Popular */}
          <PricingBox
            packageName="Pro"
            price={isMonthly ? "49" : "490"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Best for dedicated individuals seeking real results"
            buttonText="Start Free Trial"
            popular={true}
          >
            <OfferList text="Weekly Meal Ideas" status="active" />
            <OfferList text="Personalized Diet Plan" status="active" />
            <OfferList text="Advanced Macro Tracking" status="active" />
            <OfferList text="1-on-1 Nutritionist Chat" status="active" />
            <OfferList text="Priority Email Support" status="active" />
            <OfferList text="Progress Analytics" status="active" />
          </PricingBox>
          
          {/* Elite Plan */}
          <PricingBox
            packageName="Elite"
            price={isMonthly ? "99" : "990"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="The ultimate package for total body transformation"
            buttonText="Start Free Trial"
            popular={false}
          >
            <OfferList text="Customized Meal Planning" status="active" />
            <OfferList text="Daily Progress Analytics" status="active" />
            <OfferList text="Direct Consultations" status="active" />
            <OfferList text="Workout Integration" status="active" />
            <OfferList text="Unlimited Expert Access" status="active" />
            <OfferList text="Lifetime Health Tracking" status="active" />
          </PricingBox>
        </div>

        {/* Money-Back Guarantee Badge */}
        <div className="mt-12 text-center">
          <p className="text-sm text-body-color flex items-center justify-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>30-day money-back guarantee • Cancel anytime • No questions asked</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;