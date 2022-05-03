import React from "react";

const Hoisting = () => {


  var a = 10;
  console.log(a);
  console.log(a, b);
  var b = 20;
  getName();


  function getName() {
    console.log("Javascript");
  }
  // Value of b is Undefned, because we called afer the clg - Hoisting
  return <div>Hoisting</div>;
};

export default Hoisting;
