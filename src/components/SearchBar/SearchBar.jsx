import { useState } from "react";
import css from 'styles.module.css';
import propTypes from 'prop-types';

export function SearchBar({onSubmit}){
    const [query, setquery] = useState('');
    const handleChange = (e) =>{
        const {value} = e.target;
        setquery(value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        onSubmit(query);
    }
    return <>
    <h1 className={css.MovieSearchTitle}>Movies Search</h1>
    <form className={css.SearchBarForm} onSubmit={handleSubmit}>
    <input
    name='query'
      className={css.SearchFormInput}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search movies"
      onChange={handleChange}
      value={query}
    />
    <button className={css.SearchFormBtn} type="submit" >
      <span >Search</span>
    </button>
  </form>
    </>
}
SearchBar.propTypes ={
  onSubmit: propTypes.func.isRequired
}