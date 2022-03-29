import React from "react";
import { Provider } from "react-redux";
import store from "./Store/Store";
import CakeContainer from "./CakeContainer";
import HookIceCreamContainer from "./HookIceCreamContainer";
function Container() {
  return (
    <>
      <Provider store={store}>
              <CakeContainer />
              <HookIceCreamContainer/>
      </Provider>
    </>
  );
}

export default Container;
