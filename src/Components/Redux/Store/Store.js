import { createStore , applyMiddleware} from "redux"
import rootReducer from "../RootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk"
// import cakeReducer from "../Reducers/CakeReducer"

// const store = createStore(cakeReducer)
const store = createStore(rootReducer, applyMiddleware(logger, thunk))
export default store;