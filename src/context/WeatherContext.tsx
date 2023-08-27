import { PropsWithChildren, createContext, useState } from "react";

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
    label: "",
    value: {
      latitude: undefined,
      longitude: undefined,
    },
  });

  const changeLocation = (locationInput: CoordinateInfo) => {
    setLocation(locationInput);
    console.log(locationInput)
  };

  const contextValue: WeatherContextType = {
    location,
    changeLocation,
  };

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
