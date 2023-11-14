import { WeeklyWeatherType } from "../../context/types";
import {
  dewPoint,
  kelvinToCelcius,
  visibilityInKm,
  windSpeed,
} from "../utils/weatherUtils";

const DailyForecastDetail: React.FC<WeeklyWeatherType> = (props) => {
  const {
    temp_max,
    temp_min,
    wind,
    feels_like,
    humidity,
    pressure,
    visibility,
  } = props;
  return (
    <div className="flex">
      <div className="flex justify-between w-full space-x-4">
        <div className="w-full flex-1 space-y-1 ">
          <div className="flex justify-between ">
            <p>High / Low</p>
            <p>
              {kelvinToCelcius(temp_max)} / {kelvinToCelcius(temp_min)}
            </p>
          </div>
          <div className="flex justify-between ">
            <p>Wind</p>
            <p>{windSpeed(wind)} km/h</p>
          </div>
          <div className="flex justify-between ">
            <p>Dew Point</p>
            <p>{dewPoint(feels_like, humidity)}°</p>
          </div>
        </div>
        <div className="w-full flex-1 space-y-1 ">
          <div className="flex justify-between ">
            <p>Pressure</p>
            <p>{pressure} hPa</p>
          </div>
          <div className="flex justify-between ">
            <p>Humidity</p>
            <p>{humidity}%</p>
          </div>
          <div className="flex justify-between ">
            <p>Visibility</p>
            <p>{visibilityInKm(visibility)} km</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyForecastDetail;
