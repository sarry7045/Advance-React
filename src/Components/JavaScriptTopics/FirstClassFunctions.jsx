import React from "react";

const FirstClassFunctions = () => {
  a();
  // b();

  // function statement or function declaration
  function a() {
    console.log("Function a");
    }
    

  // function expression
  const b = function () {
    console.log("Function B");
    };
    

  // Anonymous Function - but we cannot use like this
  // function() {
  // }
    
    
  // Named function Expressions
    const c = function xyz() {
    console.log("Function XYZ");
    };

    // Paramters , Arguments , FirstClassFunctions
    function sum(x) {
        return  x +15
    }
    function add(callback) {
        return callback(15)
    }
    console.log(add(sum));



  return <div>FirstClassFunctions</div>;
};

export default FirstClassFunctions;
