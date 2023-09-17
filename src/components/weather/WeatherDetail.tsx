import { useWeather } from "../../context/useWeather";

const WeatherDetail = () => {
  const { location, weatherToday } = useWeather();
  const { temp_max, temp_min, feels_like, wind, humidity,pressure, visibility } = weatherToday;

  const kelvinToCelcius = (e: number | undefined) => {
    if (e) {
      return `${Math.round(e - 273.15)}°`;
    } else {
      return "";
    }
  };

  const windSpeed = (e: number | undefined) => {
    if (e) {
        const speed = e * 3600 / 1000 
        return speed.toFixed(1)
    } else {
      return 0;
    }
  };
  
  const dewPoint = (f: number | undefined,h: number | undefined) => {
    if (f && h) {
        const feels_likeCelcius = Math.round(f - 273.15)
        const result = feels_likeCelcius - ((100 - h) / 5)
        return result.toFixed(1)
    } else {
      return 0;
    }
  };
  
  const visibilityInKm = (e: number | undefined) => {
    if (e) {
        return (e / 1000).toFixed(1)
    } else {
      return 0;
    }
  };

  return (
    <div className="flex flex-col bg-white rounded-lg pt-4 pb-8 px-8 mt-4 shadow-lg w-full max-w-xl text-slate-800">
      <h2 className="text-xl font-bold">{location.label}</h2>

      <div className="my-4">
        <p>Feels Like</p>
        <p className="text-6xl drop-shadow-2xl">{kelvinToCelcius(feels_like)}</p>
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
          {/* <div className="flex justify-between px-4 w-full space-x-4 pt-4">
            <p>UV Index</p>
            <p>0 of 11</p>
          </div> */}
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
          {/* <div className="flex justify-between px-4 w-full space-x-4 pt-4">
            <p>Moon Phase</p>
            <p>Waning Gibbous</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default WeatherDetail;
