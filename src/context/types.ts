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
    description: string | undefined;
    temp_max: number | undefined;
    temp_min: number | undefined;
    wind: number | undefined;
    humidity: number | undefined;
    pressure: number | undefined;
    visibility: number | undefined;
    weather_id: number | undefined;
    weather_icon: string | undefined;
  };
  
  export type WeeklyWeatherType = WeatherTodayType & {
    date: number | undefined
  };
  
  export type WeatherContextType = {
    location: CoordinateInfo;
    weatherToday: WeatherTodayType;
    changeLocation: (locationInput: CoordinateInfo) => void;
    weeklyWeather: WeeklyWeatherType[];
  };
  
  export type ForecastItemType = {
    main: {
      feels_like: number | undefined;
      temp_max: number | undefined;
      temp_min: number | undefined;
      humidity: number | undefined;
      pressure: number | undefined;
    };
    weather: {
      main: string | undefined;
      description: string | undefined;
      id: number | undefined;
      icon: string | undefined;
    }[];
    wind: {
      speed: number | undefined;
    };
    visibility: number | undefined;
    dt: number | undefined;
  };