import React, { useState } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Article from './components/Article';
import Aside from './components/Aside';
import Footer from './components/Footer';
import './App.css';

const content = {
ru: {
  langLabel: 'EN',
  title: 'Инженерно-геодезические изыскания',
  subtitle: 'Гидрометеорологические изыскания и расчёты под проектирование и экспертизу',
  works: 'Наши работы',
  sections: 'Разделы сайта',
  menu: [
    ['main', 'Главная', 'Важная информация о компании'],
    ['news', 'Новости', 'Последние новости компании'],
    ['about', 'Об авторе', 'Информация о создателе проекта'],
    ['feedback', 'Обратная связь', 'Напишите нам'],
    ['products', 'Продукты и услуги', 'Каталог предложений']
  ],
  news: [
    {
      title: 'Создание сайта компании и функции сайта',
      date: '28.05.2024',
      text: 'В связи с расширением запросов на услуги компании, было принято решение о создании сайта и горячей линии...'
    },
    {
      title: 'Изменение версии сайта',
      date: '29.05.2024',
      text: 'Что изменилось? И какие функции стали доступны? ...'
    }
  ],
  about: {
    title: 'Об авторе',
    subtitle: 'Информация о создателях проекта',
    content: [
      'Меня зовут Владислав Новиков, я гидрометеоролог с 10‑летним опытом.',
      'Специализируюсь на гидрометеорологических изысканиях и расчётах под проектирование.',
      'Меня зовут Маргарита Юфименко,  я инженер-гидролог с 15-летним опытом.',
      'Специализируюсь на гидрогеодезических изысканиях и расчётах под проектирование.'
    ]
  },
  feedback: {
    title: 'Обратная связь',
    subtitle: 'Напишите нам',
    contacts: [
      'Новиков Владислав (гидрометеоролог)',
      'Email: vnovi@sfedu.ru',
      'Телефон: +7 (918) 159-64-93',
      'Адрес: г. Ростов-на-Дону, ул. Зорге, д. 40',
      'Юфименко Маргарита (инженер-гидролог)',
      'Email: Iufimenko@sfedu.ru',
      'Телефон: +7 (961) 437-47-67',
      'Адрес: г. Ростов-на-Дону, ул. Зорге, д. 40'
    ],
    form: 'Форма обратной связи будет здесь'
  },
  products: {
    title: 'Продукты и услуги',
    subtitle: 'Каталог предложений',
    services: [
      '1. БАЗОВЫЕ ГИДРОМЕТЕОРОЛОГИЧЕСКИЕ ИЗЫСКАНИЯ',
      'Гидрометеорологические изыскания для линейных объектов от 120 000 ₽',
      'Гидрометеорологические изыскания для площадных объектов от 150 000 ₽',
      'Изыскания для ИЖС / небольших объектов от 45 000 ₽',
      'Изыскания для коммерческих объектов от 180 000 ₽',
      'Изыскания для промышленного объекта от 250 000 ₽',
      '2. ГИДРОЛОГИЧЕСКИЕ РАСЧЁТЫ',
      'Расчёт максимальных расходов воды от 25 000 ₽',
      'Расчёт уровней воды от 20 000 ₽',
      'Расчёт зон подтопления от 35 000 ₽',
      'Расчёт русловых процессов от 40 000 ₽',
      'Определение границ водоохранных зон от 30 000 ₽',
      'Расчёт ледового режима от 25 000 ₽',
      'Расчёт дождевых стоков от 20 000 ₽',
      '3. МЕТЕОРОЛОГИЧЕСКИЕ РАСЧЁТЫ',
      'Климатическая характеристика территории от 18 000 ₽',
      'Расчёт ветровых нагрузок от 15 000 ₽',
      'Анализ снеговых нагрузок от 15 000 ₽',
      'Анализ опасных природных явлений от 25 000 ₽',
      'Подготовка климатических справок от 10 000 ₽',
      '4. СПЕЦИАЛЬНЫЕ РАБОТЫ',
      'Разработка программы наблюдений от 20 000 ₽',
      'Полевые гидрологические обследования от 50 000 ₽',
      'Обследование водных объектов от 45 000 ₽',
      'Гидрометрические работы от 60 000 ₽',
      'Организация временного гидропоста от 80 000 ₽',
      '5. ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ',
      'Срочное выполнение работ +30–50%',
      'Корректировка существующего отчёта от 20 000 ₽',
      'Сопровождение экспертизы от 35 000 ₽',
      'Выезд специалиста индивидуально/Консультация специалиста от 5 000 ₽'
    ]
  },  
  paragraphs: [
    'Подготавливаем гидрометеорологические изыскания, гидрологические и климатические расчёты для строительства, проектирования, согласований и прохождения экспертизы.',
    'Работаем с ИЖС, коммерческими, промышленными, линейными и площадными объектами. Подключаемся к срочным и сложным задачам: подтопление, водоохранные зоны, русловые процессы, замечания экспертизы.'
  ],
    processTitle: 'Как проходит работа',
    process: [
      'Получаем адрес объекта, техническое задание, проектную документацию и требования экспертизы.',
      'Оцениваем объём работ, сроки, состав документов и готовим коммерческое предложение.',
      'Выполняем расчёты, обследования, анализ территории и подготовку отчётной документации.',
      'При необходимости сопровождаем экспертизу, корректируем документы и закрываем замечания.'
    ],
    priceTitle: 'От чего зависит цена',
    price: ['Площадь и сложность объекта', 'Наличие водных объектов', 'Удалённость территории', 'Необходимость полевых работ', 'Срочность выполнения', 'Требования экспертизы'],
    footer: '© 2026 Все права защищены'
  },
  en: {
    langLabel: 'RU',
    title: 'Engineering and Geodetic Surveys',
    subtitle: 'Hydrometeorological surveys and calculations for design and expert review',
    works: 'Our work',
    sections: 'Site sections',
    menu: [
      ['main', 'Main', 'Important information about the company'],
      ['news', 'News', 'Company updates'],
      ['about', 'About', 'Information about the project author'],
      ['feedback', 'Feedback', 'Contact us'],
      ['products', 'Services', 'Catalogue of offers']
    ],
    news: [
    {
      title: 'Creation of the company`s website and website functions',
      date: '28.05.2024',
      text: 'Due to the increasing demand for the company`s services, it was decided to create a website and a hotline...'
    },
    {
      title: 'Changing the website version',
      date: '29.05.2024',
      text: 'What has changed? And what features are now available? ...'
    }
  ],
  about: {
    title: 'About',
    subtitle: 'Information about the project author',
    content: [
      'My name is Vladislav Novikov, and I am a hydrometeorologist with 10 years of experience.',
      'I specialize in hydrometeorological surveys and design calculations.',
      'My name is Margarita Yufimenko, and I am a hydrologist with 15 years of experience.',
      'I specialize in hydrogeodetic surveys and design calculations.'
    ]
  },
  feedback: {
    title: 'Feedback',
    subtitle: 'Contact us',
    contacts: [
      'Novikov Vladislav (hydrometeorologist)',
      'Email: vnovi@sfedu.ru',
      'Phone: +7 (918) 159-64-93',
      'Address: 40 Sorge Street, Rostov-on-Don',
      'Yufimenko Margarita (hydrologist engineer)',
      'Email: Iufimenko@sfedu.ru',
      'Phone: +7 (961) 437-47-67',
      'Address: 40 Sorge Street, Rostov-on-Don'
    ],
    form: 'Feedback form will be here'
  },
  products: {
    title: 'Services',
    subtitle: 'Catalogue of offers',
    services: [
      '1. BASIC HYDROMETEOROLOGICAL RESEARCH',
      'Hydro-meteorological research for linear objects from 120 000 ₽',
      'Hydro-meteorological research for area objects from 150 000 ₽',
      'Research for individual housing construction / small objects from 45 000 ₽',
      'Research for commercial objects from 180 000 ₽',
      ' изыскания для промышленного объекта от 250 000 ₽',
      '2. HYDROLOGICAL CALCULATIONS',
      'Calculation of maximum water flows from 25 000 ₽',
      'Calculation of water levels from 20 000 ₽',
      'Calculation of flood zones from 35 000 ₽',
      'Calculation of channel processes from 40 000 ₽',
      'Determination of the boundaries of water protection zones from 30,000 ₽',
      'Calculation of the ice regime from 25,000 ₽',
      'Calculation of rain runoff from 20,000 ₽',
      '3. METEOROLOGICAL CALCULATIONS',
      'Climate characteristics of the territory from 18,000 ₽',
      'Calculation of wind loads from 15,000 ₽',
      'Analysis of snow loads from 15,000 ₽',
      'Analysis of hazardous natural phenomena from 25,000 ₽',
      'Preparation of climate reports from 10,000 ₽',
      '4. SPECIAL WORKS',
      'Development of an observation program from 20,000 ₽',
      'Field hydrological surveys from 50,000 ₽',
      'Survey of water bodies from 45,000 ₽',
      'Hydrometric works from 60,000 ₽',
      'Organization of a temporary hydropost from 80,000 ₽',
      '5. ADDITIONAL SERVICES',
      'Urgent work +30–50%',
      'Adjustment of an existing report from 20,000 ₽',
      'Expertise support from 35,000 ₽',
      'Individual/Specialist consultation from 5,000 ₽'
    ]
  },  
    paragraphs: [
      'We prepare hydrometeorological surveys, hydrological and climate calculations for construction, design, approvals and expert review.',
      'We work with private housing, commercial, industrial, linear and site development projects. We handle urgent and complex tasks: flooding, water protection zones, channel processes and expert review comments.'
    ],
    processTitle: 'How the work is organised',
    process: [
      'We receive the site address, technical assignment, project documentation and expert review requirements.',
      'We estimate the scope of work, deadlines, document package and prepare a commercial proposal.',
      'We perform calculations, surveys, site analysis and prepare reporting documentation.',
      'If required, we support the expert review process, update documents and close comments.'
    ],
    priceTitle: 'What affects the price',
    price: ['Project area and complexity', 'Presence of water bodies', 'Site remoteness', 'Need for field work', 'Urgency', 'Expert review requirements'],
    footer: '© 2026 All rights reserved'
  }
};

function App() {
  const [language, setLanguage] = useState('ru');
  const [currentSection, setCurrentSection] = useState('main');

  const handleChangeSection = (sectionKey) => {
    setCurrentSection(sectionKey);
  };

  const handleToggleLanguage = () => {
    const newLanguage = language === 'ru' ? 'en' : 'ru';
    setLanguage(newLanguage);
    setCurrentSection('main'); // Сбрасываем секцию при смене языка
  };

  const data = content[language];

  return (
    <div className="app-container">
      <Header data={data} onToggleLanguage={handleToggleLanguage} />
      <main className="main-grid">
        <Section data={data} />
        <Article data={data} currentSection={currentSection} />
        <Aside data={data} onSectionChange={handleChangeSection} />
      </main>
      <Footer data={data} />
    </div>
  );
}

export default App;