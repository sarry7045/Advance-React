import {
  SET_PRODCUTS,
  SELECTED_PRODCUTS,
  REMOVE_SELECTED_PRODCUTS,
} from "../Types/PrdouctType";

const initialState = {
  // products: [{
  //     id:1,
  //     name: "Suraj",
  //     category: "React Js Devrloper"
  // }
  // ]
  products: [],
};

// export const prodcutReducer = (state = initialState, action, { payload }) => {
//   switch (action.type) {
//     case SET_PRODCUTS:
//       return { ...state, products: payload };
//     default:
//       return state;
//   }
// };
export const prodcutReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODCUTS:
      return { ...state };
    default:
      return state;
  }
};
