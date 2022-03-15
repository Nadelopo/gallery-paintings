import React, { useRef } from "react";
import "./DropDownCreate.css";
import { useDetectOutsideClick } from "./useDetectOutsideClick";



export default function DropdownCreate({changeDateFrom,changeDateBefore,clas,reff}) {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false,reff);
  const onClick = () => setIsActive(!isActive);

  const [dateFrom]=''
  const [dateBefore]=''



  return (
    <div>
      <div className="menu-container">
        <div onClick={onClick} className="menu-trig">
            <svg  width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.67861 1.8337L5.77064 5.68539C5.34503 6.10487 4.65497 6.10487 4.22936 5.68539L0.321394 1.8337C-0.365172 1.15702 0.121082 -8.3659e-08 1.09203 0L8.90797 6.73452e-07C9.87892 7.57113e-07 10.3652 1.15702 9.67861 1.8337Z"  fillOpacity="0.3"/>
            </svg>
        </div>
        
        
        <nav
          ref={dropdownRef}
          className={`menu crea ${isActive ? "active" : "inactive"} ${clas}`}
        >
         <div className="create">
           <div><input className="date dateFirst" type="number" min="0" value={dateFrom} onChange={e => changeDateFrom(e.target.value)} placeholder="from"/></div>
           <div className="beforeline"><div className="line"></div></div>
           <div><input className="date dateSecond" type="number" value={dateBefore} onChange={e => changeDateBefore(e.target.value)} placeholder="before"/></div>
          </div>

        </nav>
        
      </div>
    </div>
  );
}

