const GEO_API_KEY = import.meta.env.VITE_GEO_API_KEY;
export const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY

export const geoApiUrl =
  "https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=100";
export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": GEO_API_KEY,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const weatherApiUrl = "https://api.openweathermap.org/data/2.5/"
