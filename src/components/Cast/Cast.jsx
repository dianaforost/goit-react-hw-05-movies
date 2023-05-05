import { getMoviesCredits } from '../api/api';
import { useEffect } from 'react';
import { useState } from 'react';
import css from 'styles.module.css';
import propTypes from 'prop-types';

export function Cast ({movie}){
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

Cast.propTypes ={
    movie: propTypes.object
}