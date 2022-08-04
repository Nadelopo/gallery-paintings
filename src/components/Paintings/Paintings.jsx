import React, { useState, useEffect } from 'react';
import PaintingS from './Paintings.module.sass';
import Pages from '../Pages/Pages';
import { getData } from '../Utils/Axios';
import { Width } from '../Utils/Paintings';

export default function Paintings({
  search,
  authorId,
  locatioId,
  dateFrom,
  dateBefore,
  authors,
  location,
  page,
  setPage,
}) {
  const [appState, setAppState] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [limit, setLimit] = useState();
  const [width, setWidth] = useState(window.innerWidth);

  Width(setLimit, width, setWidth);

  useEffect(() => {
    getData(
      process.env.REACT_APP_PAINTINGS,
      setAppState,
      limit,
      page,
      search,
      authorId,
      locatioId,
      dateFrom,
      dateBefore,
      setTotalPages,
    );
  }, [
    setAppState,
    page,
    search,
    dateFrom,
    dateBefore,
    authorId,
    locatioId,
    limit,
  ]);

  return (
    <div>
      <div className={PaintingS.paintings__main}>
        {appState?.map((home) => (
          <div key={home.id} className={PaintingS.picture}>
            <div className={PaintingS.img__paintings}>
              <img
                src={`https://test-front.framework.team/${home.imageUrl}`}
                alt=""
              />
            </div>
            <div className={PaintingS.text__paintings}>
              <div style={{ marginBottom: '6px' }}>{home.name}</div>

              <div>
                {authors?.map((authorlist) => (
                  <div key={authorlist.id}>
                    {authorlist.id === home.authorId ? (
                      <div className={PaintingS.visibility__name}>
                        Author:
                        <span className={PaintingS.visibility__text}>
                          {authorlist.name}
                        </span>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>

              <div className={PaintingS.visibility__name}>
                Created:
                <span className={PaintingS.visibility__text}>
                  {home.created}
                </span>
              </div>

              <div>
                {location?.map((locationlist) => (
                  <div key={locationlist.id}>
                    {locationlist.id === home.locationId ? (
                      <div className={PaintingS.visibility__name}>
                        Location:
                        <span className={PaintingS.visibility__text}>
                          {locationlist.location}
                        </span>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={PaintingS.pagination__mobile__postiton}>
        <Pages
          width={width}
          totalPages={totalPages}
          changePage={setPage}
          page={page}
        />
      </div>
    </div>
  );
}
