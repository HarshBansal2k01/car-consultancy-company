import React, { useEffect, useState } from "react";
import axios from "axios";
import mustang from "../images/mustang.jpg";
import "./DropDownDetails.css";
import { useSearchParams } from "react-router-dom";
import Navbar from "./Navbar";

function DropDownDetails() {
  const [specifications, setSpecifications] = useState([]);

  useEffect(() => {
    const fetchSpecificationDetails = async () => {
      try {
        const response = await axios.get("http://localhost:8080/specification");
        setSpecifications(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching basic details:", error);
        // Handle error if needed
      }
    };

    fetchSpecificationDetails();

    // Cleanup function
    return () => {
      // Cleanup if needed
    };
  }, []);

  const [searchParams] = useSearchParams();
  const carId = searchParams.get("id");
  const variant = searchParams.get("variant");
  const carName = searchParams.get("name");

  return (
    <>
      <Navbar />
      <div className="relative flex text-gray-700 bg-white shadow-md bg-clip-border rounded-xl border-b-2 ">
        <div className="max-w-3xl flex flex-row mb-4 items-center ">
          <img
            src={mustang}
            alt=""
            className="w-80 h-60 object-cover mr-5 ml-2 mt-4 "
          />

          <div className="flex-grow ">
            <h1 className="text-xl font-bold mb-2 mt-4">
              {carName}-{variant}
            </h1>

            <p className="text-gray-600 ">
              <h3 className="text-md font-semibold mb-2 mt-2">
                Key Specifications
              </h3>
            </p>
            <div className="">
              {specifications.map((spec) => (
                <p key={spec.id}>
                  <p>
                    ARAI Mileage: <span>{spec.ARAI_Mileage}</span>
                  </p>
                  <p>
                    Fuel Type:<span> {spec.Fuel_Type}</span>
                  </p>
                  <p>
                    Engine Displacement: <span>{spec.Engine_Displacement}</span>
                  </p>
                  <p>
                    No of Cylinders: <span>{spec.No_of_Cylinders}</span>
                  </p>
                  <p>
                    Max Power: <span>{spec.Max_Power}</span>
                  </p>
                  <p>
                    Max Torque: <span>{spec.Max_Torque}</span>
                  </p>
                  <p>
                    Seating Capacity: <span>{spec.Seating_Capacity}</span>
                  </p>
                  <p>
                    Transmission Type: <span>{spec.Transmission_Type}</span>
                  </p>
                  <p>
                    Boot Space: <span>{spec.Boot_Space}</span>
                  </p>
                  <p>
                    Fuel Tank Capacity: <span>{spec.Fuel_Tank_Capacity}</span>
                  </p>
                  <p>
                    Body Type: <span>{spec.Body_Type}</span>
                  </p>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DropDownDetails;
