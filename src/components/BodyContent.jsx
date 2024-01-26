import React, { useEffect, useState } from "react";
import mustang from "../images/mustang.jpg";
import "./BodyContent.css"; // Import the CSS file for custom styling

function BodyContent() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Add scroll event listener
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setFadeIn(true);
      } else {
        setFadeIn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check for fading on page load
    handleScroll();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen relative overflow-hidden">
      {/* Shadow element */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"
        style={{ zIndex: -1 }}
      ></div>

      {/* Main content */}
      <div
        className={`max-w-screen-xl mx-auto rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 mt-[-50px] relative overflow-hidden ${
          fadeIn ? "fade-in" : ""
        }`}
      >
        {/* Apply the color #61677A to the card body */}
        <div className="bg-gray-700 text-white rounded-t-lg w-full h-64 object-cover relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
          <img
            className="w-full h-full object-cover rounded-t-lg"
            src={mustang}
            alt=""
          />
        </div>

        <div className="p-8 bg-gray-700 text-white text-center">
          <h5 className="mb-4 text-4xl font-bold">
            Welcome to The Car Consultancy Company.
          </h5>

          <p className="mb-6 text-lg font-normal">
            Let's start by finding you the perfect car.
          </p>

          <button className="inline-flex items-center px-4 py-2 text-lg font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Let's Get Started!!
            <svg
              className="rtl:rotate-180 w-5 h-5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BodyContent;
