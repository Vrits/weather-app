const API_KEY = import.meta.env.VITE_API_KEY

export const geoApiUrl =
  "https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=100";
export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};
