
const HACKERNEWS_URL = 'https://hn.algolia.com/api/v1/search?query=';
 const fetchNews = query => fetch(HACKERNEWS_URL + query).then(res => res.json());

 export { fetchNews };