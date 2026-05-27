import React from 'react';
import logo from '../images/логотип_изысканий.png';
import './Section.css';
import AutoScrollGallery from './AutoScrollGallery';

// Импортируем изображения
import image1 from '../images/гидро.jpg';
import image2 from '../images/метео.jpg';
import image3 from '../images/теодолит.webp';
import image4 from '../images/погода.jpg';

const images = [image1, image2, image3, image4];

function Section() {
  return (
    <div className="section-container">
      <img
        className="section-logo"
        src={logo}
        alt="Логотип"
      />
      <div className="section-text">
        <a
          href="../pages_en/index_en.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          English
        </a>
      </div>
      {/* Галерея под логотипом и ссылкой */}
      <AutoScrollGallery
        images={images}
        scrollSpeed={30}
      />
    </div>
  );
}

export default Section;
