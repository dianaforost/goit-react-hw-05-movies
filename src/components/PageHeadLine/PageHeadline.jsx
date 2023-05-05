import css from 'styles.module.css'
import propTypes from 'prop-types';
export const PageHeadline = ({text}) =>{
    return <h1 className={css.MovieDetailsTitle}>{text}</h1>
}
PageHeadline.propTypes ={
    text : propTypes.string.isRequired
}