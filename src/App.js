import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Article from './components/Article';
import Aside from './components/Aside';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-grid">
        <Section />
        <Article />
        <Aside />
      </main>
      <Footer />
    </div>
  );
}

export default App;  // Только ОДНА такая строка в конце файла
