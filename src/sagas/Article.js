import { call, put } from "redux-saga/effects";
import { doAddNews } from "../actions/Article";

 const HACKERNEWS_URL = "http://hn.algolia.com/api/v1/search?query=";
 const fetchNews = query => fetch(HACKERNEWS_URL + query).then(res => res.json());
 function* handleFetchNews(action) {
  const { query } = action;
  const result = yield call(fetchNews, query);
  yield put(doAddNews(result.hits));
}
 export { handleFetchNews };