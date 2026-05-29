import React from 'react';
import logo from '../images/логотип_изысканий.png';
import './Section.css';
import AutoScrollGallery from './AutoScrollGallery';

import image1 from '../images/гидро.jpg';
import image2 from '../images/метео.jpg';
import image3 from '../images/теодолит.webp';
import image4 from '../images/погода.jpg';

const images = [image1, image2, image3, image4];

function Section({ data }) {
  return (
    <section className="section-container">
      <img className="section-logo" src={logo} alt="Логотип компании" />
      <h3>{data.works}</h3>
      <AutoScrollGallery images={images} scrollSpeed={18} />
    </section>
  );
}

export default Section;
