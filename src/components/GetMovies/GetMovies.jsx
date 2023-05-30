import { fetchTrendingMovies } from 'API';
import { Loader } from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { useCallback, useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

const GetMovies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  const FetchAPI = useCallback(async () => {
    try {
      setError(false);
      setLoader(true);
      const fetchedMovies = await fetchTrendingMovies();
      if (fetchedMovies.length === 0) {
        throw new Error();
      }
      setMovies(fetchedMovies);
      setLoader(false);
    } catch (error) {
      setLoader(false);
      setError('No images');
    }
  }, []);

  useEffect(() => {
    FetchAPI();
  }, [FetchAPI]);

  return (
    <>
      <div>
        <MoviesList movies={movies} />
        {/* {movies.map(movie => (
          <ul key={movie.id}>
            <li>
              <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
            </li>
          </ul>
        ))} */}
      </div>
      {loader && <Loader />}
      {error && <p>{error}</p>}
    </>
  );
};

export default GetMovies;
