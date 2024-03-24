import { useState } from 'react';
import styles from './MoviesPage.module.css';
import RenderList from '../common/components/render-list/RenderList';
import MoviesService from '../common/services/MoviesService';
import Numbering from '../common/components/Numbering';
import Loader from '../common/components/loader/Loader';
import Error from '../common/components/error/Error';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [term, setTerm] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [, setSearchParams] = useSearchParams();

  const handelChange = evt => {
    const input = evt.target.value;
    setTerm(input);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    setSearchParams({ query: term });

    async function getSearchResults() {
      const response = await MoviesService.getSearchResults(term);
      const result = response.data.results;
      Numbering(result);
      setMovieList(result);

      return result;
    }

    setIsLoading(true);

    getSearchResults()
      .catch(err => {
        console.log(err);
        setError(err.message);
      })
      .finally(setIsLoading(false));
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error.length > 0) {
    return <Error error={error} />;
  }

  return (
    <div className={styles.container}>
      <section className={styles.search}>
        <form className={styles.searchBar} onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              className={styles.searchInput}
              autoComplete="off"
              value={term}
              autoFocus
              placeholder="Search movies"
              onChange={handelChange}
            />
          </label>
          <button className={styles.searchBtn} type="submit">
            Search
          </button>
        </form>
      </section>
      <section className={styles.results}>
        <RenderList list={movieList} />
      </section>
    </div>
  );
};

export default MoviesPage;
