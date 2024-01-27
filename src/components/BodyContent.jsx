import React, { useEffect, useState, useRef } from "react";
import mustang from "../images/mustang.jpg";
import "./BodyContent.css";
import CarSelectionInput from "./CarSelectionInput";
import { useAuth0 } from "@auth0/auth0-react";

function BodyContent() {
  const [fadeIn, setFadeIn] = useState(false);
  const carSelectionRef = useRef(null);


  useEffect(() => {
    const handleScroll = () => {
      setFadeIn(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleGetStartedClick = () => {
    if (carSelectionRef.current) {
      carSelectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <div className="flex flex-col mb-10 items-center justify-center min-h-screen relative overflow-hidden">
        <div
          className={`max-w-screen-xl mx-auto rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 mt-[-50px] relative overflow-hidden ${
            fadeIn ? "fade-in" : ""
          }`}
        >
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
            <button
              className="inline-flex items-center px-4 py-2 text-lg font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleGetStartedClick}
            >
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
      {/* Scroll down to CarSelectionInput */}
      <div className="mt-40">
        <div ref={carSelectionRef}>
          <CarSelectionInput />
        </div>
      </div>
    </>
  );
}

export default BodyContent;
