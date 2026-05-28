import React, { useRef, useEffect } from 'react';

function AutoScrollGallery({ images, scrollSpeed = 30 }) {
  const containerRef = useRef(null);
  const isResettingRef = useRef(false); // Флаг сброса позиции

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollStep = () => {
      // Если идёт сброс, не выполняем прокрутку
      if (isResettingRef.current) return;

      const { scrollTop, clientHeight, scrollHeight } = container;
      const scrollPosition = scrollTop + clientHeight;

      // Проверяем, достигли ли конца (с запасом для надёжности)
      if (scrollPosition >= scrollHeight - 5) {
        // Начинаем сброс с плавным переходом
        isResettingRef.current = true;
        container.style.transition = 'scroll-top 0.5s ease-in-out';
        container.scrollTop = 0;

        // Через 500 мс (время перехода) сбрасываем флаг и продолжаем прокрутку
        setTimeout(() => {
          isResettingRef.current = false;
          container.style.transition = ''; // Убираем переход для дальнейшей прокрутки
        }, 500);
      } else {
        // Прокручиваем на шаг (адаптируем шаг под скорость)
        const step = (2 * scrollSpeed) / 30;
        container.scrollTop += step;
      }
    };

    // Запускаем автоматическую прокрутку
    const intervalId = setInterval(scrollStep, 30);

    // Очистка при размонтировании компонента
    return () => clearInterval(intervalId);
  }, [scrollSpeed]);

  return (
    <div
      ref={containerRef}
      style={{
        height: '30vh',
        maxHeight: '400px',     // максимальная высота
        minHeight: '150px',   // минимальная высота
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
              height: 'auto',
              maxHeight: 'calc(30vh - 10px)', // ограничение с учётом margin
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
