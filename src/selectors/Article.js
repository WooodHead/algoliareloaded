
const isNotArchived = archivedIds => article =>
  archivedIds.indexOf(article.objectID) === -1;

 const fetchNewsArticles = ({ articleState, archiveState }) =>
  articleState.news.filter(isNotArchived(archiveState));

  const getFetchError = ({ articleState }) => articleState.error;

 export { fetchNewsArticles, getFetchError };