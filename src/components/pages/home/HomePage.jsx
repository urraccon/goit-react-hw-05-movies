import { useEffect, useState } from 'react';
import Error from '../common/components/error/Error';
import Loader from '../common/components/loader/Loader';
import MoviesService from '../common/services/MoviesService';
import styles from './HomePage.module.css';
import RenderList from '../common/components/render-list/RenderList';
import Numbering from '../common/components/Numbering';

const HomePage = () => {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function getMovieList() {
      const response = await MoviesService.getTrendingMovies();
      const result = response.data.results;
      Numbering(result);
      setMovieList(result);

      return result;
    }

    setIsLoading(true);

    getMovieList()
      .catch(err => {
        console.log(err.message);
        setError(err.message);
      })
      .finally(setIsLoading(false));
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error.length > 0) {
    // debugger;
    return <Error error={error} />;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Trending today</h2>
      <RenderList list={movieList} />
    </div>
  );
};

export default HomePage;
