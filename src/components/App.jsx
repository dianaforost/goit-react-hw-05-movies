import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// import { SharedLayout } from './SharedLayout/SharedLayout';
// import { Home } from 'pages/Home/Home';
// import { Movies } from 'pages/Movies/Movies';
// import { MovieDetails } from '../pages/MovieDetails/MovieDetails'
// import { Cast } from './Cast/Cast'
// import { Reviews } from "components/Reviews/Reviews";

const Home = lazy(() => import('pages/Home/Home'));
const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const PageNotFound = lazy(() => import('components/PageNotFound/PageNotFound'));

export const App = () => {
  return (
<Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />}/>
          <Route path='movies' element={<Movies />}/>
          <Route path="movies/:id/*" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews/>}></Route>
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      </Suspense>
  );
};
