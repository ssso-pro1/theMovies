import React from 'react';
import styles from './movie_item.module.css';

const MovieItem = ({ movie }) => {
  return (
    <li className={styles.movie}>
      <img className={styles.image} src={movie.medium_cover_image} alt='video img' />
      <div className={styles.meta}>
        <p>{movie.title}</p>
        <p>{movie.year}</p>
        <p>{movie.ratings}</p>
      </div>
    </li>
  );
};

export default MovieItem;
