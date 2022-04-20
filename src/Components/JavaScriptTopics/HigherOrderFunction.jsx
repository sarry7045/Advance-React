import React from "react";

const HigherOrderFunction = () => {
  // Function that accepts function as a argument

  // Example 1
  function add(a, b) {
    return a + b;
  }
  function power(a, b) {
    return Math.pow(a, b);
  }

  function operation(a, b, fn) {
    let result = fn(a, b);
    console.log(result);
  }

  operation(4, 5, add);

  // Example 2

  function outer() {
    function inner() {
      console.log("Inner");
    }
  }

  let result = outer;
  console.log(result);

  // Example 3
  const addd = (a, b) => {
    return a + b;
  };

  const calculator = (num1, num2, operator) => {
    return operator(num1, num2);
  };

  console.log(calculator(5, 6, addd));
  return <div>HigherOrderFunction</div>;
};

export default HigherOrderFunction;
