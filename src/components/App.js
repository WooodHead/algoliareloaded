import React from "react";
import "./App.css";
import News from "./News";
import { ARTICLE_ARCHIVE } from "../constants/actionTypes";
import store from "../store";

export default () => (
  <div className="app">
    <News/>
  </div>
);