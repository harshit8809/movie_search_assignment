import axios from 'axios';

export const API_URL = 'https://www.omdbapi.com/';
export const API_KEY = 'd9f5fec6';

export const fetchMovie = async (title: string, year: string) => {
    // debugger
  const response = await axios.get(API_URL, {
    params: {
      t: title,
      y: year,
      apikey: API_KEY,
    },
  });
  console.log("fetchMovie ->",response);
  return response.data;
};