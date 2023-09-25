import React from "react";

interface TestimonialProps {
  text: string;
  author: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ text, author }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
      <div className="bg-white shadow-lg rounded-lg py-6 px-8 animated fadeInLeft">
        <p className="text-gray-700 mb-4">{text}</p>
        <p className="font-bold text-blue-500">{author}</p>
      </div>
    </div>
  );
};

const TestimonialSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-700 py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          What Our Clients Say
        </h2>
        <div className="flex flex-wrap justify-center">
          <Testimonial
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor accumsan elit a feugiat."
            author="John Doe, CEO"
          />
          <Testimonial
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor accumsan elit a feugiat."
            author="Jane Doe, CFO"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
