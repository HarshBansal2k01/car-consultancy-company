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
          <div key={index} className="grid grid-cols-4 gap-2">
            <div className="block max-w p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Fuel & Performance
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <p>
                  Fuel Type: <span>{spec.Fuel_Type}</span>
                </p>
                <p>
                  Petrol Mileage ARAI: <span>{spec.Petrol_Mileage_ARAI}</span>
                </p>
                <p>
                  Tank Capacity: <span>{spec.Petrol_Fuel_Tank_Capacity}</span>
                </p>
                <p>
                  Emission Norm Compliance:{" "}
                  <span>{spec.Emission_Norm_Compliance}</span>
                </p>
                <p>
                  Top Speed: <span>{spec.Top_Speed}</span>
                </p>
              </p>
            </div>
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Suspension, Steering & Brakes{" "}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <p>
                  Front Suspension: <span>{spec.Front_Suspension}</span>
                </p>
                <p>
                  Rear Suspension: <span>{spec.Rear_Suspension}</span>
                </p>
                <p>
                  Steering Type : <span>{spec.Steering_Type}</span>
                </p>
                <p>
                  Steering Column : <span>{spec.Steering_Column}</span>
                </p>
                <p>
                  Turning Radius : <span>{spec.Turning_Radius}</span>
                </p>
                <p>
                  Front Brake Type : <span>{spec.Front_Brake_Type}</span>
                </p>
                <p>
                  Rear Brake Type : <span>{spec.Rear_Brake_Type}</span>
                </p>
              </p>
            </div>
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h2 className="text-xl font-bold">Dimensions & Capacity</h2>
              <p>
                Length : <span>{spec.Length}</span>
              </p>
              <p>
                Width : <span>{spec.Width}</span>
              </p>
              <p>
                Height : <span>{spec.Height}</span>
              </p>
              <p>
                Boot Space : <span>{spec.Boot_Space}</span>
              </p>
              <p>
                Seating Capacity : <span>{spec.Seating_Capacity}</span>
              </p>
              <p>
                Wheel Base : <span>{spec.Wheel_Base}</span>
              </p>
              <p>
                Rear Tread : <span>{spec.Rear_Tread}</span>
              </p>
              <p>
                Kerb Weight : <span>{spec.Kerb_Weight}</span>
              </p>
              <p>
                Gross Weight : <span>{spec.Gross_Weight}</span>
              </p>
              <p>
                No of Doors : <span>{spec.No_of_Doors}</span>
              </p>
            </div>

            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h2 className="text-xl font-bold">Comfort & Convenience</h2>
              <p>
                Power Steering : <span>{spec.Power_Steering}</span>
              </p>
              <p>
                Power Windows Front : <span>{spec.Power_Windows_Front}</span>
              </p>
              <p>
                Power Windows Rear : <span>{spec.Power_Windows_Rear}</span>
              </p>
              <p>
                Air Conditioner : <span>{spec.Air_Conditioner}</span>
              </p>
              <p>
                Heater : <span>{spec.Heater}</span>
              </p>
              <p>
                Adjustable Steering : <span>{spec.Adjustable_Steering}</span>
              </p>
              <p>
                Low Fuel Warning Light :{" "}
                <span>{spec.Low_Fuel_Warning_Light}</span>
              </p>
              <p>
                Accessory Power Outlet :{" "}
                <span>{spec.Accessory_Power_Outlet}</span>
              </p>
              <p>
                Vanity Mirror : <span>{spec.Vanity_Mirror}</span>
              </p>
              <p>
                Rear Seat Headrest : <span>{spec.Rear_Seat_Headrest}</span>
              </p>
              <p>
                Seat Lumbar Support : <span>{spec.Seat_Lumbar_Support}</span>
              </p>
              <p>
                Parking Sensors : <span>{spec.Parking_Sensors}</span>
              </p>
              <p>
                Navigation System : <span>{spec.Navigation_System}</span>
              </p>
              <p>
                Foldable Rear Seat : <span>{spec.Foldable_Rear_Seat}</span>
              </p>
              <p>
                KeyLess Entry : <span>{spec.KeyLess_Entry}</span>
              </p>
              <p>
                Voice Command : <span>{spec.Voice_Command}</span>
              </p>
              <p>
                Gear Shift Indicator : <span>{spec.Gear_Shift_Indicator}</span>
              </p>
              <p>
                Rear Curtain : <span>{spec.Rear_Curtain}</span>
              </p>
              <p>
                Luggage Hook Net : <span>{spec.Luggage_Hook_Net}</span>
              </p>
            </div>
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h2 className="text-xl font-bold">Interior</h2>
              <p>
                Tachometer : <span>{spec.Tachometer}</span>
              </p>
              <p>
                Electronic Multi Tripmeter :{" "}
                <span>{spec.Electronic_Multi_Tripmeter}</span>
              </p>
              <p>
                Fabric Upholstery : <span>{spec.Fabric_Upholstery}</span>
              </p>
              <p>
                Glove Compartment : <span>{spec.Glove_Compartment}</span>
              </p>
              <p>
                Digital Clock : <span>{spec.Digital_Clock}</span>
              </p>
              <p>
                Digital Odometer : <span>{spec.Digital_Odometer}</span>
              </p>
              <p>
                Dual Tone Dashboard : <span>{spec.Dual_Tone_Dashboard}</span>
              </p>
              <p>
                Additional Features : <span>{spec.Additional_Features}</span>
              </p>
            </div>
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h2 className="text-xl font-bold">Exterior</h2>
              <p>
                Adjustable Headlights :{" "}
                <span>{spec.Adjustable_Headlights}</span>
              </p>
              <p>
                Fogs lights front : <span>{spec.Fogs_lights_front}</span>
              </p>
              <p>
                Power Adjustable Exterior Rear View Mirror :{" "}
                <span>{spec.Power_Adjustable_Exterior_Rear_View_Mirror}</span>
              </p>
              <p>
                Manually Adjustable Ext Rear View Mirror :{" "}
                <span>{spec.Manually_Adjustable_Ext_Rear_View_Mirror}</span>
              </p>
              <p>
                Electric Folding Rear View Mirror :{" "}
                <span>{spec.Electric_Folding_Rear_View_Mirror}</span>
              </p>
              <p>
                Rear Window Wiper : <span>{spec.Rear_Window_Wiper}</span>
              </p>
              <p>
                Rear Window Washer : <span>{spec.Rear_Window_Washer}</span>
              </p>
              <p>
                Rear Window Defogger : <span>{spec.Rear_Window_Defogger}</span>
              </p>
              <p>
                Wheel Covers : <span>{spec.Wheel_Covers}</span>
              </p>
              <p>
                Alloy Wheels : <span>{spec.Alloy_Wheels}</span>
              </p>
              <p>
                Power Antenna : <span>{spec.Power_Antenna}</span>
              </p>
              <p>
                Outside Rear View Mirror Turn Indicators :
                <span>{spec.Outside_Rear_View_Mirror_Turn_Indicators}</span>
              </p>
              <p>
                Halogen Headlamps : <span>{spec.Halogen_Headlamps}</span>
              </p>
              <p>
                Outside Rear View Mirror Turn Indicators :{" "}
                <span>{spec.Outside_Rear_View_Mirror_Turn_Indicators}</span>
              </p>
              <p>
                Tyre Size : <span>{spec.Tyre_Size}</span>
              </p>
              <p>
                Tyre Type : <span>{spec.Tyre_Type}</span>
              </p>
              <p>
                Whee Size : <span>{spec.Wheel_Size}</span>
              </p>
              <p>
                Additional Features Wheel Centre Cap :{" "}
                <span>{spec.Additional_Features_Wheel_Centre_Cap}</span>
              </p>
              <p>
                Body Coloured Bumpers :{" "}
                <span>{spec.Body_Coloured_Bumpers}</span>
              </p>
            </div>
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h2 className="text-xl font-bold">Safety</h2>
              <p>
                Anti Lock Braking System :{" "}
                <span>{spec.Anti_Lock_Braking_System}</span>
              </p>
              <p>
                Central Locking : <span>{spec.Central_Locking}</span>
              </p>
              <p>
                Child Safety Locks : <span>{spec.Child_Safety_Locks}</span>
              </p>
              <p>
                Anti Theft Alarm : <span>{spec.Anti_Theft_Alarm}</span>
              </p>
              <p>
                No of Airbags : <span>{spec.No_of_Airbags}</span>
              </p>
              <p>
                wheel Driver Airbag : <span>{spec.Driver_Airbag}</span>
              </p>
              <p>
                Passenger Airbag : <span>{spec.Passenger_Airbag}</span>
              </p>
              <p>
                Side Airbag Front : <span>{spec.Side_Airbag_Front}</span>
              </p>
              <p>
                Side Airbag Rear : <span>{spec.Side_Airbag_Rear}</span>
              </p>
              <p>
                Day Night Rear View Mirror :{" "}
                <span>{spec.Day_Night_Rear_View_Mirror}</span>
              </p>
              <p>
                Seat Belt Warning : <span>{spec.Seat_Belt_Warning}</span>
              </p>
              <p>
                Door Ajar Warning : <span>{spec.Door_Ajar_Warning}</span>
              </p>
              <p>
                Electronic Stability Control :{" "}
                <span>{spec.Electronic_Stability_Control}</span>
              </p>
              <p>
                Advance Safety Features :{" "}
                <span>{spec.Advance_Safety_Features}</span>
              </p>
              <p>
                Speed Alert : <span>{spec.Speed_Alert}</span>
              </p>
              <p>
                Speed Sensing Auto Door Lock :{" "}
                <span>{spec.Speed_Sensing_Auto_Door_Lock}</span>
              </p>
              <p>
                Hill Assist : <span>{spec.Hill_Assist}</span>
              </p>
              <p>
                Global NCAP Safety Rating :{" "}
                <span>{spec.Global_NCAP_Safety_Rating}</span>
              </p>
              <p>
                Child safety rating : <span>{spec.Child_safety_rating}</span>
              </p>
            </div>
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h2 className="text-xl font-bold">
                Entertainment & Communication
              </h2>

              <p>
                Radio : <span>{spec.Radio}</span>
              </p>
              <p>
                Speakers Front : <span>{spec.Speakers_Front}</span>
              </p>
              <p>
                Speakers Rear : <span>{spec.Speakers_Rear}</span>
              </p>
              <p>
                Integrated 2DIN Audio :{" "}
                <span>{spec.Integrated_2DIN_Audio}</span>
              </p>
              <p>
                USB Auxiliary input : <span>{spec.USB_Auxiliary_input}</span>
              </p>
              <p>
                Bluetooth Connectivity :{" "}
                <span>{spec.Bluetooth_Connectivity}</span>
              </p>
              <p>
                Touch Screen : <span>{spec.Touch_Screen}</span>
              </p>
              <p>
                Android Auto : <span>{spec.Android_Auto}</span>
              </p>
              <p>
                Apple CarPlay : <span>{spec.Apple_CarPlay}</span>
              </p>
              <p>
                Subwoofer : <span>{spec.Subwoofer}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Specification;
