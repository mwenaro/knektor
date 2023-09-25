import React from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQCard: React.FC<FAQItem> = ({ question, answer }) => {
  return (
    <div className="w-full md:w-1/2">
      <div className="bg-white shadow-lg rounded-lg py-6 px-8">
        <h3 className="text-xl font-bold mb-4">{question}</h3>
        <p>{answer}</p>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const faqItems: FAQItem[] = [
    {
      question: "Question 1",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor accumsan elit a feugiat.",
    },
    {
      question: "Question 2",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor accumsan elit a feugiat.",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          {faqItems.map((item, index) => (
            <FAQCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
