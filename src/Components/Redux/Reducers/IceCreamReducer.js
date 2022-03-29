import { ICE_CREAM } from "../Types/Types";

const initialState = {
  numOfIcecreams: 10,
};

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case ICE_CREAM:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - 1,
      };
    default:
      return state;
  }
};

export default iceCreamReducer;
