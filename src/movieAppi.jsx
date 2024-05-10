import axios from "axios";

const API_KEY = "5a79f526ca82e731fc82d492019e4cc5";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
const options = {
  params: {
    api_key: API_KEY,
    language: "en-US",
  },
};

export const requestMovie = async () => {
  const response = await axios.get("/trending/movie/day", options);
  return response;
};
