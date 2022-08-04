import React, { useRef } from 'react';
import DropCreatS from './DropDown.module.sass';
import useDetectOutsideClick from './useDetectOutsideClick';
import { ReactComponent as ReactTick } from '../../icons/tick.svg';

export default function DropdownCreate({
  changeDateFrom, changeDateBefore, clas, reff,
}) {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false, reff);
  const onClick = () => setIsActive(!isActive);

  let dateFrom;
  let dateBefore;

  return (
    <div>
      <div className={DropCreatS.menu__container}>

        <div role="button" onClick={onClick} className={DropCreatS.menu_trig} onKeyPress={() => onClick()} tabIndex="0">
          <ReactTick width="10px" height="6px" />
        </div>
        <nav
          ref={dropdownRef}
          className={`${DropCreatS.menu} ${DropCreatS.drop__border__top} ${isActive ? DropCreatS.active : DropCreatS.inactive} ${clas}`}
        >
          <div className={DropCreatS.create}>
            <div><input className={`${DropCreatS.date} ${DropCreatS.dateFirst}`} type="number" min="0" value={dateFrom} onChange={(e) => changeDateFrom(e.target.value)} placeholder="from" /></div>
            <div className={DropCreatS.beforeline}><div className={DropCreatS.line} /></div>
            <div><input className={`${DropCreatS.date} ${DropCreatS.dateSecond}`} type="number" min="0" value={dateBefore} onChange={(e) => changeDateBefore(e.target.value)} placeholder="before" /></div>
          </div>
        </nav>

      </div>
    </div>
  );
}
