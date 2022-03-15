import React, { useRef } from "react";

import { useDetectOutsideClick } from "./useDetectOutsideClick";


export default function Dropdown({authors,location,getAuthor,getLocation,name,reff}) {
  const dropdownRef = useRef(null);
 
  
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false,reff);
  const onClick = () => setIsActive(!isActive);

  const mord = (e) => {
      onClick()
    }

    const getAuthAll = () => {
      getAuthor('all')
      setIsActive(!isActive)
      reff.current.style.cssText=`border-radius: 8px; transition: 0.3s`
    }

    const getLocAll = () => {
      getLocation('all')
      setIsActive(!isActive)
      reff.current.style.cssText=`border-radius: 8px; transition: 0.3s`
    }

    const getAuth = (authorsId) => {
      getAuthor(authorsId)
      setIsActive(!isActive)
      reff.current.style.cssText=`border-radius: 8px; transition: 0.3s`
    }

    const getLoc = (locationId) => {
      getLocation(locationId)
      setIsActive(!isActive)
      reff.current.style.cssText=`border-radius: 8px; transition: 0.3s`
    }


  return (
    <div>
      <div className="menu-container">
        <div onClick={e => mord(e.target)} className='menu-trig'>
            <svg  width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.67861 1.8337L5.77064 5.68539C5.34503 6.10487 4.65497 6.10487 4.22936 5.68539L0.321394 1.8337C-0.365172 1.15702 0.121082 -8.3659e-08 1.09203 0L8.90797 6.73452e-07C9.87892 7.57113e-07 10.3652 1.15702 9.67861 1.8337Z"   fillOpacity="0.3"/>
            </svg>
        </div>
        
        
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li style={{marginTop: '20px'}} onClick={() => {name==='authors' ? getAuthAll() : getLocAll()}}>All</li>
            <div>
              {location?.map(location => <li key={location.id} onClick={() => getLoc(location.id)}><div>{location.location}</div></li> )}
            </div>
            <div>
              {authors?.map(authors => <li key={authors.id} onClick={() => getAuth(authors.id)}><div>{authors.name}</div></li> )}
            </div>
              
          </ul>

        </nav>
        
      </div>
    </div>
  );
}
