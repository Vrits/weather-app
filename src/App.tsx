import SearchBar from "./components/SearchBar";
import { useWeather } from "./context/useWeather";

function App() {
  const { location } = useWeather();

  return (
    <>
      <SearchBar />

      <button
        onClick={() => {
          if (!location.value.latitude) return;
          console.log(location);
        }}
        style={{ fontSize: "2rem" }}
      >
        Test
      </button>
    </>
  );
}

export default App;
