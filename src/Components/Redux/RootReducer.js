import { combineReducers } from "redux";
import cakeReducer from "./Reducers/CakeReducer";
import iceCreamReducer from "./Reducers/IceCreamReducer";

// using Combinereducer we can add the all the reducers file in one file and pass to the store file.

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

export default rootReducer;
