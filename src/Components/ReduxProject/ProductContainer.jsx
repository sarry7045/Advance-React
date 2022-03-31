import React from "react";
import { Provider } from "react-redux";
import store from "./Store/Store";

function ProductContainer() {
  return (
    <>
      <Provider store={store}></Provider>
    </>
  );
}

export default ProductContainer;
