import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SharedLayout from './pages/shared-layout/SharedLayout';
import { lazy } from 'react';

// import HomePage from './pages/home/HomePage';
// import MoviesPage from './pages/movies/MoviesPage';
// import MovieDetails from './pages/movies/movie/MovieDetails';
// import Cast from './pages/movies/movie/components/cast/Cast';
// import Reviews from './pages/movies/movie/components/reviews/Reviews';

const HomePage = lazy(() => import('./pages/home/HomePage'));
const MoviesPage = lazy(() => import('./pages/movies/MoviesPage'));
const MovieDetails = lazy(() => import('./pages/movies/movie/MovieDetails'));
const Cast = lazy(() => import('./pages/movies/movie/components/cast/Cast'));
const Reviews = lazy(() =>
  import('./pages/movies/movie/components/reviews/Reviews')
);

const App = () => {
  return (
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
