import { PropsWithChildren, createContext, useState, useEffect } from "react";
import { WEATHER_API_KEY, weatherApiUrl } from "../api/api";

export type CoordinateInfo = {
  label: string;
  value: {
    latitude: number | undefined;
    longitude: number | undefined;
  };
};

export type WeatherTodayType = {
  feels_like: number | undefined;
  weather: string | undefined;
  temp_max: number | undefined;
  temp_min: number | undefined;
  wind: number | undefined;
  humidity: number | undefined;
  pressure: number | undefined;
  visibility: number | undefined;
};

export type WeatherContextType = {
  location: CoordinateInfo;
  weatherToday: WeatherTodayType;
  changeLocation: (locationInput: CoordinateInfo) => void;
};

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
    temp_max: undefined,
    temp_min: undefined,
    wind: undefined,
    humidity: undefined,
    pressure: undefined,
    visibility: undefined,

  });

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

        console.log(locationInput.label);
        // const weatherObject = weatherResponse.main;
        console.log(weatherResponse);
        console.log(weatherResponse.weather[0].main);
        const updatedWeather: WeatherTodayType = {
          feels_like: weatherResponse.main.feels_like,
          temp_max: weatherResponse.main.temp_max,
          temp_min: weatherResponse.main.temp_min,
          weather: weatherResponse.weather[0].main,
          wind: weatherResponse.wind.speed,
          humidity: weatherResponse.main.humidity,
          pressure: weatherResponse.main.pressure,
          visibility: weatherResponse.visibility,
          
        };
        setWeatherToday(updatedWeather);
        console.log(forecastResponse);
      })
      .catch((err) => console.log(err));
  };

  const changeLocation = (locationInput: CoordinateInfo) => {
    setLocation(locationInput);
    fetchWeather(locationInput);
    // console.log(locationInput)
  };

  const contextValue: WeatherContextType = {
    location,
    weatherToday,
    changeLocation,
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
