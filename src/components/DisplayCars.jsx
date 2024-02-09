import React, { useState } from "react";
import mustang from "../images/mustang.jpg";
import DropDownDetails from "./DropDownDetails";

import "./DropDownDetails.css";

function DisplayCars({
  carType,
  carBrand,
  fuelType,
  transmissionType,
  maxPrice,
  minPrice,
  onReset,
  basicDetails,
  filteredCars,
}) {
  const [expandedCarId, setExpandedCarId] = useState(null);

  const handleResetClick = () => {
    if (onReset) {
      onReset();
    }
  };

  const handleMoreDetailsClick = (carId) => {
    setExpandedCarId(expandedCarId === carId ? null : carId);
  };

  return (
    <div className="max-w-full mt-4 p-20">
      <div className="flex flex-col mb-10 justify-center min-h-screen relative overflow-hidden">
        {filteredCars.map((car) => (
          <div
            key={car.id}
            className="relative flex text-gray-700 bg-white shadow-md bg-clip-border rounded-xl border-b-2 mb-4"
          >
            <div className="max-w-3xl flex flex-row mb-4 items-center">
              <img
                src={mustang}
                alt=""
                className="w-80 h-60 object-cover mr-5 ml-2 mt-4"
              />
              <div className="flex-grow">
                <h2 className="text-xl font-semibold mb-2 mt-4">{car.name}</h2>
                <p className="text-gray-600 ">
                  <p>
                    Car Brand: <span>{car.brand}</span>
                  </p>
                  <p>
                    Car Type: <span>{car.type}</span>
                  </p>
                  <p>
                    Fuel Type:<span>{car.fuel}</span>
                  </p>
                  <p>
                    Transmission Type: <span>{car.transmission}</span>
                  </p>
                  <p>
                    Price: <span>{car.price}</span>
                  </p>
                  <p>
                    Variant: <span>{car.variant}</span>
                  </p>
                </p>
              </div>
            </div>
            <div className="mt-20 ml-60">
              <button
                onClick={() => handleMoreDetailsClick(car.id)}
                className="button mt-5 ml-20 bg-blue-500 hover:bg-blue-700 text-white shadow-xl px-8 py-2 rounded-md"
              >
                {expandedCarId === car.id ? "Close Details" : "More Details"}
              </button>
            </div>
            {expandedCarId === car.id && (
              <div className="dropdown-details">
                <DropDownDetails basicDetails={basicDetails} />
              </div>
            )}
          </div>
        ))}
        <button
          onClick={handleResetClick}
          className="mt-2 button justify-start bg-blue-500 hover:bg-blue-700 text-white shadow-md px-4 py-2 rounded-md"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default DisplayCars;
