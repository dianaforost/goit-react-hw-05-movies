import { useState, useEffect } from "react"
import { getMoviesReviews } from '../api/api';
import css from 'styles.module.css'
import propTypes from 'prop-types';

export const Reviews = ({movie}) =>{
const [reviews, setReview] = useState([]);
useEffect(() => {
    const getMovies = async() =>{
        const reviews = await getMoviesReviews(movie.id);
        // console.log(reviews);
        setReview(reviews)
    }
    getMovies()
}, [movie.id]);
return <ul className={css.ReviewsList}>
{reviews.length > 1 ?(reviews.map(review => (<li key={review.id}><h4>Author: {review.author}</h4><p>{review.content}</p></li>))) : (<p>We're sorry, but there are no reviews yet.</p>)}
</ul>
}
Reviews.propTypes ={
    movie: propTypes.object
}