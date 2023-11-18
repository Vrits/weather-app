import { PropsWithChildren, createContext, useState, useEffect } from "react";
import { WEATHER_API_KEY, weatherApiUrl } from "../api/api";
import {
  CoordinateInfo,
  WeatherTodayType,
  WeeklyWeatherType,
  WeatherContextType,
  ForecastItemType,
} from "./types";

export const WeatherContext = createContext<WeatherContextType | undefined>(
  undefined
);

const WeatherProvider = ({ children }: PropsWithChildren) => {
  const [location, setLocation] = useState<CoordinateInfo>({
    label: "Banjarmasin City, South Kalimantan, Indonesia",
    value: {
      latitude: -3.314429472,
      longitude: 114.592253736,
    },
  });

  const [weatherToday, setWeatherToday] = useState<WeatherTodayType>({
    feels_like: undefined,
    weather: undefined,
    description: undefined,
    temp_max: undefined,
    temp_min: undefined,
    wind: undefined,
    humidity: undefined,
    pressure: undefined,
    visibility: undefined,
    weather_id: undefined,
    weather_icon: undefined,
  });

  const [weeklyWeather, setWeeklyWeather] = useState<WeeklyWeatherType[]>([
    {
      feels_like: undefined,
      weather: undefined,
      description: undefined,
      temp_max: undefined,
      temp_min: undefined,
      wind: undefined,
      humidity: undefined,
      pressure: undefined,
      visibility: undefined,
      weather_id: undefined,
      weather_icon: undefined,
      date: undefined,
    },
  ]);

  const fetchWeather = async (locationInput: CoordinateInfo) => {
    const { latitude, longitude } = locationInput.value;

    const currentWeatherFetch = fetch(
      `${weatherApiUrl}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`
    );
    const forecastFetch = fetch(
      `${weatherApiUrl}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (res) => {
        const weatherResponse = await res[0].json();
        const forecastResponse = await res[1].json();

        const updatedWeather: WeatherTodayType = {
          feels_like: weatherResponse.main.feels_like,
          temp_max: weatherResponse.main.temp_max,
          temp_min: weatherResponse.main.temp_min,
          weather: weatherResponse.weather[0].main,
          description: weatherResponse.weather[0].description,
          wind: weatherResponse.wind.speed,
          humidity: weatherResponse.main.humidity,
          pressure: weatherResponse.main.pressure,
          visibility: weatherResponse.visibility,
          weather_id: weatherResponse.weather[0].id,
          weather_icon: weatherResponse.weather[0].icon,
        };

        const updatedWeeklyWeather: WeeklyWeatherType[] =
          forecastResponse.list.map((e: ForecastItemType) => ({
            feels_like: e.main.feels_like,
            temp_max: e.main.temp_max,
            temp_min: e.main.temp_min,
            weather: e.weather[0].main,
            description: e.weather[0].description,
            wind: e.wind.speed,
            humidity: e.main.humidity,
            pressure: e.main.pressure,
            visibility: e.visibility,
            weather_id: e.weather[0].id,
            weather_icon: e.weather[0].icon,
            date: e.dt,
          }));

        setWeatherToday(updatedWeather);
        const weeklyIndex = [7, 15, 23, 31, 39];
        const newWeeklyWeather = updatedWeeklyWeather.filter((_, index) =>
          weeklyIndex.includes(index)
        );

        setWeeklyWeather(newWeeklyWeather);
      })
      .catch((err) => console.log(err));
  };

  const changeLocation = (locationInput: CoordinateInfo) => {
    setLocation(locationInput);
    fetchWeather(locationInput);
  };

  const contextValue: WeatherContextType = {
    location,
    weatherToday,
    changeLocation,
    weeklyWeather,
  };

  useEffect(() => {
    fetchWeather(location);
  }, []);

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
