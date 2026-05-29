import React from 'react';
import './Header.css';

function Header({ data, onToggleLanguage }) {
  return (
    <header className="header-container">
      <div>
        <h1>{data.title}</h1>
        <p>{data.subtitle}</p>
      </div>
      <button className="language-button" onClick={onToggleLanguage} type="button">
        {data.langLabel}
      </button>
    </header>
  );
}

export default Header;
