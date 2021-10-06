import React, { useState, useEffect } from 'react';
import './dark-theme.css';
import './light-theme.css';
import './index.css';

// localStorage, useState
const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark' ? true : false);

  useEffect(() => {
    document
      .getElementsByTagName('html')[0]
      .setAttribute('data-theme', localStorage.getItem('theme'));
  }, []);

  const toggleThemeChange = () => {
    if (darkMode === false) {
      localStorage.setItem('theme', 'dark');
      document
        .getElementsByTagName('html')[0]
        .setAttribute('data-theme', localStorage.getItem('theme'));
      setDarkMode(true);
    } else {
      localStorage.setItem('theme', 'light');
      document
        .getElementsByTagName('html')[0]
        .setAttribute('data-theme', localStorage.getItem('theme'));
      setDarkMode(false);
    }
  };

  return (
    <label className='switch'>
      <input //
        type='checkbox' //
        defaultChecked={darkMode} //
        onClick={() => toggleThemeChange()} //
      />
      <span className='slider round' />
    </label>
  );
};

export default DarkModeToggle;
