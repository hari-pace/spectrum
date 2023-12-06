import React, { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";

const Assignment1 = () => {
  const [sensorData, setSensorData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getSensorData = async () => {
    try {
      const res = await fetch(
        "https://webfrontendassignment-isaraerospace.azurewebsites.net/api/SpectrumStatus"
      );
      const data = await res.json();
      console.log(data);
      setSensorData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 3000);
      //   return () => clearTimeout(timeout);
    }
  };

  useEffect(() => {
    getSensorData();
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full">
      {loading ? (
        <div className="flex justify-center mt-80">
          <Bars
            height="100"
            width="100"
            color="#0A5EDD"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div className="bg-black mx-auto mt-48 text-white">
          <p>Velocity: {sensorData.velocity}</p>
          <p>Altitude: {sensorData.altitude}</p>
          <p>Temperature: {sensorData.temperature}</p>
          <p>Status Message: {sensorData.statusMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Assignment1;
