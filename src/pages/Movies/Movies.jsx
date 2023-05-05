// import { useState } from "react";
import { useSearchParams,NavLink, useLocation } from "react-router-dom";
import { getMoviesByQuery } from '../../components/api/api'
import { useState, useEffect } from "react";
import { SearchBar } from "components/SearchBar/SearchBar";
import css from 'styles.module.css'

export default function Movies(){
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get('query');
    const [movies, setMovies] = useState(null)
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
      if (!searchQuery) {
        return;
      }
        const fetchMovies = async () => {
          const movies = await getMoviesByQuery(searchQuery, currentPage);
          setMovies(movies);
          // console.log(movies);
        };
        fetchMovies()
      }, [searchQuery,currentPage]);



      function onSubmit(value) {
        if (value === '') {
          return;
        }
        if (value === ' ') {
          return;
        }
        setSearchParams({ query: value });
        setCurrentPage(1)
      }
      const handlePreviousPage = () => {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
      };
      
      const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
      };

    return <>
    <section className={css.MovieSection}>
      <div className={css.container}>
    <SearchBar onSubmit={onSubmit}/>
    <div className={css.MovieListContainer}>
    <ul className={css.TrendingMoviesList}>
    {movies && movies.results && movies.results.map(movie => (
  <li key={movie.id} className={css.MoviesListItem}>
    <NavLink className={css.MoviesListItemLink} to={`/movies/${movie.id}`} state={{ from: location }}>

    {movie.poster_path !== null ?(<img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={`${movie.original_title}`}></img>) : (<img className={css.NoImage} src={`https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png`} alt={`${movie.original_title}`}></img>)}
    <p className={css.HomeMovieLink}>{movie.original_title}</p></NavLink>
  </li>
))
}
</ul>
</div>
{movies && movies.total_pages !== 1 && (
      <div className={css.MoviesBtnContainer}>
        <button className={css.PrevBtn} disabled={currentPage === 1} onClick={handlePreviousPage}>
          Previous
        </button>
        <button className={css.NextBtn}
          disabled={currentPage === movies.total_pages}
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    )}
    </div>
    </section>
    </>
}