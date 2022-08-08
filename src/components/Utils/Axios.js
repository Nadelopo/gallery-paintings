import axios from 'axios';
import { getPageCount } from './Pages';

export const getData = (data, setAppState, limit, page, search, authorId, locatioId, dateFrom, dateBefore, setTotalPages) => {
  axios.get(data, {
    params: {
      _limit: limit,
      _page: page,
      q: search,
      authorId,
      locationId: locatioId,
      created_gte: dateFrom !== '' ? dateFrom : 0,
      created_lte: dateBefore !== '' ? dateBefore : 3000,
    },
  }).then((resp) => {
    const allPersons = resp.data;
    setAppState(allPersons);
    if (setTotalPages !== undefined) {
      const totalCount = resp.headers['x-total-count'];
      setTotalPages(getPageCount(totalCount, limit));
    }
  });
};
