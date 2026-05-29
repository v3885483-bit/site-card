import React from 'react';
import './Footer.css';

function Footer({ data }) {
  return (
    <footer className="footer">
      <div className="footer-contacts">
        <a href="mailto:vnovi@sfedu.ru">vnovi@sfedu.ru</a>
        <a href="tel:+79181596493">+7 (918) 159-64-93</a>
      </div>
      <p>{data.footer}</p>
    </footer>
  );
}

export default Footer;
