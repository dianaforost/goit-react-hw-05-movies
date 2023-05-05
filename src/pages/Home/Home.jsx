import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import {getMovies} from '../../components/api/api';
import css from 'styles.module.css';
import { SectionHero } from "components/SectionHero/SectionHero";

export const Home = () =>{

    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchTrendingMovies = async () => {
          const movies = await getMovies(currentPage);
          setMovies(movies);
        }

        fetchTrendingMovies()
      }, [currentPage]);


  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
    return <>
    <SectionHero/>
    <section className={css.HomePageSection}>
    <div className={css.container}>
    <h1 className={css.HomeTitle}>Trending today</h1>
    <ul className={css.TrendingMoviesList}>
        {movies.map(movie => (<li key={movie.id}>
            <NavLink to={`/movies/${movie.id}`} ><img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.original_title}></img><p className={css.HomeMovieLink}>{movie.original_title}</p></NavLink>
        </li>))}
    </ul>
    {movies && (
        <div className={css.HomeBtnCont}>
      <div className={css.container}>
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
      </div>
    )}
    </div>
    </section>
    </>
}