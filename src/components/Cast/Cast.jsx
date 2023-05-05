import { getMoviesCredits } from '../api/api';
import { useEffect } from 'react';
import { useState } from 'react';
import css from 'styles.module.css';

export const Cast = ({movie}) =>{
    // console.log(movie.id);
    const [cast, setCast] = useState([]);
    useEffect(() => {
        const getMovies = async() =>{
            const actors = await getMoviesCredits(movie.id);
            // console.log(actors);
            setCast(actors)
        }
        getMovies()
    }, [movie.id]);
    return <ul className={css.CastList}>
    {cast.map(actor => (<li key={actor.credit_id}>
        {actor.profile_path !== null ?(<img src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} alt={actor.original_name} />)  :(<img className={css.NoImage} src={`https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png`} alt='With no portrat' />)}

        <h4>{actor.original_name}</h4>
        <p>Character: {actor.character}</p>
        </li>))}
    </ul>
}

















// getMoviesCredits(movie.id).then(movie => console.log(movie)).catch(error => {
//     console.log(error);
//   })






    //   console.log(movie);
    // getMoviesCredits(movie.id)
    //   return <h1>{cast.id}</h1>
    // return <>
    // <img src={`https://image.tmdb.org/t/p/w300/${movie.cast.profile_path}`}></img>
    // </>
    // return <>
    // {movie.cast.map(mov => (<h1>${movie.name}</h1>))}
    // </>