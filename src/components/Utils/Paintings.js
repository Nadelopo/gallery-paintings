import { useEffect } from 'react';

// изменение количества элементов в зависимости от размера экрана
export const Width = (setLimit, width, setWidth) => {
  useEffect(() => {
    const updateDimensions = () => {
      setWidth(window.innerWidth);
    };
    if (width >= 1024) {
      setLimit(9);
    }
    if (width < 1024) {
      setLimit(8);
    }
    if (width < 768) {
      setLimit(6);
    }
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [width, setLimit, setWidth]);
};
