import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  if (action.type === "INCR") {
    return state - 1;
  }
  if (action.type === "DECR") {
    return state - 1;
  }
  return state;
};

const useReducerHookk = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //   const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <p>{state}</p>
        <button onClick={() => dispatch({ type: "INCR" })}> Increment</button>
        <button onClick={() => dispatch({ type: "DECR" })}> Decrement</button>
      </div>
    </>
  );
};

export default useReducerHookk;
