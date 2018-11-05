
const isNotArchived = archivedIds => article =>
  archivedIds.indexOf(article.objectID) === -1;

 const fetchNewsArticles = ({ articleState, archiveState }) =>
  articleState.filter(isNotArchived(archiveState));

 export { fetchNewsArticles };