import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full group">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        {/* Icon Container - Enhanced with hover effect */}
        <div className="bg-primary/10 text-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-md transition-all duration-300 group-hover:bg-primary group-hover:text-white">
          <div className="transition-all duration-300 group-hover:scale-110">
            {icon}
          </div>
        </div>
        
        {/* Title - SEO Optimized */}
        <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white transition-colors duration-300 group-hover:text-primary">
          {title}
        </h3>
        
        {/* Description - Readable & Engaging */}
        <p className="text-body-color text-base leading-relaxed font-medium">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;