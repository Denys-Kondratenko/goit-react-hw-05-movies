import axios from 'axios';

const API_KEY = '57e1b59327fa5f75a2550cb581fcbe1f';
axios.defaults.baseURL = 'https://api.themoviedb.org/';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(
    `/3/trending/movie/day?language=en-US&api_key=${API_KEY}`,
    {}
  );
  return response.data.results;
};

export const fetchDetailsMovie = async id => {
  const response = await axios.get(
    `/3/movie/${id}?language=en-US&api_key=${API_KEY}`,
    {}
  );
  return response.data;
};

export const fetchCast = async id => {
  const response = await axios.get(
    `/3/movie/${id}/credits?language=en-US&api_key=${API_KEY}`,
    {}
  );
  return response.data.cast;
};

export const fetchReviews = async id => {
  const response = await axios.get(
    `/3/movie/${id}/reviews?language=en-US&api_key=${API_KEY}`,
    {}
  );

  return response.data.results;
};

export const fetchSearchMovie = async query => {
  const response = await axios.get(
    `/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`,
    {}
  );
  return response.data.results;
};
