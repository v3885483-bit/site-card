import React from 'react';
import './Aside.css';

function Aside({ data, onSectionChange }) {
  const links = ['/main', '/news', '/about', '/contact', '/products'];

  return (
    <aside className="aside-container">
      <h3>{data.sections}</h3>
      <div className="aside-list">
        {data.menu.map(([key, title, description], index) => (
          <a
            href={links[index]}
            className="aside-card"
            key={key}
            onClick={(e) => {
              e.preventDefault();
              onSectionChange(key); // Передаём строковый ключ
            }}
          >
            <strong>{title}</strong>
            <span>{description}</span>
          </a>
        ))}
      </div>
    </aside>
  );
}

export default Aside;
