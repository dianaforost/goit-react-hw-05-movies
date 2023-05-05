import { Route, Routes } from 'react-router-dom';
// import css from '../styles.module.css';

import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { MovieDetails } from '../pages/MovieDetails/MovieDetails'
import { Cast } from './Cast/Cast'
import { Reviews } from "components/Reviews/Reviews";



export const App = () => {
  return (
    // <div>

      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home/>} />
          <Route path='movies' element={<Movies />}/>
          <Route path="movies/:id/*" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews/>}></Route>
          </Route>
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    // </div>
  );
};
