import React from 'react';
import logo from '../images/логотип_изысканий.png';
import './Section.css'; // Импорт стилей

function Section() {
  return (
    <div className="section-container">
      <img className="section-logo"
        src={logo}
        alt="Логотип"
      />
      <div className="section-text">Баннер, графическая информация</div>
    </div>
  );
}

export default Section;  // Обязательно!
