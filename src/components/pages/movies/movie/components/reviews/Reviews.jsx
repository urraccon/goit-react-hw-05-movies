import Error from 'components/pages/common/components/error/Error';
import Loader from 'components/pages/common/components/loader/Loader';
import MoviesService from 'components/pages/common/services/MoviesService';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Reviews.module.css';

const Reviews = () => {
  const [reviewList, setReviewList] = useState([]);
  const [movieId, setMovieId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const pagePath = useLocation();

  useEffect(() => {
    const id = pagePath.pathname
      .split('/movies/')
      .join('')
      .split('/reviews')
      .join('');
    setMovieId(id);
  }, [pagePath]);

  useEffect(() => {
    async function getReviews() {
      const response = await MoviesService.getReviews(movieId);
      const result = response.data.results;
      setReviewList(result);

      return result;
    }

    if (movieId.length > 0) {
      setIsLoading(true);

      getReviews()
        .catch(err => {
          console.log(err);
          setError(err.message);
        })
        .finally(setIsLoading(false));
    }
  }, [movieId]);

  if (reviewList.length === 0) {
    return (
      <div className={styles.reviews}>
        <span className={styles.noReview}>
          No review has been left for this movie yet
        </span>
      </div>
    );
  }

  if (error.length > 0) {
    return <Error error={error} />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.reviews}>
      <ul className={styles.reviewList}>
        {reviewList.map(review => (
          <li className={styles.review} key={review.id}>
            <h4 className={styles.author}>
              Author: <span>{review.author}</span>
            </h4>
            <p className={styles.content}>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
