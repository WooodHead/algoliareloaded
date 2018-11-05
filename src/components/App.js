import React from "react";
import "./App.css";
import News from "./News";
import SearchNews from "./SearchNews";


export default () => (
  <div className="app">
  <div className="interactions">
      <SearchNews />
    </div>
    <News/>
  </div>
);