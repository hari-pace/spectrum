import React, { useEffect, useState } from "react";
import Rocket from "./assets/rocket2.jpg";
import { Bars } from "react-loader-spinner";
import { Chart } from "react-google-charts";

const Assignment2 = () => {
  const [socket, setSocket] = useState(null);
  const [loading, setLoading] = useState(true);
  const [liveData, setLiveData] = useState({});
  const [isActionRequired, setIsActionRequired] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  let ws;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      ws = new WebSocket(
        "wss://webfrontendassignment-isaraerospace.azurewebsites.net/api/SpectrumWS"
      );

      ws.onopen = () => {
        console.log("WebSocket connection established.");
      };

      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);

        setLiveData(data);
        setLoading(false);

        if (data.IsActionRequired) {
          setIsActionRequired(true);
        }
        if (!data.IsActionRequired) {
          setIsActionRequired(false);
        }
      };

      ws.onerror = (error) => {
        console.error("WebSocket error:", error);
      };

      ws.onclose = () => {
        console.log("WebSocket connection closed.");
      };

      setSocket(ws);
    }, 500);

    return () => {
      clearTimeout(timeoutId);

      if (ws && ws.readyState === WebSocket.OPEN) {
        ws.close();
      }
    };
  }, []);

  console.log(liveData);

  const handleActionOnSpectrum = async () => {
    try {
      openModal();
      setIsActionRequired(false);
      const response = await fetch(
        "https://webfrontendassignment-isaraerospace.azurewebsites.net/api/ActOnSpectrum",
        {
          method: "POST",
          // doesn't work

          // body: JSON.stringify({
          //   key: "value",
          // }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      console.log("ActOnSpectrum response:", response);
    } catch (error) {
      console.error("Error handling action on Spectrum:", error);
    }
  };

  return (
    <div
      className="background-container"
      style={{ backgroundImage: `url(${Rocket})` }}
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
          <>
            {isModalOpen && (
              <div className="fixed inset-0 z-50 overflow-auto bg-gray-700 bg-opacity-75">
                <div className="flex items-center justify-center h-screen">
                  <div className="bg-slate-500 p-12 rounded shadow-lg">
                    <div className="text-center text-2xl">
                      Thank you for acting on Spectrum
                    </div>
                    <button
                      onClick={closeModal}
                      className="mt-8 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-all duration-300 ease-in-out"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
            <div className="text-center mt-16 sm:mt-32 mx-4  text-slate-100">
              <div className=" mb-16 flex flex-col items-center">
                {isActionRequired && (
                  <div className="text-3xl sm:text-5xl  w-1/2 flex justify-center m-4 p-4 sm:my-8 sm:py-8 bg-gradient-to-r from-red-500 to-red-700 rounded-md">
                    Action required!
                  </div>
                )}
                <button
                  className="bg-blue-500 text-lg sm:text-3xl py-2 px-4 sm:px-8 sm:py-4 hover:bg-blue-600 rounded transition-all duration-300 ease-in-out"
                  onClick={handleActionOnSpectrum}
                >
                  Act on Spectrum
                </button>
              </div>
              <div className="flex flex-col items-center sm:flex-row justify-center mb-4 sm:mb-0">
                <div className=" sm:w-3/4 w-90 text-lg sm:text-4xl">
                  <div className=" font-bold">
                    ℹ️ Status Message: {liveData.StatusMessage}
                  </div>
                  <div className="mt-6 mb-2 sm:mt-12 sm:mb-8 font-bold">
                    {liveData.IsAscending ? (
                      <div>⬆️ Rocket currently ascending ⬆️</div>
                    ) : (
                      <div>⬇️ Rocket currently descending ⬇️</div>
                    )}
                  </div>
                </div>
              </div>

              <div className=" hidden sm:flex justify-evenly mt-12 mb-12">
                <Chart
                  width={"400px"}
                  height={"300px"}
                  chartType="Gauge"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ["Label", "Value"],
                    ["Velocity", liveData.Velocity],
                  ]}
                  options={{
                    redFrom: 80,
                    redTo: 100,
                    yellowFrom: 60,
                    yellowTo: 80,
                    minorTicks: 5,
                    max: 100,
                    min: -100,
                  }}
                  rootProps={{ "data-testid": "1" }}
                />

                <Chart
                  width={"400px"}
                  height={"300px"}
                  chartType="Gauge"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ["Label", "Value"],
                    ["Altitude", Math.round(liveData.Altitude)],
                  ]}
                  options={{
                    redFrom: 40,
                    redTo: 50,
                    yellowFrom: 30,
                    yellowTo: 40,
                    minorTicks: 5,
                    max: 0,
                    min: -50000,
                  }}
                  rootProps={{ "data-testid": "1" }}
                />
                <Chart
                  width={"400px"}
                  height={"300px"}
                  chartType="Gauge"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ["Label", "Value"],
                    ["Temperature", liveData.Temperature],
                  ]}
                  options={{
                    redFrom: 40,
                    redTo: 50,
                    yellowFrom: 30,
                    yellowTo: 40,
                    minorTicks: 5,
                    max: 50,
                    min: -50,
                  }}
                  rootProps={{ "data-testid": "1" }}
                />
              </div>

              <div className="py-2 ">
                <Chart
                  chartType="BarChart"
                  data={[
                    ["Category", "Value"],
                    ["Velocity", liveData.Velocity],
                  ]}
                  options={{
                    title: "Measure of velocity",
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
                <Chart
                  chartType="BarChart"
                  data={[
                    ["Category", "Value"],
                    ["Altitude", liveData.Altitude],
                  ]}
                  options={{
                    title: "Measure of altitude",
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
                <Chart
                  chartType="BarChart"
                  data={[
                    ["Category", "Value"],
                    ["Temperature", liveData.Temperature],
                  ]}
                  options={{
                    title: "Measure of temperature",
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
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Assignment2;
