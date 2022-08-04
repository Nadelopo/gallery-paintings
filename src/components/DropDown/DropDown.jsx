import React, { useRef } from 'react';
import DropS from './DropDown.module.sass';
import useDetectOutsideClick from './useDetectOutsideClick';
import { ReactComponent as ReactTick } from '../../icons/tick.svg';

export default function Dropdown({
  authors, location, getAuthor, getLocation, name, reff,
}) {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false, reff);
  const onClick = () => setIsActive(!isActive);

  const getAuth = (authorsId) => {
    getAuthor(authorsId);
    setIsActive(!isActive);
    const change = reff.current;
    change.style.cssText = 'border-radius: 8px; transition:  background-color 300ms linear,border-radius 300ms';
  };

  const getLoc = (locationId) => {
    getLocation(locationId);
    setIsActive(!isActive);
    const change = reff.current;
    change.style.cssText = 'border-radius: 8px; transition:  background-color 300ms linear,border-radius 300ms';
  };

  const getAll = (nam) => {
    setIsActive(!isActive);
    const change = reff.current;
    change.style.cssText = 'border-radius: 8px; transition:  background-color 300ms linear,border-radius 300ms';
    if (nam === 'authors') {
      getAuthor('all');
    } else {
      getLocation('all');
    }
  };

  return (
    <div>
      <div className={DropS.menu__container}>

        <div role="button" onClick={() => onClick()} className={DropS.menu_trig} onKeyPress={() => onClick()} tabIndex="0">
          <ReactTick width="10px" height="6px" />
        </div>

        <nav
          ref={dropdownRef}
          className={`${DropS.menu} ${isActive ? DropS.active : DropS.inactive}`}
        >
          <ul>
            <div className={DropS.list} role="button" style={{ marginTop: '10px' }} onClick={() => getAll(name)} onKeyPress={() => onClick()} tabIndex="0">All</div>
            <div>
              {location?.map((locationlist) => <div className={DropS.list} role="button" key={locationlist.id} onClick={() => getLoc(locationlist.id)} onKeyPress={() => getLoc(locationlist.id)} tabIndex="0"><div>{locationlist.location}</div></div>)}
            </div>
            <div>
              {authors?.map((authorslist) => <div className={DropS.list} role="button" key={authorslist.id} onClick={() => getAuth(authorslist.id)} onKeyPress={() => getAuth(authorslist.id)} tabIndex="0"><div>{authorslist.name}</div></div>)}
            </div>
          </ul>
        </nav>

      </div>
    </div>
  );
}
