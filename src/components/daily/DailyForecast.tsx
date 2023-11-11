import { Accordion } from "flowbite-react";
import { loadIcons } from "../../Images/images";
import { useEffect, useState } from "react";
import { useWeather } from "../../context/useWeather";

export default function DailyForecast() {
  const [iconSrc, setIConSrc] = useState("");

  const { weeklyWeather } = useWeather();

  const { weatherToday } = useWeather();
  const { weather_icon } = weatherToday;

  useEffect(() => {
    if (!weather_icon) return;

    const loadImageAsync = async () => {
      try {
        const icon = await loadIcons(weather_icon);
        setIConSrc(icon.default);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };

    loadImageAsync();
  }, [weather_icon]);

  // const date = new Date(1699573222 * 1000);
  // const day = date.getDay();
  const dayArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const getDateToday = (dateUnix: number | undefined) => {
    if (!dateUnix) {
      return;
    }
    const date = new Date(dateUnix * 1000);
    console.log(dateUnix)
    const day = date.getDay();
    return dayArray[day];
  };
  // console.log(dayArray[day]);

  return (
    <Accordion className="max-w-xl w-full mt-4 shadow-lg flex flex-col overflow-hidden">
      {weeklyWeather.map((e) => (
        <Accordion.Panel key={crypto.randomUUID()}>
          <Accordion.Title className="transition-colors bg-gray-50 hover:bg-gray-200 py-2 px-4">
            <div className="flex items-center">
              <img
                src={iconSrc}
                alt={`${iconSrc}`}
                className=" drop-shadow-[2px_2px_3px_#000000] w-16"
              />
              <div>{getDateToday(e.date)}</div>
            </div>
          </Accordion.Title>
          <Accordion.Content className="bg-gray-100 px-8 ">
            <div className="flex">
              <div className="flex justify-between w-full space-x-4">
                <div className="w-full flex-1 space-y-1 ">
                  <div className="flex justify-between ">
                    <p>High / Low</p>
                    <p>17°</p>
                  </div>
                  <div className="flex justify-between ">
                    <p>Wind</p>
                    <p>3.8 km/h</p>
                  </div>
                  <div className="flex justify-between ">
                    <p>Dew Point</p>
                    <p>-2.6</p>
                  </div>
                </div>
                <div className="w-full flex-1 space-y-1 ">
                  <div className="flex justify-between ">
                    <p>Pressure</p>
                    <p>1015hPa</p>
                  </div>
                  <div className="flex justify-between ">
                    <p>Humidity</p>
                    <p>67%</p>
                  </div>
                  <div className="flex justify-between ">
                    <p>Visibility</p>
                    <p>10.0km</p>
                  </div>
                </div>
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
      ))}
    </Accordion>
  );
}
