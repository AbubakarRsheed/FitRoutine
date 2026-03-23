"use client";

const checkIcon = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const crossIcon = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const OfferList = ({
  text,
  status,
}: {
  text: string;
  status: "active" | "inactive";
}) => {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className={`flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full ${
        status === "active" 
          ? "text-green-500" 
          : "text-gray-400"
      }`}>
        {status === "active" ? checkIcon : crossIcon}
      </span>
      <span className={`${status === "active" ? "text-gray-700 dark:text-gray-300" : "text-gray-400 line-through"}`}>
        {text}
      </span>
    </div>
  );
};

export default OfferList;