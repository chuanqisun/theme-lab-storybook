import { useState, useEffect } from 'react';

export const useSlides = (total, interval = 3000) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (total && total > 1) {
      autoPlay();
      return () => clearInterval(intervalId);
    }
  }, [interval, total]);

  const autoPlay = () => {
    if (intervalId !== null) clearInterval(intervalId);
    const id = setInterval(() => showNext(), interval);
    setIntervalId(id);
  };

  const showNext = () => {
    setCurrentIndex(currentIndex => (currentIndex + 1) % total);
  };

  const showPrevious = () => {
    setCurrentIndex(currentIndex => (currentIndex + total - 1) % total);
  };

  const nextIndex = (currentIndex + 1) % total;
  const prevIndex = (currentIndex + total - 1) % total;

  return { currentIndex, showNext, showPrevious, nextIndex, prevIndex };
};
