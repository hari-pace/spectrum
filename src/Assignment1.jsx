import React, { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
import { Chart } from "react-google-charts";
import Rocket2 from "./assets/rocket2.jpg";

const Assignment1 = () => {
  const [sensorData, setSensorData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [renderToggle, setRenderToggle] = useState(false);

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
    setRenderToggle(false);
  }, [renderToggle]);

  const dataForChart = Object.entries(sensorData)
    .filter(([key, value]) => typeof value === "number")
    .map(([key, value]) => [key, value]);

  console.log(dataForChart);

  const options = {};

  return (
    <div
      className="bg-cover min-h-screen bg-center bg-repeat"
      style={{ backgroundImage: `url(${Rocket2})` }}
    >
      <div className="absolute top-24 left-0 w-full h-full z-0">
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
          <div className="text-center mt-8 sm:mt-28 mx-4  text-slate-100">
            <div className="flex justify-center mb-4 sm:mb-0">
              <div className=" sm:w-3/4 w-90 text-md sm:text-3xl">
                <div className=" font-bold">
                  ℹ️ Status Message: {sensorData.statusMessage}
                </div>
                <div className="mt-6 mb-2 sm:mt-12 sm:mb-4 font-bold">
                  {sensorData.isAscending ? (
                    <div>⬆️ Rocket currently ascending ⬆️</div>
                  ) : (
                    <div>⬇️ Rocket currently descending ⬇️</div>
                  )}
                </div>
              </div>
              <div className=" flex">
                <button
                  onClick={() => setRenderToggle(true)}
                  className="bg-blue-500 m-2 p-2 sm:p-4 text-sm sm:text-2xl h-1/2  my-auto hover:bg-blue-600 rounded-md"
                >
                  Refresh data
                </button>
              </div>
            </div>

            {dataForChart.map(([category, value], index) => (
              <div key={index} className="py-2 sm:py-6">
                <Chart
                  chartType="BarChart"
                  data={[
                    ["Category", "Value"],
                    [category, value],
                  ]}
                  options={{
                    title: `Measure of ${category}`,
                    titleTextStyle: {
                      color: "white",
                      fontSize: 20,
                      bold: true,
                    },
                    backgroundColor: "transparent",
                    colors: ["#007bff"],
                    lineWidth: 2,
                    pointSize: 6,
                    animation: {
                      startup: true,
                      duration: 1000,
                      easing: "out",
                    },
                    hAxis: {
                      textStyle: { color: "white", fontSize: 12 },
                    },
                    vAxis: {
                      textStyle: { color: "white", fontSize: 12 },
                    },
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Assignment1;
