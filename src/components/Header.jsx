import React from 'react';

const Header = ({ darkTheme, onToggleTheme }) => {
  return (
    <header className="header">
      <div className="logo-wrapper">
        <div className="logo">
          <i className="fa-solid fa-wand-magic-sparkles"></i>
        </div>
        <h1>AI Image Generator</h1>
      </div>
      <button className="theme-toggle" onClick={onToggleTheme}>
        <i className={darkTheme ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
      </button>
    </header>
  );
};

export default Header;

