import React from 'react';
import styles from './movie_detail.module.css';

const MovieDetail = ({ movie }) => {
  const goToHome = event => {
    event.preventDefault();
    document.location.href = '/';
  };
  return (
    <>
      <span className={styles.arrow} onClick={goToHome}>
        <i class='fas fa-chevron-left'></i>
      </span>
      <section className={styles.container}>
        <div className={styles.detail}>
          <img className={styles.image} src={movie.large_cover_image} alt='video img' />
          <div className={styles.metadata}>
            <h1>{movie.title}</h1>
            <p className={styles.subData}>
              {movie.year} | {movie.runtime}min | {movie.genres}
            </p>
            <p>{movie.synopsis}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieDetail;
