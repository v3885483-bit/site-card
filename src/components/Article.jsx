import React from 'react';
import './Article.css';

function Article({ data, currentSection }) {
  return (
    <article className="article-container">
      <div className="article-text">
        {currentSection === 'news' ? (
          <>
            <h2>Новости</h2>
            {data.news?.map((item, index) => (
              <div key={index} className="news-item">
                <h3>{item.title}</h3>
                <span className="date">{item.date}</span>
                <p>{item.text}</p>
              </div>
            ))}
          </>
        ) : currentSection === 'about' ? (
          <>
            <h2>{data.about.title}</h2>
            <h3>{data.about.subtitle}</h3>
            {data.about.content.map((text, index) => <p key={index}>{text}</p>)}
          </>
        ) : currentSection === 'feedback' ? (
          <>
            <h2>{data.feedback.title}</h2>
            <h3>{data.feedback.subtitle}</h3>
            <ul>
              {data.feedback.contacts.map((contact, index) => <li key={index}>{contact}</li>)}
            </ul>
            <div>{data.feedback.form}</div>
          </>
        ) : currentSection === 'products' ? (
          <>
            <h2>{data.products.title}</h2>
            <h3>{data.products.subtitle}</h3>
            <ul>
              {data.products.services.map((service, index) => <li key={index}>{service}</li>)}
            </ul>
          </>
        ) : (
          // Стандартный контент (главная страница)
          <>
            <h2>{data.subtitle}</h2>
            {data.paragraphs.map((text) => <p key={text}>{text}</p>)}
            <h3>{data.processTitle}</h3>
            <ol>
              {data.process.map((item) => <li key={item}>{item}</li>)}
            </ol>
            <h3>{data.priceTitle}</h3>
            <div className="price-grid">
              {data.price.map((item) => <span key={item}>{item}</span>)}
            </div>
          </>
        )}
      </div>
    </article>
  );
}

export default Article;
