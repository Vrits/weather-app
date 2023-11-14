import { useState, useEffect } from "react";
import { useWeather } from "../../context/useWeather";
import { loadIcons, loadImage } from "../../Images/images";
import { kelvinToCelcius } from "../utils/weatherUtils";

const CurrentWeather = () => {
  const [imageSrc, setImageSrc] = useState("");
  const [iconSrc, setIConSrc] = useState("");
  const { location, weatherToday } = useWeather();
  const {
    feels_like,
    weather,
    temp_max,
    temp_min,
    weather_icon,
    description,
    weather_id,
  } = weatherToday;

  useEffect(() => {
    if (!weather || !weather_id || !weather_icon) return;

    let weatherImg: string;

    if (Math.floor(weather_id / 100) === 7) {
      weatherImg = "Haze";
    } else {
      weatherImg = weather;
    }

    const loadImageAsync = async () => {
      try {
        const image = await loadImage(weatherImg);
        const icon = await loadIcons(weather_icon);
        setImageSrc(image.default);
        setIConSrc(icon.default);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };

    loadImageAsync();
  }, [weather, weather_id, weather_icon]);

  const capitalizeFirstLetter = (s: string | undefined) => {
    if (s) {
      return s.charAt(0).toUpperCase() + s.slice(1);
    }
  };

  return (
    <>
      <div
        className="max-w-xl w-full flex flex-col rounded-lg mt-2 overflow-hidden text-white"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        <div className="bg-black/50 backdrop-blur-md p-3">
          <p className="font-bold text-xl">{location.label} </p>
        </div>
        <div className="p-4 flex justify-between items-center">
          <div>
            <p className="text-7xl font-bold drop-shadow-2xl">
              {kelvinToCelcius(feels_like)}
            </p>
            <p className="font-bold text-lg drop-shadow-2xl">{weather}</p>
            <p className="font-bold text-lg drop-shadow-2xl">
              {capitalizeFirstLetter(description)}
            </p>
            <p className="font-bold text-lg drop-shadow-2xl">
              Min {kelvinToCelcius(temp_min)} • Max {kelvinToCelcius(temp_max)}
            </p>
          </div>
          <div>
            <img
              src={iconSrc}
              alt={`${weather} icon`}
              className="drop-shadow-[2px_2px_3px_#000000]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentWeather;
