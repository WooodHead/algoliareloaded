import { createStore } from "redux";
import articleReducer from "../reducers/Article";
 
const store = createStore(articleReducer);

export default store;