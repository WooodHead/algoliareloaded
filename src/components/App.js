import React from "react";
import "./App.css";
import News from "./News";

export default ({ news, onArchive }) => (
  <div className="app">
    <News
      news={news}
      onArchive={objectID => {
        console.log(objectID);
      }}
    />
  </div>
);