import React from "react";

const CallBackFunction = () => {
  // Example 1
  function show() {
    console.log("Show Function Calling");
  }
  function display(callback) {
    console.log("Display Function Calling");
    callback();
  }

  // show()
  display(show);

  function show1(x) {
    return x + 5;
  }

  function display1(callback1) {
    return callback1(4);
  }

  console.log(display1(show1));

  // Example 3

  function show2(x) {
    return x - 50;
  }

  function display2(callback2) {
    return callback2(100);
  }

  console.log(display2(show2));

  
  return <div>CallBackFunction</div>;
};

export default CallBackFunction;
