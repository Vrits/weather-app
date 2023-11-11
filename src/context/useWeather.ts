import { useContext } from "react";
import { WeatherContext } from "./WeatherContext";
import { WeatherContextType } from "./types";
export const useWeather = (): WeatherContextType => {
    const context = useContext(WeatherContext);
    if (!context) {
      throw new Error('useWeather must be used within a WeatherProvider');
    }
    return context;
  };

  