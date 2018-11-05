import { ARTICLE_ARCHIVE } from "../constants/actionTypes";

const INITIAL_STATE = [];

const applyArchiveArticle = (state, action) => [...state, action.id];

const archiveReducer = (state = INITIAL_STATE, action) => {
  const { type } = action;
   switch (type) {
    case ARTICLE_ARCHIVE:
      return applyArchiveArticle(state, action);
    default:
      return state;
  }
};

 export default archiveReducer;