import axios from 'axios';

const endpoint = 'https://api.themoviedb.org/3';
axios.defaults.baseURL = endpoint;
const API_KEY = 'd5b1fa00344d722420179540213be4e9';

async function getTrendingMovies() {
  const response = await axios.get(
    `/trending/movie/day?api_key=${API_KEY}&language=en-US`
  );

  return response;
}

async function getSearchResults(term) {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${term}&include_adult=false&language=en-US&page=1`
  );

  return response;
}

async function getMovieDetails(id) {
  const response = await axios.get(
    `/movie/${id}?api_key=${API_KEY}&language=en-US`
  );

  return response;
}

async function getActors(id) {
  const response = await axios.get(
    `/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );

  return response;
}

async function getReviews(id) {
  const response = await axios.get(
    `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );

  return response;
}

const MoviesService = {
  getTrendingMovies,
  getSearchResults,
  getMovieDetails,
  getActors,
  getReviews,
};

export default MoviesService;
