import React from "react";
import mustang from "../images/mustang.jpg";

function DisplayCars({
  carType,
  carBrand,
  fuelType,
  transmissionType,
  price,
  onReset,
}) {
  const handleResetClick = () => {
    if (onReset) {
      onReset();
    }
  };

  return (
    <div className="max-w-full">
      <div className="flex flex-col mb-10 items-center justify-center min-h-screen relative overflow-hidden">
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
            <img
              src={mustang}
              alt="car"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="p-6 pt-0 mt-2">
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold mb-2">Features:</h2>
              <div className="flex justify-between">
                <p className="text-gray-700">Car Type:</p>
                <p className="text-blue-gray-900">{carType}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Car Brand:</p>
                <p className="text-blue-gray-900">{carBrand}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Fuel Type:</p>
                <p className="text-blue-gray-900">{fuelType}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Transmission Type:</p>
                <p className="text-blue-gray-900">{transmissionType}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Price:</p>
                <p className="text-blue-gray-900">${price}</p>
              </div>
            </div>
            <button
              onClick={handleResetClick}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayCars;
