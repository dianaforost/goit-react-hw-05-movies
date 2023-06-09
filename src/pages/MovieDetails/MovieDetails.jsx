import { getMoviesById } from "components/api/api";
import { NavLink, useParams,} from "react-router-dom";
import { useEffect, useState } from 'react';
import { PageHeadline } from "components/PageHeadLine/PageHeadline";
import { LinkToBack } from "components/LinkToBack/LinkToBack";
import { useLocation } from "react-router-dom";
import {  Route, Routes } from 'react-router-dom';
import { Cast } from "components/Cast/Cast";
import { Reviews } from "components/Reviews/Reviews";

import css from 'styles.module.css';

export default function MovieDetails (){
    const [movie, setMovie] = useState(null);
    const {id} = useParams();
    const location = useLocation();
    let locationValue = location.state;
    if (location.state) {
      locationValue = location.state.from;
    }
    const [from, setFrom] = useState(location.state?.from ?? "/");

let activeClassName = {
    color: 'rgb(191 0 0)',
  };

    useEffect(() => {
        getMoviesById(id).then(movie => setMovie(movie)).catch(error => {
            console.log(error);
          })
      }, [id]);

      return <section className={css.MovieDetailsSection}>
      <LinkToBack to={from} setFrom={setFrom} locationValue={locationValue}></LinkToBack>
      <div className={css.container}>
      {movie ?(<PageHeadline text={movie.original_title}/>) :(<h1>Sorry, we don't have that movie</h1>)}
      
      {movie ?(<>
      <div className={css.MovieDetailsContainer}>
        {movie.poster_path !== null ?(<img className={css.MovieDetailsImage} src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={`${movie.original_title}`}></img>) : (<img className={css.NoImage} src={`https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png`} alt={`${movie.original_title}`}></img>)}
        <div className={css.ss}>
        <h2>Release Date: {movie.release_date === '' ?(<p>There is no information about it</p>) : (<p>{movie.release_date}</p>)}</h2>
        <h3>User Score: {movie.popularity === null ?(<p>There is no information about it</p>) : (<p>{movie.popularity}</p>)}</h3>
        <h3>Overview</h3>
        {movie.overview === '' ?(<p>There is no information about it</p>) : (<p className={css.MovieDetailsOverview}>{movie.overview}</p>)}
        <h3>Genres</h3>
        {movie.genres.length === 0 ?(<p>There is no information about it</p>) : (<p className={css.MovieDetailsOverview}>{movie.genres.map(genre => genre.name).join(' ')}</p>)}
    </div>
        </div>
        
        <h3>Additional Information</h3>
        <ul className={css.MovieDetailsList}>
            <li>
                <NavLink to={`/movies/${id}/cast`} className={css.CastBtn} style={({ isActive }) => (isActive ? activeClassName : undefined)}>Cast</NavLink>
            </li>
            <li>
            <NavLink to={`/movies/${id}/reviews`} className={css.ReviewsBtn} style={({ isActive }) => (isActive ? activeClassName : undefined)}>Reviews</NavLink>
            </li>
        </ul>
        </>
        ) :(null)}
   
    <Routes>
        <Route path="cast" element={<Cast movie={movie}/>} />
        <Route path="reviews" element={<Reviews movie={movie}/>}></Route>
      </Routes>
      </div>
      </section>}