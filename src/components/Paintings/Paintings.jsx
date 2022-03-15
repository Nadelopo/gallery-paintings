import React, {useState,useEffect} from 'react'
import axios from 'axios'
import './Paintings.css'
import { getPageCount} from '../Utils/Pages';
import Pages from '../Pages/Pages';
export default function Paintings(props) {     

    const [appState, setAppState] = useState();
    
    const [totalPages, setTotalPages] = useState();
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState();
    const [width, setWidth]   = useState(window.innerWidth);

    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }
    
    useEffect(() => {
      if(width>=1024){
        setLimit(9)
      } 
      if (width<1024){
        setLimit(8)
      }
      if (width<768){
        setLimit(6)
      }
      
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, [width]);
    
    const changePage = (page) => {
      setPage(page)
    }

    useEffect(() => {setPage(1)}, [props.search,props.dateFrom,props.dateBefore,props.author,props.locatio])
    
    
    
    useEffect(() => {
      const paintings = 'https://test-front.framework.team/paintings';
     
      axios.get(paintings,{
        params: {
          _limit: limit,  
          _page: page,
          q: props.search,
          authorId: props.author,
          locationId: props.locatio,
          created_gte: props.dateFrom!=='' ? props.dateFrom : 0,
          created_lte: props.dateBefore!=='' ? props.dateBefore :3000
        }
      }).then((resp) => {
        const allPersons = resp.data;
        setAppState(allPersons);
        const totalCount= resp.headers['x-total-count']
        setTotalPages(getPageCount(totalCount,limit))
      });
    }, [setAppState,page,props.search,props.dateFrom,props.dateBefore,props.author,props.locatio,limit]);

   

  
  return (
    <div >
        <div className="Paintings">{appState?.map(home =>
         <div key={home.id}  className="paint">
           
             <div className='imgPaintings'><img src={'https://test-front.framework.team/' + home.imageUrl} alt="" /></div>
              
              <div className='textPaintings'>

                <div style={{marginBottom: '6px'}}>{home.name}</div>

                  <div >{props.authors?.map(authors => 
                    <div key={authors.id}> 
                        {authors.id === home.authorId ? <div className='vis'>Author:  <span className='visName'>{authors.name}</span></div> : null}
                    </div>)} 
                  </div>

                  <div className='vis'>Created: <span className='visName'>{home.created}</span></div>

                  <div >{props.location?.map(location => 
                    <div key={location.id}> 
                        {location.id === home.locationId ? <div className='vis'>Location:  <span className='visName'>{location.location}</span></div> : null}
                    </div>)} 
                  </div>

                  

                </div>

           </div>
         )}

      </div>
      
      <div className=' pagin'>
        <Pages width={width} totalPages={totalPages} changePage={changePage} page={page}/>
      </div>
      
    </div>
  )
}
