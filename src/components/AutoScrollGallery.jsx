import React, { useRef, useEffect } from 'react';

function AutoScrollGallery({ images, scrollSpeed = 30 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Функция для прокрутки
    const scrollStep = () => {
      if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
        // Достигли конца — сбрасываем в начало
        container.scrollTop = 0;
      } else {
        // Прокручиваем на шаг
        container.scrollTop += 1;
      }
    };

    // Запускаем автоматическую прокрутку
    const intervalId = setInterval(scrollStep, scrollSpeed);

    // Очистка при размонтировании компонента
    return () => clearInterval(intervalId);
  }, [scrollSpeed]);

  return (
    <div
      ref={containerRef}
      style={{
        height: '300px',
        overflow: 'hidden',
        scrollBehavior: 'smooth'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index}`}
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              marginBottom: '10px'
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default AutoScrollGallery;
