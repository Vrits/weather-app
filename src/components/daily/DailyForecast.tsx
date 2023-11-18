import { Accordion } from "flowbite-react";
import { loadIcons } from "../../Images/images";
import { useEffect, useState } from "react";
import { useWeather } from "../../context/useWeather";
import DailyForecastDetail from "./DailyForecastDetail";

export default function DailyForecast() {
  const [iconSrc, setIConSrc] = useState<string[]>([]);

  const { weeklyWeather } = useWeather();
  const { weatherToday } = useWeather();

  const { weather_icon } = weatherToday;

  const loadImageAsync = async () => {
    if (!weather_icon) return;
    const iconArray: string[] = [];
    for (let i = 0; i < weeklyWeather.length; i++) {
      if (weeklyWeather[i].weather_icon) {
        const newIcon = await loadIcons(weeklyWeather[i].weather_icon!);
        iconArray.push(newIcon.default);
      }
    }

    setIConSrc([...iconArray]);
  };

  useEffect(() => {
    loadImageAsync();
  }, [weeklyWeather]);

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
    const day = date.getDay();
    return dayArray[day];
  };
  return (
    <Accordion className="max-w-xl w-full md:max-w-2xl mt-4 lg:mt-2 shadow-lg flex flex-col overflow-hidden">
      {weeklyWeather.map((e, i) => {
        return (
          <Accordion.Panel key={crypto.randomUUID()}>
            <Accordion.Title className="transition-colors bg-gray-50 hover:bg-gray-200 py-2 px-4">
              <div className="flex items-center">
                <img
                  src={iconSrc[i]}
                  alt={`${e.weather_icon}`}
                  className=" drop-shadow-[2px_2px_3px_#000000] w-16"
                />
                <div>{getDateToday(e.date)}</div>
              </div>
            </Accordion.Title>
            <Accordion.Content className="bg-gray-100 px-8 ">
              <DailyForecastDetail {...e} />
            </Accordion.Content>
          </Accordion.Panel>
        );
      })}
    </Accordion>
  );
}
