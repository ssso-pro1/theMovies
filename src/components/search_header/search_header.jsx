import React, { useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef();

  const onClick = () => {
    handleSearch();
  };

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
    // console.log(value);
  };

  const onKeyUp = event => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.nav}>
        <h2 className={styles.logo}>The Ssovies</h2>
      </div>
      <div className={styles.inputDiv}>
        <input //
          className={styles.input}
          ref={inputRef}
          type='search'
          name='search'
          placeholder='search..'
          onKeyUp={onKeyUp}
        />
        <button className={styles.button} type='submit' onClick={onClick}>
          <img className={styles.buttonImg} src='/images/search.png' alt='search' />
        </button>
      </div>
    </header>
  );
};

export default SearchHeader;
