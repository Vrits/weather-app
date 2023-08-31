import SearchBar from "./components/search/SearchBar";
import CurrentWeather from "./components/weather/CurrentWeather";

function App() {
  return (
  <section className="container mx-auto py-4 px-4">

      <SearchBar />
      <CurrentWeather />
  </section>
  );
}

export default App;
