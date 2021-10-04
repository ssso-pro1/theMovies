import React from 'react';
import MovieItem from '../movie_item/movie_item';
import styles from './movie_list.module.css';

const MovieList = ({ movies, onMovieClick }) => {
  return (
    <ul className={styles.movies}>
      {/* react오류 Cannot read properties of null (reading 'map') 
        app 에서 디테일 페이지로 넘어갈 때 movies 를 null로 만듦 (디테일만 뜨도록)
        해결 방법 -> movies가 있는 경우에만 map하도록 movies && 를 붙임
        */}
      {movies &&
        movies.map(movie => <MovieItem key={movie.id} movie={movie} onMovieClick={onMovieClick} />)}
      {/* } */}
    </ul>
  );
};

export default MovieList;
