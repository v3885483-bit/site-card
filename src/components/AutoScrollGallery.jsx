import React, { useRef, useEffect } from 'react';
import './AutoScrollGallery.css';

function AutoScrollGallery({ images, scrollSpeed = 18 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const intervalId = setInterval(() => {
      if (container.scrollTop + container.clientHeight >= container.scrollHeight - 2) {
        container.scrollTop = 0;
      } else {
        container.scrollTop += scrollSpeed / 20;
      }
    }, 30);

    return () => clearInterval(intervalId);
  }, [scrollSpeed]);

  return (
    <div ref={containerRef} className="gallery-scroll">
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Работа ${index + 1}`} />
      ))}
    </div>
  );
}

export default AutoScrollGallery;
