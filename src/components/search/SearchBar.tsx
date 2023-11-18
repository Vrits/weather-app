import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, geoApiUrl } from "../../api/api";
import { useWeather } from "../../context/useWeather";
import { CoordinateInfo } from "../../context/types";
// import { useState } from "react";

const SearchBar = () => {
  // const [search,setSearch] = useState('')
  const {
    changeLocation,
    //  location
  } = useWeather();

  type CityLocation = {
    city: string;
    country: string;
    region: string;
    latitude: number;
    longitude: number;
  };

  const loadOptions = async (inputValue: string) => {
    try {
      const response = await fetch(
        `${geoApiUrl}&namePrefix=${inputValue}`,
        geoApiOptions
      );
      const result = await response.text();

      const data = JSON.parse(result).data.map((e: CityLocation) => ({
        label: `${e.city}, ${e.region}, ${e.country}`,
        value: {
          latitude: e.latitude,
          longitude: e.longitude,
        },
      }));

      return {
        options: data,
        hasMore: false,
      };
    } catch (error) {
      console.error(error);

      return {
        options: [],
        hasMore: false,
      };
    }
  };

  const handleOnChange = (e: unknown | CoordinateInfo) => {
    changeLocation(e as CoordinateInfo);
    // setSearch(location.label)
  };

  return (
    <>
      <AsyncPaginate
        className="w-full max-w-5xl shadow-lg"
        debounceTimeout={600}
        placeholder="Search for a city"
        loadOptions={loadOptions}
        // value={search}
        onChange={handleOnChange}
      />
    </>
  );
};

export default SearchBar;
