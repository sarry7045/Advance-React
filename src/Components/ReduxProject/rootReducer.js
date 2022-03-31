import { combineReducers } from "redux";
import { prodcutReducer } from "./Reducers/ProductReducer";

const roootReducer = combineReducers({ allProduct: prodcutReducer });

export default roootReducer;
