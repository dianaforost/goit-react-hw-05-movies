import propTypes from 'prop-types';
import axios from "axios";
const API_KEY = '42e9fa5f0127d7be790bf01016aed54e';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getMovies = async(page) =>{
    const movies = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US&&page=${page}`)
    // console.log(movies.data.results);
    return movies.data.results
}
export const getMoviesById = async (id) => {
    const movies = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`)
    // console.log(movies.data.find((movie) => movie.id === id));
    console.log(movies.data);
    return movies.data
  };
  export const getMoviesByQuery = async (query, page = 1) =>{
    const movies = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}`)
    // console.log(movies.data);
    return movies.data
  }
  export const getMoviesCredits = async (id) =>{
    const movies = await axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
    // console.log(movies.data.cast);
    return movies.data.cast
  }
  export const getMoviesReviews = async (id) =>{
    const movies = await axios.get(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`)
    // console.log(movies.data.results);
    return movies.data.results
  }
  getMovies.propTypes ={
    page: propTypes.number.isRequired
  }
  getMoviesById.propTypes ={
    id: propTypes.number.isRequired
  }
  getMoviesByQuery.propTypes ={
    query: propTypes.string.isRequired,
    page: propTypes.number.isRequired
  }
  getMoviesCredits.propTypes ={
    id: propTypes.number.isRequired
  }
  getMoviesReviews.propTypes ={
    id: propTypes.number.isRequired
  }