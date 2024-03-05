import React, { useEffect, useState, useRef } from "react";
import car1 from "../images/mustang.jpg";
import car2 from "../images/car1.jpg";
import car3 from "../images/car2.jpg";
import car4 from "../images/car3.jpg";
import car5 from "../images/car4.jpg";
import car6 from "../images/car5.jpg";
import "./BodyContent.css";
import CarSelectionInput from "./CarSelectionInput";

function BodyContent() {
  const [fadeIn, setFadeIn] = useState(false);
  const carSelectionRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [car1,car2, car3, car4, car5, car6];
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);
  // checking
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
  <div
    className={`relative overflow-hidden w-full h-screen ${
      fadeIn ? "fade-in" : ""
    }`}
  >
    {images.map((image, index) => (
      <div
        key={index}
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
          index === currentIndex ? "opacity-80" : "opacity-0"
        }`}
      >
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>
    ))}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
      <div className="bg-black bg-opacity-60 rounded-lg p-8 text-center">
        <h5 className="mb-4 text-4xl font-bold">
          Welcome to The Car Consultancy Company.
        </h5>
        {/* <p className="mb-6 text-lg font-normal">
          Let's start by finding you the perfect car.
        </p> */}

        <div className="text-center">
          <button
            className="btn inline-flex items-center px-4 py-2 text-lg font-medium text-white rounded-lg focus:outline-none"
            onClick={handleGetStartedClick}
          >
            Find Dream Car
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
  </div>
  {/* Rest of your content */}
  <div className="mt-40">
    <div ref={carSelectionRef}>
      <CarSelectionInput />
    </div>
  </div>
</>

  );
}

export default BodyContent;
