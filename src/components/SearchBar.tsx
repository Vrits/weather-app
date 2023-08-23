import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, geoApiUrl } from "../api/api";

const SearchBar = () => {
  const loadOptions = async (inputValue: string) => {
    try {
      const response = await fetch(
        `${geoApiUrl}&namePrefix=${inputValue}`,
        geoApiOptions
      );
      const result = await response.text();

      const data: [] = JSON.parse(result).data.map(
        (e: {
          city: string;
          countryCode: string;
          latitude: string;
          longitude: string;
        }) => ({
          label: `${e.city}, ${e.countryCode}`,
          value: {
            latitude: e.latitude,
            longitude: e.longitude,
          },
        })
      );

      console.log(data);

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

  return (
    <>
      <AsyncPaginate
        debounceTimeout={600}
        placeholder="Search for a city"
        loadOptions={loadOptions}
      />
    </>
  );
};

export default SearchBar;
