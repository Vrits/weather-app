import { useWeather } from "../../context/useWeather";
import {
  kelvinToCelcius,
  dewPoint,
  windSpeed,
  visibilityInKm,
} from "../utils/weatherUtils";

const WeatherDetail = () => {
  const { location, weatherToday } = useWeather();
  const {
    temp_max,
    temp_min,
    feels_like,
    wind,
    humidity,
    pressure,
    visibility,
  } = weatherToday;

  return (
    <div className="flex flex-col bg-gray-50 rounded-lg pt-4 pb-8 px-8 mt-4 shadow-lg w-full max-w-xl md:max-w-2xl text-slate-800">
      <h2 className="text-xl font-bold">{location.label}</h2>

      <div className="my-4">
        <p>Feels Like</p>
        <p className="text-6xl drop-shadow-2xl">
          {kelvinToCelcius(feels_like)}
        </p>
      </div>
      <div className="sm:flex justify-between divide-y divide-solid divide-slate-600 sm:divide-y-0 space-y-4 sm:space-y-0">
        <div className="flex flex-col flex-1 items-center divide-y divide-slate-600 divide-solid space-y-4">
          <div className="flex justify-between px-4 w-full space-x-4 pt-4">
            <p>High / Low</p>
            <p>
              {kelvinToCelcius(temp_max)} / {kelvinToCelcius(temp_min)}
            </p>
          </div>
          <div className="flex justify-between px-4 w-full space-x-4 pt-4">
            <p>Wind</p>
            <p>{windSpeed(wind)} km/h</p>
          </div>
          <div className="flex justify-between px-4 w-full space-x-4 pt-4">
            <p>Dew Point</p>
            <p>{dewPoint(feels_like, humidity)}°</p>
          </div>
        </div>
        <div className="flex flex-col flex-1 items-center divide-y divide-slate-600 divide-solid space-y-4">
          <div className="flex justify-between px-4 w-full space-x-4 pt-4">
            <p>Pressure</p>
            <p>{pressure} hPa</p>
          </div>
          <div className="flex justify-between px-4 w-full space-x-4 pt-4">
            <p>Humidity</p>
            <p>{humidity}%</p>
          </div>
          <div className="flex justify-between px-4 w-full space-x-4 pt-4">
            <p>Visibility</p>
            <p>{visibilityInKm(visibility)} km</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetail;
