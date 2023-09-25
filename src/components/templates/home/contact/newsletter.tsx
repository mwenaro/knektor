import React from "react";

const NewsletterSubscription: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
        <form className="max-w-md mx-auto">
          <div className="flex items-center border border-gray-200 rounded-full">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 rounded-full focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-bold"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSubscription;
