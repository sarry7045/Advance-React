import React from "react";

const Closure = () => {
  const closure = () => {
    let a = 10;
    console.log(a);
    const closure1 = () => {
      let b = 20;
      console.log(b);
    };
    closure1();
  };
  closure();

  function outer() {
    var a = 19;
    // if hum var ko line Number 20 k baad define kare toh bhi ouput same aayega
    // var ki jagah let use krne pe bhi same result aayega
    function inner() {
      console.log(a);
    }
    // return inner;
    inner()
  }
  // outer()();
  outer()

  // defined function inside the function but to print the second function we need to call the second f
  //   unction insdide the first function. - closure

  return <div>Closure</div>;
};

export default Closure;
