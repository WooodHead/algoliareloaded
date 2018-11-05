import { NEWS_ADD, NEWS_FETCH } from "../constants/actionTypes";
 const doFetchNews = query => ({
  type: NEWS_FETCH,
  query,
});
 const doAddNews = news => ({
  type: NEWS_ADD,
  news,
});
 export { doFetchNews, doAddNews };