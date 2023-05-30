import { fetchDetailsMovie } from 'API';
import { Loader } from 'components/Loader/Loader';
import { Suspense, useCallback, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState('');
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const FetchAPI = useCallback(async () => {
    try {
      setError(false);
      setLoader(true);
      const fetchedMovie = await fetchDetailsMovie(movieId);

      if (fetchedMovie.length === 0) {
        throw new Error();
      }
      setMovie(fetchedMovie);
      setLoader(false);
    } catch (error) {
      setLoader(false);
      setError('No images');
    }
  }, [movieId]);

  useEffect(() => {
    FetchAPI();
  }, [FetchAPI]);

  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
    id,
  } = movie;

  return (
    <>
      <Link to={backLinkHref}>Back to products</Link>

      {movie !== '' && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            alt={original_title}
          />
          <div>
            <h2>
              {original_title} ({release_date.slice(0, 4)})
            </h2>
            <p>User Score: {Math.round(vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h4>Genres</h4>
            <p>{genres.map(genr => genr.name).join(' ')}</p>
          </div>
          <div>
            <p>Additinal information</p>
            <ul>
              <li>
                <Link to={`/movies/${id}/cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`/movies/${id}/reviews`}>Reviews</Link>
              </li>
            </ul>
          </div>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      )}
      {loader && <Loader />}
      {error && <p>{error}</p>}
    </>
  );
};

export default MovieDetails;
