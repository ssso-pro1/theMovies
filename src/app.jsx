import { useEffect, useState } from 'react';
import './app.css';
// import Movie from './service/movie';
import MovieList from './components/movie_list/movie_list';
import SearchHeader from './components/search_header/search_header';

function App({ movie }) {
  const [movies, setMovies] = useState([]);

  const search = query => {
    movie //
      .search(query)
      .then(movies => setMovies(movies));
  };

  useEffect(() => {
    movie //
      .mostRecent()
      .then(movies => setMovies(movies));
  }, [movie]);

  return (
    <div>
      <SearchHeader onSearch={search} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
