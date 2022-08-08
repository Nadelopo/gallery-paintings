import React, { useState, useEffect, useRef } from 'react';
import Dropdown from '../DropDown/DropDown';
import DropdownCreate from '../DropDown/DropDownCreate';
import Paintings from '../Paintings/Paintings';
import FilterS from './Filter.module.sass';
import { getData } from '../Utils/Axios';

export default function Filter() {
  const [search, setSearch] = useState('');
  const [dateFrom, setDateFrom] = useState();
  const [dateBefore, setDateBefore] = useState();
  const [authors, setAuthors] = useState();
  const [location, setLocation] = useState();
  const [authorId, setAuthor] = useState();
  const [locatioId, setLocatio] = useState();
  const [page, setPage] = useState(1);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const getAuthor = (author) => (author === 'all' ? setAuthor() : setAuthor(author));
  const getLocation = (locations) => (locations === 'all' ? setLocatio() : setLocatio(locations));

  useEffect(() => { setPage(1); }, [search, dateFrom, dateBefore, authorId, locatioId]);

  useEffect(() => {
    getData(process.env.REACT_APP_AUTHORS, setAuthors);
  }, []);

  useEffect(() => {
    getData(process.env.REACT_APP_LOCATIONS, setLocation);
  }, []);

  return (
    <div className="container">
      <div className={FilterS.filter__main}>

        <div className={FilterS.filters}><input className={FilterS.search__text} value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Name" /></div>

        <div className={FilterS.filters} ref={ref1}>
          <div className={FilterS.filter__name}>{!authorId ? 'Author' : authors[authorId - 1].name}</div>
          <Dropdown getLocation={getLocation} reff={ref1} getAuthor={getAuthor} authors={authors} name="authors" />
        </div>

        <div className={FilterS.filters} ref={ref2}>
          <div className={FilterS.filter__name}>{!locatioId ? 'Location' : location[locatioId - 1].location}</div>
          <Dropdown getLocation={getLocation} reff={ref2} getAuthor={getAuthor} location={location} name="locations" />
        </div>

        <div className={FilterS.filters} ref={ref3}>
          <div>Created</div>
          <DropdownCreate changeDateFrom={setDateFrom} reff={ref3} changeDateBefore={setDateBefore} />
        </div>

      </div>
      <Paintings authors={authors} location={location} search={search} authorId={authorId} locatioId={locatioId} dateFrom={dateFrom} dateBefore={dateBefore} page={page} setPage={setPage} />
    </div>
  );
}
