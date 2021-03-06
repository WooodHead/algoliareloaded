import React from "react";
import { connect } from "react-redux";
import { doArchiveArticle } from "../actions/Archive";
import "./Article.css";
import Button from "./Button";

  const Article = ({ article, columns, onArchive }) => {
  const { title, url, author, num_comments, points, objectID } = article;
   return (
    <div className="Article">
      <span style={{ width: columns.title.width }}>
        <a href={url}>{title}</a>
      </span>
      <span style={{ width: columns.author.width }}>{author}</span>
      <span style={{ width: columns.comments.width }}>{num_comments}</span>
      <span style={{ width: columns.points.width }}>{points}</span>
      <span style={{ width: columns.archive.width }}>
        <Button onClick={() => onArchive(objectID)}>Archive</Button>
      </span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  onArchive: id => dispatch(doArchiveArticle(id)),
});
 export default connect(null, mapDispatchToProps)(Article);