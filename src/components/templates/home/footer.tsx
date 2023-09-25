import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-6 px-4 text-center">
      <div className="container mx-auto text-white">
        <ul className="flex justify-center space-x-4">
          <li>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
        <p className="mt-4">
          &copy; {new Date().getFullYear()} Knektor Platform. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
