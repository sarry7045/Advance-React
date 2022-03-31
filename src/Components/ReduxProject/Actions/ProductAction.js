import {
  SET_PRODCUTS,
  SELECTED_PRODCUTS,
  REMOVE_SELECTED_PRODCUTS,
} from "../Types/PrdouctType";

export const setProducts = (prodcuts) => {
  return {
    type: SET_PRODCUTS,
    payload: prodcuts,
  };
};
export const selectedProducts = (prodcuts) => {
  return {
    type: SELECTED_PRODCUTS,
    payload: prodcuts,
  };
};

export const removeProducts = (prodcuts) => {
  return {
    type: REMOVE_SELECTED_PRODCUTS,
    payload: prodcuts,
  };
};
