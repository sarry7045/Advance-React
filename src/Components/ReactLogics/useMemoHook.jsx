import React, { useState, useMemo } from "react";
// if Koi function bina wajah se other buttons pe bhi call ho raha hai so, hum usko useMemo ki madat se condition
// marke rakh sakte hai ki jab ye state change ho tab he ye function call hoo

const useMemoHook = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const isOkCount = useMemo(() => {
    console.log("Calling");
    return count > 5 ? true : false;
  }, [count]);
  return (
    <>
      <div>
        <button onClick={() => setCount(count + 1)}>
          {" "}
          Increment : {count}
        </button>
        <span> {isOkCount ? "ok" : "Not ok"}</span>
        <button onClick={() => setCount1(count - 1)}>
          {" "}
          Decrement : {count1}
        </button>
      </div>
    </>
  );
};

export default useMemoHook;
