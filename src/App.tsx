import DailyForecast from "./components/daily/DailyForecast";
import SearchBar from "./components/search/SearchBar";
import WeatherToday from "./components/weather/WeatherToday";

function App() {
  return (
    <>
      <div className="flex w-full items-center justify-center mx-auto max-w-xl px-0 md:max-w-2xl lg:max-w-5xl lg:px-4 mt-4">
        <SearchBar />
      </div>
      <section className="container mx-auto py-4 px-4 flex flex-col lg:flex-row space-x-0 lg:space-x-4 items-center lg:items-start lg:max-w-5xl">
        <div className="max-w-xl w-full md:max-w-2xl">
          <WeatherToday />
        </div>
        <DailyForecast />
      </section>
    </>
  );
}

export default App;
