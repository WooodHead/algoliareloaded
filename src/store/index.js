import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";


const logger = createLogger();
 const store = createStore (
  rootReducer,
  undefined,
  composeWithDevTools(applyMiddleware(logger)),
);

export default store;