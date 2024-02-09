import React, { useEffect, useRef, useState } from "react";
import "./CarSelectionInput.css";
import DisplayCars from "./DisplayCars";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

function CarSelectionInput() {
  const [carType, setCarType] = useState("");
  const [carBrand, setCarBrand] = useState("");
  const [transmissionType, setTransmissionType] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const [logInNotify, setLogInNotify] = useState(false);
  const [formNotify, setFormNotify] = useState(false);
  const displayCarsRef = useRef(null);
  const [minPrice, setMinPrice] = useState(300000);
  const [maxPrice, setMaxPrice] = useState(10000000);

  //fetching basicdetails

  const [basicDetails, setBasicDetails] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    const fetchBasicDetails = async () => {
      try {
        const response = await axios.get("http://localhost:8080/basicdetails");
        setBasicDetails(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching basic details:", error);
        // Handle error if needed
      }
    };

    fetchBasicDetails();

    // Cleanup function
    return () => {
      // Cleanup if needed
    };
  }, []);

  const handleMinPriceChange = (event) => {
    const newMinPrice = parseInt(event.target.value, 10);
    if (newMinPrice <= maxPrice) {
      setMinPrice(newMinPrice);
    }
  };

  const handleMaxPriceChange = (event) => {
    const newMaxPrice = parseInt(event.target.value, 10);
    if (newMaxPrice >= minPrice) {
      setMaxPrice(newMaxPrice);
    }
  };

  // we will make get function and pass the values in props
  const handleCarTypeClick = (selectedCarType) => {
    setCarType(selectedCarType);
  };

  const handleCarBrandChange = (event) => {
    setCarBrand(event.target.value);
  };

  const handleTransmissionChange = (event) => {
    setTransmissionType(event.target.value);
  };

  const handleFuelTypeClick = (selectedFuelType) => {
    setFuelType(selectedFuelType);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform additional validation if needed
    const isValid =
      carType &&
      carBrand &&
      maxPrice > 0 &&
      minPrice >= 0 &&
      transmissionType &&
      fuelType;

    if (isValid) {
      if (isAuthenticated) {
        setIsFormValid(true);
        setIsSearchClicked(true);
        const filtered = basicDetails.filter((car) => {
          const carPrice = parseInt(car.price.replace(/,/g, ""), 10);

          return (
            car.type === carType &&
            car.brand === carBrand &&
            car.transmission === transmissionType &&
            car.fuel === fuelType &&
            carPrice >= minPrice &&
            carPrice <= maxPrice
          );
        });
        console.log("filter", filtered)
        // Pass filtered data to DisplayCars component
        setFilteredCars(filtered);
        console.log(
          carType,
          carBrand,
          minPrice,
          maxPrice,
          transmissionType,
          fuelType
        );
      } else {
        setIsFormValid(false);
        loginWithRedirect();
        setLogInNotify(true);
      }
    } else {
      setFormNotify(true);
    }
  };
  const handleReset = () => {
    setIsSearchClicked(false);
    // Add additional logic for resetting other states or scroll position if needed
  };
  const handleCloseClick = () => {
    setFormNotify(false);
    setLogInNotify(false);
  };

  useEffect(() => {
    if (isSearchClicked && isFormValid && displayCarsRef.current) {
      displayCarsRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [isSearchClicked, isFormValid]);

  return (
    <>
      <div className="mt-[-50px] mb-12 ">
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto p-10 rounded-md shadow-lg glow bg-gradient-to-r from-indigo-900 to-grey-700"
        >
          {logInNotify && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-5"
              role="alert"
            >
              <strong className="font-bold">Hey Gearhead! </strong>
              <span className="block sm:inline">
                Please login before searching
              </span>

              <span
                className="absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer"
                onClick={handleCloseClick}
                role="button"
              >
                <svg
                  className="fill-current h-6 w-6 text-red-500"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </span>
            </div>
          )}
          {formNotify && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-5"
              role="alert"
            >
              <strong className="font-bold">Hey Gearhead! </strong>
              <span className="block sm:inline">Please fill the inputs</span>
              <span
                className="absolute top-0 bottom-0 right-0 px-4 py-3"
                onClick={handleCloseClick}
                role="button"
              >
                <svg
                  className="fill-current h-6 w-6 text-red-500"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </span>
            </div>
          )}
          <div className="mb-4">
            <label className="block text-sm font-medium text-white mb-2">
              Select Car Type
            </label>
            <div className="flex">
              <button
                type="button"
                onClick={() => handleCarTypeClick("SUV")}
                className={`flex-1 mr-2 ${
                  carType === "SUV"
                    ? "bg-gradient-to-r from-red-800 to-black-500"
                    : "bg-gradient-to-r from-blue-700 to-black-400"
                } text-white py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue`}
              >
                SUV
              </button>
              <button
                type="button"
                onClick={() => handleCarTypeClick("MUV")}
                className={`flex-1 mr-2 ${
                  carType === "MUV"
                    ? "bg-gradient-to-r from-red-800 to-black-500"
                    : "bg-gradient-to-r from-blue-700 to-black-400"
                } text-white py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue`}
              >
                MUV
              </button>
              <button
                type="button"
                onClick={() => handleCarTypeClick("Hatch Back")}
                className={`flex-1 mr-2 ${
                  carType === "Hatch Back"
                    ? "bg-gradient-to-r from-red-800 to-black-500"
                    : "bg-gradient-to-r from-blue-700 to-black-400"
                } text-white py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue`}
              >
                HATCHBACK
              </button>
              <button
                type="button"
                onClick={() => handleCarTypeClick("SEDAN")}
                className={`flex-1 mr-2 ${
                  carType === "SEDAN"
                    ? "bg-gradient-to-r from-red-800 to-black-500"
                    : "bg-gradient-to-r from-blue-700 to-black-400"
                } text-white py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue`}
              >
                SEDAN
              </button>
              {/* Repeat similar buttons for MUV, SEDAN, HATCHBACK */}
            </div>
          </div>

          {/* Event handling for car brand dropdown */}
          <div className="mb-4">
            <label
              htmlFor="carBrands"
              className="block text-sm font-medium text-white mb-2"
            >
              Select Car Brand
            </label>
            <select
              id="carBrands"
              value={carBrand}
              required
              onChange={handleCarBrandChange}
              className="form-select block w-full p-2.5 rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="" disabled>
                Select Car Brand
              </option>

              <option>Maruti Suzuki</option>
              <option>Honda</option>
              <option>Ford</option>
              <option>Chevrolet</option>
            </select>
          </div>

          {/* Event handling for price slider */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-white mb-2">
              Select Price Range
            </label>
            <div className="flex">
              <label htmlFor="maxPrice" className="text-white">
                Min
              </label>
              <input
                type="range"
                value={minPrice}
                onChange={handleMinPriceChange}
                className="w-full mr-2 ml-2"
                min={300000}
                max={maxPrice}
              />
              <label htmlFor="maxPrice" className="text-white">
                Max
              </label>
              <input
                type="range"
                value={maxPrice}
                onChange={handleMaxPriceChange}
                className="w-full ml-2"
                min={300000}
                max={10000000}
              />
            </div>
            <div className="flex"></div>
            <div className="text-white text-center mt-2">
              Price Range: ₹{minPrice.toLocaleString("en-IN")} - ₹
              {maxPrice.toLocaleString("en-IN")}
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="transmission"
              className="block text-sm font-medium text-white mb-2"
            >
              Select Transmission Type
            </label>
            <select
              id="transmission"
              value={transmissionType}
              required
              onChange={handleTransmissionChange}
              className="form-select block w-full p-2.5 rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="" disabled>
                Select Car Brand
              </option>

              <option>Manual (MT)</option>
              <option>Automatic (AMT)</option>
              <option>Continuously Variable (CVT)</option>
              <option>Semi-Automatic (SAT)</option>
              <option>Dual Clutch (DCT)</option>
            </select>
          </div>

          {/* Event handling for fuel type buttons */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-white dark:text-white mb-2">
              Select Fuel Type
            </label>
            <div className="flex">
              <button
                type="button"
                onClick={() => handleFuelTypeClick("Diesel")}
                className={`flex-1 mr-2 ${
                  fuelType === "Diesel"
                    ? "bg-gradient-to-r from-green-800 to-black-500"
                    : "bg-gradient-to-r from-yellow-700 to-black-400"
                } text-white py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-green`}
              >
                DIESEL
              </button>
              <button
                type="button"
                onClick={() => handleFuelTypeClick("Petrol")}
                className={`flex-1 mr-2 ${
                  fuelType === "Petrol"
                    ? "bg-gradient-to-r from-green-800 to-black-500"
                    : "bg-gradient-to-r from-yellow-700 to-black-400"
                } text-white py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-green`}
              >
                PETROL
              </button>
              <button
                type="button"
                onClick={() => handleFuelTypeClick("Hybrid")}
                className={`flex-1 mr-2 ${
                  fuelType === "Hybrid"
                    ? "bg-gradient-to-r from-green-800 to-black-500"
                    : "bg-gradient-to-r from-yellow-700 to-black-400"
                } text-white py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-green`}
              >
                HYBRID
              </button>
              <button
                type="button"
                onClick={() => handleFuelTypeClick("EV")}
                className={`flex-1 mr-2 ${
                  fuelType === "EV"
                    ? "bg-gradient-to-r from-green-800 to-black-500"
                    : "bg-gradient-to-r from-yellow-700 to-black-400"
                } text-white py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-green`}
              >
                EV
              </button>
              <button
                type="button"
                onClick={() => handleFuelTypeClick("CNG")}
                className={`flex-1 ${
                  fuelType === "CNG"
                    ? "bg-gradient-to-r from-green-800 to-black-500"
                    : "bg-gradient-to-r from-yellow-700 to-black-400"
                } text-white py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-green`}
              >
                CNG
              </button>

              {/* Repea
                t similar buttons for PETROL, HYBRID, ELECTRIC */}
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      {isSearchClicked && isFormValid && (
        <div ref={displayCarsRef} className="mt-12">
          <DisplayCars
            carType={carType}
            carBrand={carBrand}
            fuelType={fuelType}
            transmissionType={transmissionType}
            minPrice={minPrice}
            maxPrice={maxPrice}
            onReset={handleReset}
            basicDetails={basicDetails}
            filteredCars={filteredCars}
          />
        </div>
      )}
    </>
  );
}

export default CarSelectionInput;
