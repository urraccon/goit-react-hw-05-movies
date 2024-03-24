import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SharedLayout from './pages/shared-layout/SharedLayout';
import HomePage from './pages/home/HomePage';
import MoviesPage from './pages/movies/MoviesPage';
import MovieDetails from './pages/movies/movie/MovieDetails';
import Cast from './pages/movies/movie/components/cast/Cast';
import Reviews from './pages/movies/movie/components/reviews/Reviews';

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
