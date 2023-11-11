import DailyForecast from "./components/daily/DailyForecast";
import SearchBar from "./components/search/SearchBar";
import CurrentWeather from "./components/weather/CurrentWeather";

function App() {
  return (
  <section className="container mx-auto py-4 px-4 flex flex-col items-center">

      <SearchBar />
      <CurrentWeather />
      <DailyForecast />
  </section>
  );
}

export default App;
