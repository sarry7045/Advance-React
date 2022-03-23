import React, { useState, useMemo } from "react";
// import Page2 from "./useContextHook/Page2";
// import useMemoHook from "./useContextHook/useMemoHook";

const OtherThings = () => {
  const [first, setfirst] = useState(false);
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(10);

  const handleClick = () => {
    setfirst(true);
  };

  const isOkCount = useMemo(() => {
    console.log("Calling");
    return count > 5 ? true : false;
  }, [count]);

  return (
    <>
      <div>
        {first ? <h6> Componentss </h6> : <h6> No Component</h6>}
        <button onClick={handleClick}>Button</button>
      </div>

      <div>
        {/* <p>{count}</p> */}
        <button onClick={() => setCount(count + 1)}>
          {" "}
          Increment : {count}{" "}
        </button>
        <span> {isOkCount ? "ok" : "Not ok"}</span>
        <button onClick={() => setCount1(count1 - 1)}>
          {" "}
          Decrement: {count1}
        </button>
        {/* <Page2 /> */}
      </div>
    </>
  );
};

export default OtherThings;
