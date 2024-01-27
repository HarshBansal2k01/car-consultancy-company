import React, { useEffect, useRef, useState } from "react";
import "./CarSelectionInput.css";
import DisplayCars from "./DisplayCars";
import { useAuth0 } from "@auth0/auth0-react";

function CarSelectionInput() {
  const [carType, setCarType] = useState("");
  const [carBrand, setCarBrand] = useState("");
  const [price, setPrice] = useState(0);
  const [transmissionType, setTransmissionType] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [isFormValid, setIsFormValid] = useState(true);
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const displayCarsRef = useRef(null);

  const handleCarTypeClick = (selectedCarType) => {
    setCarType(selectedCarType);
  };

  const handleCarBrandChange = (event) => {
    setCarBrand(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(parseInt(event.target.value, 10));
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
      carType && carBrand && price > 0 && transmissionType && fuelType;

    if (isValid && isAuthenticated) {
      setIsFormValid(true);
      setIsSearchClicked(true);
      console.log(carType, carBrand, price, transmissionType, fuelType);
    } else {
      alert("Please Login before to use the feature")
      setIsFormValid(false);
      loginWithRedirect()
      console.log(isFormValid);
    }
  };
  const handleReset = () => {
    setIsSearchClicked(false);
    // Add additional logic for resetting other states or scroll position if needed
  };

  useEffect(() => {
    if (isSearchClicked && isFormValid && displayCarsRef.current) {
      displayCarsRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [isSearchClicked, isFormValid]);

  return (
    <div className="mt-[-50px] mb-12 ">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-10 rounded-md shadow-lg glow bg-gradient-to-r from-indigo-900 to-grey-700"
      >
        {/* ... (rest of the form remains unchanged) */}

        {/* Event handling for car type buttons */}
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
              onClick={() => handleCarTypeClick("HATCHBACK")}
              className={`flex-1 mr-2 ${
                carType === "HATCHBACK"
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

            <option>Toyota</option>
            <option>Honda</option>
            <option>Ford</option>
            <option>Chevrolet</option>
          </select>
        </div>

        {/* Event handling for price slider */}
        <div className="mb-4">
          <label className="block text-sm font-medium  text-white mb-2">
            Select Price Range
          </label>
          <input
            type="range"
            value={price}
            onChange={handlePriceChange}
            className="w-full"
            min={0}
            max={10000000}
          />
          <div className="text-white text-center mt-2">
            Price: ₹{price.toLocaleString("en-IN")}
          </div>
        </div>

        {/* Event handling for transmission dropdown */}
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

            <option>Manual transmission (MT)</option>
            <option>Automatic transmission (AT)</option>
            <option>Continuously Variable transmission (CVT)</option>
            <option>Semi-Automatic transmission (SAT)</option>
            <option>Dual Clutch transmission (DCT)</option>
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
              onClick={() => handleFuelTypeClick("DIESEL")}
              className={`flex-1 mr-2 ${
                fuelType === "DIESEL"
                  ? "bg-gradient-to-r from-green-800 to-black-500"
                  : "bg-gradient-to-r from-yellow-700 to-black-400"
              } text-white py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-green`}
            >
              DIESEL
            </button>
            <button
              type="button"
              onClick={() => handleFuelTypeClick("PETROL")}
              className={`flex-1 mr-2 ${
                fuelType === "PETROL"
                  ? "bg-gradient-to-r from-green-800 to-black-500"
                  : "bg-gradient-to-r from-yellow-700 to-black-400"
              } text-white py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-green`}
            >
              PETROL
            </button>
            <button
              type="button"
              onClick={() => handleFuelTypeClick("HYBRID")}
              className={`flex-1 mr-2 ${
                fuelType === "HYBRID"
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
            {/* Repeat similar buttons for PETROL, HYBRID, ELECTRIC */}
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
      {isSearchClicked && isFormValid && (
        <div ref={displayCarsRef} className="mt-12">
          <DisplayCars
            carType={carType}
            carBrand={carBrand}
            fuelType={fuelType}
            transmissionType={transmissionType}
            price={price}
            onReset={handleReset}
          />
        </div>
      )}
    </div>
  );
}

export default CarSelectionInput;
