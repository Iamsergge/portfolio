import React, { useEffect, useState } from 'react';
import { FaCog } from 'react-icons/fa';
import { BsMoon, BsSun } from 'react-icons/bs'; // Corrected import for BsSun
import ThemeItem from './ThemeItem'; // Assuming ThemeItem is defined in a separate file.
import { themes } from '../Data'; // Import themes from your data file.
import './theme.css';

const getStorageColor = () => {
  if (localStorage.getItem('color')) {
    return localStorage.getItem('color');
  }
  return 'hsl(19, 96%, 52%)'; // Default color if not found in localStorage
};

const Themes = () => {
  const [showSwitcher, setShowSwitcher] = useState(false);
  const [color, setColor] = useState(getStorageColor());
  const [theme, setTheme] = useState('light-theme');

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light-theme' ? 'dark-theme' : 'light-theme'));
  };

  useEffect(() => {
    document.documentElement.className = theme;
    document.documentElement.style.setProperty('--first-color', color);
    localStorage.setItem('color', color);
  }, [color, theme]);

  return (
    <div>
      <div className={`style__switcher ${showSwitcher ? 'show-switcher' : ''}`}>
        <div className='style__switcher-toggler' onClick={() => setShowSwitcher(!showSwitcher)}>
          <FaCog />
        </div>

        <div className='theme__toggler' onClick={() => toggleTheme()}>
          {theme === 'light-theme' ? <BsMoon /> : <BsSun />} {/* Fixed typo Bsun to BsSun */}
        </div>

        <h3 className='style__switcher-title'>Style switcher</h3>
        <div className='style__switcher-items'>
          {themes.map((theme, index) => {
            return <ThemeItem key={index} {...theme} changeColor={changeColor} />;
          })}
        </div>

        <div className='style__switcher-close' onClick={() => setShowSwitcher(!showSwitcher)}>
          &times;
        </div>
      </div>
    </div>
  );
};

export default Themes;
