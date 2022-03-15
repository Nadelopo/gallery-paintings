import { useState, useEffect } from "react";


export const useDetectOutsideClick = (el, initialState,ref) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const onClick = e => {
      
      if (el.current !== null && !el.current.contains(e.target)) {
        setIsActive(!isActive);

        // let g=el.current.classList[el.current.classList.length-1]
        // document.querySelector(`.${g}`).style.cssText=`border-radius: 8px; transition: 0.3s`
        
        ref.current.style.cssText=`border-radius: 8px; transition: 0.3s;`

      }
    };
      /* border: 1px solid rgba(255, 255, 255, 0.3); */
  /* border: 1px solid rgba(0, 0, 0, 0.3); */
    
    if (isActive) {
      window.addEventListener("click", onClick);  

      // let g=el.current.classList[el.current.classList.length-1]
      // document.querySelector(`.${g}`).style.cssText=`border-radius: 8px 8px 0 0; transition: 0.3s`
      ref.current.style.cssText=`border-radius: 8px 8px 0 0; transition: 0.3s`
     
      

    }

    return () => {
      window.removeEventListener("click", onClick);
      
    };
  }, [isActive, el,ref]);

  return [isActive, setIsActive];
};
