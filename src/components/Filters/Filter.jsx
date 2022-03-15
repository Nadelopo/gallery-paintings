import React, { useState,useEffect, useRef } from 'react'
import Dropdown from '../DropDown/DropDown'
import DropdownCreate from '../DropDown/DropDownCreate'
import Paintings from '../Paintings/Paintings'
import './Filter.css'
import axios from 'axios'


export default function Filter() {
  const [search,setSearch] = useState('')
  const [dateFrom,setDateFrom] = useState()
  const [dateBefore,setDateBefore] = useState()
  const [authors,setAuthors] = useState()
  const [location,setLocation] = useState()
  const [author,setAuthor] = useState()
  const [locatio,setLocatio] = useState()
  const ref1=useRef(null)
  const ref2=useRef(null)
  const ref3=useRef(null)
  
 
  
  const changeDateFrom = (date) => {
    setDateFrom(date)
  }
  const changeDateBefore = (date) => {
    setDateBefore(date)
  }

  const getAuthor = (author) => {author==='all' ? setAuthor() : setAuthor(author)}
  

  const getLocation = (locatio) => {locatio==='all' ? setLocatio() : setLocatio(locatio)}
  

  useEffect(() => {
    const authorss = 'https://test-front.framework.team/authors';
    
    axios.get(authorss,{}).then((resp) => {
      const authors = resp.data;
      setAuthors(authors);
    });
  }, [setAuthors]);

  useEffect(() => {
    const locationn = 'https://test-front.framework.team/locations';

    axios.get(locationn,{}).then((resp) => {
      const location = resp.data;
      setLocation(location);
    });
  }, [setLocation]);
  
  return (
    <div className='container '>

      

      <div className="block1">
        <div className='filters'><input className="visibility" value={search} onChange={e => setSearch(e.target.value)} placeholder='Name'/> </div>   
      
        <div className="filters pot" ref={ref1}>   
          <div className='filterText'>{author===''|| author==null ? 'Author' : authors[author-1].name}</div>
          <Dropdown getLocation={getLocation} reff={ref1} getAuthor={getAuthor} authors={authors} name="authors" />
        </div>
 
        <div className="filters pot" ref={ref2}>   
        
          <div className='filterText'>{locatio===''|| locatio==null ? 'Location' : location[locatio-1].location}</div>
          <Dropdown getLocation={getLocation}  reff={ref2} getAuthor={getAuthor} location={location} name="locations" />
        </div>
      
        <div className='filters cr' ref={ref3}>
          <div>Created</div>
          <DropdownCreate  changeDateFrom={changeDateFrom} reff={ref3} changeDateBefore={changeDateBefore}/>
        </div>

      </div>

      <Paintings authors={authors} author={author}  locatio={locatio} location={location} search={search} dateFrom={dateFrom} dateBefore={dateBefore} />

    </div>
  )
}
