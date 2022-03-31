import { createStore } from "redux";
import roootReducer  from "../../ReduxProject/rootReducer"

const store = createStore(roootReducer, {});

export default store;
