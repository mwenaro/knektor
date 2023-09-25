import React from "react";

interface FeatureSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  linkText: string;
  linkUrl: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  description,
  imageUrl,
  linkText,
  linkUrl,
}) => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 p-4">
            <div
              className="bg-cover bg-center h-96 rounded-lg"
              style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600 mb-4">{description}</p>
            <a href={linkUrl} className="text-blue-500 hover:underline">
              {linkText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const StandoutFeatures: React.FC = () => {
  return (
    <div>
      <FeatureSection
        title="Fast and Reliable"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor accumsan elit a feugiat."
        imageUrl="https://source.unsplash.com/featured/1280x720/?fast-reliable"
        linkText="Learn More"
        linkUrl="#"
      />
      <FeatureSection
        title="Expertise Verification"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor accumsan elit a feugiat."
        imageUrl="https://source.unsplash.com/featured/1280x720/?expertise-verification"
        linkText="Learn More"
        linkUrl="#"
      />
      <FeatureSection
        title="Connect with Clients"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor accumsan elit a feugiat."
        imageUrl="https://source.unsplash.com/featured/1280x720/?connect-clients"
        linkText="Learn More"
        linkUrl="#"
      />
    </div>
  );
};

export default StandoutFeatures;
