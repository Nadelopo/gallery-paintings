import React, { useEffect, useState } from 'react';
import { getPagesArray } from '../Utils/Pages';
import PageS from './Pages.module.sass';
import { ReactComponent as ReactFirst } from '../../icons/first.svg';
import { ReactComponent as ReactLast } from '../../icons/last.svg';
import { ReactComponent as ReactLeft } from '../../icons/left.svg';
import { ReactComponent as ReactRight } from '../../icons/right.svg';

export default function Pages({
  totalPages, changePage, page, width,
}) {
  const [iop, setI] = useState(2);

  const getI = (i, totalPage) => {
    if (i < totalPage) {
      setI(i);
    }
    if (i === totalPage) {
      setI(i - 1);
    }
    if (i === 1) {
      setI(2);
    }
  };

  const [pagesArray, setPagesArray] = useState([]);
  useEffect(() => {
    if (width < 768) {
      if (totalPages >= 3) {
        changePage(1);
        setPagesArray([iop - 1, iop, iop + 1]);
        if (page === 1) {
          setI(2);
        }
      } else {
        setPagesArray(getPagesArray(totalPages));
      }
    } else {
      setPagesArray(getPagesArray(totalPages));
    }
    if (page > totalPages) {
      changePage(1);
    }
  }, [totalPages, page, width, changePage, iop]);

  return (
    <div className={PageS.pagination__main}>

      <div role="button" className={page === 1 ? PageS.first__disable : `${PageS.first} ${PageS.switch__all}`} onClick={page === 1 ? null : () => { changePage(1); getI(1); }} onKeyPress={page === 1 ? null : () => { changePage(1); getI(1); }} tabIndex="0">
        <ReactFirst width="14" height="13" />
      </div>

      <div role="button" className={page === 1 ? PageS.previous__next__disable : `${PageS.number} ${PageS.switch__all}`} onClick={page === 1 ? null : () => { changePage(page - 1); getI(page - 1, totalPages); }} onKeyPress={page === 1 ? null : () => { changePage(page - 1); getI(page - 1, totalPages); }} tabIndex="0">
        <ReactLeft width="9" height="13" />
      </div>

      {pagesArray.map((btn) => <div role="button" className={page === btn ? `${PageS.number} ${PageS.activee} ${PageS.switch__all}` : `${PageS.number} ${PageS.switch__all}`} key={btn} onClick={() => changePage(btn)} onKeyPress={() => changePage(btn)} tabIndex="0">{btn}</div>)}

      <div role="button" className={totalPages <= page ? PageS.previous__next__disable : `${PageS.number} ${PageS.switch__all}`} onClick={totalPages <= page ? null : () => { changePage(page + 1); getI(page + 1, totalPages); }} onKeyPress={() => { changePage(page + 1); getI(page + 1, totalPages); }} tabIndex="0">
        <ReactRight width="9" height="13" />
      </div>

      <div role="button" className={totalPages <= page ? PageS.last__disable : `${PageS.last} ${PageS.switch__all}`} onClick={totalPages <= page ? null : () => { changePage(totalPages); getI(totalPages, totalPages); }} onKeyPress={totalPages <= page ? null : () => { changePage(totalPages); getI(totalPages, totalPages); }} tabIndex="0">
        <ReactLast width="14" height="13" />
      </div>

    </div>
  );
}
