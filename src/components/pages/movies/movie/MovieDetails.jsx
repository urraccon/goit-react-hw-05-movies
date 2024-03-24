import Error from 'components/pages/common/components/error/Error';
import Loader from 'components/pages/common/components/loader/Loader';
import MoviesService from 'components/pages/common/services/MoviesService';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import styles from './MovieDetails.module.css';
import { FaArrowLeftLong } from 'react-icons/fa6';

const MovieDetails = () => {
  const [movieInfos, setMovieInfos] = useState({});
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [movieId, setMovieId] = useState('');
  const [imgSrc, setImgSrc] = useState('');
  const [prevPath, setPrevPath] = useState('');

  const pagePath = useLocation();

  useEffect(() => {
    let prevPage = pagePath.state?.from.pathname;
    let id = pagePath.pathname.split('/movies/').join('');

    if (/^\d+$/.test(id)) {
      setMovieId(id);
      setPrevPath(prevPage);
    } else {
      id = id.split('/')[0];
      prevPage = pagePath.pathname.split(`/${id}`)[0];
      setMovieId(id);
      setPrevPath(prevPage);
    }
  }, [pagePath]);

  useEffect(() => {
    if (movieId.toString().length > 0) {
      async function getMovieDetails() {
        const response = await MoviesService.getMovieDetails(movieId);
        const result = response.data;
        setMovieInfos(result);

        return result;
      }

      setIsLoading(true);

      getMovieDetails()
        .catch(err => {
          console.log(err);
          setError(err.message);
        })
        .finally(setIsLoading(false));
    }
  }, [movieId]);

  useEffect(() => {
    const posterPath = movieInfos.poster_path;
    const imageURL = `https://image.tmdb.org/t/p/original/${posterPath}`;
    setImgSrc(imageURL);
  }, [movieInfos]);

  if (error.length > 0) {
    return <Error error={error} />;
  }

  if (isLoading || Object.keys(movieInfos).length === 0) {
    return <Loader />;
  }

  return (
    <div className={styles.container}>
      <section className={styles.movieInfos}>
        <div className={styles.goBack}>
          <Link to={prevPath} className={styles.goBackBtn}>
            <FaArrowLeftLong />
            Go back
          </Link>
        </div>
        <div className={styles.infos}>
          <div className={styles.leftSide}>
            <img
              src={imgSrc}
              alt={`${movieInfos.title} poster`}
              className={styles.poster}
            />
          </div>
          <div className={styles.rightSide}>
            <div className={styles.mainInfos}>
              <h2 className={styles.title}>{movieInfos.title}</h2>
              <span className={styles.score}>
                User Score: <span>{Math.trunc(movieInfos.popularity)}%</span>
              </span>
            </div>
            <div className={styles.infoBox}>
              <h3 className={styles.infoType}>Overview</h3>
              <p className={styles.descr}>{movieInfos.overview}</p>
            </div>
            <div className={styles.infoBox}>
              <h3 className={styles.infoType}>Genres</h3>
              <ul className={styles.genersList}>
                {movieInfos.genres.map(genre => (
                  <li key={genre.id} className={styles.gener}>
                    {genre.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.moreInfoNav}>
        <div className={styles.nav}>
          <h4 className={styles.navTitle}>Additional information</h4>
          <div className={styles.navBtns}>
            <Link
              to={`/movies/${movieId}/cast`}
              className={styles.navBtn}
              state={{ from: pagePath }}
            >
              Cast
            </Link>
            <Link
              to={`/movies/${movieId}/reviews`}
              className={styles.navBtn}
              state={{ from: pagePath }}
            >
              Reviews
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.moreInfo}>
        <Outlet />
      </section>
    </div>
  );
};

export default MovieDetails;
