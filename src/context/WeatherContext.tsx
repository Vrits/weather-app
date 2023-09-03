import { PropsWithChildren, createContext, useState } from "react";
import { WEATHER_API_KEY, weatherApiUrl } from "../api/api";

// type LocationType = {
//   latitude: number | undefined;
//   longitude: number | undefined;
// };

export type CoordinateInfo = {
  label: string;
  value: {
    latitude: number | undefined;
    longitude: number | undefined;
  };
};

export type WeatherContextType = {
  location: CoordinateInfo;
  changeLocation: (locationInput: CoordinateInfo) => void;
};

export const WeatherContext = createContext<WeatherContextType | undefined>(
  undefined
);

const WeatherProvider = ({ children }: PropsWithChildren) => {
  const [location, setLocation] = useState<CoordinateInfo>({
    label: "Banjarmasin City, ID",
    value: {
      latitude: -3.314429472,
      longitude: 114.592253736,
    },
  });

  const fetchWeather = async (locationInput: CoordinateInfo) => {
    // try {
    //   const response = await fetch(
    //     `${weatherApiUrl}/weather?lat=${locationInput.value.latitude}&lon=${locationInput.value.longitude}&appid=${WEATHER_API_KEY}`
    //   );
    //   const result = await response.text();

    //   console.log(result);
    // } catch (error) {
    //   console.error(error);
    // }

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

        console.log(locationInput.label)
        console.log(weatherResponse);
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
    changeLocation,
  };

  // useEffect(() => {
  //   fetchWeather();
  // }, [location]);

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
