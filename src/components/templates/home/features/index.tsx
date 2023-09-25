import React from "react";
import { FaRocket, FaGraduationCap, FaUsers } from "react-icons/fa";

// Define a TypeScript interface for the FeatureItem props
interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  icon,
  title,
  description,
  linkText,
  linkUrl,
}) => {
  return (
    <div className="w-full max-w-sm md:w-1/2 lg:w-1/3 p-4">
      <div className="bg-white shadow-lg rounded-lg py-6 px-8">
        {icon}
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <a href={linkUrl} className="text-blue-500 hover:underline">
          {linkText}
        </a>
      </div>
    </div>
  );
};

const FeatureSection: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-6">Standout Features</h2>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor
          accumsan elit a feugiat.
        </p>
      </div>
      <div className="flex flex-wrap justify-center">
        <FeatureItem
          icon={<FaRocket className="text-4xl text-blue-500 mb-4" />}
          title="Fast and Reliable"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor accumsan elit a feugiat."
          linkText="Learn More"
          linkUrl="#"
        />
        <FeatureItem
          icon={<FaGraduationCap className="text-4xl text-blue-500 mb-4" />}
          title="Expertise Verification"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor accumsan elit a feugiat."
          linkText="Learn More"
          linkUrl="#"
        />
        <FeatureItem
          icon={<FaUsers className="text-4xl text-blue-500 mb-4" />}
          title="Connect with Clients"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor accumsan elit a feugiat."
          linkText="Learn More"
          linkUrl="#"
        />
      </div>
    </section>
  );
};

export default FeatureSection;
