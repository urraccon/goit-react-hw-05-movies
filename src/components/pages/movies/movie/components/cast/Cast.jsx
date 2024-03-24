import { useEffect, useState } from 'react';
import styles from './Cast.module.css';
import { useLocation } from 'react-router-dom';
import Loader from 'components/pages/common/components/loader/Loader';
import Error from 'components/pages/common/components/error/Error';
import MoviesService from 'components/pages/common/services/MoviesService';

const Cast = () => {
  const [actorList, setActorList] = useState([]);
  const [movieId, setMovieId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const pathPage = useLocation();

  useEffect(() => {
    const id = pathPage.pathname
      .split('/movies/')
      .join('')
      .split('/cast')
      .join('');
    setMovieId(id);
  }, [pathPage]);

  useEffect(() => {
    async function getActors() {
      const response = await MoviesService.getActors(movieId);
      const result = response.data.cast;
      setActorList(result);
      console.log(result);

      return result;
    }

    if (movieId.length > 0) {
      setIsLoading(true);

      getActors()
        .catch(err => {
          console.log(err);
          setError(err.message);
        })
        .finally(setIsLoading(false));
    }
  }, [movieId]);

  function createImgURL(picPath) {
    return `https://image.tmdb.org/t/p/original/${picPath}`;
  }

  if (error.length > 0) {
    return <Error error={error} />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.cast}>
      <ul className={styles.actorList}>
        {actorList.map(actor => (
          <li className={styles.actor} key={actor.id}>
            <img
              src={createImgURL(actor.profile_path)}
              alt={`${actor.name}`}
              className={styles.profilePic}
            />
            <div className={styles.infos}>
              <h4 className={styles.name}>{actor.name}</h4>
              <span className={styles.character}>
                Character: <span>{actor.character}</span>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
