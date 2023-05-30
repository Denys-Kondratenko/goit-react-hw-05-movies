const Searchbar = ({ onSubmit }) => {
  return (
    <form action="" onSubmit={onSubmit}>
      <input
        type="text"
        name="search"
        placeholder="Search movie"
        autoFocus
        autoComplete="off"
      />
      <button type="submit" aria-label="Search movies">
        Search
      </button>
    </form>
  );
};

export default Searchbar;
