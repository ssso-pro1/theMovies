import { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import MovieList from './components/movie_list/movie_list';
import MovieDetail from './components/movie_detail/movie_detail';

function App({ movie }) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null); //// null

  const selectMovie = movie => {
    setMovies(null); //movie 선택 시 movies null로
    setSelectedMovie(movie);
  };

  const search = query => {
    setSelectedMovie(null);
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
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      {selectedMovie && <MovieDetail movie={selectedMovie} />}
      <MovieList movies={movies} onMovieClick={selectMovie} />
    </div>
  );
}

export default App;
