import { useState, useEffect } from "react";
import { useWeather } from "../../context/useWeather";
import WeatherDetail from "./WeatherDetail";
import { loadImage } from "../../Images/images";
const CurrentWeather = () => {
  const [imageSrc, setImageSrc] = useState("");
  const { location, weatherToday } = useWeather();
  const { feels_like, weather, temp_max, temp_min } = weatherToday;

  const kelvinToCelcius = (e: number | undefined) => {
    if (e) {
      return `${Math.round(e - 273.15)}°`;
    } else {
      return "";
    }
  };

  useEffect(() => {
    if (!weather) return;
    const loadImageAsync = async () => {
      try {
        console.log(weather);
        const image = await loadImage(weather);
        setImageSrc(image.default);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };

    loadImageAsync();
  }, [weather]);

  return (
    <>
      <div
        className="max-w-xl w-full flex flex-col rounded-lg mt-2 overflow-hidden text-white"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        <div className="bg-black/50 backdrop-blur-md p-3">
          <p className="font-bold text-xl ">
            {location.label}{" "}
            {/* <span className="font-normal text-base">As of 7:17 am WITA</span> */}
          </p>
        </div>
        <div className="p-4 flex justify-between items-center">
          <div>
            <p className="text-7xl font-bold drop-shadow-2xl">{kelvinToCelcius(feels_like)}</p>
            <p className="font-bold text-lg drop-shadow-2xl">{weather}</p>
            <p className="font-bold text-lg drop-shadow-2xl">
              Min {kelvinToCelcius(temp_min)} • Max {kelvinToCelcius(temp_max)}
            </p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-2h-24 h-24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
              />
            </svg>
          </div>
        </div>
      </div>
      <WeatherDetail />
    </>
  );
};

export default CurrentWeather;
