import React, { useEffect, useState } from "react";
import "./Specification.css";
import axios from "axios";

function Specification({ showSpecification, variant }) {
  const [completeSpecification, setCompleteSpecification] = useState([]);

  useEffect(() => {
    const fetchSpecificationDetails = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/completedetails"
        );
        const filteredSpecification = response.data.filter(
          (spec) => spec.variant === variant
        );

        setCompleteSpecification(filteredSpecification);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching basic details:", error);
        // Handle error if needed
      }
    };

    fetchSpecificationDetails();
  }, [variant]);

  return (
    <div
      className={`specification-container ${
        !showSpecification && "hidden"
      }  rounded-lg `}
      style={{ marginTop: "10px" }}
    >
      <div className="bg-white rounded-lg  p-6 space-y-4 ">
        {completeSpecification.map((spec, index) => (
          <div key={index} className="grid grid-cols-6 gap-1">
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Fuel & Performance
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <p>
                  Power Steering: <span>{spec.Fuel_Type}</span>
                </p>
                <p>
                  Power Steering: <span>{spec.Petrol_Mileage_ARAI}</span>
                </p>
                <p>
                  Power Steering: <span>{spec.Petrol_Fuel_Tank_Capacity}</span>
                </p>
                <p>
                  Power Steering: <span>{spec.Emission_Norm_Compliance}</span>
                </p>
                <p>
                  Power Steering: <span>{spec.Top_Speed}</span>
                </p>
              </p>
            </div>

            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>

            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Suspension, Steering & Brakes{" "}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <p>
                  Power Steering: <span>{spec.Front_Suspension}</span>
                </p>
                <p>
                  Power Steering: <span>{spec.Rear_Suspension}</span>
                </p>
                <p>
                  Power Steering: <span>{spec.Steering_Type}</span>
                </p>
                <p>
                  Power Steering: <span>{spec.Steering_Column}</span>
                </p>
                <p>
                  Power Steering: <span>{spec.Turning_Radius}</span>
                </p>
                <p>
                  Power Steering: <span>{spec.Front_Brake_Type}</span>
                </p>
                <p>
                  Power Steering: <span>{spec.Rear_Brake_Type}</span>
                </p>
              </p>
            </div>

            <h2 className="text-xl font-bold">Dimensions & Capacity</h2>
            <p>
              Power Steering: <span>{spec.Length}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Width}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Height}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Boot_Space}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Seating_Capacity}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Wheel_Base}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Rear_Tread}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Kerb_Weight}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Gross_Weight}</span>
            </p>
            <p>
              Power Steering: <span>{spec.No_of_Doors}</span>
            </p>

            <h2 className="text-xl font-bold">Comfort & Convenience</h2>
            <p>
              Power Steering: <span>{spec.Power_Steering}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Power_Windows_Front}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Power_Windows_Rear}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Air_Conditioner}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Heater}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Adjustable_Steering}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Low_Fuel_Warning_Light}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Accessory_Power_Outlet}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Vanity_Mirror}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Rear_Seat_Headrest}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Seat_Lumbar_Support}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Parking_Sensors}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Navigation_System}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Foldable_Rear_Seat}</span>
            </p>
            <p>
              Power Steering: <span>{spec.KeyLess_Entry}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Voice_Command}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Gear_Shift_Indicator}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Rear_Curtain}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Luggage_Hook_Net}</span>
            </p>
            <h2 className="text-xl font-bold">Interior</h2>
            <p>
              Power Steering: <span>{spec.Tachometer}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Electronic_Multi_Tripmeter}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Fabric_Upholstery}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Glove_Compartment}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Digital_Clock}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Digital_Odometer}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Dual_Tone_Dashboard}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Additional_Features}</span>
            </p>
            <h2 className="text-xl font-bold">Exterior</h2>
            <p>
              Power Steering: <span>{spec.Adjustable_Headlights}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Fogs_lights_front}</span>
            </p>
            <p>
              Power Steering:{" "}
              <span>{spec.Power_Adjustable_Exterior_Rear_View_Mirror}</span>
            </p>
            <p>
              Power Steering:{" "}
              <span>{spec.Manually_Adjustable_Ext_Rear_View_Mirror}</span>
            </p>
            <p>
              Power Steering:{" "}
              <span>{spec.Electric_Folding_Rear_View_Mirror}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Rear_Window_Wiper}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Rear_Window_Washer}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Rear_Window_Defogger}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Wheel_Covers}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Alloy_Wheels}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Power_Antenna}</span>
            </p>
            <p>
              Power Steering:{" "}
              <span>{spec.Outside_Rear_View_Mirror_Turn_Indicators}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Halogen_Headlamps}</span>
            </p>
            <p>
              Power Steering:{" "}
              <span>{spec.Outside_Rear_View_Mirror_Turn_Indicators}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Tyre_Size}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Tyre_Type}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Wheel_Size}</span>
            </p>
            <p>
              Power Steering:{" "}
              <span>{spec.Additional_Features_Wheel_Centre_Cap}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Body_Coloured_Bumpers}</span>
            </p>
            <h2 className="text-xl font-bold">Safety</h2>
            <p>
              Power Steering: <span>{spec.Anti_Lock_Braking_System}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Central_Locking}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Child_Safety_Locks}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Anti_Theft_Alarm}</span>
            </p>
            <p>
              Power Steering: <span>{spec.No_of_Airbags}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Driver_Airbag}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Passenger_Airbag}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Side_Airbag_Front}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Side_Airbag_Rear}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Day_Night_Rear_View_Mirror}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Seat_Belt_Warning}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Door_Ajar_Warning}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Electronic_Stability_Control}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Advance_Safety_Features}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Speed_Alert}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Speed_Sensing_Auto_Door_Lock}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Hill_Assist}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Global_NCAP_Safety_Rating}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Child_safety_rating}</span>
            </p>
            <h2 className="text-xl font-bold">Entertainment & Communication</h2>

            <p>
              Power Steering: <span>{spec.Radio}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Speakers_Front}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Speakers_Rear}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Integrated_2DIN_Audio}</span>
            </p>
            <p>
              Power Steering: <span>{spec.USB_Auxiliary_input}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Bluetooth_Connectivity}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Touch_Screen}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Android_Auto}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Apple_CarPlay}</span>
            </p>
            <p>
              Power Steering: <span>{spec.Subwoofer}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Specification;
