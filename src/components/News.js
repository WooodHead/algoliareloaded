import React from "react";
import { connect } from "react-redux";
import { doArchiveArticle } from "../actions/Archive";
import { fetchNewsArticles } from "../selectors/Article";
import "./News.css";
import Article from "./Article";

 const COLUMNS = {
  title: {
    label: "Title",
    width: "40%",
  },
  author: {
    label: "Author",
    width: "30%",
  },
  comments: {
    label: "Comments",
    width: "10%",
  },
  points: {
    label: "Points",
    width: "10%",
  },
  archive: {
    width: "10%",
  },
};

 const NewsHeader = ({ columns }) => (
  <div className="News-Header">
    {Object.keys(columns).map(key => (
      <span key={key} style={{ width: columns[key].width }}>
        {columns[key].label}
      </span>
    ))}
  </div>
);

 const News = ({ news, onArchive }) => (
  <div className="News">
    <NewsHeader columns={COLUMNS} />
    {(news || []).map(article => (
      <Article
        key={article.objectID}
        article={article}
        columns={COLUMNS}
        onArchive={onArchive}
      />
    ))}
  </div>
);

const mapStateToProps = state => ({
  news: fetchNewsArticles(state),
});
 const mapDispatchToProps = dispatch => ({
  onArchive: id => dispatch(doArchiveArticle(id)),
});
 export default connect(mapStateToProps, mapDispatchToProps)(News);
