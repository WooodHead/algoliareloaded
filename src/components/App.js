import React from "react";
import "./App.css";
import News from "./News";
import { ARTICLE_ARCHIVE } from "../constants/actionTypes";
import store from "../store";

export default ({ news, onArchive }) => (
  <div className="app">
    <News
      news={news}
      onArchive={objectID => store.dispatch({ type: ARTICLE_ARCHIVE, objectID })}
    />
  </div>
);