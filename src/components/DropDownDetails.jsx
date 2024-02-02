import React from "react";
import mustang from "../images/mustang.jpg";
import "./DropDownDetails.css";

function DropDownDetails() {
  return (
    <div className="relative flex text-gray-700 bg-white shadow-md bg-clip-border rounded-xl border-b-2 drop">
      <div className="max-w-3xl flex flex-row mb-4 items-center ">
        <img
          src={mustang}
          alt=""
          className="w-80 h-60 object-cover mr-5 ml-2 mt-4 "
        />

        <div className="flex-grow ">
          <h2 className="text-xl font-semibold mb-2 mt-4">Car Name</h2>
          <p className="text-gray-600 ">
            <p>
              Car Brand: <span></span>
            </p>
            <p>
              Car Type: <span></span>
            </p>
            <p>
              Fuel Type:<span></span>
            </p>
            <p>
              Transmission Type: <span></span>
            </p>
            <p>
              Minimum Price: <span></span>
            </p>
            <p>
              Maximum Price: <span></span>
            </p>
          </p>
        </div>
      </div>
      <div className="absolute bottom-5 right-5">
        <button
          // onClick={handleMoreDetailsClick}
          className="button bg-blue-500 hover:bg-blue-700 text-white shadow-xl px-8 py-2 rounded-md"
        >
          More Details
        </button>
      </div>
    </div>
  );
}

export default DropDownDetails;
