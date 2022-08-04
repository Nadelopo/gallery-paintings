import { useState, useEffect } from 'react';

const useDetectOutsideClick = (el, initialState, ref) => {
  const refobg = ref;
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const onClick = (e) => {
      if (el.current !== null && !el.current.contains(e.target)) {
        setIsActive(!isActive);
        refobg.current.style.cssText = 'border-radius: 8px; transition:  background-color 300ms linear,border-radius 300ms';
      }
    };

    if (isActive) {
      window.addEventListener('click', onClick);
      refobg.current.style.cssText = 'border-radius: 8px 8px 0 0; transition:  background-color 300ms linear,border-radius 300ms';
    }

    return () => {
      window.removeEventListener('click', onClick);
    };
  }, [isActive, el, refobg]);

  return [isActive, setIsActive];
};

export default useDetectOutsideClick;
