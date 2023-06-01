import axios from 'axios';

const API_KEY = '57e1b59327fa5f75a2550cb581fcbe1f';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const params = {
  api_key: `${API_KEY}`,
  language: 'en-US',
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`/trending/movie/day?`, { params });
  return response.data.results;
};

export const fetchDetailsMovie = async id => {
  const response = await axios.get(`/movie/${id}?`, { params });
  return response.data;
};

export const fetchCast = async id => {
  const response = await axios.get(`/movie/${id}/credits?`, { params });
  return response.data.cast;
};

export const fetchReviews = async id => {
  const response = await axios.get(`/movie/${id}/reviews?`, { params });

  return response.data.results;
};

export const fetchSearchMovie = async query => {
  const response = await axios.get(
    `/search/movie?query=${query}&include_adult=false&page=1`,
    { params }
  );
  return response.data.results;
};
