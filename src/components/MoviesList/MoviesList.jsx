import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ movies, state }) => {
  const location = useLocation();

  return (
    <>
      {movies.map(({ id, original_title }) => (
        <ul key={id}>
          <li>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {original_title}
            </Link>
          </li>
        </ul>
      ))}
    </>
  );
};

export default MoviesList;
