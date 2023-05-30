import { fetchCast } from 'API';
import { Loader } from 'components/Loader/Loader';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState('');
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  const FetchAPI = useCallback(async () => {
    try {
      setError(false);
      setLoader(true);
      const fetchedCast = await fetchCast(movieId);

      if (fetchedCast.length === 0) {
        throw new Error();
      }
      setCast(fetchedCast);
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
      {cast !== '' && (
        <ul>
          {cast.map(({ id, profile_path, name, character }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : ''
                }
                alt={name}
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      )}
      {loader && <Loader />}
      {error && <p>{error}</p>}
    </>
  );
};

export default Cast;
