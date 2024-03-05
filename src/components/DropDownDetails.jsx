import React, { useEffect, useState } from "react";
import axios from "axios";

import "./DropDownDetails.css";
import { useSearchParams } from "react-router-dom";
import Navbar from "./Navbar";
import Specification from "./Specification";

function DropDownDetails() {
  const [specifications, setSpecifications] = useState([]);
  const [showSpecification, setShowSpecification] = useState(false);

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

    // Show Specification component after 3 seconds
    const timer = setTimeout(() => {
      setShowSpecification(true);
    }, 2000);

    // Cleanup function
    return () => {
      clearTimeout(timer);

      // Cleanup if needed
    };
  }, []);

  const [searchParams] = useSearchParams();
  // const carId = searchParams.get("id");
  const variant = searchParams.get("variant");
  const carName = searchParams.get("name");

  return (
    <>
      <Navbar />
      <div className=" rounded-lg  p-6 space-y-4 shadow-2xl shadow-black	 bg-white ">
        <h1 className="text-xl font-bold mb-2 mt-4">
          {carName}-{variant}
        </h1>
        <div className="flex space-x-10 ">
          <h3 className="text-md font-semibold mb-2 mt-2">Key Features</h3>
          <div className="">
            {specifications.map((spec) => (
              <div key={spec.id} className="spec-item">
                <p>
                  Power Steering: <span>{spec.Power_Steering}</span>
                </p>
                <p>
                  Power Windows Front:
                  <span> {spec.Power_Windows_Front}</span>
                </p>
                <p>
                  Anti Lock Braking System:{" "}
                  <span>{spec.Anti_Lock_Braking_System}</span>
                </p>
                <p>
                  Air Conditioner: <span>{spec.Air_Conditioner}</span>
                </p>
                <p>
                  Driver Airbag: <span>{spec.Driver_Airbag}</span>
                </p>
                <p>
                  Passenger Airbag: <span>{spec.Passenger_Airbag}</span>
                </p>
                <p>
                  Alloy Wheels: <span>{spec.Alloy_Wheels}</span>
                </p>
                <p>
                  Multi Function Steering Wheel:{" "}
                  <span>{spec.Multi_function_Steering_Wheel}</span>
                </p>
                <p>
                  Wheel Cover: <span>{spec.Wheel_Covers}</span>
                </p>
              </div>
            ))}
          </div>

          <h3 className="text-md font-semibold mb-2 mt-2 ml-2">
            Key Specifications
          </h3>
          <div>
            {specifications.map((spec) => (
              <div key={spec.id} className="spec-item ml-2">
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
              </div>
            ))}
          </div>
        </div>
      </div>
      {showSpecification && (
        <Specification showSpecification={showSpecification} variant={variant} />
      )}
    </>
  );
}

export default DropDownDetails;
