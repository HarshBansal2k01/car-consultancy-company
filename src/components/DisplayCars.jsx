import React from "react";
import mustang from "../images/mustang.jpg";

function DisplayCars({
  carType,
  carBrand,
  fuelType,
  transmissionType,
  maxPrice,
  minPrice,
  onReset,
}) {
  const handleResetClick = () => {
    if (onReset) {
      onReset();
    }
  };
  const formatIndianNumber = (number) => {
    return number.toLocaleString("en-IN");
  };
  return (
    <div className="max-w-full mt-4 p-20">
      <div className="flex flex-col mb-10 justify-center min-h-screen relative overflow-hidden">
        <div className="relative flex text-gray-700 bg-white shadow-md bg-clip-border rounded-xl border-b-2">
          <div className="max-w-3xl flex flex-row mb-4 items-center">
            <img
              src={mustang}
              alt=""
              className="w-80 h-60 object-cover mr-5 ml-2 mt-4"
            />
            <div className="flex-grow">
              <h2 className="text-xl font-semibold mb-2 mt-4">Car Name</h2>
              <p className="text-gray-600 ">
                <p>
                  Car Brand: <span>{carBrand}</span>
                </p>
                <p>
                  Car Type: <span>{carType}</span>
                </p>
                <p>
                  Fuel Type:<span>{fuelType}</span>
                </p>
                <p>
                  Transmission Type: <span>{transmissionType}</span>
                </p>
                <p>
                  Minimum Price: <span>{formatIndianNumber(minPrice)}</span>
                </p>
                <p>
                  Maximum Price: <span>{formatIndianNumber(maxPrice)}</span>
                </p>
              </p>
            </div>
          </div>
          <div className="mt-20 ml-60">
            <button className="button mt-5 ml-20 bg-blue-500 hover:bg-blue-700 text-white shadow-md px-8 py-2 rounded-md">
              More Details
            </button>
          </div>
        </div>

 
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
