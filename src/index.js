import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import store from "./store";
import { fetchNewsArticles } from "./selectors/Article";
import { doArchiveArticle } from "./actions/Archive";
import registerServiceWorker from "./registerServiceWorker";

const render = () =>
  ReactDOM.render(
    <App
      stories={fetchNewsArticles(store.getState())}
      onArchive={id => store.dispatch(doArchiveArticle(id))}
    />,
    document.getElementById("root"),
  );

store.subscribe(render);

render();

registerServiceWorker();