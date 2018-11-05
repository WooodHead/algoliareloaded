import { NEWS_ADD } from "../constants/actionTypes";

 const INITIAL_STATE = [];

 const applyAddNews = (state, action) => action.news;

   const articleReducer = (state = INITIAL_STATE, action) => {
    const { type } = action;
    switch (type) {
      case NEWS_ADD: {
        return applyAddNews(state, action);
      }  
      default:
        return state;
    }
  };

   export default articleReducer;