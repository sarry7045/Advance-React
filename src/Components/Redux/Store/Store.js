import { createStore, applyMiddleware } from "redux";
import rootReducer from "../RootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
// import cakeReducer from "../Reducers/CakeReducer"

// first we use middleware for asyns await function because the redux is creatd for sycrons

// const store = createStore(cakeReducer)
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
export default store;
