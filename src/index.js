import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import store from "./store";
import { fetchNewsArticles } from "./selectors/Article";
import { ARTICLE_ARCHIVE } from "./constants/actionTypes";
import registerServiceWorker from "./registerServiceWorker";

 ReactDOM.render(
  <App
  articles={fetchNewsArticles(store.getState())}
  onArchive={id => store.dispatch({ type: ARTICLE_ARCHIVE, id })}
/>,
  document.getElementById("root"),
);

registerServiceWorker();