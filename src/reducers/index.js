import { combineReducers } from "redux";
import archiveReducer from "./Archive";
import articleReducer from "./Article";

 const rootReducer = combineReducers({
  archiveState: archiveReducer,
  articleState: articleReducer,
});

 export default rootReducer;