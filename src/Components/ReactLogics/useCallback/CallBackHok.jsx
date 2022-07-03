import React, { useState, useEffect, useCallback } from "react";
import CBPage from "./CBPage";

const CallBackHok = () => {
  const [count, setcount] = useState(0);
  const [value, setvalue] = useState([]);

  const exampleee = useCallback(() => {
    console.log("operation");
  }, [value]);
  return (
    <>
      <CBPage value={value} example={exampleee} />
      <h6>Count {count}</h6>

      <button onClick={() => setcount(count + 1)}> Increment </button>
    </>
  );
};

export default CallBackHok;
