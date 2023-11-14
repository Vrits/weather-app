import DailyForecast from "./components/daily/DailyForecast";
import SearchBar from "./components/search/SearchBar";
import WeatherToday from "./components/weather/WeatherToday";

function App() {
  return (
  <section className="container mx-auto py-4 px-4 flex flex-col items-center">

      <SearchBar />
      <WeatherToday />
      <DailyForecast />
  </section>
  );
}

export default App;
