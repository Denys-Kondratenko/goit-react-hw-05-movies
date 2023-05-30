import { fetchReviews } from 'API';
import { Loader } from 'components/Loader/Loader';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState('');
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  const FetchAPI = useCallback(async () => {
    try {
      setError(false);
      setLoader(true);
      const fetchedReviews = await fetchReviews(movieId);

      if (fetchedReviews.length === 0) {
        throw new Error();
      }
      setReviews(fetchedReviews);
      setLoader(false);
    } catch (error) {
      setLoader(false);
      setError('No images');
    }
  }, [movieId]);

  useEffect(() => {
    FetchAPI();
  }, [FetchAPI]);

  return (
    <>
      {reviews !== '' && (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
      {loader && <Loader />}
      {error && <p>{error}</p>}
    </>
  );
};

export default Reviews;
