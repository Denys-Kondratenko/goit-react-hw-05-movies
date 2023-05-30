import { fetchSearchMovie } from 'API';
import { Loader } from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import Searchbar from 'components/Searchbar/Searchbar';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  const handleFormSubmit = e => {
    e.preventDefault();

    if (search === '') {
      alert('Please enter movie name');
      return;
    }

    setSearchParams({ search: e.target.elements.search.value });
    e.target.reset();
  };

  useEffect(() => {
    if (!search) return;

    const getMovies = async query => {
      try {
        setError(false);
        setLoader(true);
        const fetchedSearchMovie = await fetchSearchMovie(query);

        if (fetchedSearchMovie.length === 0) {
          throw new Error();
        }

        setMovies([...fetchedSearchMovie]);
      } catch (error) {
        setError('No images');
      } finally {
        setLoader(false);
      }
    };

    getMovies(search);
  }, [search]);

  return (
    <div>
      <Searchbar onSubmit={handleFormSubmit} />
      <MoviesList movies={movies} />
      {loader && <Loader />}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Movies;
